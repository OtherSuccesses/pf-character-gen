//Ability Scores generation-----------------------------------------------------------------

//rolls the attribute scores 
	function rollScores(){
		scoresArr = [];
		for (let i = 0; i < 6; i++){
			tempValues = [];
			tempTotal = 0;
			for (let j = 0; j < 4; j++){
				tempValues.push(roll(6)+1);
			}
			tempValues.sort();
			tempValues.splice(0, 1);
			tempTotal = tempValues.reduce(sumScores, 0);
			scoresArr.push(tempTotal);
		}
		console.log("Base scores: " + scoresArr);
		setScores(scoresArr);
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

//Function to select an ability at random
	function randAbility(){
		let die = roll(6);
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