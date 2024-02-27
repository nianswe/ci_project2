# Spot The Double

Spot The Double website, website is a game for kids or adults with a bame section with two cards with 9 images each.
When you press the Run Game! button 9 random images will show on the two cards, one image on each card will be a double.
The challenge in the game is to spot the double, click on image on one of the cards befor the count down timer reach 0.
The timer starts when you press the Run Now! button.
When you success the score will increas with one point.

![Responsice Mockup](https://github.com/nianswe/ci_project2/blob/main/media/pickthedouble_mockup.png)

## Features 

- 
- 
- 
- 

### Existing Features


- __Header__

  - Header with logo and text sting
  - Possibillity to add a menu to choose settings in future feature updates.
![Header](https://github.com/nianswe/ci_project2/blob/main/media/header.png)

- __Game Area__

  - The gaming area consists of two card sections devided by one information section, on the top it is a progress bar.
  - The information section consists of a score section, a Run Game! buttion and a countdown section, the countdown is set to 20 seconds.
  - The two card sections consists of a round card, with 9 random images and one on each card is a double.
  When the game starts all images are stars.
  - The progress bar starts moves in 10 steps counting down from 10 seconds. 
![Game Area1](https://github.com/nianswe/ci_project2/blob/main/media/gamearea1.png)
![Game Area2](https://github.com/nianswe/ci_project2/blob/main/media/gamearea2.png)



- __Popup/Alert messages when correct answer__

  - When game is running and correct double image are choosen a popup/alert message will show, saying Correct answer.
  - When you close the message on OK two new cards with images will show and the game continues.
  - The score will increase with one. 

![Correct Answer](https://github.com/nianswe/ci_project2/blob/main/media/correctanswer.png)  


- __Popup/Alert messages when wrong answer__

  - When game is running and wrong double image are choosen a popup/alert message will show, saying Wrong answer, and information about the image you choose, and the correct image.
   - When you close the message on OK, a game over window show and the game is over.

![Wrong Answer](https://github.com/nianswe/ci_project2/blob/main/media/wronganswer.png)



- __Game Over Window__

 - The Game Over window will show when you close the wrong answer popup message.
 - It give you the information the game is over and show your score and the correct image you should have choosen.
 - On two buttons you can choose to Run a new game or Quit the game, and the start page will show.  

![Game Over](https://github.com/nianswe/ci_project2/blob/main/media/gameover.png)


- __Time Is Up__

 - The Time Is Up window will show when you do not choose a image before the timer has reached 0.
 - It give you the information the game is over and show your score and the correct image you should have choosen.
 - On two buttons you can choose to Run a new game or Quit the game, and the start page will show.  

![Time is up](https://github.com/nianswe/ci_project2/blob/main/media/timeisup.png)

- __Countdown timer__

 - x

![Timer](https://github.com/nianswe/ci_project2/blob/main/media/timer.png)

- __Run Now Button__
 - x
 ![Run Now Button](https://github.com/nianswe/ci_project2/blob/main/media/runnow.png)

- __Score Board__
 - x

![Score](https://github.com/nianswe/ci_project2/blob/main/media/score.png)

## Testing 

All links in the navigation menu and toogle are tested and verified.

  
### Validator Testing 

- HTML
  - No errors were returned when passing through the official
  ![W3C Validator index.html](https://github.com/nianswe/ci_project2/blob/main/media/w3_val.png)
  
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fnianswe.github.io%2Fci_project2%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
  ![W3C CSS Validator style.css](https://github.com/nianswe/ci_project2/blob/main/media/w3cssval.png)
  w3cssvalidator.png

- Lighthouse performance scoring
  - Lighthouse performance scoring: Spot The Double
  ![Lighthouse performance scoring](https://github.com/nianswe/ci_project2/blob/main/media/lighthouse.png)

- JShint validation
 - JShint validation replies two warnings about 'Functions declared within loops referencing an outer scoped variable may lead to confusing semantics.'
![Jshint Warnings](https://github.com/nianswe/ci_project2/blob/main/media/jshint_warnings.png)

### Unfixed Bugs

No known bugs.

## Deployment

I created a new public GitHub repository 'nianswe/ci_project2', using 'Code-Institute-Org/gitpod-full-template' and published the site on GitHub Pages from main branch.

I created a local git repository using 'git init' and added it to the staging area with 'git add .', I committed to the local repository using 'git commit -m 'message' and pushed to the remote repository at GitHub with 'git push'.

The live link can be found here - https://nianswe.github.io/ci_project2/index.html 

## Credits 

### Content 

- The images used is icons from [Font Awesome](https://fontawesome.com/)
- Fonts on all pages are imported from [Google Fonts](https://fonts.googleapis.com/)

### Media

- Insperation and code:
  