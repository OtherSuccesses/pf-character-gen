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
	},
	martial:{
		lightMelee:{
			throwingAxe:{
				name: "Throwing Axe",
				cost: {
					denomination: "gp",
					amount: 8
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
					multiple: 3
				},
				range: 10,
				weight: 2
			},
			lightHammer:{
				name: "Light Hammer",
				cost: {
					denomination: "gp",
					amount: 1
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
				range: 20,
				weight: 2
			},
			handAxe:{
				name: "Handaxe",
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
					multiple: 3
				},
				range: 0,
				weight: 3
			},
			kukri:{
				name: "Kukri",
				cost: {
					denomination: "gp",
					amount: 8
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
					type:["S"]
				},
				critical:{
					range: 3,
					multiple: 2
				},
				range: 0,
				weight: 2
			},
			lightPick:{
				name: "Light Pick",
				cost: {
					denomination: "gp",
					amount: 4
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
					multiple: 4
				},
				range: 0,
				weight: 3
			},
			sap:{
				name: "Sap",
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
					type:["B"]
				},
				critical:{
					range: 1,
					multiple: 2
				},
				range: 0,
				weight: 2
			},
			lightShield:{
				name: "Light Shield",
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
			},
			spikedArmor:{
				name: "Spiked Armor",
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
					type:["P"]
				},
				critical:{
					range: 1,
					multiple: 2
				},
				range: 0,
				weight: 0
			},
			spikedLightShield:{
				name: "Spiked Light Shield",
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
				range: 0,
				weight: 0
			},
			starknife:{
				name: "Starknife",
				cost: {
					denomination: "gp",
					amount: 24
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
				range: 20,
				weight: 3
			},
			shortSword:{
				name: "Short Sword",
				cost: {
					denomination: "gp",
					amount: 10
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
					range: 2,
					multiple: 2
				},
				range: 0,
				weight: 2
			}
		},
		melee1H:{
			battleaxe:{
				name: "Battleax",
				cost: {
					denomination: "gp",
					amount: 10
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
					type:["S"]
				},
				critical:{
					range: 1,
					multiple: 3
				},
				range: 0,
				weight: 6
			},
			flail:{
				name: "Flail",
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
					type:["B"]
				},
				critical:{
					range: 1,
					multiple: 2
				},
				range: 0,
				weight: 5
			},
			longsword:{
				name: "Longsword",
				cost: {
					denomination: "gp",
					amount: 15
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
					type:["S"]
				},
				critical:{
					range: 2,
					multiple: 2
				},
				range: 0,
				weight: 4
			},
			heavyPick:{
				name: "Heavy Pick",
				cost: {
					denomination: "gp",
					amount: 8
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
					multiple: 4
				},
				range: 0,
				weight: 6
			},
			rapier:{
				name: "Rapier",
				cost: {
					denomination: "gp",
					amount: 20
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
					range: 3,
					multiple: 1
				},
				range: 0,
				weight: 2
			},
			scimitar:{
				name: "Scimitar",
				cost: {
					denomination: "gp",
					amount: 15
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
					range: 3,
					multiple: 2
				},
				range: 0,
				weight: 4
			},
			heavyShield:{
				name: "Heavy Shield",
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
				range: 0,
				weight: 0
			},
			spikedHeavyShield:{
				name: "Spiked Heavy Shield",
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
					type:["P"]
				},
				critical:{
					range: 1,
					multiple: 2
				},
				range: 0,
				weight: 0
			},
			swordCane:{
				name: "Sword Cane",
				cost: {
					denomination: "gp",
					amount: 45
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
				weight: 4
			},
			trident:{
				name: "Trident",
				cost: {
					denomination: "gp",
					amount: 15
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
				range: 10,
				weight: 4
			},
			warhammer:{
				name: "Warhammer",
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
					multiple: 3
				},
				range: 0,
				weight: 5
			}
		},
		melee2H:{
			bardiche:{
				name: "Bardiche",
				cost: {
					denomination: "gp",
					amount: 13
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
					type:["S"]
				},
				critical:{
					range: 2,
					multiple: 2
				},
				range: 0,
				weight: 14
			},
			becDeCorbin:{
				name: "Bec de Corbin",
				cost: {
					denomination: "gp",
					amount: 15
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
					type:["B", "P"]
				},
				critical:{
					range: 1,
					multiple: 3
				},
				range: 0,
				weight: 12
			},
			bill:{
				name: "Bill",
				cost: {
					denomination: "gp",
					amount: 11
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
					type:["S"]
				},
				critical:{
					range: 1,
					multiple: 3
				},
				range: 0,
				weight: 11
			},
			falchion:{
				name: "Falchion",
				cost: {
					denomination: "gp",
					amount: 75
				},
				dmg:{
					small:{
						amount: 6,
						multiple: 1
					},
					medium:{
						amount: 4,
						multiple: 2
					},
					type:["S"]
				},
				critical:{
					range: 2,
					multiple: 2
				},
				range: 0,
				weight: 8
			},
			heavyFlail:{
				name: "Heavy Flail",
				cost: {
					denomination: "gp",
					amount: 15
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
					type:["B"]
				},
				critical:{
					range: 2,
					multiple: 2
				},
				range: 0,
				weight: 10
			},
			glaive:{
				name: "Glaive",
				cost: {
					denomination: "gp",
					amount: 8
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
					type:["S"]
				},
				critical:{
					range: 1,
					multiple: 3
				},
				range: 0,
				weight: 10
			},
			glaiveGuisarme:{
				name: "Glaive-Guisarme",
				cost: {
					denomination: "gp",
					amount: 12
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
					type:["S"]
				},
				critical:{
					range: 1,
					multiple: 3
				},
				range: 0,
				weight: 10
			},
			greataxe:{
				name: "Greataxe",
				cost: {
					denomination: "gp",
					amount: 20
				},
				dmg:{
					small:{
						amount: 10,
						multiple: 1
					},
					medium:{
						amount: 12,
						multiple: 1
					},
					type:["S"]
				},
				critical:{
					range: 1,
					multiple: 3
				},
				range: 0,
				weight: 12
			},
			greatclub:{
				name: "Greatclub",
				cost: {
					denomination: "gp",
					amount: 5
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
					type:["B"]
				},
				critical:{
					range: 1,
					multiple: 2
				},
				range: 0,
				weight: 8
			},
			greatsword:{
				name: "Greatsword",
				cost: {
					denomination: "gp",
					amount: 50
				},
				dmg:{
					small:{
						amount: 10,
						multiple: 1
					},
					medium:{
						amount: 6,
						multiple: 2
					},
					type:["S"]
				},
				critical:{
					range: 2,
					multiple: 2
				},
				range: 0,
				weight: 8
			},
			guisarme:{
				name: "Guisarme",
				cost: {
					denomination: "gp",
					amount: 9
				},
				dmg:{
					small:{
						amount: 6,
						multiple: 1
					},
					medium:{
						amount: 4,
						multiple: 2
					},
					type:["S"]
				},
				critical:{
					range: 1,
					multiple: 3
				},
				range: 0,
				weight: 12
			},
			halberd:{
				name: "Halberd",
				cost: {
					denomination: "gp",
					amount: 10
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
					type:["P", "S"]
				},
				critical:{
					range: 1,
					multiple: 3
				},
				range: 0,
				weight: 12
			},
			lucerneHammer:{
				name: "Lucerne Hammer",
				cost: {
					denomination: "gp",
					amount: 15
				},
				dmg:{
					small:{
						amount: 10,
						multiple: 1
					},
					medium:{
						amount: 12,
						multiple: 1
					},
					type:["B", "P"]
				},
				critical:{
					range: 1,
					multiple: 2
				},
				range: 0,
				weight: 12
			},
			lance:{
				name: "Lance",
				cost: {
					denomination: "gp",
					amount: 10
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
				weight: 10
			},
			ranseur:{
				name: "Ranseur",
				cost: {
					denomination: "gp",
					amount: 10
				},
				dmg:{
					small:{
						amount: 6,
						multiple: 1
					},
					medium:{
						amount: 4,
						multiple: 2
					},
					type:["P"]
				},
				critical:{
					range: 1,
					multiple: 3
				},
				range: 0,
				weight: 12
			},
			scythe:{
				name: "Scythe",
				cost: {
					denomination: "gp",
					amount: 18
				},
				dmg:{
					small:{
						amount: 6,
						multiple: 1
					},
					medium:{
						amount: 4,
						multiple: 2
					},
					type:["P", "S"]
				},
				critical:{
					range: 1,
					multiple: 4
				},
				range: 0,
				weight: 10
			},
		},
		ranged:{
			chakram:{
				name: "Chakram",
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
					type:["S"]
				},
				critical:{
					range: 1,
					multiple: 2
				},
				range: 30,
				weight: 1,
				ammuntion: "N/A"
			},
			longbow:{
				name: "Longbow",
				cost: {
					denomination: "gp",
					amount: 75
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
				range: 100,
				weight: 3,
				ammuntion: "Arrow"
			},
			compositeLongbow:{
				name: "Composite Longbow",
				cost: {
					denomination: "gp",
					amount: 100
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
				range: 110,
				weight: 1,
				ammuntion: "Arrow"
			},
			pilum:{
				name: "Pilum",
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
				range: 20,
				weight: 4,
				ammuntion: "N/A"
			},
			shortbow:{
				name: "Shortbow",
				cost: {
					denomination: "gp",
					amount: 30
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
					multiple: 3
				},
				range: 60,
				weight: 2,
				ammuntion: "Arrow"
			},
			compositeShortbow:{
				name: "Composite Shortbow",
				cost: {
					denomination: "gp",
					amount: 75
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
					multiple: 3
				},
				range: 70,
				weight: 2,
				ammuntion: "Arrow"
			}
		},
		ammunition:{
			arrow:{

			}
		}
	},
	exotic:{
		lightMelee:{
			swordbreakerDagger:{
				name: "Swordbreaker Dagger",
				cost: {
					denomination: "gp",
					amount: 10
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
					type:["S"]
				},
				critical:{
					range: 1,
					multiple: 2
				},
				range: 0,
				weight: 3
			},
			kama:{
				name: "Kama",
				cost: {
					denomination: "gp",
					amount: 2
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
			nunchaku:{
				name: "Nunchaku",
				cost: {
					denomination: "gp",
					amount: 2
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
				weight: 2
			},
			sai:{
				name: "Sai",
				cost: {
					denomination: "gp",
					amount: 1
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
				range: 0,
				weight: 1
			},
			siangham:{
				name: "Siangham",
				cost: {
					denomination: "gp",
					amount: 3
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
			}
		},
		melee1H:{
			falcata:{
				name: "Falcata",
				cost: {
					denomination: "gp",
					amount: 18
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
					type:["S"]
				},
				critical:{
					range: 2,
					multiple: 3
				},
				range: 0,
				weight: 4
			},
			khopesh:{
				name: "Khopesh",
				cost: {
					denomination: "gp",
					amount: 20
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
					type:["S"]
				},
				critical:{
					range: 2,
					multiple: 2
				},
				range: 0,
				weight: 8
			},
			bastardSword:{
				name: "Bastard Sword",
				cost: {
					denomination: "gp",
					amount: 35
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
					type:["S"]
				},
				critical:{
					range: 2,
					multiple: 2
				},
				range: 0,
				weight: 6
			},
			dwarvenWaraxe:{
				name: "Dwarven Waraxe",
				cost: {
					denomination: "gp",
					amount: 30
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
					type:["S"]
				},
				critical:{
					range: 1,
					multiple: 3
				},
				range: 0,
				weight: 8
			},
			whip:{
				name: "Whip",
				cost: {
					denomination: "gp",
					amount: 1
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
					type:["S"]
				},
				critical:{
					range: 1,
					multiple: 2
				},
				range: 0,
				weight: 2
			}
		},
		melee2H:{
			orcDoubleAxe:{
				name: "Orc Double Axe",
				cost: {
					denomination: "gp",
					amount: 60
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
					type:["S"]
				},
				critical:{
					range: 1,
					multiple: 3
				},
				range: 0,
				weight: 15
			},
			spikedChain:{
				name: "Spiked Chain",
				cost: {
					denomination: "gp",
					amount: 25
				},
				dmg:{
					small:{
						amount: 6,
						multiple: 1
					},
					medium:{
						amount: 4,
						multiple: 2
					},
					type:["P"]
				},
				critical:{
					range: 1,
					multiple: 2
				},
				range: 0,
				weight: 10
			},
			elvenCurvedBlade:{
				name: "Elven Curved Blade",
				cost: {
					denomination: "gp",
					amount: 80
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
					type:["S"]
				},
				critical:{
					range: 3,
					multiple: 2
				},
				range: 0,
				weight: 7
			},
			direFlail:{
				name: "Dire Flail",
				cost: {
					denomination: "gp",
					amount: 90
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
				weight: 10
			},
			gnomeHookedHammer:{
				name: "Gnome Hooked Hammer",
				cost: {
					denomination: "gp",
					amount: 20
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
					multiple: 3
				},
				range: 0,
				weight: 6
			},
			mancatcher:{
				name: "Mancatcher",
				cost: {
					denomination: "gp",
					amount: 15
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
					range: 0,
					multiple: 2
				},
				range: 0,
				weight: 10
			},
			totemSpear:{
				name: "Totem Spear",
				cost: {
					denomination: "gp",
					amount: 25
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
					type:["P", "S"]
				},
				critical:{
					range: 1,
					multiple: 3
				},
				range: 10,
				weight: 9
			},
			twoBladedSword:{
				name: "Two-Bladed Sword",
				cost: {
					denomination: "gp",
					amount: 100
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
					type:["S"]
				},
				critical:{
					range: 2,
					multiple: 2
				},
				range: 0,
				weight: 10
			},
			dwarvenUrgrosh:{
				name: "Dwarven Urgrosh",
				cost: {
					denomination: "gp",
					amount: 50
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
					type:["S", "P"]
				},
				critical:{
					range: 1,
					multiple: 3
				},
				range: 0,
				weight: 12
			}
		},
		ranged:{
			bola:{
				name: "Bola",
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
					type:["B"]
				},
				critical:{
					range: 1,
					multiple: 2
				},
				range: 10,
				weight: 2,
				ammunition: "N/A"
			},
			boomerang:{
				name: "Boomerang",
				cost: {
					denomination: "gp",
					amount: 3
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
				range: 30,
				weight: 3,
				ammunition: "N/A"
			},
			doubleCrossbow:{
				name: "Double Crossbow",
				cost: {
					denomination: "gp",
					amount: 300
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
				weight: 18,
				ammunition: "Bolt"
			},
			handCrossbow:{
				name: "Hand Crossbow",
				cost: {
					denomination: "gp",
					amount: 100
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
					range: 2,
					multiple: 2
				},
				range: 30,
				weight: 2,
				ammunition: "Bolt"
			},
			repeatingHeavyCrossbow:{
				name: "Repeating Heavy Crossbow",
				cost: {
					denomination: "gp",
					amount: 400 
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
				weight: 12,
				ammunition: "Bolt"
			},
			repeatingLightCrossbow:{
				name: "Repeating Light Crossbow",
				cost: {
					denomination: "gp",
					amount: 250
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
				weight: 6,
				ammunition: "Bolt"
			},
			net:{
				name: "Net",
				cost: {
					denomination: "gp",
					amount: 20
				},
				dmg:{
					small:{
						amount: 0,
						multiple: 1
					},
					medium:{
						amount: 0,
						multiple: 1
					},
					type:["B"]
				},
				critical:{
					range: 1,
					multiple: 1
				},
				range: 10,
				weight: 6,
				ammunition: "N/A"
			},
			halflingSlingStaff:{
				name: "Halfling Sling Staff",
				cost: {
					denomination: "gp",
					amount: 20
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
					multiple: 3
				},
				range: 80,
				weight: 3,
				ammunition: "Bullets"
			}
		}
	}
}