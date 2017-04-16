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
		document.getElementById('show').style.display = 'block';
		document.getElementById('show').style.transition = '3s';
		document.getElementById('title').style.display = 'none';
		document.getElementById('startButton').style.display = 'none';
		document.getElementById('resetButton').style.display = 'initial';
		document.getElementById('grid').style.display = 'block';
		document.getElementById('howtoplay').style.display = 'none';
		this.end = false, // This.end turn to true, when the game end.
		this.count = 0, // Necessary to count until 42 (maximum moves in Connect Four).
		this.currentPlayer = 'Player 1', // By default, player 1 (black) play first.
		this.color = 'Black',
		this.board = 	[/* 0 */  null, /* 1 */  null, 	/* 2 */ null, 	/* 3 */  null, 	/* 4 */  null, 	/* 5 */   null, /* 6 */  null,
						 /* 7 */  null, /* 8 */  null, 	/* 9 */ null, 	/* 10 */ null, 	/* 11 */ null, 	/* 12 */  null, /* 13 */ null,
						 /* 14 */ null, /* 15 */ null,  /* 16 */null, 	/* 17 */ null,	/* 18 */ null, 	/* 19 */  null, /* 20 */ null,
						 /* 21 */ null, /* 22 */ null,  /* 23 */null, 	/* 24 */ null,  /* 25 */ null,  /* 26 */  null, /* 27 */ null,
						 /* 28 */ null, /* 29 */ null,  /* 30 */null, 	/* 31 */ null, 	/* 32 */ null, 	/* 33 */  null, /* 34 */ null,
						 /* 35 */ null, /* 36 */ null,  /* 37 */null, 	/* 38 */ null,	/* 39 */ null, 	/* 40 */  null, /* 41 */ null]
	};

/*                          */
/*           Moves          */
/*                          */

	moveToken() {
	console.log(this.currentPlayer + ' is playing.');
	let target = event.target;
	let token = document.getElementsByClassName('token');

	for (let i = 0; i < token.length; i += 1) { // Array of the class token.
		if (token[i] == target) { // To detect which of the seven tokens has been clicked.
			switch(token[i].value + i) { // document.getElementsByClassName('token').value = 0, so if I want to identify a particular token of the class token, I add 1.

			case 0: /* Token A & Column A */

				for (let b = 35; b >= 0; b -= 7){ // Checking from the bottom to the top of this.board array. (35, 28, 21, 14, 7 and 0)
					if (this.board[b] === null) { // If available space.
						for (let n = 5; n >= 0; n -= 1) { // Checking from the bottom to the top of one column.
							if (document.getElementById(n).style.backgroundColor === '') { // If no background color (equals to available space).
								let soundEffect = new Audio ('audio/token.mp3'); // Adding sound effect.
								soundEffect.play(); // Calling the sound effect.
									if ((this.currentPlayer === 'Player 1') && (this.end === false)) { // If current player is player 1 and game is in progress.
									document.getElementById(n).style.background = 'radial-gradient(#000000, #0C0C0C, #383838)'; // Black Gradient	
									document.getElementById(n).style.backgroundColor = '#000000'; // Black
									this.board[b] = this.color; // In this.board array, in the position b, add the current player's color (Black).
									this.result(); // Calling the function to check result.
									}
									else if ((this.currentPlayer === 'Player 2') && (this.end === false)) { // If current player is player 2 and game is in progress.
									document.getElementById(n).style.background = 'radial-gradient(#720303, #720303, #AA0808)'; // Red Gradient	
									document.getElementById(n).style.backgroundColor = '#720303'; // Red
									this.board[b] = this.color; // In this.board array, in the position b, add the current player's color (Red).
									this.result(); // Calling the function to check result.
									};	
								return; 
				};	};	};	};
				// User can't insert a token, if the column A is full.
				if (this.board[0] !== null) {
				token[0].removeEventListener('click', move);
				};
			break;

			case 1: /* Token B & Column B */
				for (let b = 36; b >= 1; b -= 7){ // Checking from the bottom to the top of this.board array. (36, 29, 22, 15, 8 and 1)
					if (this.board[b] === null) { // If available space.
						for (let n = 11; n >= 6; n -= 1) { // Checking from the bottom to the top of one column.
							if (document.getElementById(n).style.backgroundColor === '') { // If no background color (equals to available space).
								let soundEffect = new Audio ('audio/token.mp3'); // Adding sound effect.
								soundEffect.play(); // Calling the sound effect.
									if ((this.currentPlayer === 'Player 1') && (this.end === false)) { // If current player is player 1 and game is in progress.
									document.getElementById(n).style.background = 'radial-gradient(#000000, #0C0C0C, #383838)'; // Black Gradient	
									document.getElementById(n).style.backgroundColor = '#000000'; // Black
									this.board[b] = this.color; // In this.board array, in the position b, add the current player's color (Black).
									this.result(); // Calling the function to check result.
									}
									else if ((this.currentPlayer === 'Player 2') && (this.end === false)) { // If current player is player 2 and game is in progress.
									document.getElementById(n).style.background = 'radial-gradient(#720303, #720303, #AA0808)'; // Red Gradient	
									document.getElementById(n).style.backgroundColor = '#720303'; // Red
									this.board[b] = this.color; // In this.board array, in the position b, add the current player's color (Red).
									this.result(); // Calling the function to check result.
									};	
								return; 
				};	};	};	};
				// User can't insert a token, if the column B is full.
				if (this.board[1] !== null) {
				token[1].removeEventListener('click', move);
				};
			break;

			case 2: /* Token C & Column C */
				for (let b = 37; b >= 2; b -= 7){ // Checking from the bottom to the top of this.board array. (37, 30, 23, 16, 9 and 2)
					if (this.board[b] === null) { // If available space.
						for (let n = 17; n >= 12; n -= 1) { // Checking from the bottom to the top of one column.
							if (document.getElementById(n).style.backgroundColor === '') { // If no background color (equals to available space).
								let soundEffect = new Audio ('audio/token.mp3'); // Adding sound effect.
								soundEffect.play(); // Calling the sound effect.
									if ((this.currentPlayer === 'Player 1') && (this.end === false)) { // If current player is player 1 and game is in progress.
									document.getElementById(n).style.background = 'radial-gradient(#000000, #0C0C0C, #383838)'; // Black Gradient
									document.getElementById(n).style.backgroundColor = '#000000'; // Black
									this.board[b] = this.color; // In this.board array, in the position b, add the current player's color (Black).
									this.result(); // Calling the function to check result.
									}
									else if ((this.currentPlayer === 'Player 2') && (this.end === false)) { // If current player is player 2 and game is in progress.
									document.getElementById(n).style.background = 'radial-gradient(#720303, #720303, #AA0808)'; // Red Gradient	
									document.getElementById(n).style.backgroundColor = '#720303'; // Red
									this.board[b] = this.color; // In this.board array, in the position b, add the current player's color (Red).
									this.result(); // Calling the function to check result.
									};	
								return; 
				};	};	};	};
				// User can't insert a token, if the column C is full.
				if (this.board[2] !== null) {
				token[2].removeEventListener('click', move);
				};
			break;

			case 3: /* Token D & Column D */
				for (let b = 38; b >= 3; b -= 7){ // Checking from the bottom to the top of this.board array. (38, 31, 24, 17, 10 and 3)
					if (this.board[b] === null) { // If available space.
						for (let n = 23; n >= 18; n -= 1) { // Checking from the bottom to the top of one column.
							if (document.getElementById(n).style.backgroundColor === '') { // If no background color (equals to available space).
								let soundEffect = new Audio ('audio/token.mp3'); // Adding sound effect.
								soundEffect.play(); // Calling the sound effect.
									if ((this.currentPlayer === 'Player 1') && (this.end === false)) { // If current player is player 1 and game is in progress.
									document.getElementById(n).style.background = 'radial-gradient(#000000, #0C0C0C, #383838)'; // Black Gradient	
									document.getElementById(n).style.backgroundColor = '#000000'; // Black
									this.board[b] = this.color; // In this.board array, in the position b, add the current player's color (Black).
									this.result(); // Calling the function to check result.
									}
									else if ((this.currentPlayer === 'Player 2') && (this.end === false)) { // If current player is player 2 and game is in progress.
									document.getElementById(n).style.background = 'radial-gradient(#720303, #720303, #AA0808)'; // Red Gradient	
									document.getElementById(n).style.backgroundColor = '#720303'; // Red
									this.board[b] = this.color; // In this.board array, in the position b, add the current player's color (Red).
									this.result(); // Calling the function to check result.
									};	
								return; 
				};	};	};	};
				// User can't insert a token, if the column D is full.
				if (this.board[3] !== null) {
				token[3].removeEventListener('click', move);
				};
			break;

			case 4: /* Token E & Column E */
				for (let b = 39; b >= 4; b -= 7){ // Checking from the bottom to the top of this.board array. (39, 32, 25, 18, 11 and 4)
					if (this.board[b] === null) { // If available space.
						for (let n = 29; n >= 24; n -= 1) { // Checking from the bottom to the top of one column.
							if (document.getElementById(n).style.backgroundColor === '') { // If no background color (equals to available space).
								let soundEffect = new Audio ('audio/token.mp3'); // Adding sound effect.
								soundEffect.play(); // Calling the sound effect.
									if ((this.currentPlayer === 'Player 1') && (this.end === false)) { // If current player is player 1 and game is in progress.
									document.getElementById(n).style.background = 'radial-gradient(#000000, #0C0C0C, #383838)'; // Black Gradient	
									document.getElementById(n).style.backgroundColor = '#000000'; // Black
									this.board[b] = this.color; // In this.board array, in the position b, add the current player's color (Black).
									this.result(); // Calling the function to check result.
									}
									else if ((this.currentPlayer === 'Player 2') && (this.end === false)) { // If current player is player 2 and game is in progress.
									document.getElementById(n).style.background = 'radial-gradient(#720303, #720303, #AA0808)'; // Red Gradient	
									document.getElementById(n).style.backgroundColor = '#720303'; // Red
									this.board[b] = this.color; // In this.board array, in the position b, add the current player's color (Red).
									this.result(); // Calling the function to check result.
									};	
								return; 
				};	};	};	};
				// User can't insert a token, if the column E is full.
				if (this.board[4] !== null) {
				token[4].removeEventListener('click', move);
				};
			break;

			case 5:/* Token F & Column F */
				for (let b = 40; b >= 5; b -= 7){ // Checking from the bottom to the top of this.board array. (40, 33, 26, 19, 12 and 5)
					if (this.board[b] === null) { // If available space.
						for (let n = 35; n >= 30; n -= 1) { // Checking from the bottom to the top of one column.
							if (document.getElementById(n).style.backgroundColor === '') { // If no background color (equals to available space).
								let soundEffect = new Audio ('audio/token.mp3'); // Adding sound effect.
								soundEffect.play(); // Calling the sound effect.
									if ((this.currentPlayer === 'Player 1') && (this.end === false)) { // If current player is player 1 and game is in progress.
									document.getElementById(n).style.background = 'radial-gradient(#000000, #0C0C0C, #383838)'; // Black Gradient	
									document.getElementById(n).style.backgroundColor = '#000000'; // Black
									this.board[b] = this.color; // In this.board array, in the position b, add the current player's color (Black).
									this.result(); // Calling the function to check result.
									}
									else if ((this.currentPlayer === 'Player 2') && (this.end === false)) { // If current player is player 2 and game is in progress.
									document.getElementById(n).style.background = 'radial-gradient(#720303, #720303, #AA0808)'; // Red Gradient	
									document.getElementById(n).style.backgroundColor = '#720303'; // Red
									this.board[b] = this.color; // In this.board array, in the position b, add the current player's color (Red).
									this.result(); // Calling the function to check result.
									};	
								return; 
				};	};	};	};
				// User can't insert a token, if the column F is full.
				if (this.board[5] !== null) {
				token[5].removeEventListener('click', move);
				};
			break;

			case 6:/* Token G & Column G */
				for (let b = 41; b >= 6; b -= 7){ // Checking from the bottom to the top of this.board array. (41-last position in array-, 34, 27, 20, 13 and 6)
					if (this.board[b] === null) { // If available space.
						for (let n = 41; n >= 36; n -= 1) { // Checking from the bottom to the top of one column.
							if (document.getElementById(n).style.backgroundColor === '') { // If no background color (equals to available space).
								let soundEffect = new Audio ('audio/token.mp3'); // Adding sound effect.
								soundEffect.play(); // Calling the sound effect.
									if ((this.currentPlayer === 'Player 1') && (this.end === false)) { // If current player is player 1 and game is in progress.
									document.getElementById(n).style.background = 'radial-gradient(#000000, #0C0C0C, #383838)'; // Black Gradient	
									document.getElementById(n).style.backgroundColor = '#000000'; // Black
									this.board[b] = this.color; // In this.board array, in the position b, add the current player's color (Black).
									this.result(); // Calling the function to check result.
									}
									else if ((this.currentPlayer === 'Player 2') && (this.end === false)) { // If current player is player 2 and game is in progress.
									document.getElementById(n).style.background = 'radial-gradient(#720303, #720303, #AA0808)'; // Red Gradient		
									document.getElementById(n).style.backgroundColor = '#720303'; // Red
									this.board[b] = this.color; // In this.board array, in the position b, add the current player's color (Red).
									this.result(); // Calling the function to check result.
									};	
								return; 
				};	};	};	};
				// With this statement, user can't insert a token, if the column G is full.
				if (this.board[6] !== null) {
				token[6].removeEventListener('click', move);
				};
			break;

			default:
			console.log('Not a token.');
			break;
	};	};	};	};

/*                          */
/*          Result          */
/*                          */

	result() { 
	console.log('Checking if the player is a winner or tie... Otherwise, continue the game.');
	console.log(this.board); // Print the array in the console log. Show the available spaces (null), if any, and position of red and black tokens.

	this.count += 1; // Sum 1 on every move, until reach 42 (maximum moves).

	// Horizontal combinations Row 1

	if 	 ((((this.board[0] 	=== this.color) && (this.board[1]) 	=== this.color)
		&& ((this.board[1] 	=== this.color) && (this.board[2])  === this.color) 		
		&& ((this.board[2] 	=== this.color) && (this.board[3]) 	=== this.color))	

	|| 	  (((this.board[1] 	=== this.color) && (this.board[2]) 	=== this.color) 	
		&& ((this.board[2] 	=== this.color) && (this.board[3]) 	=== this.color) 	
		&& ((this.board[3] 	=== this.color) && (this.board[4]) 	=== this.color))

	||    (((this.board[2] 	=== this.color) && (this.board[3]) 	=== this.color) 	
		&& ((this.board[3] 	=== this.color) && (this.board[4]) 	=== this.color) 	
		&& ((this.board[4]	=== this.color) && (this.board[5]) 	=== this.color))	

	|| 	  (((this.board[3] 	=== this.color) && (this.board[4]) 	=== this.color) 	
		&& ((this.board[4] 	=== this.color) && (this.board[5]) 	=== this.color) 	
		&& ((this.board[5] 	=== this.color) && (this.board[6]) 	=== this.color))
	
	// Horizontal combinations Row 2

	|| 	  (((this.board[7] 	=== this.color) && (this.board[8]) 	=== this.color) 	
		&& ((this.board[8] 	=== this.color) && (this.board[9]) 	=== this.color) 	
		&& ((this.board[9] 	=== this.color) && (this.board[10]) === this.color))

	||    (((this.board[8] 	=== this.color) && (this.board[9]) 	=== this.color) 	
		&& ((this.board[9] 	=== this.color) && (this.board[10]) === this.color) 	
		&& ((this.board[10] === this.color) && (this.board[11]) === this.color))	

	|| 	  (((this.board[9] 	=== this.color) && (this.board[10]) === this.color) 	
		&& ((this.board[10] === this.color) && (this.board[11]) === this.color) 	
		&& ((this.board[11] === this.color) && (this.board[12]) === this.color))

	|| 	  (((this.board[10] === this.color) && (this.board[11]) === this.color) 	
		&& ((this.board[11] === this.color) && (this.board[12]) === this.color) 	
		&& ((this.board[12] === this.color) && (this.board[13]) === this.color))

	// Horizontal combinations Row 3

	|| 	  (((this.board[14] === this.color) && (this.board[15]) === this.color) 	
		&& ((this.board[15] === this.color) && (this.board[16]) === this.color) 	
		&& ((this.board[16] === this.color) && (this.board[17]) === this.color))

	|| 	  (((this.board[15] === this.color) && (this.board[16]) === this.color) 	
		&& ((this.board[16] === this.color) && (this.board[17]) === this.color) 	
		&& ((this.board[17] === this.color) && (this.board[18]) === this.color))

	|| 	  (((this.board[16] === this.color) && (this.board[17]) === this.color) 	
		&& ((this.board[17] === this.color) && (this.board[18]) === this.color) 	
		&& ((this.board[18] === this.color) && (this.board[19]) === this.color))

	|| 	  (((this.board[17] === this.color) && (this.board[18]) === this.color) 	
		&& ((this.board[18] === this.color) && (this.board[19]) === this.color) 	
		&& ((this.board[19] === this.color) && (this.board[20]) === this.color))

	// Horizontal combinations Row 4

	|| 	  (((this.board[21] === this.color) && (this.board[22]) === this.color) 	
		&& ((this.board[22] === this.color) && (this.board[23]) === this.color) 	
		&& ((this.board[23] === this.color) && (this.board[24]) === this.color))

	|| 	  (((this.board[22] === this.color) && (this.board[23]) === this.color) 	
		&& ((this.board[23] === this.color) && (this.board[24]) === this.color) 	
		&& ((this.board[24] === this.color) && (this.board[25]) === this.color))

	|| 	  (((this.board[23] === this.color) && (this.board[24]) === this.color) 	
		&& ((this.board[24] === this.color) && (this.board[25]) === this.color) 	
		&& ((this.board[25] === this.color) && (this.board[26]) === this.color))

	|| 	  (((this.board[24] === this.color) && (this.board[25]) === this.color) 	
		&& ((this.board[25] === this.color) && (this.board[26]) === this.color) 	
		&& ((this.board[26] === this.color) && (this.board[27]) === this.color))

	// Horizontal combinations Row 5

	|| 	  (((this.board[28] === this.color) && (this.board[29]) === this.color) 	
		&& ((this.board[29] === this.color) && (this.board[30]) === this.color) 	
		&& ((this.board[30] === this.color) && (this.board[31]) === this.color))

	|| 	  (((this.board[29] === this.color) && (this.board[30]) === this.color) 	
		&& ((this.board[30] === this.color) && (this.board[31]) === this.color) 	
		&& ((this.board[31] === this.color) && (this.board[32]) === this.color))

	|| 	  (((this.board[30] === this.color) && (this.board[31]) === this.color) 	
		&& ((this.board[31] === this.color) && (this.board[32]) === this.color) 	
		&& ((this.board[32] === this.color) && (this.board[33]) === this.color))

	|| 	  (((this.board[31] === this.color) && (this.board[32]) === this.color) 	
		&& ((this.board[32] === this.color) && (this.board[33]) === this.color) 	
		&& ((this.board[33] === this.color) && (this.board[34]) === this.color))

	// Horizontal combinations Row 6

	|| 	  (((this.board[35] === this.color) && (this.board[36]) === this.color) 	
		&& ((this.board[36] === this.color) && (this.board[37]) === this.color) 	
		&& ((this.board[37] === this.color) && (this.board[38]) === this.color))

	|| 	  (((this.board[36] === this.color) && (this.board[37]) === this.color) 	
		&& ((this.board[37] === this.color) && (this.board[38]) === this.color) 	
		&& ((this.board[38] === this.color) && (this.board[39]) === this.color))

	|| 	  (((this.board[37] === this.color) && (this.board[38]) === this.color) 	
		&& ((this.board[38] === this.color) && (this.board[39]) === this.color) 	
		&& ((this.board[39] === this.color) && (this.board[40]) === this.color))

	|| 	  (((this.board[38] === this.color) && (this.board[39]) === this.color) 	
		&& ((this.board[39] === this.color) && (this.board[40]) === this.color) 	
		&& ((this.board[40] === this.color) && (this.board[41]) === this.color))

	// Vertical combinations Column 1

	||    (((this.board[0]  === this.color) && (this.board[7])  === this.color) 		
		&& ((this.board[7]  === this.color) && (this.board[14]) === this.color) 	
		&& ((this.board[14] === this.color) && (this.board[21]) === this.color)) 

	||    (((this.board[7]  === this.color) && (this.board[14]) === this.color) 		
		&& ((this.board[14] === this.color) && (this.board[21]) === this.color) 	
		&& ((this.board[21] === this.color) && (this.board[28]) === this.color)) 

	||    (((this.board[14] === this.color) && (this.board[21]) === this.color) 	
		&& ((this.board[21] === this.color) && (this.board[28]) === this.color) 	
		&& ((this.board[28] === this.color)	&& (this.board[35])	=== this.color))

	// Vertical combinations Column 2

	||    (((this.board[1]  === this.color) && (this.board[8])  === this.color) 		
		&& ((this.board[8]  === this.color) && (this.board[15]) === this.color) 	
		&& ((this.board[15] === this.color) && (this.board[22]) === this.color)) 

	||    (((this.board[8]  === this.color) && (this.board[15]) === this.color) 		
		&& ((this.board[15] === this.color) && (this.board[22]) === this.color) 	
		&& ((this.board[22] === this.color) && (this.board[29]) === this.color)) 

	||    (((this.board[15] === this.color) && (this.board[22]) === this.color) 	
		&& ((this.board[22] === this.color) && (this.board[29]) === this.color) 	
		&& ((this.board[29] === this.color)	&& (this.board[36])	=== this.color))

	// Vertical combinations Column 3

	||    (((this.board[2]  === this.color) && (this.board[9])  === this.color) 		
		&& ((this.board[9]  === this.color) && (this.board[16]) === this.color) 	
		&& ((this.board[16] === this.color) && (this.board[23]) === this.color)) 

	||    (((this.board[9]  === this.color) && (this.board[16]) === this.color) 		
		&& ((this.board[16] === this.color) && (this.board[23]) === this.color) 	
		&& ((this.board[23] === this.color) && (this.board[30]) === this.color)) 

	||    (((this.board[16] === this.color) && (this.board[23]) === this.color) 	
		&& ((this.board[23] === this.color) && (this.board[30]) === this.color) 	
		&& ((this.board[30] === this.color)	&& (this.board[37])	=== this.color))

	// Vertical combinations Column 4

	||    (((this.board[3]  === this.color) && (this.board[10])  === this.color) 		
		&& ((this.board[10] === this.color) && (this.board[17]) === this.color) 	
		&& ((this.board[17] === this.color) && (this.board[24]) === this.color)) 

	||    (((this.board[10] === this.color) && (this.board[17]) === this.color) 		
		&& ((this.board[17] === this.color) && (this.board[24]) === this.color) 	
		&& ((this.board[24] === this.color) && (this.board[31]) === this.color)) 

	||    (((this.board[17] === this.color) && (this.board[24]) === this.color) 	
		&& ((this.board[24] === this.color) && (this.board[31]) === this.color) 	
		&& ((this.board[31] === this.color)	&& (this.board[38])	=== this.color))

	// Vertical combinations Column 5

	||    (((this.board[4]  === this.color) && (this.board[11]) === this.color) 		
		&& ((this.board[11] === this.color) && (this.board[18]) === this.color) 	
		&& ((this.board[18] === this.color) && (this.board[25]) === this.color)) 

	||    (((this.board[11] === this.color) && (this.board[18]) === this.color) 		
		&& ((this.board[18] === this.color) && (this.board[25]) === this.color) 	
		&& ((this.board[25] === this.color) && (this.board[32]) === this.color)) 

	||    (((this.board[18] === this.color) && (this.board[25]) === this.color) 	
		&& ((this.board[25] === this.color) && (this.board[32]) === this.color) 	
		&& ((this.board[32] === this.color)	&& (this.board[39])	=== this.color))

	// Vertical combinations Column 6

	||    (((this.board[5]  === this.color) && (this.board[12]) === this.color) 		
		&& ((this.board[12] === this.color) && (this.board[19]) === this.color) 	
		&& ((this.board[19] === this.color) && (this.board[26]) === this.color)) 

	||    (((this.board[12] === this.color) && (this.board[19]) === this.color) 		
		&& ((this.board[19] === this.color) && (this.board[26]) === this.color) 	
		&& ((this.board[26] === this.color) && (this.board[33]) === this.color)) 

	||    (((this.board[19] === this.color) && (this.board[26]) === this.color) 	
		&& ((this.board[26] === this.color) && (this.board[33]) === this.color) 	
		&& ((this.board[33] === this.color)	&& (this.board[40])	=== this.color))

	// Vertical combinations Column 7

	||    (((this.board[6]  === this.color) && (this.board[13]) === this.color) 		
		&& ((this.board[13] === this.color) && (this.board[20]) === this.color) 	
		&& ((this.board[20] === this.color) && (this.board[27]) === this.color)) 

	||    (((this.board[13] === this.color) && (this.board[20]) === this.color) 		
		&& ((this.board[20] === this.color) && (this.board[27]) === this.color) 	
		&& ((this.board[27] === this.color) && (this.board[34]) === this.color)) 

	||    (((this.board[20] === this.color) && (this.board[27]) === this.color) 	
		&& ((this.board[27] === this.color) && (this.board[34]) === this.color) 	
		&& ((this.board[34] === this.color)	&& (this.board[41])	=== this.color))

	// Diagonal combinations (Left to Right)

	|| 	  (((this.board[14] === this.color) && (this.board[22]) === this.color) 
		&& ((this.board[22] === this.color) && (this.board[30]) === this.color) 
		&& ((this.board[30] === this.color) && (this.board[38])	=== this.color))

	|| 	  (((this.board[7]  === this.color) && (this.board[15]) === this.color) 
		&& ((this.board[15] === this.color) && (this.board[23]) === this.color) 
		&& ((this.board[23] === this.color) && (this.board[31])	=== this.color))

	|| 	  (((this.board[15] === this.color) && (this.board[23]) === this.color) 
		&& ((this.board[23] === this.color) && (this.board[31]) === this.color) 
		&& ((this.board[31] === this.color) && (this.board[39])	=== this.color))

	|| 	  (((this.board[0] 	=== this.color) && (this.board[8]) 	=== this.color) 
		&& ((this.board[8] 	=== this.color) && (this.board[16]) === this.color) 
		&& ((this.board[16]	=== this.color) && (this.board[24])	=== this.color)) 

	|| 	  (((this.board[8]  === this.color)	&& (this.board[16]) === this.color) 
		&& ((this.board[16] === this.color) && (this.board[24]) === this.color) 
		&& ((this.board[24] === this.color) && (this.board[32])	=== this.color))

	|| 	  (((this.board[16] === this.color) && (this.board[24]) === this.color) 
		&& ((this.board[24] === this.color) && (this.board[32]) === this.color) 
		&& ((this.board[32] === this.color) && (this.board[40])	=== this.color))

	|| 	  (((this.board[1] 	=== this.color) && (this.board[9]) 	=== this.color) 
		&& ((this.board[9] 	=== this.color) && (this.board[17]) === this.color) 
		&& ((this.board[17]	=== this.color) && (this.board[25])	=== this.color)) 

	|| 	  (((this.board[9]  === this.color) && (this.board[17]) === this.color) 
		&& ((this.board[17] === this.color) && (this.board[25]) === this.color) 
		&& ((this.board[25] === this.color) && (this.board[33])	=== this.color)) 
	
	|| 	  (((this.board[17] === this.color) && (this.board[25]) === this.color) 
		&& ((this.board[25] === this.color) && (this.board[33]) === this.color) 
		&& ((this.board[33] === this.color) && (this.board[41])	=== this.color)) 

	|| 	  (((this.board[2]  === this.color) && (this.board[10]) === this.color) 
		&& ((this.board[10] === this.color) && (this.board[18]) === this.color) 
		&& ((this.board[18] === this.color) && (this.board[26])	=== this.color)) 

	|| 	  (((this.board[10] === this.color) && (this.board[18]) === this.color) 
		&& ((this.board[18] === this.color) && (this.board[26]) === this.color) 
		&& ((this.board[26] === this.color) && (this.board[34])	=== this.color)) 

	|| 	  (((this.board[3]	=== this.color) && (this.board[11]) === this.color) 
		&& ((this.board[11] === this.color) && (this.board[19]) === this.color) 
		&& ((this.board[19] === this.color) && (this.board[27])	=== this.color))

	// Diagonal combinations (Right to Left)

	|| 	  (((this.board[20] === this.color) && (this.board[26]) === this.color) 
		&& ((this.board[26] === this.color) && (this.board[32]) === this.color) 
		&& ((this.board[32] === this.color) && (this.board[38])	=== this.color))

	|| 	  (((this.board[13] === this.color) && (this.board[19]) === this.color) 
		&& ((this.board[19] === this.color) && (this.board[25]) === this.color) 
		&& ((this.board[25] === this.color) && (this.board[31])	=== this.color))

	|| 	  (((this.board[19] === this.color) && (this.board[25]) === this.color) 
		&& ((this.board[25] === this.color) && (this.board[31]) === this.color) 
		&& ((this.board[31] === this.color) && (this.board[37])	=== this.color))

	|| 	  (((this.board[6] 	=== this.color) && (this.board[12]) === this.color) 
		&& ((this.board[12] === this.color) && (this.board[18]) === this.color) 
		&& ((this.board[18]	=== this.color) && (this.board[24])	=== this.color)) 

	|| 	  (((this.board[12] === this.color)&& (this.board[18]) 	=== this.color) 
		&& ((this.board[18] === this.color) && (this.board[24]) === this.color) 
		&& ((this.board[24] === this.color) && (this.board[30])	=== this.color))

	|| 	  (((this.board[18] === this.color) && (this.board[24]) === this.color) 
		&& ((this.board[24] === this.color) && (this.board[30]) === this.color) 
		&& ((this.board[30] === this.color) && (this.board[36])	=== this.color))

	|| 	  (((this.board[5] 	=== this.color) && (this.board[11]) === this.color) 
		&& ((this.board[11] === this.color) && (this.board[17]) === this.color) 
		&& ((this.board[17]	=== this.color) && (this.board[23])	=== this.color)) 

	|| 	  (((this.board[11] === this.color) && (this.board[17]) === this.color) 
		&& ((this.board[17] === this.color) && (this.board[23]) === this.color) 
		&& ((this.board[23] === this.color) && (this.board[29])	=== this.color)) 
	
	|| 	  (((this.board[17] === this.color) && (this.board[23]) === this.color) 
		&& ((this.board[23] === this.color) && (this.board[29]) === this.color) 
		&& ((this.board[29] === this.color) && (this.board[35])	=== this.color)) 

	|| 	  (((this.board[4]  === this.color) && (this.board[10]) === this.color) 
		&& ((this.board[10] === this.color) && (this.board[16]) === this.color) 
		&& ((this.board[16] === this.color) && (this.board[22])	=== this.color)) 

	|| 	  (((this.board[10] === this.color) && (this.board[16]) === this.color) 
		&& ((this.board[16] === this.color) && (this.board[22]) === this.color) 
		&& ((this.board[22] === this.color) && (this.board[28])	=== this.color)) 

	|| 	  (((this.board[3]	=== this.color) && (this.board[9]) 	=== this.color) 
		&& ((this.board[9] 	=== this.color) && (this.board[15]) === this.color) 
		&& ((this.board[15] === this.color) && (this.board[21])	=== this.color))) { 
		this.end = true;
		document.getElementById('drop').style.display = 'none'; // Tokens in the top of the grid will be hidden, so players can't click.
		document.getElementById('currentP').style.display = 'none'; // Hide the current player message.
		document.getElementById('message').style.display = 'block'; // Turn from none to block, the id where I want to display the winner message.
		document.getElementById('message').innerHTML = "Congratulations " + this.currentPlayer + " (" + this.color + "), you won!"; // Display in the browser the result.
		console.log("Congratulations " + this.currentPlayer + " (" + this.color + "), you won!"); 
	}
	else if (this.count === 42) {
		this.end = true;
		document.getElementById('drop').style.display = 'none'; // Tokens in the top of the grid will be hidden, so players can't click.
		document.getElementById('currentP').style.display = 'none'; // Hide the current player message.
		document.getElementById('message').style.display = 'block'; // Turn from none to block, the id where I want to display that the game end in a tie.
		document.getElementById('message').innerHTML = "It's a tie!"; // Display in the browser the result.
		console.log("It's a tie!");
	}
	else {
		this.switchPlayer(); // If no winner or tie, continue the game!
	};
	}; // End of result.

/*                          */
/*   Turns (change player)  */
/*                          */

	switchPlayer() {
		switch(this.currentPlayer) {
			case 'Player 1': // When player is 1, change to player 2 and change the color of the clickeable tokens.
				this.currentPlayer = 'Player 2';
				this.color = 'Red';
				document.getElementById('player').innerHTML = 'Player 2 (Red!)';
				document.getElementById('player').style.color = '#AA0808';
				document.getElementById('a').style.backgroundColor = '#AA0808'; // In case that the browser does not support gradient.
				document.getElementById('b').style.backgroundColor = '#AA0808';
				document.getElementById('c').style.backgroundColor = '#AA0808';
				document.getElementById('d').style.backgroundColor = '#AA0808';
				document.getElementById('e').style.backgroundColor = '#AA0808';
				document.getElementById('f').style.backgroundColor = '#AA0808';
				document.getElementById('g').style.backgroundColor = '#AA0808';
				document.getElementById('a').style.background = 'radial-gradient(#720303, #720303, #AA0808)';
				document.getElementById('b').style.background = 'radial-gradient(#720303, #720303, #AA0808)';
				document.getElementById('c').style.background = 'radial-gradient(#720303, #720303, #AA0808)';
				document.getElementById('d').style.background = 'radial-gradient(#720303, #720303, #AA0808)';
				document.getElementById('e').style.background = 'radial-gradient(#720303, #720303, #AA0808)';
				document.getElementById('f').style.background = 'radial-gradient(#720303, #720303, #AA0808)';
				document.getElementById('g').style.background = 'radial-gradient(#720303, #720303, #AA0808)';
				console.log('Next turn: ' + this.currentPlayer + ' (Red!)');
				break;

			case 'Player 2': // When player is 2, change to player 1 and change the color of the clickeable tokens.
				this.currentPlayer = 'Player 1';
				this.color = 'Black';
				document.getElementById('player').innerHTML = 'Player 1 (Black!)';
				document.getElementById('player').style.color = '#000000';
				document.getElementById('a').style.backgroundColor = '#000000'; // In case that the browser does not support gradient.
				document.getElementById('b').style.backgroundColor = '#000000';
				document.getElementById('c').style.backgroundColor = '#000000';
				document.getElementById('d').style.backgroundColor = '#000000';
				document.getElementById('e').style.backgroundColor = '#000000';
				document.getElementById('f').style.backgroundColor = '#000000';
				document.getElementById('g').style.backgroundColor = '#000000';
				document.getElementById('a').style.background = 'radial-gradient(#000000, #0C0C0C, #383838)';
				document.getElementById('b').style.background = 'radial-gradient(#000000, #0C0C0C, #383838)';
				document.getElementById('c').style.background = 'radial-gradient(#000000, #0C0C0C, #383838)';
				document.getElementById('d').style.background = 'radial-gradient(#000000, #0C0C0C, #383838)';
				document.getElementById('e').style.background = 'radial-gradient(#000000, #0C0C0C, #383838)';
				document.getElementById('f').style.background = 'radial-gradient(#000000, #0C0C0C, #383838)';
				document.getElementById('g').style.background = 'radial-gradient(#000000, #0C0C0C, #383838)';
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
		ConnectFour.init(); // Initialization of the game.

		let move = function() { // For the event listener.
			ConnectFour.moveToken(); 
		};

		// Adding event listener to tokens.
		let tokens = document.getElementsByClassName('token');
		for(token of tokens) {
		  token.addEventListener('click', move);
		};
	};

/*                          */
/*        How to Play       */
/*                          */

	function instructions() {
		// Instructions are hidden, until the user press 'How to Play'.
		document.getElementById('grid').style.display = 'none';
		document.getElementById('howtoplay').style.display = 'initial';
	}

