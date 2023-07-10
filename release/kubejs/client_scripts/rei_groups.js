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
      `${toMultiTitleCase(type)} Cables`,
      `ae2:${type}_cable`
    );
  });

  event.groupItemsByTag(
    `ae2:rei_groups/memory_cards`,
    `Карты памяти`,
    `ae2:memory_cards`
  );

  event.groupItemsByTag(
    `tconstruct:rei_groups/single_use`,
    `Одноразовые формы`,
    `tconstruct:casts/single_use`
  );

  event.groupItemsByTag(
    `tconstruct:rei_groups/multi_use`,
    `Многоразовые формы`,
    `tconstruct:casts/multi_use`
  );

  event.groupItems(
    `ftbstoneblock:rei_groups/spawn_eggs`,
    `Яйца призыва`,
    /.*spawn_egg/
  );

  event.groupItems("minecraft:rei_groups/buckets", "Ведра с чем-то :)", [
    /.*_bucket/,
    /.*:bucket_of.*/,
  ]);

  event.groupItems(
    "ae2:rei_groups/paint_balls",
    "Шарики с краской",
    /^ae2:.*_paint_ball$/
  );

  event.groupItems(
    "refinedstorage:rei_groups/grid",
    "Цветные терминалы",
    /refinedstorage:(?!.*(wireless|pattern|crafting|fluid|portable)).*_grid/
  );

  event.groupItems(
    "refinedstorage:rei_groups/pattern_grid",
    "Цветные терминалы с кодировщиком шаблонов",
    /refinedstorage:(?!.*(wireless)).*_pattern_grid/
  );

  event.groupItems(
    "refinedstorage:rei_groups/crafting_grid",
    "Цветные терминалы создания",
    /refinedstorage:(?!.*(wireless)).*_crafting_grid/
  );

  event.groupItems(
    "refinedstorage:rei_groups/fluid_grid",
    "Цветные жидкостные терминалы",
    /refinedstorage:(?!.*(wireless)).*_fluid_grid/
  );

  event.groupItems(
    "refinedstorage:rei_groups/crafting_monitor",
    "Цветные мониторы создания",
    /refinedstorage:(?!.*(wireless)).*_crafting_monitor/
  );

  event.groupItems(
    "mcwwindows:rei_groups/windows",
    "Macaw's Windows' Окна",
    [/mcw.*window$/, /mcw.*window2$/]
  );

  event.groupItems(
    "mcwwindows:rei_groups/parapets",
    "Macaw's Windows' Перила",
    /mcw.*parapet$/
  );

  event.groupItems("mcwdoors:rei_groups/doors", "Macaw's Doors", /mcw.*door$/);

  event.groupItems(
    "mcwbridges:rei_groups/bridges",
    "Macaw's Bridges",
    /mcwbridges.*bridge/
  );

  event.groupItems(
    "mcwtrapdoors:rei_groups/trapdoors",
    "Macaw's Trapdoors",
    /mcw.*trapdoor$/
  );

  event.groupItems("mcwroofs:rei_groups/roofs", "Macaw's Roofs", /mcw.*roof$/);

  event.groupItems(
    "mcwfences:rei_groups/fences",
    "Macaw's Fences",
    "@mcwfences"
  );

  event.groupItems(
    "mcwfurniture:rei_groups/wardrobes",
    "Macaw's Furniture's Шкафы",
    /mcw.*wardrobe$/
  );

  event.groupItems(
    "mcwfurniture:rei_groups/bookshelves",
    "Macaw's Furniture's Книжные полки",
    /mcw.*bookshelf$/
  );

  event.groupItems(
    "mcwfurniture:rei_groups/drawers",
    "Macaw's Furniture's Ящики",
    /mcw.*drawer$/
  );

  event.groupItems(
    "mcwfurniture:rei_groups/desks",
    "Macaw's Furniture's Письменные столы",
    /mcw.*desk$/
  );

  event.groupItems(
    "mcwfurniture:rei_groups/tables",
    "Macaw's Furniture's Столы",
    /mcw.*table$/
  );

  event.groupItems(
    "mcwfurniture:rei_groups/chairs",
    "Macaw's Furniture's Стулья",
    /mcw.*chair$/
  );

  event.groupItems(
    "mcwfurniture:rei_groups/counters",
    "Macaw's Furniture's Комоды",
    /mcw.*counter$/
  );

  event.groupItems(
    "mcwfurniture:rei_groups/cupboards",
    "Macaw's Furniture's Шкафы книжные полки",
    /mcw.*cupboard$/
  );

  event.groupItems(
    "industrialforegoing:rei_groups/item_bh",
    "Юниты чёрной дыры",
    /indus.*hole_unit/
  );

  event.groupItems(
    "industrialforegoing:rei_groups/tank_bh",
    "Жидкостные чёрные дыры",
    /indus.*hole_tank/
  );

  event.groupItems(
    "mcwpaths:rei_groups/paths_and_pavings",
    "Macaw's Paths and Pavings",
    "@mcwpaths"
  );

  event.groupItems(
    "functionalstorage:rei_groups/drawers",
    "Functional Storage's Выдвижные ящики",
    "#functionalstorage:drawer"
  );

  let RSmachines = {
    "_controller" : "Контроллеры",
    "_network_receiver" : "Сетевые Приёмники",
    "_network_transmitter" : "Сетевые Приёмники",
    "_relay" : "Реле",
    "_detector" : "Детекторы",
    "_security_manager" : "Менеджеры Безопасности",
    "_wireless_transmitter" : "Беспроводные Передатчики",
    "_disk_manipulator" : "Дисковые манипуляторы",
    "_crafter" : "Сборщики",
    "_crafter_manager" : "Менеджеры создания",
  };
  Object.entries(RSmachines).forEach(([type, name]) => {
    var rsRegex = new RegExp(`refinedstorage:.*${type}$`);
    event.groupItems(
      `refinedstorage:rei_groups/colored${type}`,
      `Цветные ${name}`,
      rsRegex
    );
  });

  let rechiseledBlocks = {
    "acacia_planks" : "Акациевые Доски",
    "andesite" : "Андезит",
    "blackstone" : "Чернит",
    "cobbled" : "Колотый Глубинный Сланец",
    "birch_planks" : "Берёзовые Доски",
    "cobblestone" : "Булыжник",
    "crimson_planks" : "Багровые Доски",
    "dark_oak_planks" : "Доски из Тёмного Дуба",
    "dark_prismarine" : "Тёмный Призмарин",
    "diorite" : "Диорит",
    "dirt" : "Земля",
    "end_stone" : "Эндерняк",
    "glowstone" : "Светокамень",
    "granite" : "Гранит",
    "jungle_planks" : "Доски из Тропического Дерева",
    "mossy_cobblestone" : "Замшелый Булыжник",
    "netherrack" : "Незерит",
    "nether_bricks" : "Незеритовые кирпичи",
    "oak_planks" : "Дубовые Доски",
    "obsidian" : "Обсидиан",
    "prismarine_bricks" : "Призмариновые кирпичи",
    "purpur" : "Пурпур",
    "quartz_block" : "Кварцевые блоки",
    "red_nether_bricks" : "Красные незеритовые кирпичи",
    "red_sandstone" : "Красный песчаник",
    "sandstone" : "Песчаник",
    "spruce_planks" : "Еловые доски",
    "stone" : "Камень",
    "warped_planks" : "Искажённые доски",
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
    "amethyst_block" : "Аметистовый Блок",
    "ancient_debris" : "Древние Обломки",
    "andesite" : "Андезит",
    "barrel" : "Бочки",
    "basalt" : "Базальт",
    "blackstone" : "Чернит",
    "blue_ice" : "Синий Лёд",
    "bone_block" : "Костяной Блок",
    "bookshelf" : "Книжные Полки",
    "bricks" : "Кирпичи",
    "brown_mushroom_block" : "Блок Коричневого Гриба",
    "calcite" : "Кальцит",
    "carved_pumpkin" : "Вырезанная Тыква",
    "clay" : "Глина",
    "coal_block" : "Угольный Блок",
    "cobblestone" : "Булыжник",
    "crying_obsidian" : "Плачущий Обсидиан",
    "dark_prismarine" : "Тёмный Призмарин",
    "deepslate" : "Глубинный Сланец",
    "diamond_block" : "Алмазный Блок",
    "diorite" : "Диорит",
    "dirt" : "Земля",
    "dried_kelp_block" : "Блок Сушёной Ламинарии",
    "dripstone_block" : "Натёчный Камень",
    "emerald_block" : "Изумрудный Блок",
    "end_stone" : "Эндерняк",
    "gilded_blackstone" : "Золочёный Чернит",
    "glowstone" : "Светокамень",
    "gold_block" : "Золотой Блок",
    "granite" : "Гранит",
    "gravel" : "Гравий",
    "hay_block" : "Сноп Сен",
    "ice" : "Лёд",
    "iron_bars" : "Железные Прутья",
    "iron_block" : "Железный Блок",
    "jack_o_lantern" : "Светильник Джек",
    "ladder" : "Лестница",
    "lapis_block" : "Лазуритовый Блок",
    "lodestone" : "Магнетит",
    "magma_block" : "Магма",
    "melon" : "Арбуз",
    "moss_block" : "Блок Мха",
    "mossy_cobblestone" : "Замшелый Булыжник",
    "mushroom_stem" : "Ножка Гриба",
    "nether_bricks" : "Незеритовые Кирпичи",
    "nether_wart_block" : "Блок Нароста из Незера",
    "netherrack" : "Незерит",
    "obsidian" : "Обсидиан",
    "packed_ice" : "Плотный Лёд",
    "prismarine" : "Призмарин",
    "pumpkin" : "Тыква",
    "purpur_block" : "Пурпур",
    "quartz_block" : "Кварцевый Блок",
    "raw_copper_block" : "Блок Рудной Меди",
    "raw_gold_block" : "Блок Рудного Золота",
    "raw_iron_block" : "Блок Рудного Железа",
    "red_mushroom_block" : "Блок Красного Гриба",
    "red_nether_bricks" : "Красные Незеритовые Кирпичи",
    "red_sandstone" : "Красный Песчаник",
    "redstone_block" : "Редстоуновый Блок",
    "redstone_lamp" : "Редстоуновый Фонарь",
    "sand" : "Песок",
    "sandstone" : "Песчаник",
    "sea_lantern" : "Морской Фонарь",
    "shroomlight" : "Грибосвет",
    "smooth_stone" : "Гладкий Камень",
    "snow_block" : "Блок Снега",
    "soul_sand" : "Песок Душ",
    "sponge" : "Губка",
    "stone" : "Камень",
    "tuff" : "Туф",
    "warped_wart_block" : "Блок Искажённого Нароста",
    "waxed_copper_block" : "Вощёный Медный Блок",
    "waxed_oxidized_copper" : "Вощёный Окисленный Медный Блок",
    "waxed_exposed_copper" : "Вощёный Потемневший Медный Блок",
    "waxed_weathered_copper" : "Вощёный Состаренный Медный Блок",
    "glass" : "Стекло",
    "glass_pane" : "Стеклянная Панель",
    "white_stained_glass" : "Белое Стекло",
    "white_stained_glass_pane" : "Белая Стеклянная Панель",
    "orange_stained_glass" : "Оранжевое Стекло",
    "orange_stained_glass_pane" : "Оранжевая Стеклянная Панель",
    "magenta_stained_glass" : "Пурпурное Стекло",
    "magenta_stained_glass_pane" : "Пурпурная Стеклянная Панель",
    "light_blue_stained_glass" : "Светло-синее Стекло",
    "light_blue_stained_glass_pane" : "Светло-синяя Стеклянная Панель",
    "yellow_stained_glass" : "Жёлтое Стекло",
    "yellow_stained_glass_pane" : "Жёлтая Стеклянная Панель",
    "lime_stained_glass" : "Лаймовое Стекло",
    "lime_stained_glass_pane" : "Лаймовая Стеклянная Панель",
    "pink_stained_glass" : "Розовое Стекло",
    "pink_stained_glass_pane" : "Розовая Стеклянная Панель",
    "gray_stained_glass" : "Серое Стекло",
    "gray_stained_glass_pane" : "Серая Стеклянная Панель",
    "light_gray_stained_glass" : "Светло-серое Стекло",
    "light_gray_stained_glass_pane" : "Светло-серая Стеклянная Панель",
    "cyan_stained_glass" : "Голубое Стекло",
    "cyan_stained_glass_pane" : "Голубая Стеклянная Панель",
    "purple_stained_glass" : "Фиолетовое Стекло",
    "purple_stained_glass_pane" : "Фиолетовая Стеклянная Панель",
    "blue_stained_glass" : "Синее Стекло",
    "blue_stained_glass_pane" : "Синяя Стеклянная Панель",
    "brown_stained_glass" : "Коричневое Стекло",
    "brown_stained_glass_pane" : "Коричневая Стеклянная Панель",
    "green_stained_glass" : "Зелёное Стекло",
    "green_stained_glass_pane" : "Зелёная Стеклянная Панель",
    "red_stained_glass" : "Красное Стекло",
    "red_stained_glass_pane" : "Красная Стеклянная Панель",
    "black_stained_glass" : "Чёрное Стекло",
    "black_stained_glass_pane" : "Чёрная Стеклянная Панель",
    "acacia_planks" : "Акациевые Доски",
    "birch_planks" : "Берёзовые Доски",
    "crimson_planks" : "Багровые Доски",
    "dark_oak_planks" : "Доски из Тёмного Дуба",
    "jungle_planks" : "Доспи из Тропического Дерева",
    "oak_planks" : "Дубовые Доски",
    "spruce_planks" : "Еловые Доски",
    "warped_planks" : "Искажённый Доски",
    "acacia_log" : "Акациевое Бревно",
    "birch_log" : "Берёзовое Бревно",
    "crimson_stem" : "Багровый Стебель",
    "dark_oak_log" : "Бревно Тёмного Дуба",
    "jungle_log" : "Бревно Тропического Дерева",
    "oak_log" : "Дубовое Бревно",
    "spruce_log" : "Еловое Бревно",
    "warped_stem" : "Искажённый Стебель",
    "stripped_acacia_log" : "Обтёсанное Бревно Акации",
    "stripped_birch_log" : "Обтёсанное Берёзовое Бревно",
    "stripped_crimson_stem" : "Обтёсанный Багровый Стебель",
    "stripped_dark_oak_log" : "Обтёсанное Бревного Тёмного Дуба",
    "stripped_jungle_log" : "Обтёсанное Бревно Тропического Дерева",
    "stripped_oak_log" : "Обтёсанное Дубовое Бревно",
    "stripped_spruce_log" : "Обтёсанное Еловое Бревно",
    "stripped_warped_stem" : "Обтёсанный Искажённый Стебель",
    "acacia_leaves" : "Листья Акации",
    "birch_leaves" : "Берёзовые Листья",
    "dark_oak_leaves" : "Листья Тёмного Дуба",
    "jungle_leaves" : "Листья Тропического Дерева",
    "oak_leaves" : "Дубовые Листья",
    "spruce_leaves" : "Еловые Листья",
    "white_terracotta" : "Белая Керамика",
    "orange_terracotta" : "Оранжевая Керамика",
    "magenta_terracotta" : "Пурпурная Керамика",
    "light_blue_terracotta" : "Светло-синяя Керамика",
    "yellow_terracotta" : "Жёлтая Керамика",
    "lime_terracotta" : "Лаймовая Керамика",
    "pink_terracotta" : "Розовая Керамика",
    "gray_terracotta" : "Серая Керамика",
    "light_gray_terracotta" : "Светло-серая Керамика",
    "cyan_terracotta" : "Голубая Керамика",
    "purple_terracotta" : "Фиолетовая Керамика",
    "blue_terracotta" : "Синяя Керамика",
    "brown_terracotta" : "Коричневая Керамика",
    "green_terracotta" : "Зелёная Керамика",
    "red_terracotta" : "Красная Керамика",
    "black_terracotta" : "Чёрная Керамика",
    "white_glazed_terracotta" : "Белая Глазурованная Керамика",
    "orange_glazed_terracotta" : "Оранжевая Глазурованная Керамика",
    "magenta_glazed_terracotta" : "Пурпурная Глазурованная Керамика",
    "light_blue_glazed_terracotta" : "Светло-синяя Глазурованная Керамика",
    "yellow_glazed_terracotta" : "Жёлтая Глазурованная Керамика",
    "lime_glazed_terracotta" : "Лаймовая Глазурованная Керамика",
    "pink_glazed_terracotta" : "Розовая Глазурованная Керамика",
    "gray_glazed_terracotta" : "Серая Глазурованная Керамика",
    "light_gray_glazed_terracotta" : "Светло-серая Глазурованная Керамика",
    "cyan_glazed_terracotta" : "Голубая Глазурованная Керамика",
    "purple_glazed_terracotta" : "Фиолетовая Глазурованная Керамика",
    "blue_glazed_terracotta" : "Синяя Глазурованная Керамика",
    "brown_glazed_terracotta" : "Коричневая Глазурованная Керамика",
    "green_glazed_terracotta" : "Зелёная Глазурованная Керамика",
    "red_glazed_terracotta" : "Красная Глазурованная Керамика",
    "black_glazed_terracotta" : "Чёрная Глазурованная Керамика",
    "white_concrete" : "Белый Бетон",
    "black_concrete" : "Чёрный Бетон",
    "blue_concrete" : "Синий Бетон",
    "brown_concrete" : "Коричневый Бетон",
    "cyan_concrete" : "Голубой Бетон",
    "gray_concrete" : "Серый Бетон",
    "green_concrete" : "Зелёный Бетон",
    "light_blue_concrete" : "Светло-синий Бетон",
    "light_gray_concrete" : "Светло-серый Бетон",
    "lime_concrete" : "Лаймовый Бетон",
    "magenta_concrete" : "Пурпурный Бетон",
    "orange_concrete" : "Оранжевый Бетон",
    "pink_concrete" : "Розовый Бетон",
    "purple_concrete" : "Фиолетовый Бетон",
    "red_concrete"  : "Красный Бетон",
    "yellow_concrete" : "Жёлтый Бетон",
    "white_wool" : "Белая Шерсть",
    "white_carpet" : "Белый Ковёр",
    "orange_wool" : "Оранжевый Шерсть",
    "orange_carpet" : "Оранженый Ковёр",
    "magenta_wool" : "Пурпурная Шерсть",
    "magenta_carpet" : "Пурпурный Ковёр",
    "light_blue_wool" : "Светло-синяя Шерсть",
    "light_blue_carpet" : "Светло-синий Ковёр",
    "yellow_wool" : "Жёлтая Шерсть",
    "yellow_carpet" : "Жёлтый Ковёр",
    "lime_wool" : "Лаймовая Шерсть",
    "lime_carpet" : "Лаймовый Ковёр",
    "pink_wool" : "Розовая Шерсть",
    "pink_carpet" : "Розовый Ковёр",
    "gray_wool" : "Серая Шерсть",
    "gray_carpet" : "Серый Ковёр",
    "light_gray_wool" : "Светло-серая Шерсть",
    "light_gray_carpet" : "Светло-серый Ковёр",
    "cyan_wool" : "Голубая Шерсть",
    "cyan_carpet" : "Голубой Ковёр",
    "purple_wool" : "Фиолетовая Шерсть",
    "purple_carpet" : "Фиолетовый Ковёр",
    "blue_carpet" : "Синий Ковёр",
    "brown_wool" : "Синяя Шерсть",
    "brown_carpet" : "Коричневый Ковёр",
    "green_wool" : "Зелёная Шерсть",
    "green_carpet" : "Зелёный Ковёр",
    "red_wool" : "Красная Шерсть",
    "red_carpet" : "Красный Ковёр",
    "black_wool" : "Чёрная Шерсть",
    "black_carpet" : "Чёрный Ковёр",
    "acacia_door" : "Акациевая Дверь",
    "dark_oak_door" : "Дверь из Тёмного Дуба",
    "birch_door" : "Берёзовая Дверь",
    "jungle_door" : "Дверь из Тропического Дерева",
    "oak_door" : "Дубовая Дверь",
    "spruce_door" : "Еловая Дверь",
    "crimson_door" : "Багровая Дверь",
    "warped_door" : "Искажённая Дверь",
    "acacia_trapdoor" : "Акациевый Люк",
    "dark_oak_trapdoor" : "Люк из Тёмного Дуба",
    "birch_trapdoor" : "Берёзовый Люк",
    "jungle_trapdoor" : "Люк из Тропического Дерева",
    "oak_trapdoor" : "Дубовый Люк",
    "spruce_trapdoor" : "Еловый Люк",
    "crimson_trapdoor" : "Багровый Люк",
    "warped_trapdoor" : "Искажённый Люк",
    "brown_mushroom" : "Коричневый Гриб",
    "cobweb" : "Паутина",
    "crimson_fungus" : "Багровый Гриб",
    "pointed_dripstone" : "Капельник",
    "lily_pad" : "Кувшинка",
    "nether_sprouts" : "Незеритовые Ростки",
    "red_mushroom" : "Красный Гриб",
    "vine" : "Лианы",
    "warped_fungus" : "Искажённый Гриб",
    "torch" : "Факел",
    "lantern" : "Фонарь",
    "soul_lantern" : "Фонарь Душ",
    "special_lantern" : "Особенный Фонарь",
    "special_soul_lantern" : "Особенный Фонарь Душ",
    "mossy_stone_bricks" : "Замшелые Каменные Кирпичи",
    "netherite_block" : "Незеритовый Блок",
    "blue_wool" : "Синяя Шерсть",
    "crimson_roots" : "Багровые Корни",
    "warped_roots" : "Искажённые Корни",
    "redstone_torch" : "Редстоун Факел",
    "terracotta" : "Керамика"
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
    "Жидкости",
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
    "Газ!",
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
    "Жижы!",
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
    "Пигменты!",
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
    "Взвеси!",
    "mekanism:jei_plugin_jei_compat_slurrystack",
    mekslurry
  );

  event.groupEntries(
    `tconstruct:rei_groups/tcon_modifier`,
    "Tinkers Construct Модификаторы",
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
