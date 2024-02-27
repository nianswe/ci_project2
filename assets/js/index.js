/*jshint esversion: 6 */
// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function() {
let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function whenClick() {
            if (this.getAttribute("data-type") === "newGame") {
			// StartTimer()
      newGame();
			// Quit Game Button
			} else if (this.getAttribute("data-type") === "quitGame") {
				location.reload();
			}	
		});
	}
});

// Variable for Correct chosen div/cell card1 for validation if correct image is picked
var correct1; 
// Value of child of correct chosen div/cell card1
var correctImg1;

// Function shuffle all images in array
function shufAllImages() {
	let allImages = ['<i id = "music" class = "fa-solid fa-music"></i>', '<i id = "star" class = "fa-solid fa-star"></i>', '<i id = "heart" class = "fa-solid fa-heart"></i>', '<i id = "face-smile" class = "fa-regular fa-face-smile"></i>', '<i id = "bell" class = "fa-regular fa-bell"></i>', '<i id = "bolt" class = "fa-solid fa-bolt"></i>', '<i id = "car" class = "fa-solid fa-car"></i>', '<i id = "umbrella" class = "fa-solid fa-umbrella"></i>', '<i id = "headphones" class = "fa-solid fa-headphones"></i>', '<i id = "plane" class = "fa-solid fa-plane"></i>', '<i id = "key" class = "fa-solid fa-key"></i>', '<i id = "bicycle" class = "fa-solid fa-bicycle"></i>', '<i id = "sun" class = "fa-solid fa-sun"></i>', '<i id = "car-side" class = "fa-solid fa-car-side"></i>', '<i id = "robot" class = "fa-solid fa-robot"></i>', '<i id = "trophy" class = "fa-solid fa-trophy"></i>', '<i id = "check" class = "fa-solid fa-circle-check"></i>', '<i id = "glasses" class = "fa-solid fa-glasses"></i>', '<i id = "yin-yang" class = "fa-solid fa-yin-yang"></i>', '<i id = "suitcase" class = "fa-solid fa-suitcase"></i>', '<i id = "skull" class = "fa-solid fa-skull"></i>', '<i id = "sailboat" class = "fa-solid fa-sailboat"></i>', '<i id = "rainbow" class = "fa-solid fa-rainbow"></i>', '<i id = "radiation" class = "fa-solid fa-radiation"></i>', '<i id = "pizza-slice" class = "fa-solid fa-pizza-slice"></i>', '<i id = "peace" class = "fa-solid fa-peace"></i>', '<i id = "hourglass" class = "fa-solid fa-hourglass-half"></i>', '<i id = "guitar" class = "fa-solid fa-guitar"></i>', '<i id = "fish" class = "fa-solid fa-fish-fins"></i>', '<i id = "clover" class = "fa-solid fa-clover"></i>'];
	let currentIndex = allImages.length, randomIndex;
  	// While there remain elements to shuffle.
	while (currentIndex > 0) {
  		// Pick a remaining element.
	  	randomIndex = Math.floor(Math.random() * currentIndex);
	  	currentIndex--;
      // And swap it with the current element.
	    [allImages[currentIndex], allImages[randomIndex]] = [allImages[randomIndex], allImages[currentIndex]];
	}
	return allImages;
}

// Function shuffle all positions in array
function shufOrgPositions() {
	// All positions
  let orgPosition = ["pos1", "pos2", "pos3", "pos4", "pos5", "pos6", "pos7", "pos8", "pos9", "pos10", "pos11", "pos12", "pos13", "pos14", "pos15", "pos16", "pos17", "pos18"];
	// Random all positions in array
  let currentIndex = orgPosition.length, randomIndex;
  // While there remain elements to shuffle.
	while (currentIndex > 0) {
    // Pick a remaining element.
	  randomIndex = Math.floor(Math.random() * currentIndex);
	  currentIndex--;
    // And swap it with the current element.
	  [orgPosition[currentIndex], orgPosition[randomIndex]] = [orgPosition[randomIndex], orgPosition[currentIndex]];
	}
	return orgPosition;
}

// Positions on upper card
let firstCardPos = ["pos1", "pos3", "pos5", "pos7", "pos9", "pos11", "pos13", "pos15", "pos17"];
// Positions on lower card
let secondCardPos = ["pos2", "pos4", "pos6", "pos8", "pos10", "pos12", "pos14", "pos16", "pos18"];

// Function to get double image position on upper card
function doublePos1() {
	var doublePos1 = firstCardPos[(Math.floor(Math.random() * firstCardPos.length))];
	return doublePos1;
}

// Function to get double image position on lower card
function doublePos2() {
	var doublePos2 = secondCardPos[(Math.floor(Math.random() * secondCardPos.length))];
	return doublePos2;
}

// Function to start/restart game 
function newGame() {
  //Reset Score on score board
  resetScore();
  // Stop/Reset timer if running
  stopTimer();
  // Run function to continue game
  runGame();
}

// Function to continue game and get new random images on the two cards
function runGame() { 
	// Stop/Reset timer if running
  stopTimer();
  // Start Timer
	startTimer();
  // Hide TimeisUpInfo Window
  hidetimeisUpInfo();
  // Hide FinalScoreInfo Window
	hideFinalScoreInfo();
  // Hide RunGame Button 
	hideRunGameButton();

// All shuffled images 18 of total 30
	let images = shufAllImages();

// All shuffled positions on the two cards
	let position = shufOrgPositions();
	var pickedPos1 = [];
	var pickedPos2 = [];
	var pickedPos3 = [];
	var pickedPos4 = [];
	var pickedPos5 = [];
	var pickedPos6 = [];
	var pickedPos7 = [];
	var pickedPos8 = [];
	var pickedPos9 = [];
	var pickedPos10 = [];
	var pickedPos11 = [];
	var pickedPos12 = [];
	var pickedPos13 = [];
	var pickedPos14 = [];
	var pickedPos15 = [];
	var pickedPos16 = [];
	var pickedPos17 = [];
	var pickedPos18 = [];

// Random positions for double image on the to cards
	var doublePosition1 = doublePos1();
	var doublePosition2 = doublePos2();

// All shuffled images in own array
	var pickedImg1 = [];
	var pickedImg2 = [];
	var pickedImg3 = [];
	var pickedImg4 = [];
	var pickedImg5 = [];
	var pickedImg6 = [];
	var pickedImg7 = [];
	var pickedImg8 = [];
	var pickedImg9 = [];
	var pickedImg10 = [];
	var pickedImg11 = [];
	var pickedImg12 = [];
	var pickedImg13 = [];
	var pickedImg14 = [];
	var pickedImg15 = [];
	var pickedImg16 = [];
	var pickedImg17 = [];
	var pickedImg18 = [];
	var doubleImage = [];

// Each random position index in position array
	pickedPos1 = position[0]; 
	pickedPos2 = position[1]; 
	pickedPos3 = position[2]; 
	pickedPos4 = position[3]; 
	pickedPos5 = position[4]; 
	pickedPos6 = position[5]; 
	pickedPos7 = position[6]; 
	pickedPos8 = position[7]; 
	pickedPos9 = position[8]; 
	pickedPos10 = position[9]; 
	pickedPos11 = position[10]; 
	pickedPos12 = position[11]; 
	pickedPos13 = position[12]; 
	pickedPos14 = position[13]; 
	pickedPos15 = position[14]; 
	pickedPos16 = position[15]; 
	pickedPos17 = position[16]; 
	pickedPos18  = position[17]; 

// Each random image index in images array	
  pickedImg1 = images[0]; 
	pickedImg2 = images[1]; 
	pickedImg3 = images[2]; 
	pickedImg4 = images[3]; 
	pickedImg5 = images[4]; 
	pickedImg6 = images[5]; 
	pickedImg7 = images[6]; 
	pickedImg8 = images[7]; 
	pickedImg9 = images[8]; 
	pickedImg10 = images[9]; 
	pickedImg11 = images[10]; 
	pickedImg12 = images[11]; 
	pickedImg13 = images[12]; 
	pickedImg14 = images[13]; 
	pickedImg15 = images[14]; 
	pickedImg16 = images[15]; 
	pickedImg17 = images[16]; 
	pickedImg18 = images[17];
	doubleImage = images[18];  

// Place each random image in each random position div in HTML
	document.getElementById(pickedPos1).innerHTML = pickedImg1;
	document.getElementById(pickedPos2).innerHTML = pickedImg2;
	document.getElementById(pickedPos3).innerHTML = pickedImg3;
	document.getElementById(pickedPos4).innerHTML = pickedImg4;
	document.getElementById(pickedPos5).innerHTML = pickedImg5;
	document.getElementById(pickedPos6).innerHTML = pickedImg6;
	document.getElementById(pickedPos7).innerHTML = pickedImg7;
	document.getElementById(pickedPos8).innerHTML = pickedImg8;
	document.getElementById(pickedPos9).innerHTML = pickedImg9;
	document.getElementById(pickedPos10).innerHTML = pickedImg10;
	document.getElementById(pickedPos11).innerHTML = pickedImg11;
	document.getElementById(pickedPos12).innerHTML = pickedImg12;
	document.getElementById(pickedPos13).innerHTML = pickedImg13;
	document.getElementById(pickedPos14).innerHTML = pickedImg14;
	document.getElementById(pickedPos15).innerHTML = pickedImg15;
	document.getElementById(pickedPos16).innerHTML = pickedImg16;
	document.getElementById(pickedPos17).innerHTML = pickedImg17;
	document.getElementById(pickedPos18).innerHTML = pickedImg18;
	document.getElementById(doublePosition1).innerHTML = doubleImage;
	document.getElementById(doublePosition2).innerHTML = doubleImage;
	
  // Get correct position for double image on upper card to get Id of image to validate with choosen image 
  correct1 = document.getElementById(doublePosition1);
  correctImg1 = correct1.children[0];
	onClickImg(correctImg1.id);
	
  // Trigger On-Click function waiting for Click on image when image is choosen 
  onClickImg();
}

// On-Click function, waiting for Click on image when image is choosen on upper or bottom card .
var picsClick;
function onClickImg() {
	picsClick = document.getElementsByTagName("i");
		for( var x=0; x < picsClick.length; x++ ) {
		  picsClick[x].onclick = function choice(){
			  let choice = (""+this.id+"");
			  
        // For testing only: Display correct choosen Image in console, for testing, out commented.
        // console.log('choice', choice);
			  
        // For testing only: Display correct choosen Image in console, for testing, out commented.
			  // console.log('correctImg1', correctImg1.id);
			
        //* Validation to verify if correct image is choosen or not
            if (choice === correctImg1.id) {
			      // Stop and reset Timer
            stopTimer();
			      // Make Run Game button visuable if timer is inactivated 
            showRunGameButton();
				    // Pop-up window Informing Correct Answer
            alert("     CORRECT ANSWER!     \nYou picked the:\n     "+this.id+"     \nCorrect image is the:\n     "+correctImg1.id);
				    // Trigger funktion to increase score by 1 in score section 
				    incrementScore();
				    // Trigger Run game function to get two new cards
            runGame();
			    } else {
				    // Stop and reset Timer
            stopTimer();
				    // Make Run Game button visuable
            showRunGameButton();
				    // Reset Score value in Score section to 0
            document.getElementById("score").innerText = "0";
				    // Pop-up window Informing Incorrect Answer, innalScore2form choosen image and correct image
            alert("     WRONG ANSWER!     \nYou picked the: \n     "+this.id+"\n Correct image is the:\n     "+correctImg1.id);
				    //Add final score to final score window
            document.getElementById("finalScore1").innerText = finalScore;
            document.getElementById("correctImage1").innerText = correctImg1.id;
            console.log(correctImg1.id);
				    // View Final Score Window with final score
            showFinalScoreInfo();
            // Reset Score value in Score section to 0
            // resetScore();
				    return startTimer;
			    }
      };  
    }
}

// Increment Score Function
var currentScore;
var finalScore;
function incrementScore() {  
    // Get current score from score board
    currentScore = parseInt(document.getElementById("score").innerText);
    //Set finalscore value is equal to currentScore value 
    finalScore = currentScore;
	  // Increment final score value with one
    finalScore = ++finalScore;
	// Increas score value on score board with one
  document.getElementById("score").innerText = ++currentScore;
  // Set Final score value to Final score info Window.
	document.getElementById("finalScore1").innerText = finalScore;
	// Set Final score value to Time Is Up Window.
  document.getElementById("finalScore2").innerText = finalScore;
}

// Reset score on score board function, Final score info Window, Time Is Up Window to 0
function resetScore() {
	currentScore = 0;
  finalScore = 0;
	document.getElementById("score").innerText = "0";
  document.getElementById("finalScore1").innerText = "0";
	document.getElementById("finalScore2").innerText = "0";
}

// Show FinalScoreInfo Window, hidden by default.
function showFinalScoreInfo() {
	document.getElementById("finalScoreInfo").style.display = "block";
}

// Show RunGameButton, hidden during ongoing game.
function showRunGameButton() {
	document.getElementById("newGame").style.visibility = 'visible';
}

// Hide FinalScoreInfo Window when game starts
function hideFinalScoreInfo() {
	document.getElementById("finalScoreInfo").style.display = "none";
}

// Hide RunGameButton when game starts
function hideRunGameButton() {
	document.getElementById("newGame").style.visibility = 'hidden';
}

// Show timeisUpInfo window, hidden during ongoing game.
function timeisUpInfo() {
	document.getElementById("timeisUpInfo").style.display = "block";
}

// Hide timeisUpInfo window when game starts
function hidetimeisUpInfo() {
	document.getElementById("timeisUpInfo").style.display = "none";
}

// Count down timer Function
var	coundownTimer;
function startTimer() {
	// Count down amount of seconds
  let timeleft = 20;
	coundownTimer = setInterval(function(){
  	// When it is out of time
     if(timeleft <= 0){
    	clearInterval(coundownTimer);
		  stopTimer();
		  // Show RunGameButton 
      showRunGameButton(); 
		  // Show countdown seconds in span in Count-down div
      document.getElementById("seconds").innerHTML = timeleft;
		  //Add final score to Time is up window
      document.getElementById("finalScore2").innerText = "0";
      document.getElementById("finalScore2").innerText = finalScore;
      document.getElementById("correctImage2").innerText = correctImg1.id;
      // View Final Score Window with final score
      timeisUpInfo();
      // Reset Score value in Score section to 0
      // resetScore();
      return startTimer;
    //Ongoing countdown
		} else {
				// Hide FinalScoreInfo window
      	hideFinalScoreInfo();
      	// Hide hidetimeisUpInfo window 
		    hidetimeisUpInfo();
      	// Hide hideRunGameButton
		    hideRunGameButton();
  		  //Update progress bar
        document.getElementById("progressBar").value = 11 - timeleft;
        //Update countdown timer
  			document.getElementById("seconds").innerHTML = timeleft +"";
			timeleft -= 1;
		}
	}, 1000);
}

// Stop and reset Coundown timer
function stopTimer() {
	clearInterval(coundownTimer);
}