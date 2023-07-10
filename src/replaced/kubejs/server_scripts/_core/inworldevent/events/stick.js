// priority: 800
const stickEvent = {
  name: "ftbstoneblock:stick",
  chance: 0.2,
  names: [
    "Вы когда-нибудь чувствовали себя пластиковым пакетом?",
    "SticKaren - it wants to speak to your manager",
    "Я - палка, ты - палка!",
    "Разветвляйся - хватай палку", // ?
    "Палка истины",
    "Палка лжи",
    "Палочный световой год - бескончность не предел!", // "infinitree"
    "Я НЕ Грут",
    "Палка предназначена для жизни, а не только для факелов",
    "The stickiest of sticky sticks",
    "Понятия не имеешь, как я сюда попала? Я тоже в ТУПИКЕ",
    "I tried to quit Tree School but they said I couldn't leaf",
    "Я лаю, но не кусаюсь",
    "Дерево надвигающейся гибели: Просто добавьте воды",
    "Benestick Cumberbranch",
    "So versatile, you can STICK it anywhere!",
    "Счастливая палка невезения",
    "Священная палка для деревянного гадания - осталось 0 применений",
    "Дерево в процессе обучения",
    "Loneztar's rod of tester beating",
    "Slowpoke101 не хочет меня",
  ],
  execute(event, player, location) {
    player.tell([`Вот и палочка! :hearts:`]);
    let chosenName = this.names[Math.floor(Math.random() * this.names.length)];
    player.give(
      Item.of("minecraft:stick", {
        RepairCost: 0,
        display: { Name: '{"text":"' + chosenName + '"}' },
      })
    );
  },
};
