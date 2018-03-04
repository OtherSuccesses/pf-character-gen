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
		}
	}
}