$(document).ready(()=>{

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
		}
	}

//Score reduction
	function sumScores(total, add){
		return (total + add);
	}

	function setScores(scoresArr){
		player.scores.strength = scoresArr[0];
		player.scores.dexterity = scoresArr[1];
		player.scores.constitution = scoresArr[2];
		player.scores.intelligence = scoresArr[3];
		player.scores.wisdom = scoresArr[4];
		player.scores.charisma = scoresArr[5];
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
		setScores(scoresArr);
		calculateScoreModifiers(scoresArr);
		return scoresArr;
	}

//Actually puts scores to screen
	function displayScores(scores){
		$("#str").text(scores[0]);
		$("#dex").text(scores[1]);
		$("#con").text(scores[2]);
		$("#int").text(scores[3]);
		$("#wis").text(scores[4]);
		$("#cha").text(scores[5]);
	}

	function displayScoreModifiers(scores){
		$("#str-mod").text(scores[0]);
		$("#dex-mod").text(scores[1]);
		$("#con-mod").text(scores[2]);
		$("#int-mod").text(scores[3]);
		$("#wis-mod").text(scores[4]);
		$("#cha-mod").text(scores[5]);
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
	function calculateScoreModifiers(scores){
		let scoreMods = [];
		let mod = 0;
		for (let i = 0; i < scores.length; i++){
			mod = Math.floor((scores[i]-10)/2);
			scoreMods.push(mod);
		}
		console.log("Score modifiers" + scoreMods);
		setScoreModifiers(scoreMods);
		displayScoreModifiers(scoreMods);
	}

//On click makes all the functions happen
	$("#scores-roll").on("click",()=>{
		let scores = rollScores();
		displayScores(scores);
	});
});