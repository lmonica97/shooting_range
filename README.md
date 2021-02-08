# Shooting Range
## Background and Overview 

Ever since the quarantine, there is even more time for gamers to game. For those gamers who want to improve in First-Persion-Shooter games, shooting range is the game for you to sharpen your aim! Gamers will have one minute to shoot as many bubble as they can. The bubble will appear at a different locations after the user shoots it down and as the user's shooting pace increases, the difficulty will increase with a faster bubble appearances and moving bubbles. There will be a score board that will track the number of bubbles you've shot over the course of one minute and the highest score will be displayed at the bottom.

## Functionality and MVPs
[ ] Users will be able to start / restart a game.

[ ] Users will be able to click on the bubble that appears on the screen, the bubbles will have an animation of bursting if hit.

[ ] Users will have a crosshair in the middle of the screen and have a gun that follows the cursor movement based on the User's mouse movement.

[ ] The bubbles will increase in the speed of appearance and the addition of moving bubbles as the User's shooting pace increases

Bonus: 
Shooting sound affects (on hit, missed shot and reappearance of the bubble)

## Wireframes 

<p align="center">
  <img src="https://github.com/lmonica97/shooting_range/blob/main/wireframe.PNG" />
</p>

## Architexture and Technology

+ JavaScript for overall gaming logic
+ HTML5 canvas to draw the bubble, on-hit bubble, crosshair, and gun.
+ Webpack as bundler 

In addition:

+ game.js - holds all the logic as to increasing the score once the player clicks on the bubble with their cursor, restarting the game, decrementing the one minute time limit, and storing the user's highest score in that session.

+ board.js - houses the main feature, the shooting range. Will restrict any bubbles from appearing outside of the board. 

+ bubble.js - the design of the canvas bubble, increasing reaccurance of the bubble based on the player's shooting speed and accuracy. 

## Implementation Timeline 

+ Day 1 ( 02/08 )
    - Set up webpack 
    - Set up entry file
    - Set up skeleton for board.js 

+ Day 2 ( 02/09 )
    - Set up logic for bubble.js and create canvas
    - Set up skeleton for game.js
    - Complete board.js

+ Day 3 ( 02/10 )
    - Complete bubble.js 
    - Test and implement logic in game.js 

+ Day 4 ( 02 /11 ) 
    - Add background music, sound effects 
    - Add how-to-play instructions 

BONUS: Addition of all-time high score.
