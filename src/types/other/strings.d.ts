declare namespace UI {
  /**
   * String-table ids, i.e. what `configs/text` registers and what a layout writes wherever the
   * engine expects a caption or a hint. Unlike {@link Textures} this set is maintained by hand
   * and holds only the ids anomaly-packer has had a reason to name so far — the full vanilla
   * table runs to some tens of thousands of ids and needs the unpacked game configs to generate,
   * which is a separate job. Until then, treat a missing id as a gap to be filled here rather
   * than as a sign the id does not exist.
   *
   * An addon declares its own ids the same way it declares its textures, by merging into this
   * interface:
   *
   * ```ts
   * declare global {
   *   namespace UI {
   *     interface Strings {
   *       st_my_addon_caption: true
   *     }
   *   }
   * }
   * ```
   */
  interface Strings {
    /** The PDA map tab: the missions button, the filters above the map and the task list. */
    missions_list: true
    filter_treasures_text: true
    filter_primary_objects_text: true
    filter_secondary_tasks_text: true
    filter_quest_npcs_text: true
    ui_show_second_task_wnd: true
    ui_pda_secondary_task: true
    ui_task_btn_focus_center: true
    ui_task_btn_focus_center2: true
    /** The map legend: its caption and the row that names each kind of marker. */
    pda_legend_caption: true
    st_ui_pda_legend_main_task: true
    st_ui_pda_legend_additional_task: true
    st_ui_pda_legend_secrets: true
    st_ui_pda_legend_primary_objects: true
    st_ui_pda_actor_box: true
    st_ui_pda_legend_special: true
    st_ui_pda_legend_trader: true
    st_ui_pda_legend_barman: true
    st_ui_pda_legend_scout: true
    st_ui_pda_legend_mechanic: true
    st_ui_pda_legend_medic: true
    st_ui_pda_legend_squad: true
    st_ui_pda_legend_friends: true
    st_ui_pda_legend_neutrals: true
    st_ui_pda_legend_enemies: true
    /** The map navigation buttons under the level image. */
    ui_map_btn_legend: true
    ui_map_btn_up: true
    ui_map_btn_down: true
    ui_map_btn_left: true
    ui_map_btn_right: true
    ui_map_btn_center: true
    ui_map_btn_zoom_in: true
    ui_map_btn_zoom_out: true
    ui_map_btn_zmreset: true
  }

  /** A string-table id — one of the ids above, or any an addon declared by merging into {@link Strings}. */
  type StringId = Extract<keyof Strings, string>
}
