// onEvent('item.tooltip', (tooltip) => {
// 	tooltip.add('ftbstoneblock:machines', [
// 		'lmao yeah right',
// 		"there's like a million machines",
// 		"ain't no way we're tagging them all",
// 	])
// })

onEvent("item.tooltip", (tooltip) => {
  tooltip.add(
    ["ae2:inscriber", "ae2things:advanced_inscriber"],
    [
      Component.translate("sb3.tooltips.inscriber.description1").red(),
      Text.red(
        Component.translate("sb3.tooltips.inscriber.description2")
      ),
    ]
  );
});
