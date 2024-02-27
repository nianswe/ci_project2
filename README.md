# Spot The Double

Spot The Double website is a game for kids or adults with a game section with two cards of 9 pictures each. When you press the Run Game button, 9 random images appear on the two cards, one image on each card becomes a double. The challenge of the game is to find the double, click the picture on one of the cards before the countdown timer that starts at 20 seconds reaches 0. The timer starts when you press the Run Now button. When you succeed the score will increase by one point and the game will continue, if you fail the game is over and you can try again.

![Responsice Mockup](https://github.com/nianswe/ci_project2/blob/main/media/pickthedouble_mockup.png)

## Features 

### Existing Features

- __Header__

  - Header with logo and text string
  - Ability to add a menu to choose settings in future feature updates.

![Header](https://github.com/nianswe/ci_project2/blob/main/media/header.png)

- __Game Area__

  - The gaming area consists of two card sections devided by one information section, on the top it is a progress bar.
  - The information section consists of a score section, a Run Game! button and a countdown section, the countdown is set to 20 seconds.
  - The two card sections consists of a round card, with 9 random images and one on each card is a double.
  When the game starts all images are stars.
  - The progress bar starts moving in 10 steps counting down from 10 seconds. 

![Game Area1](https://github.com/nianswe/ci_project2/blob/main/media/gamearea1.png)
![Game Area2](https://github.com/nianswe/ci_project2/blob/main/media/gamearea2.png)

- __Popup messages when correct answer__

  - When the game runs and the correct double image is selected, a popup message will appear saying Correct Answer.
  - When you close the message on OK, two new cards with pictures will appear and the game will continue.
  - The score will increase with one. 

![Correct Answer](https://github.com/nianswe/ci_project2/blob/main/media/correctanswer.png)  

- __Popup messages when wrong answer__

  - When the game runs and the wrong double image is selected, a popup message will appear saying Wrong Answer, and information about the image you selected and the correct image.
  - When you close the message on OK, a game over window appears and the game is over.

![Wrong Answer](https://github.com/nianswe/ci_project2/blob/main/media/wronganswer.png)

- __Game Over Window__

  - The Game Over window appears when you close the popup message.
  - It gives you the information that the game is over and shows your score and the correct image you should have chosen.
  - On two buttons, you can choose to run a new game or exit the game, then the home page will appear.

![Game Over](https://github.com/nianswe/ci_project2/blob/main/media/gameover.png)

- __Time Is Up__

  - The Time Is Up window appears when you do not select an image before the timer reaches 0.
  - It gives you the information that the game is over and shows your score and the correct image you should have chosen.
  - On two buttons, you can choose to run a new game or exit the game, then the home page will appear. 

![Time is up](https://github.com/nianswe/ci_project2/blob/main/media/timeisup.png)

- __Countdown timer__

  - Count down timer function with progress bar 
   Insperation and credit: https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown
   https://stackoverflow.com/users/4815264/james-mcdowell

![Timer](https://github.com/nianswe/ci_project2/blob/main/media/timer.png)

- __Run Now Button__
 
 ![Run Now Button](https://github.com/nianswe/ci_project2/blob/main/media/runnow.png)

- __Score Board__
 
![Score](https://github.com/nianswe/ci_project2/blob/main/media/score.png)

-__Random images to 9 positions on 2 cards__
 - Description of the steps
  - Array (allImages) with 30 images/icons from FontAwesome in format:
       < i id = image class = fa-solid fa-image >< /i >.
  - Shuffle the images in array with function: shufAllImages.
  - Array (orgPosition) with all positions on the two cards [pos1 - pos18], odd on card1 (upper), even on card2 (botton).
  - Shuffle the positions in array with function: shufOrgPositions.
  - Functions doublePos1 and doublePos2 generate 2 random positions for double, one on each card.
  - RunGame function place each random image in each random position in div in card in HTLM.
  - RunGame function also gets correct position for double image on upper card to get Id of image to validate with Id on choosen image.
  - At validation in function onClickImg, Id of choosen image compairs with Id of correct double image.
  - If TRUE, game will coninue with two new card, if FALSE, game vill end with ability run a new game.

### Future Possible Features
 - Menu in header with settings.
  - Different skill levels, 20, 10, 5 seconds countdown timer.
  - Different characters, images, colours, letters, numbers.
  - Name registration and high score list

## Graphical Layout

-__Wireframe__

![Wireframe](https://github.com/nianswe/ci_project2/blob/main/media/wireframe.png)

-__Final Score Info and Time Is Up Info Windows__
 - The divs in HTML for this windows are hidden from start.
 - The following functions show and hide the windows
  - showFinalScoreInfo will show Final Score Info Window
  - hideFinalScoreInfo will hide Final Score Info Window
  - showtimeisUpInfo will show Time Is Up Info Window
  - hidetimeisUpInfo will hide Time Is Up Info Window

## Testing 

### Manual Testing
- __Verified Images__
   - Verified so that all images are unique on both cards except for correct duplicates on each card.

- __Verified Countdown Timer__
   - Verified so that the timer starts, stops and resets when the game starts, restarts and ends.
  
- __Verified scoreboard__
   - Verified points, increase with one on successful selection and reset when game restarts and ends.

### Validator Testing 

- HTML
  - No errors were returned when passing through the official
  ![W3C Validator index.html](https://github.com/nianswe/ci_project2/blob/main/media/w3_val.png)
  
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fnianswe.github.io%2Fci_project2%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
  ![W3C CSS Validator style.css](https://github.com/nianswe/ci_project2/blob/main/media/w3cssval.png)
  w3cssvalidator.png

- Lighthouse performance scoring

  ![Lighthouse performance scoring](https://github.com/nianswe/ci_project2/blob/main/media/lighthouse.png)

- JShint validation
 - JShint validation replies two warnings about 'Functions declared within loops referencing an outer scoped variable may lead to confusing semantics.'

![JShint Warnings](https://github.com/nianswe/ci_project2/blob/main/media/jshint_warnings.png)

### Unfixed Bugs

No known bugs.

## Deployment

I created a new public GitHub repository 'nianswe/ci_project2', using 'Code-Institute-Org/gitpod-full-template' and published the site on GitHub Pages from main branch.

I created a local git repository using 'git init' and added it to the staging area with 'git add .', I committed to the local repository using 'git commit -m 'message' and pushed to the remote repository at GitHub with 'git push'.

The live link can be found here - https://nianswe.github.io/ci_project2/index.html 

## Credits 

 - Countdown timer function with progress bar: 
    Inspiration and credit: https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown
    https://stackoverflow.com/users/4815264/james-mcdowell

 - DOMContentLoaded, On-Click function, waiting for Click on image when image is choosen on upper or bottom card .
    Inspiration and credit: Code Institute, Love Maths Project
    https://github.com/Code-Institute-Org/love-maths

### Content 

 - The images used is icons from [Font Awesome](https://fontawesome.com/)
 - Fonts on all pages are imported from [Google Fonts](https://fonts.googleapis.com/)
 - Favicon from [favicon.io](https://favicon.io/emoji-favicons/star/)