// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    
    for (let button of buttons) {
        button.addEventListener("click", function() {
            /*if (this.getAttribute("data-type") === "startbutton") {
            getImages();
            } */
            if (this.getAttribute("data-type") === "getDouble") {
            getDouble();
            } else if (this.getAttribute("data-type") === "getPosition") {
							getPosition();
						}

        });
    }
});

/* Function GetImages, Get 18 random images of 30 from array 'images' pushed to array 'pickedImgs' */
function getImages() {
  let images = ["img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8", "img9", "img10", "img11", "img12", "img13", "img14", "img15", "img16", "img17", "img18", "img19", "img20", "img21", "img22", "img23", "img24", "img25", "img26", "img27", "img28", "img29", "img30"]
  var pickedImgs = [];    
  for (let i = 0; i < 18; i++) {
    let random = Math.floor(Math.random() * images.length);
    	pickedImgs.push(images[random]);
      images.splice(random, 1);
    }
    /* console.log(pickedImgs); */      
   return pickedImgs;      
};

/* Function generate Double image, Get 1 random images of 18 from array 'pickedImgs' pushed to array 'First8Images' */
function getDouble() {
  var pickedImgs = getImages();
  console.log(pickedImgs);  
  var pickedDouble = [];
    let random = Math.floor(Math.random() * pickedImgs.length);
    pickedDouble.push(pickedImgs[random]);
    pickedImgs.splice(random, 1);
    console.log(pickedImgs); 
    console.log(pickedDouble);   
    return pickedImgs;
    return pickedDouble;
		
};

function getPosition() {
	var position = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
		let currentIndex = position.length,  randomIndex;
	
		// While there remain elements to shuffle.
		while (currentIndex > 0) {
	
			// Pick a remaining element.
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;
	
			// And swap it with the current element.
			[position[currentIndex], position[randomIndex]] = [
				position[randomIndex], position[currentIndex]];
		}
		console.log(position);
		return position;
	}
	
	










/**
 * Variables with all 
 */
let img1 = '<i id= "1" class = "fa-solid fa-music"></i>' 
let img2 = '<i id= "2" class = "fa-solid fa-star"></i>' 
let img3 = '<i id= "3" class = "fa-solid fa-heart"></i>' 
let img4 = '<i id= "4" class = "fa-regular fa-face-smile"></i>' 
let img5 = '<i id= "5" class = "fa-regular fa-bell"></i>' 
let img6 = '<i id= "6" class = "fa-solid fa-bolt"></i>' 
let img7 = '<i id= "7" class = "fa-solid fa-car"></i>' 
let img8 = '<i id= "8" class = "fa-solid fa-umbrella"></i>' 
let img9 = '<i id= "9" class = "fa-solid fa-headphones"></i>' 
let img10 = '<i id= "10" class = "fa-solid fa-plane"></i>' 
let img11 = '<i id= "11" class = "fa-solid fa-key"></i>' 
let img12 = '<i id= "12" class = "fa-solid fa-bicycle"></i>' 
let img13 = '<i id= "13" class = "fa-solid fa-sun"></i>' 
let img14 = '<i id= "14" class = "fa-solid fa-car-side"></i>' 
let img15 = '<i id= "15" class = "fa-solid fa-robot"></i>' 
let img16 = '<i id= "16" class = "fa-solid fa-trophy"></i>' 
let img17 = '<i id= "17" class = "fa-solid fa-circle-check"></i>' 
let img18 = '<i id= "18" class = "fa-solid fa-glasses"></i>' 
let img19 = '<i id= "19" class = "fa-solid fa-yin-yang"></i>' 
let img20 = '<i id= "20" class = "fa-solid fa-suitcase"></i>' 
let img21 = '<i id= "21" class = "fa-solid fa-skull"></i>' 
let img22 = '<i id= "22" class = "fa-solid fa-sailboat"></i>' 
let img23 = '<i id= "23" class = "fa-solid fa-rainbow"></i>' 
let img24 = '<i id= "24" class = "fa-solid fa-radiation"></i>' 
let img25 = '<i id= "25" class = "fa-solid fa-pizza-slice"></i>' 
let img26 = '<i id= "26" class = "fa-solid fa-peace"></i>' 
let img27 = '<i id= "27" class = "fa-solid fa-hourglass-half"></i>' 
let img28 = '<i id= "28" class = "fa-solid fa-guitar"></i>' 
let img29 = '<i id= "29" class = "fa-solid fa-fish-fins"></i>' 
let img30 = '<i id= "30" class = "fa-solid fa-clover"></i>' 