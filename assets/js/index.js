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
 /*  let images = ["img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8", "img9", "img10", "img11", "img12", "img13", "img14", "img15", "img16", "img17", "img18", "img19", "img20", "img21", "img22", "img23", "img24", "img25", "img26", "img27", "img28", "img29", "img30"] */
let images = ['<i id= "1" class = "fa-solid fa-music"></i>', '<i id= "2" class = "fa-solid fa-star"></i>', '<i id= "3" class = "fa-solid fa-heart"></i>', '<i id= "4" class = "fa-regular fa-face-smile"></i>', '<i id= "5" class = "fa-regular fa-bell"></i>', '<i id= "6" class = "fa-solid fa-bolt"></i>', '<i id= "7" class = "fa-solid fa-car"></i>', '<i id= "8" class = "fa-solid fa-umbrella"></i>', '<i id= "9" class = "fa-solid fa-headphones"></i>', '<i id= "10" class = "fa-solid fa-plane"></i>', '<i id= "11" class = "fa-solid fa-key"></i>', '<i id= "12" class = "fa-solid fa-bicycle"></i>', '<i id= "13" class = "fa-solid fa-sun"></i>', '<i id= "14" class = "fa-solid fa-car-side"></i>', '<i id= "15" class = "fa-solid fa-robot"></i>', '<i id= "16" class = "fa-solid fa-trophy"></i>', '<i id= "17" class = "fa-solid fa-circle-check"></i>', '<i id= "18" class = "fa-solid fa-glasses"></i>', '<i id= "19" class = "fa-solid fa-yin-yang"></i>', '<i id= "20" class = "fa-solid fa-suitcase"></i>', '<i id= "21" class = "fa-solid fa-skull"></i>', '<i id= "22" class = "fa-solid fa-sailboat"></i>', '<i id= "23" class = "fa-solid fa-rainbow"></i>', '<i id= "24" class = "fa-solid fa-radiation"></i>', '<i id= "25" class = "fa-solid fa-pizza-slice"></i>', '<i id= "26" class = "fa-solid fa-peace"></i>', '<i id= "27" class = "fa-solid fa-hourglass-half"></i>', '<i id= "28" class = "fa-solid fa-guitar"></i>', '<i id= "29" class = "fa-solid fa-fish-fins"></i>', '<i id= "30" class = "fa-solid fa-clover"></i>'];
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
	var position = ["pos1", "pos2", "pos3", "pos4", "pos5", "pos6", "pos7", "pos8", "pos9", "pos10", "pos11", "pos12", "pos13", "pos14", "pos15", "pos16", "pos17", "pos18"];
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
	
function addImgToCard() {

let addPosition = getPosition();
let addDouble = getDouble();
let addImg = getImages();
  
	for(let i = 0; i < addPosition.length; i++){
		let pos =  addPosition[0]; 
	
		document.getElementById("pos").innerHTML = addImg[0];
		addImg.splice(0);
		addPosition.splice(0);
		console.log(pos);
		console.log(addImg);

		return pos;
		return addImg;
	}
}