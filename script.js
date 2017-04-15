/* Francheska Guzman */
class game {
	constructor(end, count, currentPlayer, color, board) {
	console.log('Connect Four is connected!');

	/*                          */
	/*         Attributes       */
	/*                          */

	this.end = end,
	this.count = count,
	this.currentPlayer = currentPlayer,
	this.color = color,
	this.board = board
	}; // End of constructor.

	/*                          */
	/*       Initialization     */
	/*                          */

	init() {
	console.log('Connect Four initialization.');
		document.getElementById('show').style.opacity = '1';
		document.getElementById('show').style.transition = '3s';
		this.end = false,
		this.count = 0,
		this.currentPlayer = 'Player 1',
		this.color = 'Black',
		this.board = [[0,  true, 'color'], [1,  true, 'color'],  [2,  true, 'color'], [3,  true,  'color'],
					  [4,  true, 'color'], [5,  true, 'color'],  [6,  true, 'color'], [7,  true,  'color'],
					  [8,  true, 'color'], [9,  true, 'color'],  [10, true, 'color'], [11, true, 'color'],
					  [12, true, 'color'], [13, true, 'color'],  [14, true, 'color'], [15, true, 'color']]
	};

	/*                          */
	/*           Moves          */
	/*                          */

	moveToken() {
	console.log(this.currentPlayer + ' is playing.');
	let target = event.target;
	let token = document.getElementsByClassName('token');

	for (let i = 0; i < token.length; i += 1) {
		if (token[i] == target) {
			switch(token[i].value + i) {
			case 0:
				for (let n = 3; n >= 0; n -= 1) { // Checking from the bottom to the top of one column.
					if (this.currentPlayer === 'Player 1') {
					document.getElementById(n).style.backgroundColor = '#000000'; // Black
					}
					else {
					document.getElementById(n).style.backgroundColor = '#A00000'; // Red
					};
				};
			break;

			case 1:
				for (let n = 7; n >= 4; n -= 1) { // Checking from the bottom to the top of one column.
					if (this.currentPlayer === 'Player 1') {
					document.getElementById(n).style.backgroundColor = '#000000'; // Black
					}
					else {
					document.getElementById(n).style.backgroundColor = '#A00000'; // Red
					};
				};
			break;

			case 2:
				for (let n = 11; n >= 8; n -= 1) { // Checking from the bottom to the top of one column.
					if (this.currentPlayer === 'Player 1') {
					document.getElementById(n).style.backgroundColor = '#000000'; // Black
					}
					else {
					document.getElementById(n).style.backgroundColor = '#A00000'; // Red
					};
				};
			break;

			case 3:
				for (let n = 15; n >= 12; n -= 1) { // Checking from the bottom to the top of one column.
					if (this.currentPlayer === 'Player 1') {
					document.getElementById(n).style.backgroundColor = '#000000'; // Black
					}
					else {
					document.getElementById(n).style.backgroundColor = '#A00000'; // Red
					};
				};
			break;

			default:
			console.log('Not a token.');
			break;
			}
		this.count += 1;
		this.result();
		};
	  };
	};

	/*                          */
	/*          Result          */
	/*                          */

	result() { 
	console.log('Checking if the player is a winner or tie... Otherwise, continue the game.');
		if 	// Horizontal combinations
			(((this.board[0, false, this.color] === this.board[1, false, this.color]) && (this.board[1, false, this.color] === this.board[2, false, this.color]) && (this.board[2, false, this.color] === this.board[3, false, this.color])) ||
			((this.board[4, false, this.color] === this.board[5, false, this.color]) && (this.board[5, false, this.color] === this.board[6, false, this.color]) && (this.board[6, false, this.color] === this.board[7, false, this.color])) ||
			((this.board[8, false, this.color] === this.board[9, false, this.color]) && (this.board[9, false, this.color] === this.board[10, false, this.color]) && (this.board[10, false, this.color] === this.board[11, false, this.color])) ||
			((this.board[12, false, this.color] === this.board[13, false, this.color]) && (this.board[13, false, this.color] === this.board[14, false, this.color]) && (this.board[14, false, this.color] === this.board[15, false, this.color])) ||
			// Vertical combinations
			((this.board[0, false, this.color] === this.board[4, false, this.color]) && (this.board[4, false, this.color] === this.board[8, false, this.color]) && (this.board[8, false, this.color] === this.board[12, false, this.color])) ||
			((this.board[1, false, this.color] === this.board[5, false, this.color]) && (this.board[5, false, this.color] === this.board[9, false, this.color]) && (this.board[9, false, this.color] === this.board[13, false, this.color])) ||
			((this.board[2, false, this.color] === this.board[6, false, this.color]) && (this.board[6, false, this.color] === this.board[10, false, this.color]) && (this.board[10, false, this.color] === this.board[14, false, this.color])) ||
			((this.board[3, false, this.color] === this.board[7, false, this.color]) && (this.board[7, false, this.color] === this.board[11, false, this.color]) && (this.board[11, false, this.color] === this.board[15, false, this.color])) ||
			// Diagonal combinations
			((this.board[0, false, this.color] === this.board[5, false, this.color]) && (this.board[5, false, this.color] === this.board[10, false, this.color]) && (this.board[10, false, this.color] === this.board[15, false, this.color])) ||
			((this.board[3, false, this.color] === this.board[6, false, this.color]) && (this.board[6, false, this.color] === this.board[9, false, this.color]) && (this.board[9, false, this.color] === this.board[12, false, this.color]))) 
			{
			document.getElementById('result').innerHTML = this.currentPlayer + ' won!';
			this.end = true;
			this.switchPlayer(); // Continue the game.
			} 
		else if (this.count === 12) {
			document.getElementById('result').innerHTML = "Tie!";
			this.end = true;
			this.switchPlayer(); // Continue the game.
		}
		else {
			this.switchPlayer(); // Continue the game.
		}
	}; // End of result.

	/*                          */
	/*   Turns (change player)  */
	/*                          */

	switchPlayer() {
		switch(this.currentPlayer) {
			case 'Player 1':
				this.currentPlayer = 'Player 2';
				this.color = 'Red';
				document.getElementById('a').style.backgroundColor = '#A00000';
				document.getElementById('b').style.backgroundColor = '#A00000';
				document.getElementById('c').style.backgroundColor = '#A00000';
				document.getElementById('d').style.backgroundColor = '#A00000';
				console.log('Next turn: ' + this.currentPlayer + ' (Red!)');
				break;

			case 'Player 2':
				this.currentPlayer = 'Player 1';
				this.color = 'Black';
				document.getElementById('a').style.backgroundColor = '#000000';
				document.getElementById('b').style.backgroundColor = '#000000';
				document.getElementById('c').style.backgroundColor = '#000000';
				document.getElementById('d').style.backgroundColor = '#000000';
				console.log('Next turn: ' + this.currentPlayer + ' (Black!)');
				break;

			default:
				console.log('Not a player!');
				break;
};	};	};

function Game() {

	let ConnectFour = new game;
	ConnectFour.init();

	let move = function() {
		ConnectFour.moveToken();
	};

	let tokens = document.getElementsByClassName('token');
	for(token of tokens){
	  token.addEventListener('click', move);
};	};
