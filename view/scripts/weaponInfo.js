let weaponList = {
	simple: {
		unarmed:{
			gauntlet:{
				name: "Gauntlet",
				cost: {
					denomination: "gp",
					amount: 2
				},
				dmg:{
					small:{
						amount: 2,
						multiple: 1
					},
					medium:{
						amount: 3,
						multiple: 1
					},
					type:["B"]
				},
				critical:{
					range: 1,
					multiple: 2
				},
				range: 0,
				weight: 1
			},
			unarmed:{
				name: "Unarmed",
				cost: {
					denomination: "gp",
					amount: 0
				},
				dmg:{
					small:{
						amount: 2,
						multiple: 1
					},
					medium:{
						amount: 3,
						multiple: 1
					},
					type:["B"]
				},
				critical:{
					range: 1,
					multiple: 2
				},
				range: 0,
				weight: 0
			}
		},
		lightMelee:{
			battleAspergillum:{
				name: "Battle Aspergillum",
				cost: {
					denomination: "gp",
					amount: 5
				},
				dmg:{
					small:{
						amount: 4,
						multiple: 1
					},
					medium:{
						amount: 6,
						multiple: 1
					},
					type:["B"]
				},
				critical:{
					range: 1,
					multiple: 2
				},
				range: 0,
				weight: 4
			},
			brassKnuckles:{
				name: "Brass Knuckles",
				cost: {
					denomination: "gp",
					amount: 2
				},
				dmg:{
					small:{
						amount: 2,
						multiple: 1
					},
					medium:{
						amount: 3,
						multiple: 1
					},
					type:["B"]
				},
				critical:{
					range: 1,
					multiple: 2
				},
				range: 0,
				weight: 1
			},
			cestus:{
				name: "Cestus",
				cost: {
					denomination: "gp",
					amount: 5
				},
				dmg:{
					small:{
						amount: 3,
						multiple: 1
					},
					medium:{
						amount: 4,
						multiple: 1
					},
					type:["B", "P"]
				},
				critical:{
					range: 2,
					multiple: 2
				},
				range: 0,
				weight: 1
			},
			dagger:{
				name: "Dagger",
				cost: {
					denomination: "gp",
					amount: 2
				},
				dmg:{
					small:{
						amount: 3,
						multiple: 1
					},
					medium:{
						amount: 4,
						multiple: 1
					},
					type:["P", "S"]
				},
				critical:{
					range: 2,
					multiple: 2
				},
				range: 10,
				weight: 1
			},
			punchingDagger:{
				name: "Punching Dagger",
				cost: {
					denomination: "gp",
					amount: 2
				},
				dmg:{
					small:{
						amount: 3,
						multiple: 1
					},
					medium:{
						amount: 4,
						multiple: 1
					},
					type:["P"]
				},
				critical:{
					range: 1,
					multiple: 3
				},
				range: 0,
				weight: 1
			},
			spikedGauntlet:{
				name: "Spiked Gauntlet",
				cost: {
					denomination: "gp",
					amount: 5
				},
				dmg:{
					small:{
						amount: 3,
						multiple: 1
					},
					medium:{
						amount: 4,
						multiple: 1
					},
					type:["P"]
				},
				critical:{
					range: 1,
					multiple: 2
				},
				range: 0,
				weight: 1
			},
			kunai:{
				name: "Kunai",
				cost: {
					denomination: "gp",
					amount: 2
				},
				dmg:{
					small:{
						amount: 3,
						multiple: 1
					},
					medium:{
						amount: 4,
						multiple: 1
					},
					type:["B", "P"]
				},
				critical:{
					range: 1,
					multiple: 2
				},
				range: 10,
				weight: 2
			},
			lightMace:{
				name: "Light Mace",
				cost: {
					denomination: "gp",
					amount: 5
				},
				dmg:{
					small:{
						amount: 4,
						multiple: 1
					},
					medium:{
						amount: 6,
						multiple: 1
					},
					type:["B"]
				},
				critical:{
					range: 1,
					multiple: 2
				},
				range: 0,
				weight: 4
			},
			sickle:{
				name: "Sickle",
				cost: {
					denomination: "gp",
					amount: 6
				},
				dmg:{
					small:{
						amount: 4,
						multiple: 1
					},
					medium:{
						amount: 6,
						multiple: 1
					},
					type:["S"]
				},
				critical:{
					range: 1,
					multiple: 2
				},
				range: 0,
				weight: 2
			},
			woodenStake:{
				name: "Wooden Stake",
				cost: {
					denomination: "gp",
					amount: 0
				},
				dmg:{
					small:{
						amount: 3,
						multiple: 1
					},
					medium:{
						amount: 4,
						multiple: 1
					},
					type:["P"]
				},
				critical:{
					range: 1,
					multiple: 2
				},
				range: 10,
				weight: 1
			}
		},
		melee1H:{
			club:{
				name: "Club",
				cost: {
					denomination: "gp",
					amount: 0
				},
				dmg:{
					small:{
						amount: 4,
						multiple: 1
					},
					medium:{
						amount: 6,
						multiple: 1
					},
					type:["B"]
				},
				critical:{
					range: 1,
					multiple: 2
				},
				range: 10,
				weight: 3
			},
			heavyMace:{
				name: "Heavy Mace",
				cost: {
					denomination: "gp",
					amount: 12
				},
				dmg:{
					small:{
						amount: 6,
						multiple: 1
					},
					medium:{
						amount: 8,
						multiple: 1
					},
					type:["B"]
				},
				critical:{
					range: 1,
					multiple: 2
				},
				range: 0,
				weight: 8
			},
			morningstar:{
				name: "Morningstar",
				cost: {
					denomination: "gp",
					amount: 8
				},
				dmg:{
					small:{
						amount: 6,
						multiple: 1
					},
					medium:{
						amount: 8,
						multiple: 1
					},
					type:["B", "P"]
				},
				critical:{
					range: 1,
					multiple: 2
				},
				range: 0,
				weight: 6
			},
			shortspear:{
				name: "Shortspear",
				cost: {
					denomination: "gp",
					amount: 1
				},
				dmg:{
					small:{
						amount: 4,
						multiple: 1
					},
					medium:{
						amount: 6,
						multiple: 1
					},
					type:["P"]
				},
				critical:{
					range: 1,
					multiple: 2
				},
				range: 20,
				weight: 3
			}
		},
		melee2H:{
			bayonet:{
				name: "Bayonet",
				cost: {
					denomination: "gp",
					amount: 5
				},
				dmg:{
					small:{
						amount: 4,
						multiple: 1
					},
					medium:{
						amount: 6,
						multiple: 1
					},
					type:["P"]
				},
				critical:{
					range: 1,
					multiple: 2
				},
				range: 0,
				weight: 1
			},
			longspear:{
				name: "Longspear",
				cost: {
					denomination: "gp",
					amount: 5
				},
				dmg:{
					small:{
						amount: 6,
						multiple: 1
					},
					medium:{
						amount: 8,
						multiple: 1
					},
					type:["P"]
				},
				critical:{
					range: 1,
					multiple: 3
				},
				range: 0,
				weight: 9
			},
			quarterstaff:{
				name: "Quarterstaff",
				cost: {
					denomination: "gp",
					amount: 0
				},
				dmg:{
					small:{
						amount: 4,
						multiple: 1
					},
					medium:{
						amount: 6,
						multiple: 1
					},
					type:["B"]
				},
				critical:{
					range: 1,
					multiple: 2
				},
				range: 0,
				weight: 4
			},
			spear:{
				name: "Spear",
				cost: {
					denomination: "gp",
					amount: 2
				},
				dmg:{
					small:{
						amount: 6,
						multiple: 1
					},
					medium:{
						amount: 8,
						multiple: 1
					},
					type:["P"]
				},
				critical:{
					range: 1,
					multiple: 3
				},
				range: 20,
				weight: 6
			},
			boarSpear:{
				name: "Boar Spear",
				cost: {
					denomination: "gp",
					amount: 5
				},
				dmg:{
					small:{
						amount: 6,
						multiple: 1
					},
					medium:{
						amount: 8,
						multiple: 1
					},
					type:["P"]
				},
				critical:{
					range: 1,
					multiple: 2
				},
				range: 0,
				weight: 8
			}
		},
		ranged:{
			blowgun:{
				name: "Blowgun",
				cost: {
					denomination: "gp",
					amount: 2
				},
				dmg:{
					small:{
						amount: 1,
						multiple: 1
					},
					medium:{
						amount: 2,
						multiple: 1
					},
					type:["P"]
				},
				critical:{
					range: 1,
					multiple: 2
				},
				range: 20,
				weight: 1,
				ammunition: "Dart"
			},
			heavyCrossbow:{
				name: "Heavy Crossbow",
				cost: {
					denomination: "gp",
					amount: 50
				},
				dmg:{
					small:{
						amount: 8,
						multiple: 1
					},
					medium:{
						amount: 10,
						multiple: 1
					},
					type:["P"]
				},
				critical:{
					range: 2,
					multiple: 2
				},
				range: 120,
				weight: 8,
				ammunition: "Bolt"
			},
			lightCrossbow:{
				name: "Light Crossbow",
				cost: {
					denomination: "gp",
					amount: 35
				},
				dmg:{
					small:{
						amount: 6,
						multiple: 1
					},
					medium:{
						amount: 8,
						multiple: 1
					},
					type:["P"]
				},
				critical:{
					range: 2,
					multiple: 2
				},
				range: 80,
				weight: 4,
				ammunition: "Bolt"
			},
			dart:{
				name: "Dart",
				cost: {
					denomination: "sp",
					amount: 5
				},
				dmg:{
					small:{
						amount: 3,
						multiple: 1
					},
					medium:{
						amount: 4,
						multiple: 1
					},
					type:["P"]
				},
				critical:{
					range: 1,
					multiple: 2
				},
				range: 20,
				weight: 0.5,
				ammunition: "N/A"
			},
			javelin:{
				name: "Javelin",
				cost: {
					denomination: "gp",
					amount: 1
				},
				dmg:{
					small:{
						amount: 4,
						multiple: 1
					},
					medium:{
						amount: 6,
						multiple: 1
					},
					type:["P"]
				},
				critical:{
					range: 1,
					multiple: 2
				},
				range: 30,
				weight: 2,
				ammunition: "N/A"
			},
			sling:{
				name: "Sling",
				cost: {
					denomination: "gp",
					amount: 0
				},
				dmg:{
					small:{
						amount: 3,
						multiple: 1
					},
					medium:{
						amount: 4,
						multiple: 1
					},
					type:["B"]
				},
				critical:{
					range: 1,
					multiple: 2
				},
				range: 50,
				weight: 0,
				ammunition: "Bullets"
			}
		},
		ammunition:{
			bolt: {
				bolt:{
					name: "Crossbow Bolt",
					cost: {
						denomination: "gp",
						amount: 1
					},
					weight: 1,
					quantity: 10
				},
				acidBolt:{
					name: "Acid Bolt",
					cost: {
						denomination: "gp",
						amount: 40
					},
					weight: 0.1,
					quantity: 1
				},
				drowPoisonBolt:{
					name: "Drow Poison Bolt",
					cost: {
						denomination: "gp",
						amount: 100
					},
					weight: 0.1,
					quantity: 1
				},
				fireBolt:{
					name: "Fire Bolt",
					cost: {
						denomination: "gp",
						amount: 50
					},
					weight: 0.1,
					quantity: 1
				}
			},
			bullet:{
				groaningBullets:{
					name: "Groaning Bullets",
					cost: {
						denomination: "gp",
						amount: 2
					},
					weight: 5,
					quantity: 10
				},
				bullet:{
					name: "Bullets",
					cost: {
						denomination: "sp",
						amount: 1
					},
					weight: 5,
					quantity: 10
				},
				smokeBullets:{
					name: "Smoke Bullets",
					cost: {
						denomination: "gp",
						amount: 100
					},
					weight: 5,
					quantity: 10
				}
			},
			dart:{
				dart:{
					name: "Darts",
					cost: {
						denomination: "sp",
						amount: 5
					},
					weight: 1,
					quantity: 10
				}
			}
		}
	}
}