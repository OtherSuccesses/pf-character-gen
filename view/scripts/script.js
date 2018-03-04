$(document).ready(()=>{
	
// 	let languagesList = ["Abyssal", "Aklo", "Aquan", "Auran", "Celestial", "Common", "Draconic", "Dwarven", "Elven", "Giant", "Gnome", "Goblin", "Gnoll", "Halfling", "Ignan", "Infernal", "Orc", "Sylvan", "Terran", "Undercommon"]; 
// 	let classList = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorceror", "Wizard"];

// //Player object to hold all the data.
// 	let player = {
// 		scores : {
// 			strength : 0,
// 			dexterity : 0,
// 			constitution : 0,
// 			intelligence : 0,
// 			wisdom : 0,
// 			charisma : 0
// 		},
// 		modifiers: {
// 			strength : 0,
// 			dexterity : 0,
// 			constitution : 0,
// 			intelligence : 0,
// 			wisdom : 0,
// 			charisma : 0
// 		},
// 		race: "N/A",
// 		size: "Medium",
// 		baseSpeed: "30",
// 		languages: ["Common"],
// 		favoredClasses: [],
// 		classes:[],
// 		gender: "",
// 		alignment: "",
// 		maxHitPoints: 0,
// 		currentHitPoints: 0,
// 		skillRanks: [],
// 		skillPoints: 0
// 	}

	function start(){
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
		displayScores();
		displayScoreModifiers();
		displayBasicData();
		displayLanguages();
		displayClass();
		displayHP();
		console.log(player);
	}

	// function roll(max){
	// 	return Math.floor(Math.random()*max)
	// }

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

	// function hitDieGen(max){
	// 	player.maxHitPoints = roll(max)+1;
	// 	player.maxHitPoints += player.modifiers.constitution;
	// 	if(player.maxHitPoints < 1){
	// 		player.maxHitPoints = 1;
	// 	}
	// }

	// function chooseHpOrSkill(){
	// 	let choice = roll(2);
	// 	if(choice == 1){
	// 		console.log("Chose skill point");
	// 		player.skillPoints++;
	// 	}
	// 	else{
	// 		console.log("Chose hit point");
	// 		player.maxHitPoints++;
	// 	}
	// }

	// function skillPointsGen(base){
	// 	player.skillPoints = base + player.modifiers.intelligence;
	// 	if (player.skillPoints < 1){
	// 		player.skillPoints = 1;
	// 	}
	// 	if (player.race === "Human"){
	// 		player.skillPoints ++;
	// 	}
	// 	chooseHpOrSkill();
	// }

//Class Selection Functions----------------------------------------------------------------
	// function attRangeForClassGeneration(att){
	// 	att = att-10;
	// 	if (att<0){
	// 		att = 0;
	// 	}
	// 	else{
	// 		att=att*att;
	// 	}
	// 	return att;
	// }

	// function getCharacterClass(squaresArray, sumSquares){
	// 	console.log("the squares array: " + squaresArray);
	// 	let barbarian = 0;
	// 	if(player.scores.strength > 11 && player.scores.constitution > 9){
	// 		barbarian = squaresArray[0]+squaresArray[1]+squaresArray[2];
	// 	}
	// 	let bard = 0 + barbarian;
	// 	if (player.scores.charisma > 12 && player.scores.dexterity > 9){
	// 		bard += squaresArray[1]+squaresArray[3]+squaresArray[5]
	// 	}
	// 	let cleric = 0 + bard;
	// 	if (player.scores.wisdom > 11){
	// 		cleric += squaresArray[4]+squaresArray[5]+squaresArray[0];
	// 	}
	// 	let druid = 0 + cleric; 
	// 	if (player.scores.wisdom > 11){
	// 		druid += squaresArray[4]+squaresArray[1]+squaresArray[2];
	// 	}
	// 	let fighter = 0 + druid;
	// 	if (player.scores.strength > 11){
	// 		fighter += squaresArray[0]+squaresArray[1]+squaresArray[2];
	// 	}
	// 	let monk = 0 + fighter;
	// 	if (player.scores.strength > 11 && player.scores.wisdom > 9 && player.scores.dexterity > 11){
	// 		monk += squaresArray[0]+squaresArray[1]+squaresArray[4];
	// 	}
	// 	let paladin = 0+monk;
	// 	if (player.scores.strength > 12 && player.scores.charisma > 12){
	// 		paladin += squaresArray[5]+squaresArray[0]+squaresArray[2];
	// 	}
	// 	let ranger = 0 + paladin;
	// 	if ((player.scores.strength > 11 || player.scores.dexterity > 10) && player.scores.wisdom > 12){
	// 		ranger += squaresArray[0]+squaresArray[1]+squaresArray[4];
	// 	}
	// 	let rogue = 0 + ranger;
	// 	if (player.scores.dexterity > 11){
	// 		rogue += squaresArray[4]+squaresArray[1]+squaresArray[2];	
	// 	}
	// 	let sorceror = rogue + 0;
	// 	if (player.scores.charisma > 12){
	// 		sorceror += squaresArray[5] + squaresArray[1] + squaresArray[2];
	// 	}
	// 	let wizard = sorceror + 0;
	// 	if (player.scores.intelligence > 12){
	// 		wizard += squaresArray[3] + squaresArray[2] + squaresArray [1];	
	// 	}
	// 	let tempClass = "";
	// 	let selector = roll(wizard);
	// 	console.log("The number for class gen: " + selector);
	// 	console.log(barbarian, bard, cleric, druid, fighter, monk, paladin, ranger, rogue, sorceror, wizard);

	// 	switch(true){
	// 		case (selector < barbarian):
	// 			tempClass="Barbarian";
	// 			hitDieGen(12);
	// 			skillPointsGen(4);
	// 			break;
	// 		case (selector < bard):
	// 			tempClass="Bard";
	// 			hitDieGen(8);
	// 			skillPointsGen(4);
	// 			break;
	// 		case (selector < cleric):
	// 			tempClass="Cleric";
	// 			hitDieGen(8);
	// 			skillPointsGen(2);
	// 			break;
	// 		case (selector < druid):
	// 			tempClass="Druid";
	// 			hitDieGen(8);
	// 			skillPointsGen(4);
	// 			player.languages.push("Druidic");
	// 			break;
	// 		case (selector < fighter):
	// 			tempClass="Fighter";
	// 			hitDieGen(10);
	// 			skillPointsGen(2);
	// 			break;
	// 		case (selector < monk):
	// 			tempClass="Monk";
	// 			hitDieGen(8);
	// 			skillPointsGen(4);
	// 			break;
	// 		case (selector < paladin):
	// 			tempClass="Paladin";
	// 			hitDieGen(10);
	// 			skillPointsGen(2);
	// 			break;
	// 		case (selector < ranger):
	// 			tempClass="Ranger";
	// 			hitDieGen(10);
	// 			skillPointsGen(6);
	// 			break;
	// 		case (selector < rogue):
	// 			tempClass="Rogue";
	// 			hitDieGen(8);
	// 			skillPointsGen(8);
	// 			break;
	// 		case (selector < sorceror):
	// 			tempClass="Sorceror";
	// 			hitDieGen(6);
	// 			skillPointsGen(2);
	// 			break;
	// 		case (selector < wizard):
	// 			tempClass="Wizard";
	// 			hitDieGen(6);
	// 			skillPointsGen(2);
	// 			break;
	// 		default:
	// 			tempClass = "Dumpster Fire";
	// 			break;
	// 	}
	// 	return tempClass;
	// }

	// function randomClass(){
	// 	let attObj = [];
	// 	attObj[0] = player.scores.strength;
	// 	attObj[1] = player.scores.dexterity;
	// 	attObj[2] = player.scores.constitution;
	// 	attObj[3] = player.scores.intelligence;
	// 	attObj[4] = player.scores.wisdom;
	// 	attObj[5] = player.scores.charisma;
	// 	let attObjSquare = Array.from(attObj);
	// 	for(i = 0; i < 6; i++){
	// 		attObjSquare[i] = attRangeForClassGeneration(attObjSquare[i]); 
	// 	}
	// 	let squareTotals = attObjSquare.reduce(sumScores, 0);

	// 	let tempClass = getCharacterClass(attObjSquare, squareTotals)
	// 	return tempClass;	
	// }

	// function selectFavoredClass(){
	// 	let tempFavoredClass = randomClass();
	// 	console.log(tempFavoredClass);
	// 	//Check half-elf repetition of second preferred class
	// 	if (tempFavoredClass == player.favoredClasses[0]){
	// 		selectFavoredClass();
	// 	}
	// 	else{
	// 		player.favoredClasses.push(tempFavoredClass);
	// 		if(player.race == "Half-Elf" && player.favoredClasses.length < 2){
	// 			console.log("Half-Elf Route hit.");
	// 			selectFavoredClass();
	// 		}
	// 	}
	// }

	// function selectClass(){
	// 	player.classes.push({
	// 		class: player.favoredClasses[0],
	// 		level: 1
	// 	});
	// }

//End Class Selection Functions-------------------------------------------------------------

// //Ability Scores generation-----------------------------------------------------------------

// //rolls the attribute scores 
// 	function rollScores(){
// 		scoresArr = [];
// 		for (let i = 0; i < 6; i++){
// 			tempValues = [];
// 			tempTotal = 0;
// 			for (let j = 0; j < 4; j++){
// 				tempValues.push(roll(6)+1);
// 			}
// 			tempValues.sort();
// 			tempValues.splice(0, 1);
// 			tempTotal = tempValues.reduce(sumScores, 0);
// 			scoresArr.push(tempTotal);
// 		}
// 		console.log("Base scores: " + scoresArr);
// 		setScores(scoresArr);
// 	}

// //Score reduction
// 	function sumScores(total, add){
// 		return (total + add);
// 	}

// //Puts score array into the player object
// 	function setScores(scoresArr){
// 		player.scores.strength = scoresArr[0];
// 		player.scores.dexterity = scoresArr[1];
// 		player.scores.constitution = scoresArr[2];
// 		player.scores.intelligence = scoresArr[3];
// 		player.scores.wisdom = scoresArr[4];
// 		player.scores.charisma = scoresArr[5];
// 	}

// //Function to select an ability at random
// 	function randAbility(){
// 		let die = roll(6);
// 		switch (die){
// 			case 0:
// 				return "strength";
// 				break;
// 			case 1:
// 				return "dexterity";
// 				break;
// 			case 2:
// 				return "constitution";
// 				break;
// 			case 3:
// 				return "intelligence";
// 				break;
// 			case 4:
// 				return "wisdom";
// 				break;
// 			default:
// 				return "charisma";
// 				break;
// 		}
// 	}
//End Ability Scores------------------------------------------------------------------

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
		if (morality <= 3){
			morality = "Good";
		} 
		else if (morality <= 5){
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
		}) 
		$("#preferred-classes").text(preferredText);
		$("#classes").text(classText);
	}

	function displayHP(){
		$("#max-hp").text(player.maxHitPoints);
	}

//End Display Functions---------------------------------------



//On click makes all the functions happen
	$("#scores-roll").on("click",()=>{
		start();
	});
});