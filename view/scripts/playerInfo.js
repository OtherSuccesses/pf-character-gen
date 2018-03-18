let languagesList = ["Abyssal", "Aklo", "Aquan", "Auran", "Celestial", "Common", "Draconic", "Dwarven", "Elven", "Giant", "Gnome", "Goblin", "Gnoll", "Halfling", "Ignan", "Infernal", "Orc", "Sylvan", "Terran", "Undercommon"]; 

//Player object to hold all the data.
	let player = {
		scores : {
			strength : 0,
			dexterity : 0,
			constitution : 0,
			intelligence : 0,
			wisdom : 0,
			charisma : 0
		},
		modifiers: {
			strength : 0,
			dexterity : 0,
			constitution : 0,
			intelligence : 0,
			wisdom : 0,
			charisma : 0
		},
		totalLevels: 0,
		race: "N/A",
		size: "Medium",
		age: 20,
		baseSpeed: "30",
		languages: ["Common"],
		favoredClasses: [],
		classes:[],
		gender: "",
		alignment: "",
		maxHitPoints: 0,
		currentHitPoints: 0,
		skillRanks: [],
		skillPoints: 0
	}