function personalityGen(){
	let playerPersonality = [];
	personalityAttributes.forEach(attribute=>{
		let tempValues = [];
		let tempTotal = 0;
		for (let i = 0; i < 3; i++){
			tempValues.push(roll(6)+1);
		}
		tempTotal=tempValues.reduce(sumScores, 0);
		attribute.value = tempTotal;
		playerPersonality.push(attribute)
	});
	console.log("Player personality attributes: " + playerPersonality);

}