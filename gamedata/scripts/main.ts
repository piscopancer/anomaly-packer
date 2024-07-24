function on_key_press(this: void, key: number) {
  if (key === DIK_keys.DIK_I) {
    db.actor.health = 0.1
    printf('current weather: ' + level.get_weather())
    const newWeather: Weather = 'w_clear1'
    level.set_weather(newWeather, true)
    printf('changing weather to: ' + newWeather)
    actor_menu.set_msg(1, 'weather changed')
    printf(`# days: ${level.get_time_days}, h: ${level.get_time_hours}, `)
  }
}

function actor_on_update(this: void, binder: object_binder, delta_sec: number) {
  db.actor.change_health(0.1 * delta_sec * 0.001)
  const target = level.get_target_obj()
  if (target) {
    const tgTextId = ini_sys.r_string_ex(target.section(), 'inv_name')
    const tgText = tgTextId ? game.translate_string(tgTextId) : target.profile_name() ?? 'no tr lol :('
    actor_menu.set_msg(1, string.format(`[%s m] to [%s]`, level.get_target_dist(), tgText))
    printf('target clsid: %s, but stalker clsid: %s', target.clsid(), clsid.script_stalker)
    if (target.clsid() === clsid.script_stalker && target.alive()) {
      printf('%s is stalker', target.profile_name())
      target.kill(target)
      // const pdaSound = new sound_object('device\\pda\\pda_objective')
      const pdaSound = new sound_object('decoder')
      if (pdaSound) {
        const leftDir = vector_rotate_y(db.actor.direction(), 90)
        const actorPos = new vector().set(db.actor.position())
        const soundPos = new vector().set(actorPos).add(leftDir.mul(10))
        printf(
          '# actor at [%s,%s,%s], sound should play at [%s,%s,%s]',
          math.floor(actorPos.x),
          math.floor(actorPos.y),
          math.floor(actorPos.z),
          math.floor(soundPos.x),
          math.floor(soundPos.y),
          math.floor(soundPos.z)
        )
        pdaSound.play_at_pos(db.actor, soundPos)
        pdaSound.frequency = 0.5
        pdaSound.volume = 10
        alife().create('ammo_magnum_300', new vector().set(soundPos).add(new vector().set(0, 5, 0)), db.actor.level_vertex_id(), db.actor.game_vertex_id())
      }
    }
  }
}

function on_game_start(this: void) {
  RegisterScriptCallback('on_key_press', on_key_press)
  // RegisterScriptCallback('actor_on_update', actor_on_update)
  RegisterScriptCallback('actor_on_weapon_zoom_in', (wpn_go) => {
    const wpn = wpn_go.cast_Weapon()
    actor_menu.set_msg(1, `cost: ${wpn.Cost()}, weight: ${wpn.Weight()}, rpm: ${wpn.RPM()}`)
  })
}
