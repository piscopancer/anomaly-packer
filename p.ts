import ts from 'typescript'
import tstl from 'typescript-to-lua'

class Plugin implements tstl.Plugin {
  public beforeTransform(program: ts.Program, options: tstl.CompilerOptions, emitHost: tstl.EmitHost) {
    console.log('🍑🍑🍑')
  }
}

const plugin = new Plugin()

export default plugin
