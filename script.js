$(document).ready(()=>{

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
		race: "N/A",
		size: "Medium",
		baseSpeed: "30",
		languages: ["Common"]
	}

	function start(){
		clearLanguages();
		rollScores();
		selectRace();
		calculateScoreModifiers();
		numberLanguages();
		displayScores();
		displayScoreModifiers();
		displayBasicData();
		displayLanguages();
		console.log(player);
	}

	function clearLanguages(){
		$("#languages").text("");
	}

//Score reduction
	function sumScores(total, add){
		return (total + add);
	}

//Puts score array into the player object
	function setScores(scoresArr){
		player.scores.strength = scoresArr[0];
		player.scores.dexterity = scoresArr[1];
		player.scores.constitution = scoresArr[2];
		player.scores.intelligence = scoresArr[3];
		player.scores.wisdom = scoresArr[4];
		player.scores.charisma = scoresArr[5];
	}

//Random race generation
	function selectRace(){
		let race = "";
		let selector = Math.floor(Math.random()*100)+1;
		console.log(selector);
		switch (true){
			case (selector < 15):
				race = "Dwarf";
				break;
			case (selector < 30):
				race = "Elf";
				break;
			case (selector < 40):
				race = "Gnome";
				break;
			case (selector < 50):
				race = "Halfling";
				break;
			case (selector < 60):
				race = "Half-Elf";
				break;
			case (selector < 70):
				race = "Half-Orc";
				break;
			default:
				race = "Human";
				break;
		}
		player.race = race;
		racePlayerAdjustments(race);
	}

//Languages Selection
	function numberLanguages(){
		if (player.modifiers.intelligence > 0){
			for(i = 0; i < player.modifiers.intelligence; i++){
				selectPlayerLanguages();
			}
		}
	}

	function selectPlayerLanguages(){
		let tempLanguage = languagesList[Math.floor(Math.random()*languagesList.length)];
		if (player.languages.indexOf(tempLanguage) !== -1){
			selectPlayerLanguages();
		}
		else{
			player.languages.push(tempLanguage);
		}
	}

//Function to select an ability at random
	function randAbility(){
		let die = Math.floor(Math.random()*6);
		switch (die){
			case 0:
				return "strength";
				break;
			case 1:
				return "dexterity";
				break;
			case 2:
				return "constitution";
				break;
			case 3:
				return "intelligence";
				break;
			case 4:
				return "wisdom";
				break;
			default:
				return "charisma";
				break;
		}
	}

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
				player.scores[ability] += 2;
				player.baseSpeed = 30;
				player.size = "Medium";
				player.languages = ["Common", "Elven"];
				break;
			case "Half-Orc":
				ability = randAbility();
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
				player.scores[ability] += 2;
				player.baseSpeed = 30;
				player.size = "Medium";
				player.languages = ["Common"];
			default:
				console.log("Something happened with racial adjustments");
				break;
		}
	}

//rolls the attribute scores 
	function rollScores(){
		scoresArr = [];
		for (let i = 0; i < 6; i++){
			tempValues = [];
			tempTotal = 0;
			for (let j = 0; j < 4; j++){
				roll = 0;
				roll = Math.floor(Math.random()*6)+1;
				tempValues.push(roll);
			}
			tempValues.sort();
			tempValues.splice(0, 1);
			tempTotal = tempValues.reduce(sumScores, 0);
			scoresArr.push(tempTotal);
		}
		console.log("Base scores: " + scoresArr);
		setScores(scoresArr);
	}

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
	}

//End Display Functions---------------------------------------

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

//On click makes all the functions happen
	$("#scores-roll").on("click",()=>{
		start();
	});
});