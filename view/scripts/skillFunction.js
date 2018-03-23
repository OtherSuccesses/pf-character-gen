function selectSkills(){
	populateSkills();
	getSkillsFromClass();
}

function populateSkills(){
	skillsList.forEach(skill=>{
		let skillToAdd = Object.assign({}, skill);
		skillToAdd.ranks = 0;
		skillModifier = skillToAdd.ability;
		//console.log ("The skill being added modifier: " + skillModifier);
		skillToAdd.modifier = player.modifiers[skillModifier];
		player.skillRanks.push(skillToAdd);
	});
}

function needPerform() {
	//console.log("Need Perform is getting hit");
	player.skillRanks.forEach(skill =>{
		if (skill.name.includes("Perform") && skill.ranks > 0) {
			return false;
		}
	});
	return true;
}

function getSkillsFromClass(){
	let preferredSkills = player.classes[0].classSkills;
	console.log("Player skill points to destribute: " + player.skillPoints);
	let skillToAdd = "";
	let needsPerform = needPerform();
	//console.log("Needs perform: " + needsPerform);
	//console.log("Does player class == bard? : " + player.classes[0].name);
	if (player.classes[0].name === "Bard" && needsPerform){
		console.log("Adding the perform skill for bard");
		player.skillPoints--;
		player.skillRanks[25].ranks++;
	}
	for (i = 0; i < player.skillPoints; i++){
		let selector = roll(100);
		//console.log("Percentile roll for skill " + selector);
		if (selector <= 75){
			selector = roll(preferredSkills.length);
			console.log("Index for preferred Skill " + selector);
			//console.log("Name of skill, I hope: " + preferredSkills[selector]);
			skillToAdd = preferredSkills[selector];			
		}
		else{
			selector = roll(player.skillRanks.length);
			console.log("index for total skills: " + selector);
			//console.log("Skill to add name: " + player.skillRanks[selector].name);
			skillToAdd = player.skillRanks[selector].name;
		}
		player.skillRanks.forEach(skill=>{
			if (skill.subtypes &&  skill.name === skillToAdd){
				let skillToAdd = "";
				selector = roll(skill.subtypes.length);
				skill.name += " (" + skill.subtypes[selector] + ")";
				skillToAdd = skill.name;
				skill.ranks ++;
			}
			else if (skill.name === skillToAdd){
				skill.ranks ++;
			}
		});
	}
	player.skillPoints = 0;
}


//skillSelectionFunction
//get all preferred skills
//If it's a bard make sure the first skill they take is a perform skill
//--Go to the subtype to select
//Then get the selector for general skill or preferred skill
//use the selector roll again to determine which skill is to be increased

//if the skill selected has subtypes go to the subtype selection
//return the subtype skill as a new object

//with the subtypes slice it into the array of skills

//skill with subtype selection