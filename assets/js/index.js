// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "getPosition") {
			getPosition();
            } else if (this.getAttribute("data-type") === "shufAllImages") {
			shufAllImages();
			} else if (this.getAttribute("data-type") === "double") {
			double();
			}
			
		});
	};
});



function shufAllImages() {
	let allImages = ['<i id= "1" class = "fa-solid fa-music"></i>', '<i id= "2" class = "fa-solid fa-star"></i>', '<i id= "3" class = "fa-solid fa-heart"></i>', '<i id= "4" class = "fa-regular fa-face-smile"></i>', '<i id= "5" class = "fa-regular fa-bell"></i>', '<i id= "6" class = "fa-solid fa-bolt"></i>', '<i id= "7" class = "fa-solid fa-car"></i>', '<i id= "8" class = "fa-solid fa-umbrella"></i>', '<i id= "9" class = "fa-solid fa-headphones"></i>', '<i id= "10" class = "fa-solid fa-plane"></i>', '<i id= "11" class = "fa-solid fa-key"></i>', '<i id= "12" class = "fa-solid fa-bicycle"></i>', '<i id= "13" class = "fa-solid fa-sun"></i>', '<i id= "14" class = "fa-solid fa-car-side"></i>', '<i id= "15" class = "fa-solid fa-robot"></i>', '<i id= "16" class = "fa-solid fa-trophy"></i>', '<i id= "17" class = "fa-solid fa-circle-check"></i>', '<i id= "18" class = "fa-solid fa-glasses"></i>', '<i id= "19" class = "fa-solid fa-yin-yang"></i>', '<i id= "20" class = "fa-solid fa-suitcase"></i>', '<i id= "21" class = "fa-solid fa-skull"></i>', '<i id= "22" class = "fa-solid fa-sailboat"></i>', '<i id= "23" class = "fa-solid fa-rainbow"></i>', '<i id= "24" class = "fa-solid fa-radiation"></i>', '<i id= "25" class = "fa-solid fa-pizza-slice"></i>', '<i id= "26" class = "fa-solid fa-peace"></i>', '<i id= "27" class = "fa-solid fa-hourglass-half"></i>', '<i id= "28" class = "fa-solid fa-guitar"></i>', '<i id= "29" class = "fa-solid fa-fish-fins"></i>', '<i id= "30" class = "fa-solid fa-clover"></i>'];
	
	let currentIndex = allImages.length,  randomIndex;
  
	// While there remain elements to shuffle.
	while (currentIndex > 0) {
  
	  // Pick a remaining element.
	  randomIndex = Math.floor(Math.random() * currentIndex);
	  currentIndex--;
  
	  // And swap it with the current element.
	  [allImages[currentIndex], allImages[randomIndex]] = [
		allImages[randomIndex], allImages[currentIndex]];
	}
	console.log(allImages);
	return allImages;
  }

function shufOrgPositions() {
	let orgPosition = ["pos1", "pos2", "pos3", "pos4", "pos5", "pos6", "pos7", "pos8", "pos9", "pos10", "pos11", "pos12", "pos13", "pos14", "pos15", "pos16", "pos17", "pos18"];
	let firstCardPos = ["pos1", "pos3", "pos5", "pos7", "pos9", "pos11", "pos13", "pos15", "pos17"];
	let currentIndex = orgPosition.length,  randomIndex;
  
	// While there remain elements to shuffle.
	while (currentIndex > 0) {
  
	  // Pick a remaining element.
	  randomIndex = Math.floor(Math.random() * currentIndex);
	  currentIndex--;
  
	  // And swap it with the current element.
	  [orgPosition[currentIndex], orgPosition[randomIndex]] = [
		orgPosition[randomIndex], orgPosition[currentIndex]];
	}
	console.log(orgPosition);
	return orgPosition;
}

let firstCardPos = ["pos1", "pos3", "pos5", "pos7", "pos9", "pos11", "pos13", "pos15", "pos17"];
function double() {
 
  	let doublePod = firstCardPos[(Math.floor(Math.random() * firstCardPos.length))];

	  console.log(doublePod);
	
    
	

}

function getPosition() { 
	let images = shufAllImages();
		
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
		
	console.log("pickedPos1", pickedPos1);
	console.log("pickedPos2", pickedPos2);
	console.log("pickedPos3", pickedPos3);
	console.log("pickedPos4", pickedPos4);
	console.log("pickedPos5", pickedPos5);
	console.log("pickedPos6", pickedPos6);
	console.log("pickedPos7", pickedPos7);
	console.log("pickedPos8", pickedPos8);
	console.log("pickedPos9", pickedPos9);
	console.log("pickedPos10", pickedPos10);
	console.log("pickedPos11", pickedPos11);
	console.log("pickedPos12", pickedPos12);
	console.log("pickedPos13", pickedPos13);
	console.log("pickedPos14", pickedPos14);
	console.log("pickedPos15", pickedPos15);
	console.log("pickedPos16", pickedPos16);
	console.log("pickedPos17", pickedPos17);
	console.log("pickedPos18", pickedPos18);

	console.log("pickedImg1", pickedImg1);
	console.log("pickedImg2", pickedImg2);
	console.log("pickedImg3", pickedImg3);
	console.log("pickedImg4", pickedImg4);
	console.log("pickedImg5", pickedImg5);
	console.log("pickedImg6", pickedImg6);
	console.log("pickedImg7", pickedImg7);
	console.log("pickedImg8", pickedImg8);
	console.log("pickedImg9", pickedImg9);
	console.log("pickedImg10", pickedImg10);
	console.log("pickedImg11", pickedImg11);
	console.log("pickedImg12", pickedImg12);
	console.log("pickedImg13", pickedImg13);
	console.log("pickedImg14", pickedImg14);
	console.log("pickedImg15", pickedImg15);
	console.log("pickedImg16", pickedImg16);
	console.log("pickedImg17", pickedImg17);
	console.log("pickedImg18", pickedImg18);

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
}