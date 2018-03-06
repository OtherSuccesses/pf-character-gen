function selectSkills(){
	populateSkills();
}

function populateSkills(){
	skillsList.forEach(skill=>{
		let skillToAdd = Object.assign({}, skill);
		skillToAdd.ranks = 0;
		player.skillRanks.push(skillToAdd);
	});
}