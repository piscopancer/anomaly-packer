import { ZipArchive } from 'archiver'
import { existsSync, readFileSync } from 'fs'
import { createWriteStream } from 'node:fs'
import path from 'path'

/**
 * Zips a finished build into a single archive for distribution.
 *
 * The archive contains `gamedata/` at its root — the layout Mod Organizer 2 and every other
 * Anomaly mod manager expect, so the file installs by drag and drop with nothing to unwrap
 * first. Anything else in the build directory is included as it lies.
 */

type ZipOptions = {
  /** Build directory to archive. Defaults to `build` beside the project. */
  buildDir?: string
  /** Where to write the archive. Defaults to the project root. */
  outDir?: string
  /** Archive name without the extension. Defaults to the package name and version. */
  name?: string
  cwd?: string
}

/** `<name>-<version>` from the addon's manifest, falling back to the directory name. */
function defaultName(cwd: string) {
  const manifest = path.join(cwd, 'package.json')
  if (existsSync(manifest)) {
    try {
      const pkg = JSON.parse(readFileSync(manifest, 'utf8')) as { name?: string; version?: string }
      if (pkg.name) return pkg.version ? `${pkg.name}-${pkg.version}` : pkg.name
    } catch {
      // A malformed manifest is not a reason to refuse to package.
    }
  }
  return path.basename(cwd)
}

export async function zipBuild(options: ZipOptions = {}) {
  const cwd = options.cwd ?? process.cwd()
  const buildDir = path.resolve(cwd, options.buildDir ?? 'build')
  const outDir = path.resolve(cwd, options.outDir ?? '.')
  const outFile = path.join(outDir, `${options.name ?? defaultName(cwd)}.zip`)

  if (!existsSync(buildDir)) {
    throw new Error(`Nothing to zip: ${buildDir} does not exist. Run the build first.`)
  }

  const output = createWriteStream(outFile)
  const archive = new ZipArchive({ zlib: { level: 9 } })

  const done = new Promise<void>((resolve, reject) => {
    output.on('close', () => resolve())
    // `warning` covers recoverable cases such as a vanished file; treating them as failures
    // is better than shipping an archive that is quietly missing content.
    archive.on('warning', reject)
    archive.on('error', reject)
  })

  archive.pipe(output)
  archive.directory(buildDir, false)
  await archive.finalize()
  await done

  return { file: outFile, bytes: archive.pointer() }
}
