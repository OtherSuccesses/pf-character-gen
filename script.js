$(document).ready(()=>{

//Player object to hold all the data.
	let player = {
		scores : {
			strength : 0,
			dexterity : 0,
			constitution : 0,
			intelligence : 0,
			wisdom : 0,
			charisma : 0,
		}
	}

//Score reduction
	function sumScores(total, add){
		return (total + add);
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
			console.log(tempValues);
			tempTotal = tempValues.reduce(sumScores, 0);
			console.log("Temp Total: " + tempTotal);
			scoresArr.push(tempTotal);
		}
		setScores();
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

//On click makes all the functions happen
	$("#scores-roll").on("click",()=>{
		let scores = rollScores();
		displayScores(scores);
	});
});