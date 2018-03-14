function selectSkills(){
	populateSkills();
	getSkillsFromClass();
}

function populateSkills(){
	skillsList.forEach(skill=>{
		let skillToAdd = Object.assign({}, skill);
		skillToAdd.ranks = 0;
		skillModifier = skillToAdd.ability;
		console.log ("The skill being added modifier: " + skillModifier);
		skillToAdd.modifier = player.modifiers[skillModifier];
		player.skillRanks.push(skillToAdd);
	});
}

function getSkillsFromClass(){
	let preferredSkills = player.classes[0].classSkills;
	for (i = 0; i < player.skillPoints; i++){
		let skillToAdd = "";
		let selector = roll(100);
		console.log("Percentile roll for skill " + selector);
		if (selector <= 75){
			selector = roll(preferredSkills.length);
			console.log("Index for preferred Skill " + selector);
			console.log("Name of skill, I hope: " + preferredSkills[selector]);
			skillToAdd = preferredSkills[selector];
			
		}
		else{
			selector = roll(player.skillRanks.length);
			console.log("index for total skills: " + selector);
			console.log("Skill to add name: " + player.skillRanks[selector].name);
			skillToAdd = player.skillRanks[selector].name;
		}
		player.skillRanks.forEach(skill=>{
			if (skill.name === skillToAdd){
				skill.ranks ++;
			}
		});
	}
	player.skillPoints = 0;
}