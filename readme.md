##### Francheska Guzman

# GA Project #1: The Game

## Connect Four, The Classic Vertical Four-In-A-Row Game

Connect Four is a two-player game board in which the players take turns dropping tokens from the top into a seven-column, six-row vertically suspended grid. The pieces fall straight down, occupying the next available space within the column. The objective of the game is to be the first to form an horizontal, vertical, or diagonal line of four of one's own token.

#### [Page Deployed on GitHub] (https://github.com/gffrancheska/connectfour)
#### [My Repository] (https://github.com/gffrancheska/connectfour)

### Technologies used

* HTML 
* CSS
* Vanilla JavaScript
* Google Chrome Developer Tools

I decided to not use jQuery, because this is my very first project in GA, and I wanted to mastering my skills in Vanilla JavaScript, before implementing libraries like jQuery. The use of Vanilla JavaScript, allowed me to understand better what's happening in the code. For the next projects, I will be more open to use other technologies like jQuery.

### Approach taken

I started by writting a pseudocode.  Then, instead create a 7 x 6 grid (like the original Connect Four), I started with a 4 x 4 grid to be able to figured out the logic of the game, and make the necessary changes easier.  

As you can see in the console log, there is an array with a length of 16:

![Original Connect Four](/images/c4part1.png)

After understand the logic of the game, I expand the game to a 7 x 6 grid (array with a length of 42):

![Original Connect Four](/images/c4part2.png)

### User stories

* 'How to Play' instructions are available before start the game.
* User have to press the 'Start' button to play. 
* While the game is in progress, the start button change to a 'Reset' button.
* Display player's turn.
* If one of the players won, or if it's a tie, the page displays a message.
* When the game end, players are not able to make more moves.

### Wireframes

### How-to-use instructions

1. Decide who plays first. The player 1 will be identified with the black token, while the player 2 with the red token.
2. Players will alternate turns after every move. Because is a 7 x 6 grid (42 available spaces), the maximum moves per player is 21.
3. On your turn, go to the top of the grid, and click over the token corresponding to the desired column.
4. The game automatically stops after one of the player's won, or if it's a tie.
5. To play again, click 'Reset' and then press 'Start'.

### Unsolved problems

Not unsolved problems related to the functionalty of the game. But there are a some details that I would like to add. For example:

* Add animation to the tokens, so they fall straight down to the next available space.
* Add animation to the winner combination. I have an idea about how do it. But I think that the way I did to check combinations is not the best to add animation. I manually write each combination, and I'm pretty sure that I can also do that with a for loop. Using a for loop is more easy do detect the combination and use DOM to manipulate the style of the winner combination.
* When click reset, all the tokens in the board game fall (like the real Connect Four!), and the grid remain empty.
