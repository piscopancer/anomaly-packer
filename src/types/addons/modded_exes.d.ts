/// <reference path="modded_exes/globals.d.ts" />
/// <reference path="modded_exes/events.d.ts" />
/// <reference path="modded_exes/math.d.ts" />
/// <reference path="modded_exes/gameobject.d.ts" />
/// <reference path="modded_exes/world.d.ts" />
/// <reference path="modded_exes/engine-classes.d.ts" />
/// <reference path="modded_exes/ui.d.ts" />
/// <reference path="modded_exes/dxml.d.ts" />
/// <reference path="modded_exes/imgui.d.ts" />

// Barrel for the modded-exes script API delta. The declarations are split into
// modded_exes/*.d.ts by subsystem; see modded_exes.delta.md for the full changelog.
// All files declare global ambient types, so merging (CGameObject, alife,
// GameEvents, …) happens across the whole set regardless of reference order.
