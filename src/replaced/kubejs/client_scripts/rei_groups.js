onEvent("rei.group", (event) => {
  const useNbt = [
    "tconstruct:crafting_station",
    "tconstruct:tinker_station",
    "tconstruct:part_builder",
    "tconstruct:tinkers_anvil",
    "tconstruct:scorched_anvil",
    "tconstruct:potion_bucket",
    "tconstruct:repair_kit",
    "tconstruct:pick_head",
    "tconstruct:hammer_head",
    "tconstruct:small_axe_head",
    "tconstruct:broad_axe_head",
    "tconstruct:small_blade",
    "tconstruct:broad_blade",
    "tconstruct:round_plate",
    "tconstruct:large_plate",
    "tconstruct:tool_binding",
    "tconstruct:tool_handle",
    "tconstruct:tough_handle",
    "tconstruct:pickaxe",
    "tconstruct:sledge_hammer",
    "tconstruct:vein_hammer",
    "tconstruct:mattock",
    "tconstruct:pickadze",
    "tconstruct:excavator",
    "tconstruct:hand_axe",
    "tconstruct:broad_axe",
    "tconstruct:kama",
    "tconstruct:scythe",
    "tconstruct:dagger",
    "tconstruct:sword",
    "tconstruct:cleaver",
    "potion",
    "enchanted_book",
    "splash_potion",
    "tipped_arrow",
    "lingering_potion",
    "bloodmagic:upgradetome",
    "rftoolsutility:syringe",
    "immersiveengineering:shader",
  ];

  useNbt.forEach((id) => {
    const item = Item.of(id);
    const { namespace, path } = Utils.id(item.id);
    event.groupSameItem(
      `${namespace}:rei_groups/${path}`,
      item.getName(),
      item
    );
  });

  let ae2Cables = ["glass", "covered", "smart", "covered_dense", "smart_dense"];
  ae2Cables.forEach((type) => {
    event.groupItemsByTag(
      `ae2:rei_groups/${type}_cables`,
      Component.string(toMultiTitleCase(type)).append(" ").append(Component.translate("sb3.rei_groups.cables.subname")),
      `ae2:${type}_cable`
    );
  });

  event.groupItemsByTag(
    `ae2:rei_groups/memory_cards`,
    Component.translate("sb3.rei_groups.memory_cards.name"),
    `ae2:memory_cards`
  );

  event.groupItemsByTag(
    `tconstruct:rei_groups/single_use`,
    Component.translate("sb3.rei_groups.single_use.name"),
    `tconstruct:casts/single_use`
  );

  event.groupItemsByTag(
    `tconstruct:rei_groups/multi_use`,
    Component.translate("sb3.rei_groups.multi_use.name"),
    `tconstruct:casts/multi_use`
  );

  event.groupItems(
    `ftbstoneblock:rei_groups/spawn_eggs`,
    Component.translate("sb3.rei_groups.spawn_eggs.name"),
    /.*spawn_egg/
  );

  event.groupItems("minecraft:rei_groups/buckets", Component.translate("sb3.rei_groups.buckets.name"), [
    /.*_bucket/,
    /.*:bucket_of.*/,
  ]);

  event.groupItems(
    "ae2:rei_groups/paint_balls",
    Component.translate("sb3.rei_groups.paint_balls.name"),
    /^ae2:.*_paint_ball$/
  );

  event.groupItems(
    "refinedstorage:rei_groups/grid",
    Component.translate("sb3.rei_groups.grid.name"),
    /refinedstorage:(?!.*(wireless|pattern|crafting|fluid|portable)).*_grid/
  );

  event.groupItems(
    "refinedstorage:rei_groups/pattern_grid",
    Component.translate("sb3.rei_groups.pattern_grid.name"),
    /refinedstorage:(?!.*(wireless)).*_pattern_grid/
  );

  event.groupItems(
    "refinedstorage:rei_groups/crafting_grid",
    Component.translate("sb3.rei_groups.crafting_grid.name"),
    /refinedstorage:(?!.*(wireless)).*_crafting_grid/
  );

  event.groupItems(
    "refinedstorage:rei_groups/fluid_grid",
    Component.translate("sb3.rei_groups.fluid_grid.name"),
    /refinedstorage:(?!.*(wireless)).*_fluid_grid/
  );

  event.groupItems(
    "refinedstorage:rei_groups/crafting_monitor",
    Component.translate("sb3.rei_groups.crafting_monitor.name"),
    /refinedstorage:(?!.*(wireless)).*_crafting_monitor/
  );

  event.groupItems(
    "mcwwindows:rei_groups/windows",
    Component.translate("sb3.rei_groups.windows.name"),
    [/mcw.*window$/, /mcw.*window2$/]
  );

  event.groupItems(
    "mcwwindows:rei_groups/parapets",
    Component.translate("sb3.rei_groups.parapets.name"),
    /mcw.*parapet$/
  );

  event.groupItems("mcwdoors:rei_groups/doors", Component.translate("sb3.rei_groups.doors.name"), /mcw.*door$/);

  event.groupItems(
    "mcwbridges:rei_groups/bridges",
    Component.translate("sb3.rei_groups.bridges.name"),
    /mcwbridges.*bridge/
  );

  event.groupItems(
    "mcwtrapdoors:rei_groups/trapdoors",
    Component.translate("sb3.rei_groups.trapdoors.name"),
    /mcw.*trapdoor$/
  );

  event.groupItems("mcwroofs:rei_groups/roofs", Component.translate("sb3.rei_groups.roofs.name"), /mcw.*roof$/);

  event.groupItems(
    "mcwfences:rei_groups/fences",
    Component.translate("sb3.rei_groups.fences.name"),
    "@mcwfences"
  );

  event.groupItems(
    "mcwfurniture:rei_groups/wardrobes",
    Component.translate("sb3.rei_groups.wardrobes.name"),
    /mcw.*wardrobe$/
  );

  event.groupItems(
    "mcwfurniture:rei_groups/bookshelves",
    Component.translate("sb3.rei_groups.bookshelves.name"),
    /mcw.*bookshelf$/
  );

  event.groupItems(
    "mcwfurniture:rei_groups/drawers",
    Component.translate("sb3.rei_groups.drawers.name"),
    /mcw.*drawer$/
  );

  event.groupItems(
    "mcwfurniture:rei_groups/desks",
    Component.translate("sb3.rei_groups.desks.name"),
    /mcw.*desk$/
  );

  event.groupItems(
    "mcwfurniture:rei_groups/tables",
    Component.translate("sb3.rei_groups.tables.name"),
    /mcw.*table$/
  );

  event.groupItems(
    "mcwfurniture:rei_groups/chairs",
    Component.translate("sb3.rei_groups.chairs.name"),
    /mcw.*chair$/
  );

  event.groupItems(
    "mcwfurniture:rei_groups/counters",
    Component.translate("sb3.rei_groups.counters.name"),
    /mcw.*counter$/
  );

  event.groupItems(
    "mcwfurniture:rei_groups/cupboards",
    Component.translate("sb3.rei_groups.cupboards.name"),
    /mcw.*cupboard$/
  );

  event.groupItems(
    "industrialforegoing:rei_groups/item_bh",
    Component.translate("sb3.rei_groups.item_bh.name"),
    /indus.*hole_unit/
  );

  event.groupItems(
    "industrialforegoing:rei_groups/tank_bh",
    Component.translate("sb3.rei_groups.tank_bh.name"),
    /indus.*hole_tank/
  );

  event.groupItems(
    "mcwpaths:rei_groups/paths_and_pavings",
    Component.translate("sb3.rei_groups.paths_and_pavings.name"),
    "@mcwpaths"
  );

  event.groupItems(
    "functionalstorage:rei_groups/drawers",
    Component.translate("sb3.rei_groups.drawers.name"),
    "#functionalstorage:drawer"
  );

  let RSmachines = {
    "_controller" : Component.translate("sb3.rei_groups.rsmachines._controller.name").toString(),
    "_network_receiver" : Component.translate("sb3.rei_groups.rsmachines._network_receiver.name").toString(),
    "_network_transmitter" : Component.translate("sb3.rei_groups.rsmachines._network_receiver.name").toString(),
    "_relay" : Component.translate("sb3.rei_groups.rsmachines._relay.name").toString(),
    "_detector" : Component.translate("sb3.rei_groups.rsmachines._detector.name").toString(),
    "_security_manager" : Component.translate("sb3.rei_groups.rsmachines._security_manager.name").toString(),
    "_wireless_transmitter" : Component.translate("sb3.rei_groups.rsmachines._wireless_transmitter.name").toString(),
    "_disk_manipulator" : Component.translate("sb3.rei_groups.rsmachines._disk_manipulator.name").toString(),
    "_crafter" : Component.translate("sb3.rei_groups.rsmachines._crafter.name").toString(),
    "_crafter_manager" : Component.translate("sb3.rei_groups.rsmachines._crafter_manager.name").toString()
  };
  Object.entries(RSmachines).forEach(([type, name]) => {
    var rsRegex = new RegExp(`refinedstorage:.*${type}$`);
    event.groupItems(
      `refinedstorage:rei_groups/colored${type}`,
      Component.translate("sb3.rei_groups.colored.name").append(" ").append(name),
      rsRegex
    );
  });

  let rechiseledBlocks = {
    "acacia_planks" : Component.translate("sb3.rei_groups.rechiseledblocks.acacia_planks.name").toString(),
    "andesite" : Component.translate("sb3.rei_groups.rechiseledblocks.andesite.name").toString(),
    "blackstone" : Component.translate("sb3.rei_groups.rechiseledblocks.blackstone.name").toString(),
    "cobbled" : Component.translate("sb3.rei_groups.rechiseledblocks.cobbled.name").toString(),
    "birch_planks" : Component.translate("sb3.rei_groups.rechiseledblocks.birch_planks.name").toString(),
    "cobblestone" : Component.translate("sb3.rei_groups.rechiseledblocks.cobblestone.name").toString(),
    "crimson_planks" : Component.translate("sb3.rei_groups.rechiseledblocks.crimson_planks.name").toString(),
    "dark_oak_planks" : Component.translate("sb3.rei_groups.rechiseledblocks.dark_oak_planks.name").toString(),
    "dark_prismarine" : Component.translate("sb3.rei_groups.rechiseledblocks.dark_prismarine.name").toString(),
    "diorite" : Component.translate("sb3.rei_groups.rechiseledblocks.diorite.name").toString(),
    "dirt" : Component.translate("sb3.rei_groups.rechiseledblocks.dirt.name").toString(),
    "end_stone" : Component.translate("sb3.rei_groups.rechiseledblocks.end_stone.name").toString(),
    "glowstone" : Component.translate("sb3.rei_groups.rechiseledblocks.glowstone.name").toString(),
    "granite" : Component.translate("sb3.rei_groups.rechiseledblocks.granite.name").toString(),
    "jungle_planks" : Component.translate("sb3.rei_groups.rechiseledblocks.jungle_planks.name").toString(),
    "mossy_cobblestone" : Component.translate("sb3.rei_groups.rechiseledblocks.mossy_cobblestone.name").toString(),
    "netherrack" : Component.translate("sb3.rei_groups.rechiseledblocks.netherrack.name").toString(),
    "nether_bricks" : Component.translate("sb3.rei_groups.rechiseledblocks.nether_bricks.name").toString(),
    "oak_planks" : Component.translate("sb3.rei_groups.rechiseledblocks.oak_planks.name").toString(),
    "obsidian" : Component.translate("sb3.rei_groups.rechiseledblocks.obsidian.name").toString(),
    "prismarine_bricks" : Component.translate("sb3.rei_groups.rechiseledblocks.prismarine_bricks.name").toString(),
    "purpur" : Component.translate("sb3.rei_groups.rechiseledblocks.purpur.name").toString(),
    "quartz_block" : Component.translate("sb3.rei_groups.rechiseledblocks.quartz_block.name").toString(),
    "red_nether_bricks" : Component.translate("sb3.rei_groups.rechiseledblocks.red_nether_bricks.name").toString(),
    "red_sandstone" : Component.translate("sb3.rei_groups.rechiseledblocks.red_sandstone.name").toString(),
    "sandstone" : Component.translate("sb3.rei_groups.rechiseledblocks.sandstone.name").toString(),
    "spruce_planks" : Component.translate("sb3.rei_groups.rechiseledblocks.spruce_planks.name").toString(),
    "stone" : Component.translate("sb3.rei_groups.rechiseledblocks.stone.name").toString(),
    "warped_planks" : Component.translate("sb3.rei_groups.rechiseledblocks.warped_planks.name").toString()
  };
  Object.entries(rechiseledBlocks).forEach(([type, name]) => {
    var rsRegex = new RegExp(`rechiseled:${type}.*`);
    let itemName = toMultiTitleCase(type);
    if (itemName.charAt(itemName.length - 1) == "s") {
      event.groupItems(
        `rechiseled:rei_groups/${type}`,
        `${name}`,
        rsRegex
      );
    } else {
      event.groupItems(
        `rechiseled:rei_groups/${type}`,
        `${name}`,
        rsRegex
      );
    }
  });

  let chippedBlocks = {
    "amethyst_block" : Component.translate("sb3.rei_groups.chippedblocks.amethyst_block.name").toString(),
    "ancient_debris" : Component.translate("sb3.rei_groups.chippedblocks.ancient_debris.name").toString(),
    "andesite" : Component.translate("sb3.rei_groups.rechiseledblocks.andesite.name").toString(),
    "barrel" : Component.translate("sb3.rei_groups.chippedblocks.barrel.name").toString(),
    "basalt" : Component.translate("sb3.rei_groups.chippedblocks.basalt.name").toString(),
    "blackstone" : Component.translate("sb3.rei_groups.rechiseledblocks.blackstone.name").toString(),
    "blue_ice" : Component.translate("sb3.rei_groups.chippedblocks.blue_ice.name").toString(),
    "bone_block" : Component.translate("sb3.rei_groups.chippedblocks.bone_block.name").toString(),
    "bookshelf" : Component.translate("sb3.rei_groups.chippedblocks.bookshelf.name").toString(),
    "bricks" : Component.translate("sb3.rei_groups.chippedblocks.bricks.name").toString(),
    "brown_mushroom_block" : Component.translate("sb3.rei_groups.chippedblocks.brown_mushroom_block.name").toString(),
    "calcite" : Component.translate("sb3.rei_groups.chippedblocks.calcite.name").toString(),
    "carved_pumpkin" : Component.translate("sb3.rei_groups.chippedblocks.carved_pumpkin.name").toString(),
    "clay" : Component.translate("sb3.rei_groups.chippedblocks.clay.name").toString(),
    "coal_block" : Component.translate("sb3.rei_groups.chippedblocks.coal_block.name").toString(),
    "cobblestone" : Component.translate("sb3.rei_groups.rechiseledblocks.cobblestone.name").toString(),
    "crying_obsidian" : Component.translate("sb3.rei_groups.chippedblocks.crying_obsidian.name").toString(),
    "dark_prismarine" : Component.translate("sb3.rei_groups.rechiseledblocks.dark_prismarine.name").toString(),
    "deepslate" : Component.translate("sb3.rei_groups.chippedblocks.deepslate.name").toString(),
    "diamond_block" : Component.translate("sb3.rei_groups.chippedblocks.diamond_block.name").toString(),
    "diorite" : Component.translate("sb3.rei_groups.rechiseledblocks.diorite.name").toString(),
    "dirt" : Component.translate("sb3.rei_groups.rechiseledblocks.dirt.name").toString(),
    "dried_kelp_block" : Component.translate("sb3.rei_groups.chippedblocks.dried_kelp_block.name").toString(),
    "dripstone_block" : Component.translate("sb3.rei_groups.chippedblocks.dripstone_block.name").toString(),
    "emerald_block" : Component.translate("sb3.rei_groups.chippedblocks.emerald_block.name").toString(),
    "end_stone" : Component.translate("sb3.rei_groups.rechiseledblocks.end_stone.name").toString(),
    "gilded_blackstone" : Component.translate("sb3.rei_groups.chippedblocks.gilded_blackstone.name").toString(),
    "glowstone" : Component.translate("sb3.rei_groups.rechiseledblocks.glowstone.name").toString(),
    "gold_block" : Component.translate("sb3.rei_groups.chippedblocks.gold_block.name").toString(),
    "granite" : Component.translate("sb3.rei_groups.rechiseledblocks.granite.name").toString(),
    "gravel" : Component.translate("sb3.rei_groups.chippedblocks.gravel.name").toString(),
    "hay_block" : Component.translate("sb3.rei_groups.chippedblocks.hay_block.name").toString(),
    "ice" : Component.translate("sb3.rei_groups.chippedblocks.ice.name").toString(),
    "iron_bars" : Component.translate("sb3.rei_groups.chippedblocks.iron_bars.name").toString(),
    "iron_block" : Component.translate("sb3.rei_groups.chippedblocks.iron_block.name").toString(),
    "jack_o_lantern" : Component.translate("sb3.rei_groups.chippedblocks.jack_o_lantern.name").toString(),
    "ladder" : Component.translate("sb3.rei_groups.chippedblocks.ladder.name").toString(),
    "lapis_block" : Component.translate("sb3.rei_groups.chippedblocks.lapis_block.name").toString(),
    "lodestone" : Component.translate("sb3.rei_groups.chippedblocks.lodestone.name").toString(),
    "magma_block" : Component.translate("sb3.rei_groups.chippedblocks.magma_block.name").toString(),
    "melon" : Component.translate("sb3.rei_groups.chippedblocks.melon.name").toString(),
    "moss_block" : Component.translate("sb3.rei_groups.chippedblocks.moss_block.name").toString(),
    "mossy_cobblestone" : Component.translate("sb3.rei_groups.rechiseledblocks.mossy_cobblestone.name").toString(),
    "mushroom_stem" : Component.translate("sb3.rei_groups.chippedblocks.mushroom_stem.name").toString(),
    "nether_bricks" : Component.translate("sb3.rei_groups.chippedblocks.nether_bricks.name").toString(),
    "nether_wart_block" : Component.translate("sb3.rei_groups.chippedblocks.nether_wart_block.name").toString(),
    "netherrack" : Component.translate("sb3.rei_groups.rechiseledblocks.netherrack.name").toString(),
    "obsidian" : Component.translate("sb3.rei_groups.rechiseledblocks.obsidian.name").toString(),
    "packed_ice" : Component.translate("sb3.rei_groups.chippedblocks.packed_ice.name").toString(),
    "prismarine" : Component.translate("sb3.rei_groups.chippedblocks.prismarine.name").toString(),
    "pumpkin" : Component.translate("sb3.rei_groups.chippedblocks.pumpkin.name").toString(),
    "purpur_block" : Component.translate("sb3.rei_groups.rechiseledblocks.purpur.name").toString(),
    "quartz_block" : Component.translate("sb3.rei_groups.chippedblocks.quartz_block.name").toString(),
    "raw_copper_block" : Component.translate("sb3.rei_groups.chippedblocks.raw_copper_block.name").toString(),
    "raw_gold_block" : Component.translate("sb3.rei_groups.chippedblocks.raw_gold_block.name").toString(),
    "raw_iron_block" : Component.translate("sb3.rei_groups.chippedblocks.raw_iron_block.name").toString(),
    "red_mushroom_block" : Component.translate("sb3.rei_groups.chippedblocks.red_mushroom_block.name").toString(),
    "red_nether_bricks" : Component.translate("sb3.rei_groups.chippedblocks.red_nether_bricks.name").toString(),
    "red_sandstone" : Component.translate("sb3.rei_groups.chippedblocks.red_sandstone.name").toString(),
    "redstone_block" : Component.translate("sb3.rei_groups.chippedblocks.redstone_block.name").toString(),
    "redstone_lamp" : Component.translate("sb3.rei_groups.chippedblocks.redstone_lamp.name").toString(),
    "sand" : Component.translate("sb3.rei_groups.chippedblocks.sand.name").toString(),
    "sandstone" : Component.translate("sb3.rei_groups.rechiseledblocks.sandstone.name").toString(),
    "sea_lantern" : Component.translate("sb3.rei_groups.chippedblocks.sea_lantern.name").toString(),
    "shroomlight" : Component.translate("sb3.rei_groups.chippedblocks.shroomlight.name").toString(),
    "smooth_stone" : Component.translate("sb3.rei_groups.chippedblocks.smooth_stone.name").toString(),
    "snow_block" : Component.translate("sb3.rei_groups.chippedblocks.snow_block.name").toString(),
    "soul_sand" : Component.translate("sb3.rei_groups.chippedblocks.soul_sand.name").toString(),
    "sponge" : Component.translate("sb3.rei_groups.chippedblocks.sponge.name").toString(),
    "stone" : Component.translate("sb3.rei_groups.rechiseledblocks.stone.name").toString(),
    "tuff" : Component.translate("sb3.rei_groups.chippedblocks.tuff.name").toString(),
    "warped_wart_block" : Component.translate("sb3.rei_groups.chippedblocks.warped_wart_block.name").toString(),
    "waxed_copper_block" : Component.translate("sb3.rei_groups.chippedblocks.waxed_copper_block.name").toString(),
    "waxed_oxidized_copper" : Component.translate("sb3.rei_groups.chippedblocks.waxed_oxidized_copper.name").toString(),
    "waxed_exposed_copper" : Component.translate("sb3.rei_groups.chippedblocks.waxed_exposed_copper.name").toString(),
    "waxed_weathered_copper" : Component.translate("sb3.rei_groups.chippedblocks.waxed_weathered_copper.name").toString(),
    "glass" : Component.translate("sb3.rei_groups.chippedblocks.glass.name").toString(),
    "glass_pane" : Component.translate("sb3.rei_groups.chippedblocks.glass_pane.name").toString(),
    "white_stained_glass" : Component.translate("sb3.rei_groups.chippedblocks.white_stained_glass.name").toString(),
    "white_stained_glass_pane" : Component.translate("sb3.rei_groups.chippedblocks.white_stained_glass_pane.name").toString(),
    "orange_stained_glass" : Component.translate("sb3.rei_groups.chippedblocks.orange_stained_glass.name").toString(),
    "orange_stained_glass_pane" : Component.translate("sb3.rei_groups.chippedblocks.orange_stained_glass_pane.name").toString(),
    "magenta_stained_glass" : Component.translate("sb3.rei_groups.chippedblocks.magenta_stained_glass.name").toString(),
    "magenta_stained_glass_pane" : Component.translate("sb3.rei_groups.chippedblocks.magenta_stained_glass_pane.name").toString(),
    "light_blue_stained_glass" : Component.translate("sb3.rei_groups.chippedblocks.light_blue_stained_glass.name").toString(),
    "light_blue_stained_glass_pane" : Component.translate("sb3.rei_groups.chippedblocks.light_blue_stained_glass_pane.name").toString(),
    "yellow_stained_glass" : Component.translate("sb3.rei_groups.chippedblocks.yellow_stained_glass.name").toString(),
    "yellow_stained_glass_pane" : Component.translate("sb3.rei_groups.chippedblocks.yellow_stained_glass_pane.name").toString(),
    "lime_stained_glass" : Component.translate("sb3.rei_groups.chippedblocks.lime_stained_glass.name").toString(),
    "lime_stained_glass_pane" : Component.translate("sb3.rei_groups.chippedblocks.lime_stained_glass_pane.name").toString(),
    "pink_stained_glass" : Component.translate("sb3.rei_groups.chippedblocks.pink_stained_glass.name").toString(),
    "pink_stained_glass_pane" : Component.translate("sb3.rei_groups.chippedblocks.pink_stained_glass_pane.name").toString(),
    "gray_stained_glass" : Component.translate("sb3.rei_groups.chippedblocks.gray_stained_glass.name").toString(),
    "gray_stained_glass_pane" : Component.translate("sb3.rei_groups.chippedblocks.gray_stained_glass_pane.name").toString(),
    "light_gray_stained_glass" : Component.translate("sb3.rei_groups.chippedblocks.light_gray_stained_glass.name").toString(),
    "light_gray_stained_glass_pane" : Component.translate("sb3.rei_groups.chippedblocks.light_gray_stained_glass_pane.name").toString(),
    "cyan_stained_glass" : Component.translate("sb3.rei_groups.chippedblocks.cyan_stained_glass.name").toString(),
    "cyan_stained_glass_pane" : Component.translate("sb3.rei_groups.chippedblocks.cyan_stained_glass_pane.name").toString(),
    "purple_stained_glass" : Component.translate("sb3.rei_groups.chippedblocks.purple_stained_glass.name").toString(),
    "purple_stained_glass_pane" : Component.translate("sb3.rei_groups.chippedblocks.purple_stained_glass_pane.name").toString(),
    "blue_stained_glass" : Component.translate("sb3.rei_groups.chippedblocks.blue_stained_glass.name").toString(),
    "blue_stained_glass_pane" : Component.translate("sb3.rei_groups.chippedblocks.blue_stained_glass_pane.name").toString(),
    "brown_stained_glass" : Component.translate("sb3.rei_groups.chippedblocks.brown_stained_glass.name").toString(),
    "brown_stained_glass_pane" : Component.translate("sb3.rei_groups.chippedblocks.brown_stained_glass_pane.name").toString(),
    "green_stained_glass" : Component.translate("sb3.rei_groups.chippedblocks.green_stained_glass.name").toString(),
    "green_stained_glass_pane" : Component.translate("sb3.rei_groups.chippedblocks.green_stained_glass_pane.name").toString(),
    "red_stained_glass" : Component.translate("sb3.rei_groups.chippedblocks.red_stained_glass.name").toString(),
    "red_stained_glass_pane" : Component.translate("sb3.rei_groups.chippedblocks.red_stained_glass_pane.name").toString(),
    "black_stained_glass" : Component.translate("sb3.rei_groups.chippedblocks.black_stained_glass.name").toString(),
    "black_stained_glass_pane" : Component.translate("sb3.rei_groups.chippedblocks.black_stained_glass_pane.name").toString(),
    "acacia_planks" : Component.translate("sb3.rei_groups.rechiseledblocks.acacia_planks.name").toString(),
    "birch_planks" : Component.translate("sb3.rei_groups.rechiseledblocks.birch_planks.name").toString(),
    "crimson_planks" : Component.translate("sb3.rei_groups.rechiseledblocks.crimson_planks.name").toString(),
    "dark_oak_planks" : Component.translate("sb3.rei_groups.rechiseledblocks.dark_oak_planks.name").toString(),
    "jungle_planks" : Component.translate("sb3.rei_groups.chippedblocks.jungle_planks.name").toString(),
    "oak_planks" : Component.translate("sb3.rei_groups.rechiseledblocks.oak_planks.name").toString(),
    "spruce_planks" : Component.translate("sb3.rei_groups.chippedblocks.spruce_planks.name").toString(),
    "warped_planks" : Component.translate("sb3.rei_groups.chippedblocks.warped_planks.name").toString(),
    "acacia_log" : Component.translate("sb3.rei_groups.chippedblocks.acacia_log.name").toString(),
    "birch_log" : Component.translate("sb3.rei_groups.chippedblocks.birch_log.name").toString(),
    "crimson_stem" : Component.translate("sb3.rei_groups.chippedblocks.crimson_stem.name").toString(),
    "dark_oak_log" : Component.translate("sb3.rei_groups.chippedblocks.dark_oak_log.name").toString(),
    "jungle_log" : Component.translate("sb3.rei_groups.chippedblocks.jungle_log.name").toString(),
    "oak_log" : Component.translate("sb3.rei_groups.chippedblocks.oak_log.name").toString(),
    "spruce_log" : Component.translate("sb3.rei_groups.chippedblocks.spruce_log.name").toString(),
    "warped_stem" : Component.translate("sb3.rei_groups.chippedblocks.warped_stem.name").toString(),
    "stripped_acacia_log" : Component.translate("sb3.rei_groups.chippedblocks.stripped_acacia_log.name").toString(),
    "stripped_birch_log" : Component.translate("sb3.rei_groups.chippedblocks.stripped_birch_log.name").toString(),
    "stripped_crimson_stem" : Component.translate("sb3.rei_groups.chippedblocks.stripped_crimson_stem.name").toString(),
    "stripped_dark_oak_log" : Component.translate("sb3.rei_groups.chippedblocks.stripped_dark_oak_log.name").toString(),
    "stripped_jungle_log" : Component.translate("sb3.rei_groups.chippedblocks.stripped_jungle_log.name").toString(),
    "stripped_oak_log" : Component.translate("sb3.rei_groups.chippedblocks.stripped_oak_log.name").toString(),
    "stripped_spruce_log" : Component.translate("sb3.rei_groups.chippedblocks.stripped_spruce_log.name").toString(),
    "stripped_warped_stem" : Component.translate("sb3.rei_groups.chippedblocks.stripped_warped_stem.name").toString(),
    "acacia_leaves" : Component.translate("sb3.rei_groups.chippedblocks.acacia_leaves.name").toString(),
    "birch_leaves" : Component.translate("sb3.rei_groups.chippedblocks.birch_leaves.name").toString(),
    "dark_oak_leaves" : Component.translate("sb3.rei_groups.chippedblocks.dark_oak_leaves.name").toString(),
    "jungle_leaves" : Component.translate("sb3.rei_groups.chippedblocks.jungle_leaves.name").toString(),
    "oak_leaves" : Component.translate("sb3.rei_groups.chippedblocks.oak_leaves.name").toString(),
    "spruce_leaves" : Component.translate("sb3.rei_groups.chippedblocks.spruce_leaves.name").toString(),
    "white_terracotta" : Component.translate("sb3.rei_groups.chippedblocks.white_terracotta.name").toString(),
    "orange_terracotta" : Component.translate("sb3.rei_groups.chippedblocks.orange_terracotta.name").toString(),
    "magenta_terracotta" : Component.translate("sb3.rei_groups.chippedblocks.magenta_terracotta.name").toString(),
    "light_blue_terracotta" : Component.translate("sb3.rei_groups.chippedblocks.light_blue_terracotta.name").toString(),
    "yellow_terracotta" : Component.translate("sb3.rei_groups.chippedblocks.yellow_terracotta.name").toString(),
    "lime_terracotta" : Component.translate("sb3.rei_groups.chippedblocks.lime_terracotta.name").toString(),
    "pink_terracotta" : Component.translate("sb3.rei_groups.chippedblocks.pink_terracotta.name").toString(),
    "gray_terracotta" : Component.translate("sb3.rei_groups.chippedblocks.gray_terracotta.name").toString(),
    "light_gray_terracotta" : Component.translate("sb3.rei_groups.chippedblocks.light_gray_terracotta.name").toString(),
    "cyan_terracotta" : Component.translate("sb3.rei_groups.chippedblocks.cyan_terracotta.name").toString(),
    "purple_terracotta" : Component.translate("sb3.rei_groups.chippedblocks.purple_terracotta.name").toString(),
    "blue_terracotta" : Component.translate("sb3.rei_groups.chippedblocks.blue_terracotta.name").toString(),
    "brown_terracotta" : Component.translate("sb3.rei_groups.chippedblocks.brown_terracotta.name").toString(),
    "green_terracotta" : Component.translate("sb3.rei_groups.chippedblocks.green_terracotta.name").toString(),
    "red_terracotta" : Component.translate("sb3.rei_groups.chippedblocks.red_terracotta.name").toString(),
    "black_terracotta" : Component.translate("sb3.rei_groups.chippedblocks.black_terracotta.name").toString(),
    "white_glazed_terracotta" : Component.translate("sb3.rei_groups.chippedblocks.white_glazed_terracotta.name").toString(),
    "orange_glazed_terracotta" : Component.translate("sb3.rei_groups.chippedblocks.orange_glazed_terracotta.name").toString(),
    "magenta_glazed_terracotta" : Component.translate("sb3.rei_groups.chippedblocks.magenta_glazed_terracotta.name").toString(),
    "light_blue_glazed_terracotta" : Component.translate("sb3.rei_groups.chippedblocks.light_blue_glazed_terracotta.name").toString(),
    "yellow_glazed_terracotta" : Component.translate("sb3.rei_groups.chippedblocks.yellow_glazed_terracotta.name").toString(),
    "lime_glazed_terracotta" : Component.translate("sb3.rei_groups.chippedblocks.lime_glazed_terracotta.name").toString(),
    "pink_glazed_terracotta" : Component.translate("sb3.rei_groups.chippedblocks.pink_glazed_terracotta.name").toString(),
    "gray_glazed_terracotta" : Component.translate("sb3.rei_groups.chippedblocks.gray_glazed_terracotta.name").toString(),
    "light_gray_glazed_terracotta" : Component.translate("sb3.rei_groups.chippedblocks.light_gray_glazed_terracotta.name").toString(),
    "cyan_glazed_terracotta" : Component.translate("sb3.rei_groups.chippedblocks.cyan_glazed_terracotta.name").toString(),
    "purple_glazed_terracotta" : Component.translate("sb3.rei_groups.chippedblocks.purple_glazed_terracotta.name").toString(),
    "blue_glazed_terracotta" : Component.translate("sb3.rei_groups.chippedblocks.blue_glazed_terracotta.name").toString(),
    "brown_glazed_terracotta" : Component.translate("sb3.rei_groups.chippedblocks.brown_glazed_terracotta.name").toString(),
    "green_glazed_terracotta" : Component.translate("sb3.rei_groups.chippedblocks.green_glazed_terracotta.name").toString(),
    "red_glazed_terracotta" : Component.translate("sb3.rei_groups.chippedblocks.red_glazed_terracotta.name").toString(),
    "black_glazed_terracotta" : Component.translate("sb3.rei_groups.chippedblocks.black_glazed_terracotta.name").toString(),
    "white_concrete" : Component.translate("sb3.rei_groups.chippedblocks.white_concrete.name").toString(),
    "black_concrete" : Component.translate("sb3.rei_groups.chippedblocks.black_concrete.name").toString(),
    "blue_concrete" : Component.translate("sb3.rei_groups.chippedblocks.blue_concrete.name").toString(),
    "brown_concrete" : Component.translate("sb3.rei_groups.chippedblocks.brown_concrete.name").toString(),
    "cyan_concrete" : Component.translate("sb3.rei_groups.chippedblocks.cyan_concrete.name").toString(),
    "gray_concrete" : Component.translate("sb3.rei_groups.chippedblocks.gray_concrete.name").toString(),
    "green_concrete" : Component.translate("sb3.rei_groups.chippedblocks.green_concrete.name").toString(),
    "light_blue_concrete" : Component.translate("sb3.rei_groups.chippedblocks.light_blue_concrete.name").toString(),
    "light_gray_concrete" : Component.translate("sb3.rei_groups.chippedblocks.light_gray_concrete.name").toString(),
    "lime_concrete" : Component.translate("sb3.rei_groups.chippedblocks.lime_concrete.name").toString(),
    "magenta_concrete" : Component.translate("sb3.rei_groups.chippedblocks.magenta_concrete.name").toString(),
    "orange_concrete" : Component.translate("sb3.rei_groups.chippedblocks.orange_concrete.name").toString(),
    "pink_concrete" : Component.translate("sb3.rei_groups.chippedblocks.pink_concrete.name").toString(),
    "purple_concrete" : Component.translate("sb3.rei_groups.chippedblocks.purple_concrete.name").toString(),
    "red_concrete"  : Component.translate("sb3.rei_groups.chippedblocks.red_concrete.name").toString(),
    "yellow_concrete" : Component.translate("sb3.rei_groups.chippedblocks.yellow_concrete.name").toString(),
    "white_wool" : Component.translate("sb3.rei_groups.chippedblocks.white_wool.name").toString(),
    "white_carpet" : Component.translate("sb3.rei_groups.chippedblocks.white_carpet.name").toString(),
    "orange_wool" : Component.translate("sb3.rei_groups.chippedblocks.orange_wool.name").toString(),
    "orange_carpet" : Component.translate("sb3.rei_groups.chippedblocks.orange_carpet.name").toString(),
    "magenta_wool" : Component.translate("sb3.rei_groups.chippedblocks.magenta_wool.name").toString(),
    "magenta_carpet" : Component.translate("sb3.rei_groups.chippedblocks.magenta_carpet.name").toString(),
    "light_blue_wool" : Component.translate("sb3.rei_groups.chippedblocks.light_blue_wool.name").toString(),
    "light_blue_carpet" : Component.translate("sb3.rei_groups.chippedblocks.light_blue_carpet.name").toString(),
    "yellow_wool" : Component.translate("sb3.rei_groups.chippedblocks.yellow_wool.name").toString(),
    "yellow_carpet" : Component.translate("sb3.rei_groups.chippedblocks.yellow_carpet.name").toString(),
    "lime_wool" : Component.translate("sb3.rei_groups.chippedblocks.lime_wool.name").toString(),
    "lime_carpet" : Component.translate("sb3.rei_groups.chippedblocks.lime_carpet.name").toString(),
    "pink_wool" : Component.translate("sb3.rei_groups.chippedblocks.pink_wool.name").toString(),
    "pink_carpet" : Component.translate("sb3.rei_groups.chippedblocks.pink_carpet.name").toString(),
    "gray_wool" : Component.translate("sb3.rei_groups.chippedblocks.gray_wool.name").toString(),
    "gray_carpet" : Component.translate("sb3.rei_groups.chippedblocks.gray_carpet.name").toString(),
    "light_gray_wool" : Component.translate("sb3.rei_groups.chippedblocks.light_gray_wool.name").toString(),
    "light_gray_carpet" : Component.translate("sb3.rei_groups.chippedblocks.light_gray_carpet.name").toString(),
    "cyan_wool" : Component.translate("sb3.rei_groups.chippedblocks.cyan_wool.name").toString(),
    "cyan_carpet" : Component.translate("sb3.rei_groups.chippedblocks.cyan_carpet.name").toString(),
    "purple_wool" : Component.translate("sb3.rei_groups.chippedblocks.purple_wool.name").toString(),
    "purple_carpet" : Component.translate("sb3.rei_groups.chippedblocks.purple_carpet.name").toString(),
    "blue_carpet" : Component.translate("sb3.rei_groups.chippedblocks.blue_carpet.name").toString(),
    "brown_wool" : Component.translate("sb3.rei_groups.chippedblocks.brown_wool.name").toString(),
    "brown_carpet" : Component.translate("sb3.rei_groups.chippedblocks.brown_carpet.name").toString(),
    "green_wool" : Component.translate("sb3.rei_groups.chippedblocks.green_wool.name").toString(),
    "green_carpet" : Component.translate("sb3.rei_groups.chippedblocks.green_carpet.name").toString(),
    "red_wool" : Component.translate("sb3.rei_groups.chippedblocks.red_wool.name").toString(),
    "red_carpet" : Component.translate("sb3.rei_groups.chippedblocks.red_carpet.name").toString(),
    "black_wool" : Component.translate("sb3.rei_groups.chippedblocks.black_wool.name").toString(),
    "black_carpet" : Component.translate("sb3.rei_groups.chippedblocks.black_carpet.name").toString(),
    "acacia_door" : Component.translate("sb3.rei_groups.chippedblocks.acacia_door.name").toString(),
    "dark_oak_door" : Component.translate("sb3.rei_groups.chippedblocks.dark_oak_door.name").toString(),
    "birch_door" : Component.translate("sb3.rei_groups.chippedblocks.birch_door.name").toString(),
    "jungle_door" : Component.translate("sb3.rei_groups.chippedblocks.jungle_door.name").toString(),
    "oak_door" : Component.translate("sb3.rei_groups.chippedblocks.oak_door.name").toString(),
    "spruce_door" : Component.translate("sb3.rei_groups.chippedblocks.spruce_door.name").toString(),
    "crimson_door" : Component.translate("sb3.rei_groups.chippedblocks.crimson_door.name").toString(),
    "warped_door" : Component.translate("sb3.rei_groups.chippedblocks.warped_door.name").toString(),
    "acacia_trapdoor" : Component.translate("sb3.rei_groups.chippedblocks.acacia_trapdoor.name").toString(),
    "dark_oak_trapdoor" : Component.translate("sb3.rei_groups.chippedblocks.dark_oak_trapdoor.name").toString(),
    "birch_trapdoor" : Component.translate("sb3.rei_groups.chippedblocks.birch_trapdoor.name").toString(),
    "jungle_trapdoor" : Component.translate("sb3.rei_groups.chippedblocks.jungle_trapdoor.name").toString(),
    "oak_trapdoor" : Component.translate("sb3.rei_groups.chippedblocks.oak_trapdoor.name").toString(),
    "spruce_trapdoor" : Component.translate("sb3.rei_groups.chippedblocks.spruce_trapdoor.name").toString(),
    "crimson_trapdoor" : Component.translate("sb3.rei_groups.chippedblocks.crimson_trapdoor.name").toString(),
    "warped_trapdoor" : Component.translate("sb3.rei_groups.chippedblocks.warped_trapdoor.name").toString(),
    "brown_mushroom" : Component.translate("sb3.rei_groups.chippedblocks.brown_mushroom.name").toString(),
    "cobweb" : Component.translate("sb3.rei_groups.chippedblocks.cobweb.name").toString(),
    "crimson_fungus" : Component.translate("sb3.rei_groups.chippedblocks.crimson_fungus.name").toString(),
    "pointed_dripstone" : Component.translate("sb3.rei_groups.chippedblocks.pointed_dripstone.name").toString(),
    "lily_pad" : Component.translate("sb3.rei_groups.chippedblocks.lily_pad.name").toString(),
    "nether_sprouts" : Component.translate("sb3.rei_groups.chippedblocks.nether_sprouts.name").toString(),
    "red_mushroom" : Component.translate("sb3.rei_groups.chippedblocks.red_mushroom.name").toString(),
    "vine" : Component.translate("sb3.rei_groups.chippedblocks.vine.name").toString(),
    "warped_fungus" : Component.translate("sb3.rei_groups.chippedblocks.warped_fungus.name").toString(),
    "torch" : Component.translate("sb3.rei_groups.chippedblocks.torch.name").toString(),
    "lantern" : Component.translate("sb3.rei_groups.chippedblocks.lantern.name").toString(),
    "soul_lantern" : Component.translate("sb3.rei_groups.chippedblocks.soul_lantern.name").toString(),
    "special_lantern" : Component.translate("sb3.rei_groups.chippedblocks.special_lantern.name").toString(),
    "special_soul_lantern" : Component.translate("sb3.rei_groups.chippedblocks.special_soul_lantern.name").toString(),
    "mossy_stone_bricks" : Component.translate("sb3.rei_groups.chippedblocks.mossy_stone_bricks.name").toString(),
    "netherite_block" : Component.translate("sb3.rei_groups.chippedblocks.netherite_block.name").toString(),
    "blue_wool" : Component.translate("sb3.rei_groups.chippedblocks.brown_wool.name").toString(),
    "crimson_roots" : Component.translate("sb3.rei_groups.chippedblocks.crimson_roots.name").toString(),
    "warped_roots" : Component.translate("sb3.rei_groups.chippedblocks.warped_roots.name").toString(),
    "redstone_torch" : Component.translate("sb3.rei_groups.chippedblocks.redstone_torch.name").toString(),
    "terracotta" : Component.translate("sb3.rei_groups.chippedblocks.terracotta.name").toString()
  };

  Object.entries(chippedBlocks).forEach(([type, name]) => {
    var rsRegex = new RegExp(`chipped:${type}(?!.*(blower)).*`);
    event.groupItems(
      `chipped:rei_groups/${type}`,
      `${name}`,
      rsRegex
    );
  });

  let modFluidsToHide = [
    "tconstruct",
    "tcintegrations",
    "thermal",
    "industrialforegoing",
    "minecraft",
    "create",
    "mekanism",
    "immersiveengineering",
    "createaddition",
    "cofh_core",
    "mekanismgenerators",
    "mob_grinding_utils",
    "bloodmagic",
    "experienceobelisk",
  ];

  event.groupFluids(
    "kubejs:rei_groups/fluids",
    Component.translate("sb3.rei_groups.fluids.name"),
    Ku.Fluids.getFluidsByNamespaces(modFluidsToHide).toArray()
  );

  // const $EntryTypeRegistry = java(
  //   "me.shedaniel.rei.api.common.entry.type.EntryTypeRegistry"
  // );
  //
  // console.log($EntryTypeRegistry.getInstance().keySet());

  const mekGas = [
    "mekanism:hydrogen",
    "mekanism:oxygen",
    "mekanism:water_vapor",
    "mekanism:chlorine",
    "mekanism:sulfur_dioxide",
    "mekanism:sulfur_trioxide",
    "mekanism:sulfuric_acid",
    "mekanism:hydrogen_chloride",
    "mekanism:hydrofluoric_acid",
    "mekanism:uranium_oxide",
    "mekanism:uranium_hexafluoride",
    "mekanism:ethene",
    "mekanism:sodium",
    "mekanism:steam",
    "mekanism:superheated_sodium",
    "mekanism:brine",
    "mekanism:lithium",
    "mekanism:osmium",
    "mekanism:fissile_fuel",
    "mekanism:nuclear_waste",
    "mekanism:spent_nuclear_waste",
    "mekanism:plutonium",
    "mekanism:polonium",
    "mekanism:antimatter",
    "mekanismgenerators:deuterium",
    "mekanismgenerators:tritium",
    "mekanismgenerators:fusion_fuel",
  ];
  event.groupEntries(
    `mekanism:rei_groups/gas`,
    Component.translate("sb3.rei_groups.gas.name"),
    "mekanism:jei_plugin_jei_compat_gasstack",
    mekGas
  );

  const mekInfuse = [
    "mekanism:carbon",
    "mekanism:redstone",
    "mekanism:diamond",
    "mekanism:refined_obsidian",
    "mekanism:gold",
    "mekanism:tin",
    "mekanism:fungi",
    "mekanism:bio",
  ];
  event.groupEntries(
    `mekanism:rei_groups/infuse`,
    Component.translate("sb3.rei_groups.infuse.name"),
    "mekanism:jei_plugin_jei_compat_infusionstack",
    mekInfuse
  );

  const mekpigment = [
    "mekanism:black",
    "mekanism:blue",
    "mekanism:green",
    "mekanism:cyan",
    "mekanism:dark_red",
    "mekanism:purple",
    "mekanism:orange",
    "mekanism:light_gray",
    "mekanism:gray",
    "mekanism:light_blue",
    "mekanism:lime",
    "mekanism:aqua",
    "mekanism:red",
    "mekanism:magenta",
    "mekanism:yellow",
    "mekanism:white",
    "mekanism:brown",
    "mekanism:pink",
  ];
  event.groupEntries(
    `mekanism:rei_groups/pigment`,
    Component.translate("sb3.rei_groups.pigment.name"),
    "mekanism:jei_plugin_jei_compat_pigmentstack",
    mekpigment
  );

  const mekslurry = [
    "mekanism:dirty_iron",
    "mekanism:clean_iron",
    "mekanism:dirty_gold",
    "mekanism:clean_gold",
    "mekanism:dirty_osmium",
    "mekanism:clean_osmium",
    "mekanism:dirty_copper",
    "mekanism:clean_copper",
    "mekanism:dirty_tin",
    "mekanism:clean_tin",
    "mekanism:dirty_lead",
    "mekanism:clean_lead",
    "mekanism:dirty_uranium",
    "mekanism:clean_uranium",
  ];
  event.groupEntries(
    `mekanism:rei_groups/slurry`,
    Component.translate("sb3.rei_groups.slurry.name"),
    "mekanism:jei_plugin_jei_compat_slurrystack",
    mekslurry
  );

  event.groupEntries(
    `tconstruct:rei_groups/tcon_modifier`,
    Component.translate("sb3.rei_groups.tcon_modifier.name"),
    "tconstruct:jei_plugin_jei_compat_modifierentry",
    asd
  );
});

function toMultiTitleCase(str) {
  var i,
    frags = str.split("_");
  for (i = 0; i < frags.length; i++) {
    frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
  }
  return frags.join(" ");
}

const asd = [
  "tconstruct:expanded",
  "tconstruct:embellishment",
  "tconstruct:golden",
  "tconstruct:shulking",
  "tconstruct:step_up",
  "tconstruct:wetting",
  "tconstruct:haste_armor",
  "tconstruct:gilded",
  "tconstruct:reach",
  "tconstruct:unbreakable",
  "tconstruct:aqua_affinity",
  "tconstruct:autosmelt",
  "tconstruct:bucketing",
  "tconstruct:dual_wielding",
  "tconstruct:exchanging",
  "tconstruct:glowing",
  "tconstruct:luck",
  "tconstruct:melting",
  "tconstruct:silky",
  "tconstruct:spilling",
  "tconstruct:firestarter",
  "tconstruct:pathing",
  "tconstruct:stripping",
  "tconstruct:tilling",
  "tconstruct:double_jump",
  "tconstruct:bouncy",
  "tconstruct:pockets",
  "tconstruct:protection",
  "tconstruct:shield_strap",
  "tconstruct:slurping",
  "tconstruct:strength",
  "tconstruct:tool_belt",
  "tconstruct:unarmed",
  "tconstruct:wings",
  "tconstruct:zoom",
  "tconstruct:flamewake",
  "tconstruct:frost_walker",
  "tconstruct:path_maker",
  "tconstruct:plowing",
  "tconstruct:snowdrift",
  "tconstruct:blast_protection",
  "tconstruct:magic_protection",
  "tconstruct:projectile_protection",
  "tconstruct:melee_protection",
  "tconstruct:fire_protection",
  "tconstruct:knockback_resistance",
  "tconstruct:revitalizing",
  "tconstruct:dragonborn",
  "tconstruct:turtle_shell",
  "tconstruct:creative_slot",
  "tconstruct:dyed",
  "tconstruct:nearsighted",
  "tconstruct:farsighted",
  "tconstruct:overslime",
  "tconstruct:shiny",
  "tconstruct:worldbound",
  "tconstruct:writable",
  "tconstruct:recapitated",
  "tconstruct:harmonious",
  "tconstruct:resurrected",
  "tconstruct:draconic",
  "tconstruct:red_extra_upgrade",
  "tconstruct:green_extra_upgrade",
  "tconstruct:blue_extra_upgrade",
  "tconstruct:extra_ability",
  "tconstruct:diamond",
  "tconstruct:emerald",
  "tconstruct:experienced",
  "tconstruct:fireprimer",
  "tconstruct:magnetic",
  "tconstruct:netherite",
  "tconstruct:offhanded",
  "tconstruct:overforced",
  "tconstruct:reinforced",
  "tconstruct:soulbound",
  "tconstruct:tank",
  "tconstruct:the_one_probe",
  "tconstruct:blasting",
  "tconstruct:fortune",
  "tconstruct:haste",
  "tconstruct:hydraulic",
  "tconstruct:lightspeed",
  "tconstruct:antiaquatic",
  "tconstruct:bane_of_sssss",
  "tconstruct:cooling",
  "tconstruct:fiery",
  "tconstruct:killager",
  "tconstruct:knockback",
  "tconstruct:looting",
  "tconstruct:padded",
  "tconstruct:piercing",
  "tconstruct:severing",
  "tconstruct:sharpness",
  "tconstruct:smite",
  "tconstruct:sweeping_edge",
  "tconstruct:swiftstrike",
  "tconstruct:armor_power",
  "tconstruct:feather_falling",
  "tconstruct:knockback_armor",
  "tconstruct:leaping",
  "tconstruct:lightspeed_armor",
  "tconstruct:item_frame",
  "tconstruct:pocket_chain",
  "tconstruct:respiration",
  "tconstruct:ricochet",
  "tconstruct:soulspeed",
  "tconstruct:speedy",
  "tconstruct:springy",
  "tconstruct:sticky",
  "tconstruct:thorns",
  "tconstruct:cultivated",
  "tconstruct:dense",
  "tconstruct:ductile",
  "tconstruct:enderporting",
  "tconstruct:enhanced",
  "tconstruct:lightweight",
  "tconstruct:overcast",
  "tconstruct:overgrowth",
  "tconstruct:overlord",
  "tconstruct:overworked",
  "tconstruct:solar_powered",
  "tconstruct:stoneshield",
  "tconstruct:stringy",
  "tconstruct:sturdy",
  "tconstruct:tanned",
  "tconstruct:tasty",
  "tconstruct:airborne",
  "tconstruct:dwarven",
  "tconstruct:jagged",
  "tconstruct:lustrous",
  "tconstruct:momentum",
  "tconstruct:sharpweight",
  "tconstruct:temperate",
  "tconstruct:conducting",
  "tconstruct:crumbling",
  "tconstruct:decay",
  "tconstruct:heavy",
  "tconstruct:insatiable",
  "tconstruct:invariant",
  "tconstruct:lacerating",
  "tconstruct:maintained",
  "tconstruct:maintained_2",
  "tconstruct:necrotic",
  "tconstruct:raging",
  "tconstruct:scorching",
  "tconstruct:searing",
  "tconstruct:stonebound",
  "tconstruct:boon_of_sssss",
  "tconstruct:breathtaking",
  "tconstruct:chrysophilite",
  "tconstruct:enderdodging",
  "tconstruct:firebreath",
  "tconstruct:frosttouch",
  "tconstruct:gold_guard",
  "tconstruct:mithridatism",
  "tconstruct:plague",
  "tconstruct:revenge",
  "tconstruct:self_destructive",
  "tconstruct:strong_bones",
  "tconstruct:wildfire",
  "tconstruct:withered",
  "tconstruct:creeper_disguise",
  "tconstruct:enderman_disguise",
  "tconstruct:skeleton_disguise",
  "tconstruct:stray_disguise",
  "tconstruct:wither_skeleton_disguise",
  "tconstruct:spider_disguise",
  "tconstruct:cave_spider_disguise",
  "tconstruct:zombie_disguise",
  "tconstruct:husk_disguise",
  "tconstruct:drowned_disguise",
  "tconstruct:blaze_disguise",
  "tconstruct:piglin_disguise",
  "tconstruct:piglin_brute_disguise",
  "tconstruct:zombified_piglin_disguise",
  "tconstruct:wood",
  "tconstruct:flint",
  "tconstruct:bone",
  "tconstruct:necrotic_bone",
  "tconstruct:string",
  "tconstruct:leather",
  "tconstruct:vine",
  "tconstruct:iron",
  "tconstruct:copper",
  "tconstruct:seared_stone",
  "tconstruct:bloodbone",
  "tconstruct:scorched_stone",
  "tconstruct:chain",
  "tconstruct:skyslime_vine",
  "tconstruct:slimewood",
  "tconstruct:slimesteel",
  "tconstruct:amethyst_bronze",
  "tconstruct:nahuatl",
  "tconstruct:rose_gold",
  "tconstruct:pig_iron",
  "tconstruct:cobalt",
  "tconstruct:darkthread",
  "tconstruct:queens_slime",
  "tconstruct:hepatizon",
  "tconstruct:manyullyn",
  "tconstruct:blazing_bone",
  "tconstruct:ancient_hide",
  "tconstruct:enderslime_vine",
  "tconstruct:osmium",
  "tconstruct:tungsten",
  "tconstruct:platinum",
  "tconstruct:silver",
  "tconstruct:lead",
  "tconstruct:whitestone",
  "tconstruct:steel",
  "tconstruct:bronze",
  "tconstruct:constantan",
  "tconstruct:invar",
  "tconstruct:necronium",
  "tconstruct:electrum",
  "tconstruct:plated_slimewood",
  "tconstruct:obsidian",
  "tconstruct:debris",
  "tconstruct:netherite",
  "tconstruct:aluminum",
  "tconstruct:nickel",
  "tconstruct:tin",
  "tconstruct:zinc",
  "tconstruct:brass",
  "tconstruct:uranium",
  "tconstruct:gold",
  "tconstruct:gunpowder",
  "tconstruct:rotten_flesh",
  "tconstruct:spider",
  "tconstruct:venom",
  "tconstruct:ender_pearl",
  "tconstruct:earthslime",
  "tconstruct:skyslime",
  "tconstruct:blood",
  "tconstruct:ichor",
  "tconstruct:enderslime",
  "tconstruct:clay",
  "tconstruct:honey",
  "tconstruct:phantom",
  "tconstruct:chorus",
  "tconstruct:rabbi",
  "tconstruct:wood",
  "tconstruct:stone",
  "tconstruct:iron",
  "tconstruct:diamond",
  "tconstruct:netherite",
  "tcintegrations:ars_nouveau",
  "tcintegrations:elemental",
  "tcintegrations:enchanters_shield",
  "tcintegrations:engineers_goggles",
  "tcintegrations:glowup",
  "tcintegrations:great_fairy",
  "tcintegrations:mechanical_arm",
  "tcintegrations:multivision",
  "tcintegrations:terra",
  "tcintegrations:terrestrial",
];
