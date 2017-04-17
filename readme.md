##### Francheska Guzman

# GA Project #1: The Game

![Connect Four](/images/originalC4.png)

## Connect Four, The Classic Vertical Four-In-A-Row Game

Connect Four is a two-player game board in which the players take turns dropping tokens from the top into a seven-column, six-row vertically suspended grid. The pieces fall straight down, occupying the next available space within the column. The objective of the game is to be the first to form an horizontal, vertical, or diagonal line of four of one's own token.

[Page Deployed on GitHub]: (https://github.com/gffrancheska/connectfour)

[My Repository]: (https://github.com/gffrancheska/connectfour)

### Technologies used

* HTML 
* CSS
* Vanilla JavaScript
* Google Chrome Developer Tools

I decided to not use jQuery, because this is my very first project in GA, and I wanted to mastering my skills in Vanilla JavaScript, before implementing libraries like jQuery. The use of Vanilla JavaScript, allowed me to understand better what's happening in the code. For the next projects, I will be more open to use other technologies like jQuery.

### Approach taken

I started by writting a pseudocode:

1. Create a class with:
	* An array of 42 nulls (null means available space).
	* A variable "count", that start in 0.
	* A variable "current player" that alternate from player 1 to player 2 after every move.
	* A variable "color" for the current player.
	* A boolean that check if the game end or still in progress.

2. Create a function to call the class, and add an eventlistener to the tokens.

3. Create a method that when user press a token, check which column correspond to that token.

4. Check from the bottom to the top of the array, if it have an available space (null). 

5. If a column is full, remove eventlistener. User doesn't loose the turn if press the token.

6. If it's null, then check from the bottom to the top of corresponding column, if the circle have no background color.

7. Check if the player is black or red, and add background color of the corresponding player to the circle.

8. Then, go to the result method and check if player is a winner or tie, otherwise continue the game by calling the function to switch player.

Instead create a 7 x 6 grid (like the original Connect Four), I started with a 4 x 4 grid, to be able to figured out the logic of the game and make the necessary changes easier to get the functionality.  

As you can see in the console log, there is an array with a length of 16:

![Original Connect Four](/images/c4part1.png)

After understand the logic of the game, I expand the game to a 7 x 6 grid (array with a length of 42):

![Original Connect Four](/images/c4part2.png)

I played a lot with display "none" properties and opacity.  Everything is contained in a single page, but looks like three pages.

### User stories

* As a user, I want an option to access the how to play instructions.
* As a user, I want to press the 'Start' button before play (it's a way to confirm that I'm ready to play).
* As a user, while playing, I want a 'Reset' button.
* As a user, I want to see the player's turn.
* As a user, I would like to get a message when one of the players won, or if it's a tie.

### How-to-use instructions

1. From the very beginning, user is able to read instructions or start the game.
2. When user click 'Start', the button change to 'Reset'.
3. The first player move the mouse at the top of the grid, and click over the token corresponding to the desired column. Players will alternate turns after every move.
4. One of the players won if form an horizontal, vertical, or diagonal line of four of one's own tokens. 
5. To play again, user have to click the 'Reset' button and then, 'Start'.

### Unsolved problems

Not unsolved problems related to the functionalty of the game! :)  

But there are some details that I would like to add. For example:

* Add animation to the tokens, so they fall straight down to the next available space.
* Add animation to the winner combination. I have an idea about how do it. But I think that the way I did to check combinations is not the best to add animation. I manually write each combination, and I'm pretty sure that I can also do that with a for loop. Using a for loop is more easy do detect the combination and use DOM to manipulate the style of the winner combination.
* When click reset, all the tokens in the board game fall (like the real Connect Four!), and the grid remain empty.

|   Component   |  Estimated Time  | % Complete  |  Actual Time
| ------------- |:-------------:| -----:| -----:|
| Initialization  |  3  |     100%    |2     
| Playing         | 18  |     100%    |31     
| Winning         |  6  |     100%    |6     
| Reset           |  3  |     100%    |2 

 
