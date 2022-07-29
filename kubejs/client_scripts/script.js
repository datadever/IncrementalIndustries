// priority: 0

console.info("Hello, World! (You will see this line every time client resources reload)")

onEvent("jei.hide.items", event => {
	// Hide items in JEI here
	// event.hide("minecraft:cobblestone")
})

onEvent("rei.hide.items", event => {

	hide_list = [
		"create:copper_sheet",
		"create:iron_sheet",
		"create:golden_sheet",
		"#create:crushed_ores",
		"modern_industrialization:forge_hammer",
		"ae2:silicon",
		"ae2:inscriber",
		"ae2:charger",
		"wiredredstone:redstone_assembler"
	]

	hide_list.forEach(element => {
		event.hide(element)
	});
})

// onEvent('rei.remove.categories', event => {
// 	console.log(event.getCategoryIds()) //log a list of all category ids to logs/kubejs/client.txt
	
// 	//event.remove works too, but yeeting is so much more fun 😉
// 	event.yeet('roughlyenoughitems:plugins/information')
//   })

onEvent("rei.information", event => {
	console.log(event)
	console.log(Object.keys(event));

	event.add("ae2:calculation_processor_press", "Meteorites are disabled in this pack", ["Meteorites are disabled in this pack" , "Use the Create Press to craft inscriber presses"])
	event.add("ae2:engineering_processor_press", "Meteorites are disabled in this pack", ["Meteorites are disabled in this pack" , "Use the Create Press to craft inscriber presses"])
	event.add("ae2:logic_processor_press", "Meteorites are disabled in this pack", ["Meteorites are disabled in this pack" , "Use the Create Press to craft inscriber presses"])
	event.add("ae2:silicon_press", "Meteorites are disabled in this pack", ["Meteorites are disabled in this pack" , "Use the Create Press to craft inscriber presses"])

	event.add("create:refined_radiance", "Crafting the chromatic compound", ["Pass a chromatic compound through a beacon light to convert the compound to refined radiance.", "NOTE: The chromatic compound cannot be on a create belt, it must be an entity in the world while passing though the light."])
})
