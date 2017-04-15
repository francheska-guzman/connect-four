/* Francheska Guzman */
class game {
	constructor(end, count, currentPlayer, board) {
	console.log('Connect Four is connected!');

/*                          */
/*         Attributes       */
/*                          */

	this.end = end,
	this.count = count,
	this.currentPlayer = currentPlayer,
	this.board = board
	}; // End of constructor.

/*                          */
/*       Initialization     */
/*                          */

	init() {
	console.log('Connect Four initialization.');
		document.getElementById('show').style.opacity = '1';
		document.getElementById('show').style.transition = '3s';
		document.getElementById('startButton').style.display = 'none';
		document.getElementById('resetButton').style.display = 'initial';
		this.end = false,
		this.count = 0,
		this.currentPlayer = 'Player 1',
		this.board = 	[/* 0 */ null, 	/* 1 */  null, /* 2 */ 	null, /* 3 */ 	null,
						 /* 4 */ null, 	/* 5 */  null, /* 6 */ 	null, /* 7 */ 	null,
						 /* 8 */ null, 	/* 9 */  null, /* 10 */ null, /* 11 */ 	null,
						 /* 12 */null, 	/* 13 */ null, /* 14 */ null, /* 15 */ 	null]
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

			case 0: /* Token A & Column A */

				for (let b = 12; b >= 0; b -= 4){ // this.board array
					if (this.board[b] === null) {
						for (let n = 3; n >= 0; n -= 1) { // Checking from the bottom to the top of one column.
							if (document.getElementById(n).style.backgroundColor === '') {
								if (this.currentPlayer === 'Player 1') {
								document.getElementById(n).style.backgroundColor = '#000000'; // Black
								this.board[b] = 'Black';
								this.result();
								}
								else {
								document.getElementById(n).style.backgroundColor = '#A00000'; // Red
								this.board[b] = 'Red';
								this.result();
								};	
								return; 
							};
						};
				};	};
			break;

			case 1: /* Token B & Column B */
				for (let b = 13; b >= 1; b -= 4){ // this.board array
					if (this.board[b] === null) {
						for (let n = 7; n >= 4; n -= 1) { // Checking from the bottom to the top of one column.
							if (document.getElementById(n).style.backgroundColor === '') {
								if (this.currentPlayer === 'Player 1') {
								document.getElementById(n).style.backgroundColor = '#000000'; // Black
								this.board[b] = 'Black';
								this.result();
								}
								else {
								document.getElementById(n).style.backgroundColor = '#A00000'; // Red
								this.board[b] = 'Red';
								this.result();
								};	
								return; 
							};
						};
				};	};
			break;

			case 2: /* Token C & Column C */
				for (let b = 14; b >= 2; b -= 4){ // this.board array
					if (this.board[b] === null) {
						for (let n = 11; n >= 8; n -= 1) { // Checking from the bottom to the top of one column.
							if (document.getElementById(n).style.backgroundColor === '') {
								if (this.currentPlayer === 'Player 1') {
								document.getElementById(n).style.backgroundColor = '#000000'; // Black
								this.board[b] = 'Black';
								this.result();
								}
								else {
								document.getElementById(n).style.backgroundColor = '#A00000'; // Red
								this.board[b] = 'Red';
								this.result();
								};	
								return; 
							};
						};
				};	};
			break;

			case 3: /* Token D & Column D */
				for (let b = 15; b >= 3; b -= 4){ // this.board array
					if (this.board[b] === null) {
						for (let n = 15; n >= 12; n -= 1) { // Checking from the bottom to the top of one column.
							if (document.getElementById(n).style.backgroundColor === '') {
								if (this.currentPlayer === 'Player 1') {
								document.getElementById(n).style.backgroundColor = '#000000'; // Black
								this.board[b] = 'Black';
								this.result();
								}
								else {
								document.getElementById(n).style.backgroundColor = '#A00000'; // Red
								this.board[b] = 'Red';
								this.result();
								};	
								return; 
							};
						};
				};	};
			break;

			default:
			console.log('Not a token.');
			break;
			};
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
	console.log(this.board);
	
	this.count += 1;

		if 	// Horizontal combinations
			((((this.board[0] === this.board[1]) && (this.board[1] === this.board[2]) && (this.board[2] === this.board[3])) === ("Black" || "Red")) ||
			(((this.board[4] === this.board[5]) && (this.board[5] === this.board[6]) && (this.board[6] === this.board[7]))  === ("Black" || "Red")) ||
			(((this.board[8] === this.board[9]) && (this.board[9] === this.board[10]) && (this.board[10] === this.board[11]))  === ("Black" || "Red")) ||
			(((this.board[12] === this.board[13]) && (this.board[13] === this.board[14]) && (this.board[14] === this.board[15]))  === ("Black" || "Red")) ||
			// Vertical combinations
			(((this.board[0] === this.board[4]) && (this.board[4] === this.board[8]) && (this.board[8] === this.board[12]))  === ("Black" || "Red")) ||
			(((this.board[1] === this.board[5]) && (this.board[5] === this.board[9]) && (this.board[9] === this.board[13]))  === ("Black" || "Red")) ||
			(((this.board[2] === this.board[6]) && (this.board[6] === this.board[10]) && (this.board[10] === this.board[14]))  === ("Black" || "Red")) ||
			(((this.board[3] === this.board[7]) && (this.board[7] === this.board[11]) && (this.board[11] === this.board[15]))  === ("Black" || "Red")) ||
			// Diagonal combinations
			(((this.board[0] === this.board[5]) && (this.board[5] === this.board[10]) && (this.board[10] === this.board[15]))  === ("Black" || "Red")) ||
			(((this.board[3] === this.board[6]) && (this.board[6] === this.board[9]) && (this.board[9] === this.board[12]))  === ("Black" || "Red"))) {
			document.getElementById('result').innerHTML = this.currentPlayer + ' won!';
			this.end = true;
			}
		else if (this.count === 16) {
			document.getElementById('result').innerHTML = "It's a tie!";
			this.end = true;
		}
		this.switchPlayer();
	}; // End of result.

/*                          */
/*   Turns (change player)  */
/*                          */

	switchPlayer() {
		switch(this.currentPlayer) {
			case 'Player 1':
				this.currentPlayer = 'Player 2';
				document.getElementById('a').style.backgroundColor = '#A00000';
				document.getElementById('b').style.backgroundColor = '#A00000';
				document.getElementById('c').style.backgroundColor = '#A00000';
				document.getElementById('d').style.backgroundColor = '#A00000';
				console.log('Next turn: ' + this.currentPlayer + ' (Red!)');
				break;

			case 'Player 2':
				this.currentPlayer = 'Player 1';
				document.getElementById('a').style.backgroundColor = '#000000';
				document.getElementById('b').style.backgroundColor = '#000000';
				document.getElementById('c').style.backgroundColor = '#000000';
				document.getElementById('d').style.backgroundColor = '#000000';
				console.log('Next turn: ' + this.currentPlayer + ' (Black!)');
				break;

			default:
				console.log('Not a player!');
				break;
};	};	}; // End of Class.

/*                          */
/*        Start Button      */
/*                          */

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
