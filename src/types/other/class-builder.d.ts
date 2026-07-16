// Importable xray class builder. The runtime lives in a support script that Anomaly
// Packer copies into the build (and links) the moment a script imports from here — no
// flag, no manual file. `defclass` wraps the engine's `class "name"` OOP DSL.
//
// Everything is declared in one place: a single body object holding the instance FIELDS
// (as typed initial values, e.g. `ray_range: 0` or `ray: undefined as unknown as ray_pick`)
// alongside the methods (including `__init`). `this` inside every method is typed as the
// whole body via ThisType, so field and method access is fully checked and tstl emits
// `function(self, ...)` / `self.x`. The returned value is a constructor typed from `__init`.
// `@noResolution` keeps the import specifier verbatim so it can be linked to Anomaly's
// cross-script global.

/** @noResolution */
declare module 'anomaly-packer/class' {
  type ClassBody = Record<string, any>

  /** The constructor `defclass` returns: callable with `__init`'s parameters, yielding an instance (the body type). */
  type ClassConstructor<T> = T extends { __init: (this: any, ...args: infer A) => any }
    ? (this: void, ...args: A) => T
    : (this: void) => T

  /**
   * Define an xray class backed by the engine's global `class` DSL.
   *
   * Pass the class name and a single body object. Declare instance fields as typed initial
   * values and methods (including `__init`) side by side; `this` in every method is the
   * instance. The value returned is a constructor, e.g.
   * `const geometry_ray = defclass('geometry_ray', { ray_range: 0, __init(args) { ... } })`
   * then `geometry_ray({ ... })`.
   *
   * @param name Global class name registered with the engine, exactly as `class "name"` would.
   * @param body The instance fields and methods. `this` is typed as the instance.
   * @param base Optional base class to inherit from — the `class "name" (base)` form.
   */
  export function defclass<T extends ClassBody>(this: void, name: string, body: T & ThisType<T>, base?: object): ClassConstructor<T>
}
