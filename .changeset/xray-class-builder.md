---
'anomaly-packer': minor
---

Add an importable xray class builder at `anomaly-packer/class`, fix incorrect vector/math return types, and default script transpilation to `noImplicitSelf`.

`defclass(name, body)` wraps the engine's global `class "name"` OOP DSL. Everything is declared in one place: a single body object holding the instance fields (as typed initial values) alongside the methods (including `__init`). `this` inside every method is typed as the instance via `ThisType`, so field and method access is fully checked with no separate interface and no duplicated method signatures, and the returned value is a constructor typed from `__init`. Like the MCM builder, the runtime script is copied and linked into the build automatically on import.

Type fixes: `vector_cross` now returns `vector` (was `number`), `vec_to_str` returns `string` (was `vector`), `ray_pick.set_flags` takes a `number` collide mask (was a malformed `rq_target[keyof rq_target]`), and `CreateTimeEvent`'s callback is pinned to `this: void` so plain arrow callbacks type-check under `noImplicitSelf`.

The shipped `tsconfig.scripts.json` now sets `tstl.noImplicitSelf: true`: free functions are noSelf by default, so `@noSelfInFile` pragmas and per-function `this: void` annotations are no longer needed, while class methods still receive `self` through `ThisType`.
