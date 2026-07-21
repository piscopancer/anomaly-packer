import { existsSync, readFileSync } from 'fs'
import path from 'path'

/**
 * The credit block prepended to every generated `.script`. The engine loads these files as
 * plain Lua, so a leading comment costs nothing at runtime and makes a shipped addon
 * traceable back to its source — worth having when a script ends up in someone's gamedata
 * folder with no other context.
 *
 * Every field comes from the addon's own `package.json` and is omitted when absent, so a
 * package with nothing but a name produces just the first line.
 */

const PACKAGE_URL = 'https://github.com/piscopancer/anomaly-packer'

/** Anomaly Packer's own version, read from its `package.json` — `src/header.ts` and the bundled `dist/index.mjs` both sit one level below it. Stamped into the first line so a shipped script says which packer produced it, not just that a packer did. */
function readSelfVersion() {
  return readPackageJson(path.join(import.meta.dirname, '..')).version
}

type PackageJson = {
  version?: string
  author?: string | { name?: string; url?: string }
  repository?: string | { url?: string }
}

/** `16.07.2026` — the format Anomaly's own configs and changelogs use. */
function formatDate(date: Date) {
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${pad(date.getDate())}.${pad(date.getMonth() + 1)}.${date.getFullYear()}`
}

function readAuthor(author: PackageJson['author']) {
  if (!author) return undefined
  return typeof author === 'string' ? author : author.name
}

function readRepository(repository: PackageJson['repository']) {
  if (!repository) return undefined
  const url = typeof repository === 'string' ? repository : repository.url
  // npm allows `git+https://….git`; the bare browsable url is what a reader wants.
  return url?.replace(/^git\+/, '').replace(/\.git$/, '')
}

/** Reads the addon's `package.json`, tolerating its absence — the header is a nicety, not a
 *  requirement, and a missing or malformed manifest must never fail a build. */
function readPackageJson(cwd: string): PackageJson {
  const file = path.join(cwd, 'package.json')
  if (!existsSync(file)) return {}
  try {
    return JSON.parse(readFileSync(file, 'utf8')) as PackageJson
  } catch {
    return {}
  }
}

export function buildHeader(cwd = process.cwd(), now = new Date()) {
  const pkg = readPackageJson(cwd)
  const selfVersion = readSelfVersion()
  const fields: [label: string, value: string | undefined][] = [
    ['Author', readAuthor(pkg.author)],
    ['Version', pkg.version],
    ['Created at', formatDate(now)],
    ['Source', readRepository(pkg.repository)],
  ]
  const lines = [
    `-- This script was generated with Anomaly Packer${selfVersion ? ` v${selfVersion}` : ''} (${PACKAGE_URL})`,
    ...fields.filter(([, value]) => value).map(([label, value]) => `-- ${label}: ${value}`),
  ]
  return lines.join('\n') + '\n\n'
}
