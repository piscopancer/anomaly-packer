// const config = ui_mcm
//   ? ({
//       hp_restore_mlt: ui_mcm.get('pcprs_healing_campfires/hp_restore_mlt'),
//       must_be_lit: ui_mcm.get('pcprs_healing_campfires/must_be_lit'),
//       distance_to_campfire: ui_mcm.get('pcprs_healing_campfires/distance_to_campfire'),
//     } satisfies McmConfig)
//   : { ...pcprs_healing_campfires_mcm.defaultConfig }
// const baseRegen = 0.0003

// function suitable_campfire_nearby(this: void, distance: number): boolean {
//   const pos = db.actor.position()
//   for (const [, binder] of Object.entries(bind_campfire.campfires_all)) {
//     if (!binder || !binder.campfire) {
//       return false
//     }
//     if (binder.campfire.is_on()) {
//       if (pos.distance_to_sqr(binder.object.position()) <= distance) {
//         return true
//       }
//     }
//   }
//   return false
// }

// function actor_on_update(this: void) {
//   if (!db.actor) {
//     return
//   }
//   if (suitable_campfire_nearby(config.distance_to_campfire)) {
//     db.actor.change_health(baseRegen * config.hp_restore_mlt)
//   }
// }

// function on_option_change(this: void) {
//   if (ui_mcm) {
//     config.hp_restore_mlt = ui_mcm.get('pcprs_healing_campfires/hp_restore_mlt')
//     config.must_be_lit = ui_mcm.get('pcprs_healing_campfires/must_be_lit')
//     config.distance_to_campfire = ui_mcm.get('pcprs_healing_campfires/distance_to_campfire')
//   }
// }

function on_key_press(this: void, key: number) {
  if (key === DIK_keys.DIK_I) {
    // printf(`I pressed ${DIK_keys.DIK_I}`)
    // db.actor.give_game_news('igor kryl', game.translate_string('pcprs_healing_campfires_chat_message'), 'ui_inGame2_Storonnik_ravnovesiya', 0, 5000)
    // const ammo_box_size = ini_sys.r_u32('ammo_magnum_300', 'box_size')
    // if (!ammo_box_size) return
    // const ammo_to_give = math.random(ammo_box_size / 2, ammo_box_size)
    // alife_create_item('ammo_magnum_300', db.actor, {
    //   ammo: ammo_to_give,
    // })
    // printf('ammo was given to [%s] in the amount of [%s]', db.actor.character_name(), ammo_to_give)
    // alife().create('ammo_magnum_300', db.actor.position(), db.actor.level_vertex_id(), db.actor.game_vertex_id())

    //     if mt and mt.__index then
    //     local index = mt.__index
    //     if type(index) == "table" then
    //         for key, value in pairs(index) do
    //             print("Method from __index:", key, value)
    //         end
    //     end
    // end

    db.actor.health = 0.1
  }
}

function actor_on_update(this: void, binder: Binder, delta_sec: number) {
  db.actor.change_health(0.1 * delta_sec * 0.001)
}

add_console_command('fuck', () => {
  printf('- fuck lol')
})

function on_game_start(this: void) {
  RegisterScriptCallback('on_key_press', on_key_press)
  RegisterScriptCallback('actor_on_update', actor_on_update)
}
