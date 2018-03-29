$(document).ready(()=>{
	
	function start(){
		clearSkills();
		clearLanguages();
		clearClasses();
		rollScores();
		selectRace();
		calculateScoreModifiers();
		numberLanguages();
		selectFavoredClass();
		selectClass();
		selectAlignment();
		selectGender();
		selectSkills();
		personalityGen();
		displayScores();
		displayScoreModifiers();
		displayBasicData();
		displayLanguages();
		displaySkills();
		displayClass();
		displayHP();
		console.log(player);
	}

	function clearSkills(){
		$("#skills-table").empty();
		player.skillRanks = [];
	}
	function clearLanguages(){
		$("#languages").text("");
	}

	function clearClasses(){
		player.favoredClasses = [];
		player.classes = [];
		player.classLevels = [];
		$("#preferred-classes").text("");
		$("#classes").text("");
	}


//Race generation functions--------------------------------------------------------------
//Random race generation
	function selectRace(){
		let race = "";
		let selector = roll(100)+1;
		console.log(selector);
		switch (true){
			case (selector <= 15):
				race = "Dwarf";
				break;
			case (selector <= 30):
				race = "Elf";
				break;
			case (selector <= 40):
				race = "Gnome";
				break;
			case (selector <= 50):
				race = "Halfling";
				break;
			case (selector <= 60):
				race = "Half-Elf";
				break;
			case (selector <= 70):
				race = "Half-Orc";
				break;
			default:
				race = "Human";
				break;
		}
		player.race = race;
		racePlayerAdjustments(race);
	}

//Adjust the stats from race generation
	function racePlayerAdjustments(race){
		console.log(race);
		switch (race){
			case "Dwarf":
				player.scores.strength += 2;
				player.scores.constitution += 2;
				player.scores.charisma -= 2;
				player.baseSpeed = 20;
				player.size = "Medium";
				player.languages = ["Common", "Dwarven"];
				break;
			case "Elf":
				player.scores.dexterity += 2;
				player.scores.intelligence += 2;
				player.scores.constitution -= 2;
				player.baseSpeed = 30;
				player.size = "Medium";
				player.languages = ["Common", "Elven"];
				break;
			case "Gnome":
				player.scores.constitution += 2;
				player.scores.charisma += 2;
				player.scores.strength -= 2;
				player.baseSpeed = 20;
				player.size = "Small";
				player.languages = ["Common", "Gnome", "Sylvan"];
				break;
			case "Half-Elf":
				ability = randAbility();
				console.log("Half-Elf chose " + ability);
				player.scores[ability] += 2;
				player.baseSpeed = 30;
				player.size = "Medium";
				player.languages = ["Common", "Elven"];
				break;
			case "Half-Orc":
				ability = randAbility();
				console.log("Half-Orc chose " + ability);
				player.scores[ability] += 2;
				player.baseSpeed = 30;
				player.size = "Medium";
				player.languages = ["Common", "Orc"];
				break;
			case "Halfling":
				player.scores.dexterity += 2;
				player.scores.charisma += 2;
				player.scores.strength -= 2;
				player.baseSpeed = 20;
				player.size = "Small";
				player.languages = ["Common", "Halfling"];
				break;
			case "Human":
				ability = randAbility();
				console.log("Human chose " + ability);
				player.scores[ability] += 2;
				player.baseSpeed = 30;
				player.size = "Medium";
				player.languages = ["Common"];
				break;
			default:
				console.log("Something happened with racial adjustments");
				break;
		}
	}

	function setScoreModifiers(scoresArr){
		player.modifiers.strength = scoresArr[0];
		player.modifiers.dexterity = scoresArr[1];
		player.modifiers.constitution = scoresArr[2];
		player.modifiers.intelligence = scoresArr[3];
		player.modifiers.wisdom = scoresArr[4];
		player.modifiers.charisma = scoresArr[5];
	}

	//Converting scores to Appropriate modifiers
	function calculateScoreModifiers(){
		let scores = [];
		let x;
		for(x in player.scores){
			scores.push(player.scores[x]);
		}
		let scoreMods = [];
		let mod = 0;
		for (let i = 0; i < scores.length; i++){
			mod = Math.floor((scores[i]-10)/2);
			scoreMods.push(mod);
		}
		setScoreModifiers(scoreMods);
	}

//End Attribute Generation--------------------------------------------------------

//Alignment Generation------------------------------------------------------------
	
	function selectAlignment(){
		let tempAlignment = "";
		let order = roll(3);
		let morality = roll(6);
		if (order == 0){
			order = "Lawful";
		} 
		else if (order == 1){
			order = "Neutral";
		}
		else{
			order = "Chaotic";
		}
		if (morality <= 2){
			morality = "Good";
		} 
		else if (morality <= 4){
			morality = "Neutral";
		}
		else{
			morality = "Evil";
		}
		if (morality == order){
			tempAlignment = "Neutral";
		}
		else{
			tempAlignment = order + " " + morality;
		}
		player.alignment = tempAlignment;
	}
//End Alignment Generation----------------------------------------------------------

//Gender Generation-----------------------------------------------------------------
	function selectGender(){
		let number = roll(2);
		if (number == 1){
			player.gender = "Male";
		}
		else{
			player.gender = "Female";
		}
	}

//Languages Selection---------------------------------------------------------------
	function numberLanguages(){
		if (player.modifiers.intelligence > 0){
			for(i = 0; i < player.modifiers.intelligence; i++){
				selectPlayerLanguages();
			}
		}
	}

	function selectPlayerLanguages(){
		let tempLanguage = languagesList[roll(languagesList.length)];
		if (player.languages.indexOf(tempLanguage) !== -1){
			selectPlayerLanguages();
		}
		else{
			player.languages.push(tempLanguage);
		}
	}
//End Language Generation--------------------------------------------------

//Display functions-----------------------------------------------------
//Actually puts scores to screen
	function displayScores(){
		let scores = [];
		let x;
		for(x in player.scores){
			scores.push(player.scores[x]);
		}
		$("#str").text(scores[0]);
		$("#dex").text(scores[1]);
		$("#con").text(scores[2]);
		$("#int").text(scores[3]);
		$("#wis").text(scores[4]);
		$("#cha").text(scores[5]);
	}

	function checkSign(score){
		if (score > 0){
			score = "+" + score.toString();
		}
		return score;
	}

	function displayScoreModifiers(){
		let scores = [];
		for(x in player.modifiers){
			scores.push(player.modifiers[x]);
		}
		$("#str-mod").text(checkSign(scores[0]));
		$("#dex-mod").text(checkSign(scores[1]));
		$("#con-mod").text(checkSign(scores[2]));
		$("#int-mod").text(checkSign(scores[3]));
		$("#wis-mod").text(checkSign(scores[4]));
		$("#cha-mod").text(checkSign(scores[5]));
	}

	function displayLanguages(){
		let languageText ="";
		for(x in player.languages){
			languageText = languageText + player.languages[x] + " ";
		}
		console.log(languageText);
		$("#languages").text(languageText);
	}

	function displayBasicData(){
		$("#size").text(player.size);
		$("#race").text(player.race);
		$("#alignment").text(player.alignment);
		$("#gender").text(player.gender);
		$("#age").text(player.age);
	}

	function displayClass(){
		let classText = "";
		for(i = 0; i < player.classes.length; i++){
			classText += player.classes[i].name + ": ";
			classText += player.classes[i].level + " "; 
		}
		let preferredText = "";
		player.favoredClasses.forEach(text=>{
			preferredText += text + " ";
		});
		$("#preferred-classes").text(preferredText);
		$("#classes").text(classText);
	}

	function displaySkills(){
		$("#skills-section").removeClass("hidden");
		$("#skills-section").empty();
		let skillSectionTable = $("<table></table>").attr("id", "skills-table"); 
		$("#skills-section").append(skillSectionTable);
		let skillsToDisplay = skillTable();
		for(i = 0; i < skillsToDisplay.length; i++){
			$("#skills-table").append(skillsToDisplay[i]);
		}
	}

	function skillTable(){
		let htmlToReturn = [];
		let skillTableHeader = $("<tr></tr>").addClass("skill-header");
		let skillName = $("<th></th>").addClass("skill-data-name").text("Skill Name");
		let skillRanks = $("<th></th>").addClass("skill-data-ranks").text("Ranks");
		let skillMod = $("<th></th>").addClass("skill-data-mods").text("Mods");
		let skillTotal = $("<th></th>").text("Total");
		skillTableHeader.append(skillName, skillRanks, skillMod, skillTotal);
		htmlToReturn[0] = skillTableHeader;
		for (i = 0; i < player.skillRanks.length; i++){
			let skillRow= $("<tr></tr>").addClass("skill-row");
			skillRow.attr("id", "skill-" + player.skillRanks[i].id);
			skillName = $("<th></th>").addClass("skill-data-name").text(player.skillRanks[i].name);
			skillRanks = $("<th></th>").addClass("skill-data-ranks").text(player.skillRanks[i].ranks);
			skillMod = $("<th></th>").addClass("skill-data-mods").text(player.skillRanks[i].modifier);
			skillTotal = $("<th></th>").text(player.skillRanks[i].ranks + player.skillRanks[i].modifier);
			skillRow.append(skillName, skillRanks, skillMod, skillTotal);
			htmlToReturn.push(skillRow);
		}
		return htmlToReturn
	}

	// function skillTableRow(id){
	// 	let htmlToReturn = "";
	// 	let ability = player.skillRanks[id].ability;
	// 	let name = player.skillRanks[id].name;
	// 	htmlToReturn = "<tr><th>" + player.skillRanks[id].name +" </th><th>" + player.skillRanks[id].ranks +
	// 	"</th><th>" + player.modifiers.[ability] + "</th><th> = " + (player.skillRanks[id].ranks +
	// 		player.modifiers.[name].ability);

	// }

	function displayHP(){
		$("#max-hp").text(player.maxHitPoints);
	}

//End Display Functions---------------------------------------

//On click makes all the functions happen
	$("#scores-roll").on("click",()=>{
		start();
	});
});