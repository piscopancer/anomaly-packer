---
'anomaly-packer': minor
---

Stamp the packer version into generated headers, name release archives after the addon version, add the MCM keybind builders, and correct the `CGameFont` and `CUIScriptWnd` typings.

The credit comment on every generated `.script` now names the Anomaly Packer version that produced it, read from this package's own `package.json`, so a file found loose in a gamedata folder says which packer wrote it and not merely that one did. The runtime templates copied into a build receive the same header as the transpiled scripts, so every file in a release carries identical credits and the same date.

`zip` now appends the addon's version to the archive name, and `--name` sets only the base rather than replacing the whole default. Passing `--name` previously dropped the version that the default name carried, which is how a release ended up called `my-addon.zip` with nothing to say which build it held. A base that already ends in the version is left alone, so passing a full name still behaves.

The MCM option builders gain `keyBind` and `kbModRadio`. Both option types were already declared but there was no way to build one, and the modifier radio could not have been written by hand correctly: `ui_mcm.kb_mod_radio` is an alias for MCM's horizontal radio (`"radio_h"`) rather than a type of its own, and MCM silently skips an option whose type it does not recognise. The builder reads the type off `ui_mcm` for that reason. Two neighbouring declarations were wrong in the same area and are fixed: `key_hold` is a function to call from an `on_key_hold` callback, not a boolean feature flag, and `kbModRadio` accepts `no_str`, without which MCM rewrites each label into a `ui_mcm_..._lst_<label>` translation id.

Two UI typings were corrected against the engine sources. `CGameFont` declared both a class and a same-named const, so the class won and the alignment constants were unreachable; their values were also wrong, and are `alLeft = 0`, `alRight = 1`, `alCenter = 2` per `GameFont.h`. `CUIScriptWnd` had no base class despite being bound as `class_<CUIDialogWndEx, WrapType, bases<CUIDialogWnd, DLL_Pure>>`, which hid `Show`, `IsShown`, `ShowDialog` and everything else it inherits from `CUIWindow`.
