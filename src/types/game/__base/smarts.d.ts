/**
 * - ↘ of * means on the south-east of *
 * - ↘↘ means far south-east
 */
declare const enum Smarts {
  //
  // Escape
  //
  /** Camp near anomaly, ↑ of rookie village */
  esc_smart_terrain_1_11 = 'esc_smart_terrain_1_11',
  /** [Base] Rookie village */
  esc_smart_terrain_2_12 = 'esc_smart_terrain_2_12',
  /** Transition to Marsh, ← of military base */
  esc_smart_terrain_2_14 = 'esc_smart_terrain_2_14',
  /** Transition to Marsh, ← of farmhouse */
  esc_smart_terrain_3_7 = 'esc_smart_terrain_3_7',
  /** [Base] Military checkpoint, ↓↓ */
  esc_smart_terrain_3_16 = 'esc_smart_terrain_3_16',
  /** Tunnel, ↖↖ of elevator */
  esc_smart_terrain_4_9 = 'esc_smart_terrain_4_9',
  /** Wagon, ↗ of rookie village */
  esc_smart_terrain_4_11 = 'esc_smart_terrain_4_11',
  /** Camp, ↘ of rookie village */
  esc_smart_terrain_4_13 = 'esc_smart_terrain_4_13',
  /** [Base] Transition to garbage, ↑↑ */
  esc_smart_terrain_5_2 = 'esc_smart_terrain_5_2',
  /** Camp, ↑ of farmhouse */
  esc_smart_terrain_5_4 = 'esc_smart_terrain_5_4',
  /** Camp, ↑ of farmhouse */
  esc_smart_terrain_5_6 = 'esc_smart_terrain_5_6',
  /** [Base] Farmhouse */
  esc_smart_terrain_5_7 = 'esc_smart_terrain_5_7',
  /** Elevator */
  esc_smart_terrain_5_9 = 'esc_smart_terrain_5_9',
  /** Camp, → of rookie village */
  esc_smart_terrain_5_12 = 'esc_smart_terrain_5_12',
  /** Fox house */
  esc_smart_terrain_6_6 = 'esc_smart_terrain_6_6',
  /** [Base] Ruined rail bridge */
  esc_smart_terrain_6_8 = 'esc_smart_terrain_6_8',
  /** [Base] Automobile Transport Company, →→ */
  esc_smart_terrain_7_11 = 'esc_smart_terrain_7_11',
  /** Camp, →→ */
  esc_smart_terrain_8_9 = 'esc_smart_terrain_8_9',
  /** Camp, → of ATC */
  esc_smart_terrain_8_10 = 'esc_smart_terrain_8_10',
  /** Railroad tunnel, →→ */
  esc_smart_terrain_9_7 = 'esc_smart_terrain_9_7',
  /** Tunnel, →→ */
  esc_smart_terrain_9_10 = 'esc_smart_terrain_9_10',
  //
  // Dark Scape
  //
  /** Nest, ↑ of sawmill */
  ds_boars_nest = 'ds_boars_nest',
  /** Roadside, ← of gas station */
  ds_deb1 = 'ds_deb1',
  /** Transition to Escape, ←← */
  ds_grverfer2 = 'ds_grverfer2',
  /** Transition to Dark Valley, ↑↑ */
  ds_kem1 = 'ds_kem1',
  /** Gas station, →→ */
  ds_kem2 = 'ds_kem2',
  ds_kem3 = 'ds_kem3',
  ds_ptr = 'ds_ptr',
  ds_ptr2 = 'ds_ptr2',
  /** Roadside, ↗ of sawmill */
  ds_ptr3 = 'ds_ptr3',
  ds_ptr4 = 'ds_ptr4',
  ds2_domik_st = 'ds2_domik_st',
  /** Camp, ↗ of transition to Escape */
  ds2_lager_st = 'ds2_lager_st',
  ds2_st_dogs = 'ds2_st_dogs',
  /** Camp, ← of sawmill */
  ds2_st_hoofs = 'ds2_st_hoofs',
  //
  // Polyana
  //
  /** Village, ↓↓ */
  pol_smart_terrain_1_1 = 'pol_smart_terrain_1_1',
  /** Building, ↑ of village */
  pol_smart_terrain_1_2 = 'pol_smart_terrain_1_2',
  /** Building, ↑ of village */
  pol_smart_terrain_1_3 = 'pol_smart_terrain_1_3',
  /** Factory, ↗↗ */
  pol_smart_terrain_2_1 = 'pol_smart_terrain_2_1',
  /** Factory, ↗↗ */
  pol_smart_terrain_2_2 = 'pol_smart_terrain_2_2',
  /** Factory, ↗↗ */
  pol_sim_1 = 'pol_sim_1',
  //
  // Marsh
  //
  mar_smart_terrain_base = 'mar_smart_terrain_base',
  /** Doctor's hideout, ↖↖ */
  mar_smart_terrain_doc = 'mar_smart_terrain_doc',
  /** Camp, ←← */
  mar_smart_terrain_doc_2 = 'mar_smart_terrain_doc_2',
  /** [Base] Watchtower, ↘ of Doctor's hideout */
  mar_smart_terrain_3_3 = 'mar_smart_terrain_3_3',
  mar_smart_terrain_3_7 = 'mar_smart_terrain_3_7',
  mar_smart_terrain_3_10 = 'mar_smart_terrain_3_10',
  mar_smart_terrain_4_5 = 'mar_smart_terrain_4_5',
  mar_smart_terrain_4_7 = 'mar_smart_terrain_4_7',
  /** [Base] Pumping station */
  mar_smart_terrain_5_8 = 'mar_smart_terrain_5_8',
  mar_smart_terrain_5_12 = 'mar_smart_terrain_5_12',
  mar_smart_terrain_6_4 = 'mar_smart_terrain_6_4',
  mar_smart_terrain_6_7 = 'mar_smart_terrain_6_7',
  mar_smart_terrain_6_8 = 'mar_smart_terrain_6_8',
  mar_smart_terrain_6_10 = 'mar_smart_terrain_6_10',
  /** [Base] Watchtower, → of clear sky base */
  mar_smart_terrain_6_11 = 'mar_smart_terrain_6_11',
  /** Transition to Agroprom, ↑↑ */
  mar_smart_terrain_7_3 = 'mar_smart_terrain_7_3',
  mar_smart_terrain_7_7 = 'mar_smart_terrain_7_7',
  mar_smart_terrain_8_4 = 'mar_smart_terrain_8_4',
  mar_smart_terrain_8_8 = 'mar_smart_terrain_8_8',
  mar_smart_terrain_8_9 = 'mar_smart_terrain_8_9',
  /** Church, ↘↘ */
  mar_smart_terrain_8_11 = 'mar_smart_terrain_8_11',
  /** [Base] Building, ↙ of transition to Escape */
  mar_smart_terrain_10_5 = 'mar_smart_terrain_10_5',
  mar_smart_terrain_10_7 = 'mar_smart_terrain_10_7',
  mar_smart_terrain_10_10 = 'mar_smart_terrain_10_10',
  mar_smart_terrain_11_3 = 'mar_smart_terrain_11_3',
  mar_smart_terrain_11_11 = 'mar_smart_terrain_11_11',
  /** Transition to Escape, ↗↗ */
  mar_smart_terrain_12_2 = 'mar_smart_terrain_12_2',
  //
  // Garbage
  //
  /** Transition to Agroprom, ← of train station */
  gar_smart_terrain_1_5 = 'gar_smart_terrain_1_5',
  /** Transition to Agroprom, ↖ of trucks cemetery */
  gar_smart_terrain_1_7 = 'gar_smart_terrain_1_7',
  gar_smart_terrain_2_4 = 'gar_smart_terrain_2_4',
  /** [Base] Train station */
  gar_smart_terrain_3_5 = 'gar_smart_terrain_3_5',
  /** Trucks cemetery, ↖ of transition to Escape */
  gar_smart_terrain_3_7 = 'gar_smart_terrain_3_7',
  /** Garbage pile, ↑ of train station */
  gar_smart_terrain_4_2 = 'gar_smart_terrain_4_2',
  /** Bus stop, → of train station */
  gar_smart_terrain_4_5 = 'gar_smart_terrain_4_5',
  /** [Base] Transition to Rostok, ↑↑ */
  gar_smart_terrain_5_2 = 'gar_smart_terrain_5_2',
  /** Garbage pile, ↗ of train station */
  gar_smart_terrain_5_4 = 'gar_smart_terrain_5_4',
  /** Garbage pile, → of bus stop */
  gar_smart_terrain_5_5 = 'gar_smart_terrain_5_5',
  /** Debris, ↗ of trucks cemetery */
  gar_smart_terrain_5_6 = 'gar_smart_terrain_5_6',
  /** Transition to Escape, ↓↓ */
  gar_smart_terrain_5_8 = 'gar_smart_terrain_5_8',
  /** Camp, ↗ of flea market */
  gar_smart_terrain_6_1 = 'gar_smart_terrain_6_1',
  /** [Base] Flea market, ↘ of transition to Rostok */
  gar_smart_terrain_6_3 = 'gar_smart_terrain_6_3',
  /** Forest camp, ↘↘ */
  gar_smart_terrain_6_6 = 'gar_smart_terrain_6_6',
  gar_smart_terrain_6_7 = 'gar_smart_terrain_6_7',
  /** Garbage pile, ↘ of flea market */
  gar_smart_terrain_7_4 = 'gar_smart_terrain_7_4',
  /** Transition to Dark Valley, → of flea market */
  gar_smart_terrain_8_3 = 'gar_smart_terrain_8_3',
  /** Boulders, →→ */
  gar_smart_terrain_8_5 = 'gar_smart_terrain_8_5',
  //
  // Agroprom
  //
  /** Pond camp, ↖↖ */
  agr_smart_terrain_1_2 = 'agr_smart_terrain_1_2',
  /** Anomaly near pond, ↓ of pond camp */
  agr_smart_terrain_1_3 = 'agr_smart_terrain_1_3',
  /** [Base] Military base yard */
  agr_smart_terrain_1_6 = 'agr_smart_terrain_1_6',
  /** [Base] Military base entrance, ↑ of military base  */
  agr_smart_terrain_1_6_near_1 = 'agr_smart_terrain_1_6_near_1',
  /** [Base] Military base building, → of military base  */
  agr_smart_terrain_1_6_near_2 = 'agr_smart_terrain_1_6_near_2',
  /**  Camp, → of pond camp */
  agr_smart_terrain_2_2 = 'agr_smart_terrain_2_2',
  /**  [Base] Factory */
  agr_smart_terrain_4_4 = 'agr_smart_terrain_4_4',
  /**  [Base] Factory camp, ↑ of factory */
  agr_smart_terrain_4_4_near_1 = 'agr_smart_terrain_4_4_near_1',
  /**  [Base] Factory entrance, ← of factory */
  agr_smart_terrain_4_4_near_2 = 'agr_smart_terrain_4_4_near_2',
  /**  [Base] Factory entrance, → of factory */
  agr_smart_terrain_4_4_near_3 = 'agr_smart_terrain_4_4_near_3',
  agr_smart_terrain_4_6 = 'agr_smart_terrain_4_6',
  agr_smart_terrain_5_2 = 'agr_smart_terrain_5_2',
  /** Railway watchtower, ↗ of factory */
  agr_smart_terrain_5_3 = 'agr_smart_terrain_5_3',
  /** Fork in the road, ↘ of factory */
  agr_smart_terrain_5_4 = 'agr_smart_terrain_5_4',
  /** Transition to Agroprom underground, ↘ of military base */
  agr_smart_terrain_5_7 = 'agr_smart_terrain_5_7',
  /** Tunnel camp, →→ */
  agr_smart_terrain_6_4 = 'agr_smart_terrain_6_4',
  /** Transition to Garbage, ↘↘ */
  agr_smart_terrain_6_6 = 'agr_smart_terrain_6_6',
  /** Transition to Garbage, →→ */
  agr_smart_terrain_7_4 = 'agr_smart_terrain_7_4',
  agr_smart_terrain_7_5 = 'agr_smart_terrain_7_5',
  //
  // Agroprom underground
  //
  agr_u_bandits = 'agr_u_bandits',
  agr_u_bloodsucker = 'agr_u_bloodsucker',
  agr_u_bloodsucker_2 = 'agr_u_bloodsucker_2',
  agr_u_monsters = 'agr_u_monsters',
  agr_u_soldiers = 'agr_u_soldiers',
  //
  // Dark Valley
  //
  /** Backyard, → of eastern factory */
  val_smart_terrain_1_2 = 'val_smart_terrain_1_2',
  /** Camp, ↙ of bridge */
  val_smart_terrain_3_0 = 'val_smart_terrain_3_0',
  /** [Base] Farm, ↙↙ */
  val_smart_terrain_4_0 = 'val_smart_terrain_4_0',
  val_smart_terrain_5_7 = 'val_smart_terrain_5_7',
  val_smart_terrain_5_8 = 'val_smart_terrain_5_8',
  val_smart_terrain_5_10 = 'val_smart_terrain_5_10',
  /** Camp, ← of factory */
  val_smart_terrain_6_4 = 'val_smart_terrain_6_4',
  val_smart_terrain_6_5 = 'val_smart_terrain_6_5',
  /** [Base] Car maintenance, ↑ of factory */
  val_smart_terrain_7_3 = 'val_smart_terrain_7_3',
  val_smart_terrain_7_4 = 'val_smart_terrain_7_4',
  val_smart_terrain_7_5 = 'val_smart_terrain_7_5',
  /** Pond camp, ↖ of bridge */
  val_smart_terrain_7_8 = 'val_smart_terrain_7_8',
  /** Transition to Dark Scape, ↓↓ */
  val_smart_terrain_7_11 = 'val_smart_terrain_7_11',
  /** Roadside camp, ↘ of factory */
  val_smart_terrain_8_6 = 'val_smart_terrain_8_6',
  /** Bus stop, ↓ of factory */
  val_smart_terrain_8_7 = 'val_smart_terrain_8_7',
  /** Pond camp, ↘ of bridge */
  val_smart_terrain_8_9 = 'val_smart_terrain_8_9',
  val_smart_terrain_9_10 = 'val_smart_terrain_9_10',
  val_smart_terrain_9_2 = 'val_smart_terrain_9_2',
  /** Gas station, → of factory */
  val_smart_terrain_9_4 = 'val_smart_terrain_9_4',
  /** Camp, ↑ of eastern factory */
  val_smart_terrain_9_6 = 'val_smart_terrain_9_6',
  //
  // Trucks Cemetery
  //
  trc_sim_1 = 'trc_sim_1',
  trc_sim_2 = 'trc_sim_2',
  /** Fork in the road, ↖↖ */
  trc_sim_3 = 'trc_sim_3',
  trc_sim_4 = 'trc_sim_4',
  trc_sim_5 = 'trc_sim_5',
  trc_sim_6 = 'trc_sim_6',
  trc_sim_7 = 'trc_sim_7',
  trc_sim_8 = 'trc_sim_8',
  trc_sim_9 = 'trc_sim_9',
  trc_sim_10 = 'trc_sim_10',
  trc_sim_11 = 'trc_sim_11',
  trc_sim_12 = 'trc_sim_12',
  trc_sim_13 = 'trc_sim_13',
  trc_sim_14 = 'trc_sim_14',
  trc_sim_15 = 'trc_sim_15',
  trc_sim_16 = 'trc_sim_16',
  trc_sim_17 = 'trc_sim_17',
  trc_sim_18 = 'trc_sim_18',
  trc_sim_19 = 'trc_sim_19',
  /** [Base] Base, →→ */
  trc_sim_20 = 'trc_sim_20',
  trc_sim_21 = 'trc_sim_21',
  //
  // Rostok
  //
  /** Dogs lair, ↓↓ */
  bar_zastava_dogs_lair = 'bar_zastava_dogs_lair',
  /** Dogs lair, ↖↖ */
  bar_zastava_dogs_lair_2 = 'bar_zastava_dogs_lair_2',
  /** Bunker, ↗↗ */
  bar_dolg_bunker = 'bar_dolg_bunker',
  /** Camp, ↙ of bunker */
  bar_dolg_general = 'bar_dolg_general',
  /** Bar entrance */
  bar_visitors = 'bar_visitors',
  /** Checkpoint, ↓↓ */
  bar_zastava = 'bar_zastava',
  /** Checkpoint, ↖↖ */
  bar_zastava_2 = 'bar_zastava_2',
  //
  // Wild Territory
  //
  /** [Base] Pass-through building, ← of transition to Rostok */
  ros_smart_killers1 = 'ros_smart_killers1',
  /** Nest, ↖↖ */
  ros_smart_monster4 = 'ros_smart_monster4',
  /** Tunnel, ←← */
  ros_smart_monster5 = 'ros_smart_monster5',
  /** Tunnel, ↘↘ */
  ros_smart_monster7 = 'ros_smart_monster7',
  /** Train station, ↑ of construction site */
  ros_smart_poltergeist2 = 'ros_smart_poltergeist2',
  /** Lush hangar, ↗ of construction site */
  ros_smart_snork1 = 'ros_smart_snork1',
  /** Office container, ↙ of construction site */
  ros_smart_stalker_killers1 = 'ros_smart_stalker_killers1',
  /** Transition to Rostok, →→ */
  ros_smart_stalker1 = 'ros_smart_stalker1',
  //
  // Yantar
  //
  yan_smart_terrain_1_6 = 'yan_smart_terrain_1_6',
  yan_smart_terrain_2_4 = 'yan_smart_terrain_2_4',
  yan_smart_terrain_2_5 = 'yan_smart_terrain_2_5',
  yan_smart_terrain_3_4 = 'yan_smart_terrain_3_4',
  yan_smart_terrain_3_6 = 'yan_smart_terrain_3_6',
  yan_smart_terrain_4_2 = 'yan_smart_terrain_4_2',
  yan_smart_terrain_4_4 = 'yan_smart_terrain_4_4',
  yan_smart_terrain_4_5 = 'yan_smart_terrain_4_5',
  yan_smart_terrain_5_3 = 'yan_smart_terrain_5_3',
  yan_smart_terrain_5_5 = 'yan_smart_terrain_5_5',
  yan_smart_terrain_6_2 = 'yan_smart_terrain_6_2',
  yan_smart_terrain_6_4 = 'yan_smart_terrain_6_4',
  yan_smart_terrain_zombi_spawn = 'yan_smart_terrain_zombi_spawn',
  yan_smart_terrain_snork_u = 'yan_smart_terrain_snork_u',
  //
  // Yantar underground
  //
  x162_st_burer = 'x162_st_burer',
  x162_st_gigant = 'x162_st_gigant',
  x162_st_snork = 'x162_st_snork',
  x162_st_poltergeist = 'x162_st_poltergeist',
  //
  // Dead City
  //
  /** Building, ↘ of the Lenin memorial */
  cit_bandits = 'cit_bandits',
  /** Building, ↙ of the Lenin memorial */
  cit_bandits_2 = 'cit_bandits_2',
  /** Ditch, ↙↙ */
  cit_kanaliz1 = 'cit_kanaliz1',
  /** Ditch, ↘↘ */
  cit_kanaliz2 = 'cit_kanaliz2',
  /** [Base] Head mercenaries base */
  cit_killers = 'cit_killers',
  /** Building, ↗↗ */
  cit_killers_2 = 'cit_killers_2',
  /** [Base] Building, ↓ of the Lenin memorial */
  cit_killers_vs_bandits = 'cit_killers_vs_bandits',
  /** Yard in the middle of 2 apartment buildings, ↗↗ */
  zombie_smart_ds_mlr_1 = 'zombie_smart_ds_mlr_1',
  /** Yard, ←← */
  zombie_smart_ds_mlr_2 = 'zombie_smart_ds_mlr_2',
  //
  // Military Warehouses
  //
  /** Boulders, ↗ of transition to Dead City */
  mil_smart_terrain_2_1 = 'mil_smart_terrain_2_1',
  mil_smart_terrain_2_10 = 'mil_smart_terrain_2_10',
  /** Transition to Dead City, ↖↖ */
  mil_smart_terrain_2_2 = 'mil_smart_terrain_2_2',
  mil_smart_terrain_2_4 = 'mil_smart_terrain_2_4',
  /** Helicopter */
  mil_smart_terrain_2_6 = 'mil_smart_terrain_2_6',
  /** Barrier, ↗↗ */
  mil_smart_terrain_3_8 = 'mil_smart_terrain_3_8',
  /** House, ← of bloodsucker village */
  mil_smart_terrain_4_2 = 'mil_smart_terrain_4_2',
  /** Watchtower, ↑ of bloodsucker village */
  mil_smart_terrain_4_3 = 'mil_smart_terrain_4_3',
  /** Camp, ↖ of freedom base */
  mil_smart_terrain_4_5 = 'mil_smart_terrain_4_5',
  /** Debris, ↗ of freedom base */
  mil_smart_terrain_4_7 = 'mil_smart_terrain_4_7',
  /** Office container, ↘ of barrier */
  mil_smart_terrain_4_8 = 'mil_smart_terrain_4_8',
  mil_smart_terrain_7_10 = 'mil_smart_terrain_7_10',
  mil_smart_terrain_7_12 = 'mil_smart_terrain_7_12',
  /** Small village, ← of freedom base */
  mil_smart_terrain_7_4 = 'mil_smart_terrain_7_4',
  mil_smart_terrain_7_7 = 'mil_smart_terrain_7_7',
  mil_smart_terrain_7_8 = 'mil_smart_terrain_7_8',
  /** Camp, ↙ of small village */
  mil_smart_terrain_8_3 = 'mil_smart_terrain_8_3',
  //
  // Red Forest
  //
  red_bridge_bandit_smart_skirmish = 'red_bridge_bandit_smart_skirmish',
  red_smart_terrain_3_1 = 'red_smart_terrain_3_1',
  red_smart_terrain_3_2 = 'red_smart_terrain_3_2',
  red_smart_terrain_3_3 = 'red_smart_terrain_3_3',
  red_smart_terrain_4_2 = 'red_smart_terrain_4_2',
  red_smart_terrain_4_3 = 'red_smart_terrain_4_3',
  red_smart_terrain_4_5 = 'red_smart_terrain_4_5',
  red_smart_terrain_5_5 = 'red_smart_terrain_5_5',
  red_smart_terrain_5_6 = 'red_smart_terrain_5_6',
  red_smart_terrain_6_3 = 'red_smart_terrain_6_3',
  red_smart_terrain_6_6 = 'red_smart_terrain_6_6',
  red_smart_terrain_bridge = 'red_smart_terrain_bridge',
  red_smart_terrain_monsters = 'red_smart_terrain_monsters',
  red_smart_terrain_monsters_2 = 'red_smart_terrain_monsters_2',
  red_smart_terrain_monsters_3 = 'red_smart_terrain_monsters_3',
  //
  // Radar
  //
  rad_after_valley = 'rad_after_valley',
  rad_antenna_camper = 'rad_antenna_camper',
  rad_antenna_monolith = 'rad_antenna_monolith',
  rad_antenna_patrol = 'rad_antenna_patrol',
  rad_bloodsucker = 'rad_bloodsucker',
  rad_entrance = 'rad_entrance',
  rad_pseudodogs = 'rad_pseudodogs',
  rad_snork1 = 'rad_snork1',
  rad_snork2 = 'rad_snork2',
  rad_valley = 'rad_valley',
  rad_valley_dogs = 'rad_valley_dogs',
  rad_zombied1 = 'rad_zombied1',
  rad_zombied2 = 'rad_zombied2',
  rad_freedom_vs_duty = 'rad_freedom_vs_duty',
  rad_rusty_forest_center = 'rad_rusty_forest_center',
  rad2_loner_0000 = 'rad2_loner_0000',
  rad2_loner_0001 = 'rad2_loner_0001',
  rad2_loner_0002 = 'rad2_loner_0002',
  rad2_prip_teleport = 'rad2_prip_teleport',
  rad2_rad_prip_road = 'rad2_rad_prip_road',
  //
  // Radar underground
  //

  //
  // Limanks
  //
  lim_smart_terrain_1 = 'lim_smart_terrain_1',
  lim_smart_terrain_10 = 'lim_smart_terrain_10',
  lim_smart_terrain_3 = 'lim_smart_terrain_3',
  lim_smart_terrain_4 = 'lim_smart_terrain_4',
  lim_smart_terrain_5 = 'lim_smart_terrain_5',
  lim_smart_terrain_6 = 'lim_smart_terrain_6',
  lim_smart_terrain_7 = 'lim_smart_terrain_7',
  lim_smart_terrain_8 = 'lim_smart_terrain_8',
  lim_smart_terrain_9 = 'lim_smart_terrain_9',
  //
  // Jupiter
  //
  jup_a10_smart_terrain = 'jup_a10_smart_terrain',
  jup_a12 = 'jup_a12',
  jup_a6 = 'jup_a6',
  jup_b1 = 'jup_b1',
  jup_b19 = 'jup_b19',
  jup_b200 = 'jup_b200',
  jup_b202 = 'jup_b202',
  jup_b203 = 'jup_b203',
  jup_b204 = 'jup_b204',
  jup_b205_smart_terrain = 'jup_b205_smart_terrain',
  jup_b206 = 'jup_b206',
  jup_b207 = 'jup_b207',
  jup_b208 = 'jup_b208',
  jup_b209 = 'jup_b209',
  jup_b211 = 'jup_b211',
  jup_b212 = 'jup_b212',
  jup_b25 = 'jup_b25',
  jup_b32 = 'jup_b32',
  jup_b4 = 'jup_b4',
  jup_b41 = 'jup_b41',
  jup_b46 = 'jup_b46',
  jup_b47 = 'jup_b47',
  jup_b6_anom_2 = 'jup_b6_anom_2',
  jup_b200_tushkan_smart_terrain = 'jup_b200_tushkan_smart_terrain',
  jup_b207_depot_attack = 'jup_b207_depot_attack',
  jup_b219 = 'jup_b219',
  jup_b8_smart_terrain = 'jup_b8_smart_terrain',
  jup_b205_smart_terrain_tushkano = 'jup_b205_smart_terrain_tushkano',
  jup_a12_merc = 'jup_a12_merc',
  jup_a9 = 'jup_a9',
  jup_sim_1 = 'jup_sim_1',
  jup_sim_2 = 'jup_sim_2',
  jup_sim_3 = 'jup_sim_3',
  jup_sim_4 = 'jup_sim_4',
  jup_sim_5 = 'jup_sim_5',
  jup_sim_6 = 'jup_sim_6',
  jup_sim_7 = 'jup_sim_7',
  jup_sim_8 = 'jup_sim_8',
  jup_sim_9 = 'jup_sim_9',
  jup_sim_10 = 'jup_sim_10',
  jup_sim_11 = 'jup_sim_11',
  jup_sim_12 = 'jup_sim_12',
  jup_sim_13 = 'jup_sim_13',
  jup_sim_14 = 'jup_sim_14',
  jup_sim_15 = 'jup_sim_15',
  jup_sim_16 = 'jup_sim_16',
  jup_sim_17 = 'jup_sim_17',
  jup_sim_18 = 'jup_sim_18',
  jup_sim_19 = 'jup_sim_19',
  jup_sim_20 = 'jup_sim_20',
  jup_sim_21 = 'jup_sim_21',
  //
  // Underpass
  //
  pas_b400_elevator = 'pas_b400_elevator',
  pas_b400_track = 'pas_b400_track',
  pas_b400_downstairs = 'pas_b400_downstairs',
  pas_b400_tunnel = 'pas_b400_tunnel',
  pas_b400_hall = 'pas_b400_hall',
  pas_b400_way = 'pas_b400_way',
  pas_b400_canalisation = 'pas_b400_canalisation',
  pas_b400_fake = 'pas_b400_fake',
  //
  // Pripyat center
  //
  pri_depot = 'pri_depot',
  mlr_terrain = 'mlr_terrain',
  pri_monolith = 'pri_monolith',
  pri_smart_bloodsucker_lair1 = 'pri_smart_bloodsucker_lair1',
  pri_smart_controler_lair1 = 'pri_smart_controler_lair1',
  pri_smart_controler_lair2 = 'pri_smart_controler_lair2',
  pri_smart_giant_lair1 = 'pri_smart_giant_lair1',
  pri_smart_monolith_stalker2 = 'pri_smart_monolith_stalker2',
  pri_smart_monolith_stalker3 = 'pri_smart_monolith_stalker3',
  pri_smart_monolith_stalker4 = 'pri_smart_monolith_stalker4',
  pri_smart_monolith_stalker6 = 'pri_smart_monolith_stalker6',
  pri_smart_monster_lair1 = 'pri_smart_monster_lair1',
  pri_smart_neutral_stalker1 = 'pri_smart_neutral_stalker1',
  pri_smart_pseudodog_lair1 = 'pri_smart_pseudodog_lair1',
  pri_smart_snork_lair1 = 'pri_smart_snork_lair1',
  pri_smart_snork_lair2 = 'pri_smart_snork_lair2',
  pri_smart_tushkano_lair1 = 'pri_smart_tushkano_lair1',
  //
  // Pripyat outskirts
  //
  pri_a15 = 'pri_a15',
  pri_a16 = 'pri_a16',
  pri_a17 = 'pri_a17',
  pri_a18_smart_terrain = 'pri_a18_smart_terrain',
  pri_a21_smart_terrain = 'pri_a21_smart_terrain',
  pri_a22_smart_terrain = 'pri_a22_smart_terrain',
  pri_a25_smart_terrain = 'pri_a25_smart_terrain',
  pri_b301 = 'pri_b301',
  pri_b302 = 'pri_b302',
  pri_b303 = 'pri_b303',
  pri_b304 = 'pri_b304',
  pri_b306 = 'pri_b306',
  pri_b307 = 'pri_b307',
  pri_b35_mercs = 'pri_b35_mercs',
  pri_b36_smart_terrain = 'pri_b36_smart_terrain',
  pri_sim_1 = 'pri_sim_1',
  pri_sim_2 = 'pri_sim_2',
  pri_sim_3 = 'pri_sim_3',
  pri_sim_4 = 'pri_sim_4',
  pri_sim_5 = 'pri_sim_5',
  pri_sim_6 = 'pri_sim_6',
  pri_sim_7 = 'pri_sim_7',
  pri_sim_8 = 'pri_sim_8',
  pri_sim_9 = 'pri_sim_9',
  pri_sim_10 = 'pri_sim_10',
  pri_sim_11 = 'pri_sim_11',
  pri_sim_12 = 'pri_sim_12',
  pri_b35_military = 'pri_b35_military',
  pri_b305_dogs = 'pri_b305_dogs',
  pri_b304_monsters_smart_terrain = 'pri_b304_monsters_smart_terrain',
  pri_a20 = 'pri_a20',
  pri_a28_heli = 'pri_a28_heli',
  pri_a28_base = 'pri_a28_base',
  pri_a28_shop = 'pri_a28_shop',
  pri_a28_arch = 'pri_a28_arch',
  pri_a28_school = 'pri_a28_school',
  pri_a28_evac = 'pri_a28_evac',
  //
  // Hospital
  //
  katacomb_smart_terrain = 'katacomb_smart_terrain',
  //
  // Zaton
  //
  zat_stalker_base_smart = 'zat_stalker_base_smart',
  zat_medic_home_smart = 'zat_medic_home_smart',
  zat_b7_stalker_raider = 'zat_b7_stalker_raider',
  zat_b33 = 'zat_b33',
  zat_a23_smart_terrain = 'zat_a23_smart_terrain',
  zat_b7 = 'zat_b7',
  zat_b40_smart_terrain = 'zat_b40_smart_terrain',
  zat_b28 = 'zat_b28',
  zat_b42_smart_terrain = 'zat_b42_smart_terrain',
  zat_b18 = 'zat_b18',
  zat_b101 = 'zat_b101',
  zat_b38u = 'zat_b38u',
  zat_b38 = 'zat_b38',
  zat_b5_smart_terrain = 'zat_b5_smart_terrain',
  zat_b106_smart_terrain = 'zat_b106_smart_terrain',
  zat_b52 = 'zat_b52',
  zat_b103_merc_smart = 'zat_b103_merc_smart',
  zat_b104_zombied = 'zat_b104_zombied',
  zat_b14_smart_terrain = 'zat_b14_smart_terrain',
  zat_b20_smart_terrain = 'zat_b20_smart_terrain',
  zat_b53 = 'zat_b53',
  zat_b12 = 'zat_b12',
  zat_b54 = 'zat_b54',
  zat_b55 = 'zat_b55',
  zat_b100 = 'zat_b100',
  zat_b39 = 'zat_b39',
  zat_b56 = 'zat_b56',
  zat_a1 = 'zat_a1',
  zat_sim_1 = 'zat_sim_1',
  zat_sim_2 = 'zat_sim_2',
  zat_sim_3 = 'zat_sim_3',
  zat_sim_4 = 'zat_sim_4',
  zat_sim_5 = 'zat_sim_5',
  zat_sim_6 = 'zat_sim_6',
  zat_sim_7 = 'zat_sim_7',
  zat_sim_8 = 'zat_sim_8',
  zat_sim_9 = 'zat_sim_9',
  zat_sim_10 = 'zat_sim_10',
  zat_sim_11 = 'zat_sim_11',
  zat_sim_12 = 'zat_sim_12',
  zat_sim_13 = 'zat_sim_13',
  zat_sim_14 = 'zat_sim_14',
  zat_sim_15 = 'zat_sim_15',
  zat_sim_16 = 'zat_sim_16',
  zat_sim_17 = 'zat_sim_17',
  zat_sim_18 = 'zat_sim_18',
  zat_sim_19 = 'zat_sim_19',
  zat_sim_20 = 'zat_sim_20',
  zat_sim_21 = 'zat_sim_21',
  zat_sim_22 = 'zat_sim_22',
  zat_sim_23 = 'zat_sim_23',
  zat_sim_24 = 'zat_sim_24',
  zat_sim_25 = 'zat_sim_25',
  zat_sim_26 = 'zat_sim_26',
  zat_sim_27 = 'zat_sim_27',
  zat_sim_28 = 'zat_sim_28',
  zat_sim_29 = 'zat_sim_29',
  zat_sim_30 = 'zat_sim_30',
  //
  // NPP south
  //
  aes_smart_terrain_monolit_blockpost = 'aes_smart_terrain_monolit_blockpost',
  aes_smart_terrain_monolit_blockpost2 = 'aes_smart_terrain_monolit_blockpost2',
  aes_smart_terrain_monolit_blockpost4 = 'aes_smart_terrain_monolit_blockpost4',
  aes_smart_terrain_monsters1 = 'aes_smart_terrain_monsters1',
  aes_smart_terrain_monsters2 = 'aes_smart_terrain_monsters2',
  aes_smart_terrain_monsters3 = 'aes_smart_terrain_monsters3',
  aes_smart_terrain_monsters4 = 'aes_smart_terrain_monsters4',
  aes_smart_terran_soldier = 'aes_smart_terran_soldier',
  aes_smart_terran_soldier2 = 'aes_smart_terran_soldier2',
  //
  // NPP north
  //
  aes2_monolith_camp1 = 'aes2_monolith_camp1',
  aes2_monolith_camp2 = 'aes2_monolith_camp2',
  aes2_monolith_camp3 = 'aes2_monolith_camp3',
  aes2_monolith_camp4 = 'aes2_monolith_camp4',
  aes2_monolith_snipers_1 = 'aes2_monolith_snipers_1',
  aes2_monolith_snipers_2 = 'aes2_monolith_snipers_2',
  aes2_monolith_snipers_3 = 'aes2_monolith_snipers_3',
  aes2_monsters1 = 'aes2_monsters1',
  aes2_monsters2 = 'aes2_monsters2',
  //
  // Sarcophagus
  //
  sar_monolith_general = 'sar_monolith_general',
  sar_monolith_sklad = 'sar_monolith_sklad',
  sar_monolith_poltergeists = 'sar_monolith_poltergeists',
  sar_monolith_bloodsuckers = 'sar_monolith_bloodsuckers',
  sar_monolith_guard = 'sar_monolith_guard',
  sar_monolith_zombies = 'sar_monolith_zombies',
  //
  // Generators
  //
  gen_smart_terrain_lab_entrance = 'gen_smart_terrain_lab_entrance',
  gen_smart_terrain_cemetery = 'gen_smart_terrain_cemetery',
  gen_smart_terrain_forest = 'gen_smart_terrain_forest',
  gen_smart_terrain_junk = 'gen_smart_terrain_junk',
  gen_smart_terrain_lab_entrance_2 = 'gen_smart_terrain_lab_entrance_2',
  gen_smart_terrain_military = 'gen_smart_terrain_military',
  gen_smart_terrain_urod = 'gen_smart_terrain_urod',
}
