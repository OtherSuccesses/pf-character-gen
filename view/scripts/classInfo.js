let classList = [
	{
		id: 1,
		name: "Barbarian",
		hitDie: 12,
		skillPoints: 4,
		classSkills: ["Acrobatics","Climb","Craft","Handle Animal","Intimidate","Knowledge (Nature)", "Perception", "Ride", "Survival", "Swim"],
		talents: 0,
		level: 1,
		baseAttackBonus: this.level,
		saveFort: 2,
		saveRef: 0,
		saveWill: 0,
		weaponProficiency: {
			simple: ["All"],
			martial: ["All"],
			exotic: ["None"]
		}
	},{
		id: 2,
		name: "Bard",
		hitDie: 8,
		skillPoints: 6,
		classSkills: ["Acrobatics", "Appraise", "Bluff", "Climb", "Craft", "Diplomacy", "Disguise", "Escape Artist", "Intimidate", "Knowledge (Arcana)", "Knowledge (Dungeoneering)", "Knowledge (Engineering)", "Knowledge (Geography)", "Knowledge (History)", "Knowledge (Local)", "Knowledge (Nature)", "Knowledge (Nobility)", "Knowledge (Planes)", "Knowledge (Religion)", "Linguistics", "Perception", "Perform", "Profession", "Sense Motive", "Sleight of Hand", "Spellcraft", "Stealth", "Use Magic Device"],
		talents: 0,
		level: 1
		baseAttackBonus:0,
		saveFort:0,
		saveRef:2,
		saveWill:2,
		weaponProficiency:{
			simple:["All"],
			martial:["Longsword", "Rapier", "Sap", "Short Sword", "Shortbow"],
			exotic:["Whip"]
		}
	},{
		id: 3,
		name: "Cleric",
		hitDie: 8,
		skillPoints: 2,
		classSkills: ["Appraise", "Craft", "Diplomacy", "Heal", "Knowledge (Arcana)", "Knowledge (History)", "Knowledge (Nobility)", "Knowledge (Planes)", "Knowledge (Religion)", "Linguistics", "Profession", "Sense Motive", "Spellcraft"],
		talents: 0,
		level: 1
		baseAttackBonus:0,
		saveFort:2,
		saveRef:0,
		saveWill:2,
		weaponProficiency:{
			simple:["All"],
			martial:["None"],
			exotic:["None"]
		}
	},{
		id: 4,
		name: "Druid",
		hitDie: 8,
		skillPoints: 4,
		classSkills: 0,
		talents: 0,
		level: 1
	},{
		id: 5,
		name: "Fighter",
		hitDie: 10,
		skillPoints: 2,
		classSkills: 0,
		talents: 0,
		level: 1
	},{
		id: 6,
		name: "Monk",
		hitDie: 8,
		skillPoints: 4,
		classSkills: 0,
		talents: 0,
		level: 1
	},{
		id: 7,
		name: "Paladin",
		hitDie: 10,
		skillPoints: 2,
		classSkills: 0,
		talents: 0,
		level: 1
	},{
		id: 8,
		name: "Ranger",
		hitDie: 10,
		skillPoints: 6,
		classSkills: 0,
		talents: 0,
		level: 1
	},{
		id: 9,
		name: "Rogue",
		hitDie: 8,
		skillPoints: 8,
		classSkills: 0,
		talents: 0,
		level: 1
	},{
		id: 10,
		name: "Sorceror",
		hitDie: 6,
		skillPoints: 2,
		classSkills: 0,
		talents: 0,
		level: 1
	},{
		id: 11,
		name: "Wizard",
		hitDie: 6,
		skillPoints: 2,
		classSkills: 0,
		talents: 0,
		level: 1
	}];
