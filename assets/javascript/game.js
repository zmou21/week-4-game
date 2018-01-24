
//Global variables go here
var min = 1;
var max = 12;
var count = 0;
var storeCrystalOne = [];
var storeCrystalTwo = [];
var storeCrystalThree = [];
var storeCrystalFour = [];

//jQuery starts here

$(document).ready(function() {


// Create a function that will generate a random value between 19 and 120	
	
	function randomNum(n) {
		var randomNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
		return randomNum; 	
	};

// Create a function that outputs the random value after each page loads	

	var randomNumGen = $("#randomNumber").html(function () {
		return randomNum;
	});


// Create a function that when called upon will generate a random number between 1 and 12
	function randomNumCrystal(n) {
		var randomNumCrystal = Math.floor(Math.random() * (max - min + 1)) + min;
		return randomNumCrystal; 	
	};

// Create a click event that generates and holds a random value for each of the four images
	
	var crystalOneValue = randomNumCrystal();
	var crystalTwoValue = randomNumCrystal();
	var crystalThreeValue = randomNumCrystal();
	var crystalFourValue = randomNumCrystal();

	if (true) {

		$("#divImageOne").on("click", function() {

			if (true) {
				var randomNumGen = $("#divImageOne").html(function () {
				return crystalOneValue;
				});	
			}
			count++;
			storeCrystalOne.push(count);
			var totalOne = crystalOneValue * storeCrystalOne.length;
			console.log(totalOne);

		});

		$("#divImageTwo").click(function() {

			if (true) {
				var randomNumGen = $("#divImageTwo").html(function () {
				return crystalTwoValue;
				});	
			}
			count++;
			storeCrystalTwo.push(count);
			var totalTwo = crystalTwoValue * storeCrystalTwo.length;
			console.log(totalTwo);

		});

		var crystalThree = $("#divImageThree").click(function() {

			if (crystalThree) {
				var randomNumGen = $("#divImageThree").html(function () {
				return crystalThreeValue;
				});	
			}
			count++;
			storeCrystalThree.push(count);
			var totalThree = crystalThreeValue * storeCrystalThree.length;
			console.log(totalThree);
		});

		var crystalFour = $("#divImageFour").click(function() {

			if (crystalFour) {
				var randomNumGen = $("#divImageFour").html(function () {
				return crystalFourValue;
				});	
			}
			count++;
			storeCrystalFour.push(count);
			var totalFour = crystalFourValue * storeCrystalFour.length;
			console.log(totalFour);	
		});

		
	};

// Store value of random number into its appropriate button


// On each click of one of the gems, value is added to the new total


	// var counter = totalOne + totalTwo + totalThree + totalFour;	
	var counter = "Total will go here"
		if (counter) {
			$("#counter").html(function () {
				return counter;
			});
		}


// if player == randomly generated number then they win (+1)

	// if (randomNumGen !== crystalOne) {
	// 	console.log("not equal")
	// }



// else if player >= randomly generated number then loss (+1)



// reset code after each win, reset will generate new randomm number and the crystals will have four new values
// and user's score and the counter will reset to 0	


});



