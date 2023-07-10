onEvent("item.registry", (event) => {
  event
    .create("ftbstoneblock:stonepebble")
    .displayName("Каменная галька")
    .food((food) => {
      food
        .hunger(1)
        .saturation(1)
        .effect("minecraft:hunger", 200, 0, 1)
        .effect("minecraft:slowness", 200, 1, 1)
        .effect("minecraft:resistance", 200, 1, 1)
        .fastToEat();
    });

  event.create("ftbstoneblock:mob_soul").displayName("Душа моба");
  event.create("ftbstoneblock:press_rod_die").displayName("Литейная форма палки");
  event.create("ftbstoneblock:ritual_starter").displayName("Стартер ритуала");
  event.create("ftbstoneblock:cold_silverfish_shard").displayName("Холодный осколок чешуйницы");
  event.create("ftbstoneblock:warm_silverfish_shard").displayName("Тёплый осколок чешуйницы");
  event.create("ftbstoneblock:silverfish_heart").fireResistant(true).glow(true).displayName("Сердце чешуйницы");
  event
    .create("ftbstoneblock:incomplete_watch")
    .texture("projecte:item/rings/time_watch_off");

  event
    .create("ftbstoneblock:incomplete_raw_basic_processor")
    .texture("refinedstorage:item/raw_basic_processor");

  event
    .create("ftbstoneblock:incomplete_raw_improved_processor")
    .texture("refinedstorage:item/raw_improved_processor");

  event
    .create("ftbstoneblock:incomplete_raw_advanced_processor")
    .texture("refinedstorage:item/raw_advanced_processor");

  event
    .create("ftbstoneblock:incomplete_printed_logic_processor")
    .texture("ae2:item/printed_logic_processor");

  event
    .create("ftbstoneblock:incomplete_printed_calculation_processor")
    .texture("ae2:item/printed_calculation_processor");

  event
    .create("ftbstoneblock:incomplete_printed_engineering_processor")
    .texture("ae2:item/printed_engineering_processor");

  event
    .create("ftbstoneblock:millstone_dummy_block")
    .parentModel("create:block/millstone/item");

  event
    .create("avaritia:addon_singularity")
    .displayName("Улучшение: Processing Tier 2 Сингулярность");

  event
    .create("avaritia:balloon_singularity")
    .displayName("Шаровая Сингулярность");

  event
    .create("avaritia:corrupted_ingot_singularity")
    .displayName("Сингулярность Повреждённых Слитков");

  event
    .create("avaritia:enderium_block_singularity")
    .displayName("Сингулярность Блоков Эндерия");

  event
    .create("avaritia:filter_pet_singularity")
    .displayName("Сингулярность Фильтров Мобов (Питомцы)");

  event
    .create("avaritia:infused_enderpearl_singularity")
    .displayName("Сингулярность Наполненных Эндер-жумчугов");

  event
    .create("avaritia:manasteel_ingot_singularity")
    .displayName("Сингулярность Слитков Манастали");

  event
    .create("avaritia:mob_soul_singularity")
    .displayName("Сингулярность Душ Мобов");

  event
    .create("avaritia:nether_star_singularity")
    .displayName("Сингулярность Звёзд Незера");

  event
    .create("avaritia:flux_block_singularity")
    .displayName("Сингулярность Флаксовых Блоков");

  event
    .create("avaritia:crystal_nitro_singularity")
    .displayName("Сингулярность Нитрокристаллов");

  event
    .create("avaritia:overclocker_node_singularity")
    .displayName("Node Overclocker Singularity");

  event
    .create("avaritia:palette_singularity")
    .displayName("Сингулярность Палитр и Кистей");

  event
    .create("avaritia:pellet_polonium_singularity")
    .displayName("Сингулярность Гранул Полония");

  event
    .create("avaritia:pig_iron_ingot_singularity")
    .displayName("Сингулярность Слитков Свинного Железа");

  event
    .create("avaritia:etherealslate_singularity")
    .displayName("Сингулярность Эфирных пластин");

  event
    .create("avaritia:magenta_matter_singularity")
    .displayName("Сингулярность Пурпурной Материи");

  event
    .create("avaritia:source_gem_singularity")
    .displayName("Сингулярность Исходных Самоцветов");

  event
    .create("avaritia:track_singularity")
    .displayName("Сингулярность Железнодорожных путей");

  event
    .create("avaritia:uraninite_singularity")
    .displayName("Уранинитовая сингулярность");

  event.create("avaritia:wall_singularity").displayName("Сингулярность Стен компактного механизма");
  event
    .create("avaritia:emerald_cluster_singularity")
    .displayName("Сингулярность Изумрудных Кластеров");
  event
    .create("avaritia:xp_jelly_baby_singularity")
    .displayName("Сингулярность XP Желейных Малышей");
});

onEvent("block.registry", (event) => {
  event
    .create("ftbstoneblock:dust")
    .tagBlock(`minecraft:mineable/shovel`)
    .material("Sand")
    .displayName("Пыль");
  event
    .create("ftbstoneblock:crushed_netherrack")
    .tagBlock(`minecraft:mineable/shovel`)
    .material("Sand")
    .displayName("Раздробленный Незерак");
  event
    .create("ftbstoneblock:crushed_endstone")
    .tagBlock(`minecraft:mineable/shovel`)
    .material("Sand")
    .displayName("Раздробленный Эндерняк");
  event
    .create("ftbstoneblock:crushed_deepslate")
    .tagBlock(`minecraft:mineable/shovel`)
    .material("Sand")
    .displayName("Раздробленный Глубинный сланец");

  for (let type in global.compressables) {
    let props = global.compressables[type];
    let maxLevel = props.maxLevel || global.maxCompress;
    let tool = props.tool || "pickaxe";
    let ending = props.ending || "ый"
    let x = {
      1: "5.0",
      2: "10.0",
      3: "20.0",
    };
    let y = {
      1: "minecraft:needs_stone_tool",
      2: "minecraft:needs_iron_tool",
      3: "minecraft:needs_diamond_tool",
    };
    for (let i = 1; i <= maxLevel; i++) {
      event
        .create(`ftbstoneblock:${i}x_compressed_${type}`)
        .tagBlock(`minecraft:mineable/${tool}`)
        .tagBlock(y[i])
        .requiresTool(true)
        .material(props.material)
        .hardness(x[i])
        .displayName(`${i}x Сжат${ending} ${props.name}`);
    }
  }
});
