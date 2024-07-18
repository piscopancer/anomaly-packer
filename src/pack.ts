type PackOptions<L extends string[] = ['eng']> = {
  extends: {}
  config: {
    languages: L
    texts(textOptions: {
      pack<T extends string[]>(texts: {
        [_L in L[number]]: {
          [_T in T[number]]: string
        }
      }): void
    }): void
  }
  build: {
    outDir: string
  }
}

export async function pack<L extends string[]>(options: PackOptions<L>) {
  for (const lang in options.config.languages) {
    await packText(lang, options.config.texts[lang])
  }
}

async function packText<L extends string[]>(options: PackOptions<L>) {
  console.log(options)
}
