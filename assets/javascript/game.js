
$(document).ready(function() {

	var randomNumber;
	var crystalOneValue, crystalTwoValue, crystalThreeValue, crystalFourValue;
	var totalScore;
	var wins = 0;
	var losses = 0;

	function start() {
		randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
		crystalOneValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
		crystalTwoValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
		crystalThreeValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
		crystalFourValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
		totalScore = 0;
		$("#randomNumber").text(randomNumber);
		$("#totalScore").html(totalScore);
		$("#win").text(wins);	
		$("#loss").text(losses);
	}

	function winLoseTally() {
		if (totalScore == randomNumber) {
			wins++;
			alert("You won!");
			start();

		}
		if (totalScore > randomNumber) {
			losses++;
			alert("You lose!");
			start();			
		}	
	}

	start();

	$(".divImage").on("click", function() {

		var userPress = $(this).attr("value");
		
		if (userPress == "crystalOne"){
			totalScore += crystalOneValue;
			console.log(totalScore);
		} 
		else if (userPress == "crystalTwo"){
			totalScore += crystalTwoValue;
			console.log(totalScore);
		}
		else if (userPress == "crystalThree"){
			totalScore += crystalThreeValue;
			console.log(totalScore);
		}
		else if (userPress == "crystalFour"){
			totalScore += crystalFourValue;
			console.log(totalScore);
		}	
		else {
			alert("Try Again!")
		}
		$("#totalScore").html(totalScore);
		winLoseTally();
	})


});

