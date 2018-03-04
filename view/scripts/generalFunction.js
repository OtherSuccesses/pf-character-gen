function roll(max){
		return Math.floor(Math.random()*max)
	}

	function hitDieGen(max){
		if(player.classes[0].level !== 1){
			player.maxHitPoints += roll(max);
		}
		else{
			player.maxHitPoints = max;
		}
		player.maxHitPoints += player.modifiers.constitution;
		if(player.maxHitPoints < 1){
			player.maxHitPoints = 1;
		}
	}

	function chooseHpOrSkill(){
		let choice = roll(2);
		if(choice == 1){
			console.log("Chose skill point");
			player.skillPoints++;
		}
		else{
			console.log("Chose hit point");
			player.maxHitPoints++;
		}
	}

	function skillPointsGen(base){
		player.skillPoints = base + player.modifiers.intelligence;
		if (player.skillPoints < 1){
			player.skillPoints = 1;
		}
		if (player.race === "Human"){
			player.skillPoints ++;
		}
	}