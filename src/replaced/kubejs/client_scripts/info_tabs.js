onEvent('rei.information', (event) => {
	event.addItem(['ftbstoneblock:stonepebble'], 'Галька', [
		'Сломайте камень рукой, чтобы получить каменную гальку',
	])
	event.addItem('ftbstoneblock:mob_soul', 'Души', [
		'Имеет 20% шанс выпадения из моба.',
	])
	event.addItem('ftbstoneblock:ritual_starter', 'Ритуалы', [
		'Может быть найден в сооружениях Города Энда.',
	])
	event.addItem(
		'ftbstoneblock:cold_silverfish_shard',
		'Холодный Осколок Чешуйницы',
		['Может быть найден в подземельях в каменной зоне.']
	)
	event.addItem(
		'ftbstoneblock:warm_silverfish_shard',
		'Тёплый Осколок Чешуйницы',
		['Может быть найден в подземельях зоны ада.']
	)
	event.addItem(
		'ftbstoneblock:silverfish_heart',
		'Сердце чешуйницы',
		[
			'Выпадает с Матери Чешуйницы',
			' ',
			'Призывается в подземелье босса за Зоной Энда'
		]
	)

	event.addItem(
		'mob_grinding_utils:mob_swab_used',
		'Использованная Ватная Палочка',
		[
			'Используйте Ватную палочку на мобе'
		]
	)

	event.addItem(
		'mob_grinding_utils:golden_egg',
		'Золотое яйцо',
		[
			'Скорми Курице Питательный Корм для Куриц'
		]
	)

	event.addItem(
		'mob_grinding_utils:gm_chicken_feed_cursed',
		'Проклятый ГМО Корм для Куриц',
		[
			'Скормите Курице Проклятый ГМО Корм для Куриц'
		]
	)
	
	event.addItem(
		[
			'ars_nouveau:starbuncle_shards',
			'ars_nouveau:whirlisprig_shards',
			'ars_nouveau:drygmy_shard'
		],
		'Ars Осколки',
		[
			'Хотя обычно они специфичны для биома, они были созданы для появления на равнинах, как и другие животные',
			' ',
			'Смотрите Засаленный Блокнот для получения дополнительной информации'
		]
	)

	event.addItem('bloodmagic:weak_tau',
		'Тау фрукт',
		[
			'Встречается в Простых Подземельях (Смотрите "The Antechamber" в Sanguine Scientem)',
			' ',
			'Может быть найден на ферме',
		]
	)

	event.addItem('bloodmagic:strong_tau',
		'Насыщенный Тау Фрукт',
		[
			'Редко встречается в Простых Подземельях (Смотрите "The Antechamber" в Sanguine Scientem)',
			' ',
			'Если обычный Тау Фрукт растет, пока животное стоит на нём, он превращается в Насыщенный Тау Фрукт',
		]
	)

	event.addItem(["ae2:inscriber", "ae2things:advanced_inscriber"],
		'Вырезатель',
		[
			Text.red("Надписи были отключены и заменены на Последовательный Крафт Create."),
			Text.red("Если у вас уже есть один, он все равно будет работать, но вы больше не сможете ничего создавать."),
		]
	)

	event.addItem(Item.of('chickens:chicken_item', '{ChickenType:{id:"chickens:smart_chicken"}}'),
		'Умные Курицы',
		[
			'Появляется при использовании Книги на обычную Курицу',
			' ',
			'Совсем как обычная Курица, несёт обычные яйца, но имеет характеристики и может использовать Насест и Курятник'
		]
	)
})
