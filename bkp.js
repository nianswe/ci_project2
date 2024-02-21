// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "pickedPos") {
			pickedPos();
            } 
            if (this.getAttribute("data-type") === "pickedImg") {
			pickedImg();
			}
			if (this.getAttribute("data-type") === "getPosAndImg") {
			getPosAndImg();
			}
			
		});
	};
});

/* Function getRandom  */
var position = ["pos1", "pos2", "pos3", "pos4", "pos5", "pos6", "pos7", "pos8", "pos9", "pos10", "pos11", "pos12", "pos13", "pos14", "pos15", "pos16", "pos17", "pos18"];
var images = ['<i id= "1" class = "fa-solid fa-music"></i>', '<i id= "2" class = "fa-solid fa-star"></i>', '<i id= "3" class = "fa-solid fa-heart"></i>', '<i id= "4" class = "fa-regular fa-face-smile"></i>', '<i id= "5" class = "fa-regular fa-bell"></i>', '<i id= "6" class = "fa-solid fa-bolt"></i>', '<i id= "7" class = "fa-solid fa-car"></i>', '<i id= "8" class = "fa-solid fa-umbrella"></i>', '<i id= "9" class = "fa-solid fa-headphones"></i>', '<i id= "10" class = "fa-solid fa-plane"></i>', '<i id= "11" class = "fa-solid fa-key"></i>', '<i id= "12" class = "fa-solid fa-bicycle"></i>', '<i id= "13" class = "fa-solid fa-sun"></i>', '<i id= "14" class = "fa-solid fa-car-side"></i>', '<i id= "15" class = "fa-solid fa-robot"></i>', '<i id= "16" class = "fa-solid fa-trophy"></i>', '<i id= "17" class = "fa-solid fa-circle-check"></i>', '<i id= "18" class = "fa-solid fa-glasses"></i>', '<i id= "19" class = "fa-solid fa-yin-yang"></i>', '<i id= "20" class = "fa-solid fa-suitcase"></i>', '<i id= "21" class = "fa-solid fa-skull"></i>', '<i id= "22" class = "fa-solid fa-sailboat"></i>', '<i id= "23" class = "fa-solid fa-rainbow"></i>', '<i id= "24" class = "fa-solid fa-radiation"></i>', '<i id= "25" class = "fa-solid fa-pizza-slice"></i>', '<i id= "26" class = "fa-solid fa-peace"></i>', '<i id= "27" class = "fa-solid fa-hourglass-half"></i>', '<i id= "28" class = "fa-solid fa-guitar"></i>', '<i id= "29" class = "fa-solid fa-fish-fins"></i>', '<i id= "30" class = "fa-solid fa-clover"></i>'];
		

	
function pickedPos() {	
	/* Function getPosition pos1 -> pos18 */
	var pickedPos = [];
		for (let i = 0; i < 18; i++) {
			let randomIndexP = Math.floor(Math.random() * position.length);
			pickedPos.push(position[randomIndexP]);
		
		console.log(pickedPos);	
		return pickedPos;
		}
}

function pickedImg() {	
	/* Function GetImages, Get 18 random images of 30 from array 'images' pushed to array 'pickedImgs' */
	var pickedImg = [];    
		for (let i = 0; i < 18; i++) {
			let randomIndexI = Math.floor(Math.random() * images.length);
			pickedImg.push(images[randomIndexI]);
		console.log(pickedImg);	
		return pickedImg;

		}
}

/* Function getPosition pos1 -> pos18  */
function getPosAndImg() {
	
	/*  Position */
	
	/* var finalPosition = pickedPos; */
	
	/* AddPosition, value for position on cards */ 
	
	let addPosition = pickedPos();
		
	console.log(addPosition);

	/* Image */
	
	var finalImages = pickedImg();
	
	/* AddImagees, value for Image on cards */ 
	let addImages = pickedImg();
	
	console.log(addImages);
	
	var newIElement = document.getElementById(addPosition);
	
	/*  Greate HTML string   */
	let html = newIElement.innerHTML; 
	console.log(html);

	document.getElementById(addPosition).innerHTML = addImages;
}

/* Function addToCard */
function addToCard() {

/* Get div in DOM where position is */
var newIElement = document.getElementById(randomPickedPos);
	
/*  Greate HTML string   */
let html = newIElement.innerHTML; 
console.log(html);
	
document.getElementById(randomPickedPos).innerHTML = randomPickedImg;

}