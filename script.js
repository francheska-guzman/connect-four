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
		this.end = false,
		this.count = 0,
		this.currentPlayer = 'Player 1',
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

	for (let i = 0; i < token.length; i += 1) {
		if (token[i] == target) {
			switch(token[i].value + i) {

			case 0: /* Token A & Column A */

				for (let b = 35; b >= 0; b -= 7){ // this.board array
					if (this.board[b] === null) {
						for (let n = 5; n >= 0; n -= 1) { // Checking from the bottom to the top of one column.
							if (document.getElementById(n).style.backgroundColor === '') {
								if ((this.currentPlayer === 'Player 1') && (this.end === false)) {
								document.getElementById(n).style.background = 'radial-gradient(#282727, #141313, #000000)'; // Black Gradient	
								document.getElementById(n).style.backgroundColor = '#000000'; // Black
								this.board[b] = this.color;
								this.result();

								}
								else if ((this.currentPlayer === 'Player 2') && (this.end === false)) {
								document.getElementById(n).style.background = 'radial-gradient(#A00000, #5e0101, #560303)'; // Red Gradient	
								document.getElementById(n).style.backgroundColor = '#A00000'; // Red
								this.board[b] = this.color;
								this.result();
								};	
								return; 
				};	};	};	};
			break;

			case 1: /* Token B & Column B */
				for (let b = 36; b >= 1; b -= 7){ // this.board array
					if (this.board[b] === null) {
						for (let n = 11; n >= 6; n -= 1) { // Checking from the bottom to the top of one column.
							if (document.getElementById(n).style.backgroundColor === '') {
								if ((this.currentPlayer === 'Player 1') && (this.end === false)) {
								document.getElementById(n).style.background = 'radial-gradient(#282727, #141313, #000000)'; // Black Gradient	
								document.getElementById(n).style.backgroundColor = '#000000'; // Black
								this.board[b] = this.color;
								this.result();

								}
								else if ((this.currentPlayer === 'Player 2') && (this.end === false)) {
								document.getElementById(n).style.background = 'radial-gradient(#A00000, #5e0101, #560303)'; // Red Gradient	
								document.getElementById(n).style.backgroundColor = '#A00000'; // Red
								this.board[b] = this.color;
								this.result();
								};	
								return; 
				};	};	};	};
			break;

			case 2: /* Token C & Column C */
				for (let b = 37; b >= 2; b -= 7){ // this.board array
					if (this.board[b] === null) {
						for (let n = 17; n >= 12; n -= 1) { // Checking from the bottom to the top of one column.
							if (document.getElementById(n).style.backgroundColor === '') {
								if ((this.currentPlayer === 'Player 1') && (this.end === false)) {
								document.getElementById(n).style.background = 'radial-gradient(#282727, #141313, #000000)'; // Black Gradient	
								document.getElementById(n).style.backgroundColor = '#000000'; // Black
								this.board[b] = this.color;
								this.result();

								}
								else if ((this.currentPlayer === 'Player 2') && (this.end === false)) {
								document.getElementById(n).style.background = 'radial-gradient(#A00000, #5e0101, #560303)'; // Red Gradient	
								document.getElementById(n).style.backgroundColor = '#A00000'; // Red
								this.board[b] = this.color;
								this.result();
								};	
								return; 
				};	};	};	};
			break;

			case 3: /* Token D & Column D */
				for (let b = 38; b >= 3; b -= 7){ // this.board array
					if (this.board[b] === null) {
						for (let n = 23; n >= 18; n -= 1) { // Checking from the bottom to the top of one column.
							if (document.getElementById(n).style.backgroundColor === '') {
								if ((this.currentPlayer === 'Player 1') && (this.end === false)) {
								document.getElementById(n).style.background = 'radial-gradient(#282727, #141313, #000000)'; // Black Gradient	
								document.getElementById(n).style.backgroundColor = '#000000'; // Black
								this.board[b] = this.color;
								this.result();

								}
								else if ((this.currentPlayer === 'Player 2') && (this.end === false)) {
								document.getElementById(n).style.background = 'radial-gradient(#A00000, #5e0101, #560303)'; // Red Gradient	
								document.getElementById(n).style.backgroundColor = '#A00000'; // Red
								this.board[b] = this.color;
								this.result();
								};	
								return; 
				};	};	};	};
			break;

			case 4: /* Token E & Column E */
				for (let b = 39; b >= 4; b -= 7){ // this.board array
					if (this.board[b] === null) {
						for (let n = 29; n >= 24; n -= 1) { // Checking from the bottom to the top of one column.
							if (document.getElementById(n).style.backgroundColor === '') {
								if ((this.currentPlayer === 'Player 1') && (this.end === false)) {
								document.getElementById(n).style.background = 'radial-gradient(#282727, #141313, #000000)'; // Black Gradient	
								document.getElementById(n).style.backgroundColor = '#000000'; // Black
								this.board[b] = this.color;
								this.result();

								}
								else if ((this.currentPlayer === 'Player 2') && (this.end === false)) {
								document.getElementById(n).style.background = 'radial-gradient(#A00000, #5e0101, #560303)'; // Red Gradient	
								document.getElementById(n).style.backgroundColor = '#A00000'; // Red
								this.board[b] = this.color;
								this.result();
								};	
								return; 
				};	};	};	};
			break;

			case 5:/* Token F & Column F */
				for (let b = 40; b >= 5; b -= 7){ // this.board array
					if (this.board[b] === null) {
						for (let n = 35; n >= 30; n -= 1) { // Checking from the bottom to the top of one column.
							if (document.getElementById(n).style.backgroundColor === '') {
								if ((this.currentPlayer === 'Player 1') && (this.end === false)) {
								document.getElementById(n).style.background = 'radial-gradient(#282727, #141313, #000000)'; // Black Gradient	
								document.getElementById(n).style.backgroundColor = '#000000'; // Black
								this.board[b] = this.color;
								this.result();

								}
								else if ((this.currentPlayer === 'Player 2') && (this.end === false)) {
								document.getElementById(n).style.background = 'radial-gradient(#A00000, #5e0101, #560303)'; // Red Gradient	
								document.getElementById(n).style.backgroundColor = '#A00000'; // Red
								this.board[b] = this.color;
								this.result();
								};	
								return; 
				};	};	};	};
			break;

			case 6:/* Token G & Column G */
				for (let b = 41; b >= 6; b -= 7){ // this.board array
					if (this.board[b] === null) {
						for (let n = 41; n >= 36; n -= 1) { // Checking from the bottom to the top of one column.
							if (document.getElementById(n).style.backgroundColor === '') {
								if ((this.currentPlayer === 'Player 1') && (this.end === false)) {
								document.getElementById(n).style.background = 'radial-gradient(#282727, #141313, #000000)'; // Black Gradient	
								document.getElementById(n).style.backgroundColor = '#000000'; // Black
								this.board[b] = this.color;
								this.result();

								}
								else if ((this.currentPlayer === 'Player 2') && (this.end === false)) {
								document.getElementById(n).style.background = 'radial-gradient(#A00000, #5e0101, #560303)'; // Red Gradient	
								document.getElementById(n).style.backgroundColor = '#A00000'; // Red
								this.board[b] = this.color;
								this.result();
								};	
								return; 
				};	};	};	};
			break;

			default:
			console.log('Not a token.');
			break;
			};
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
		document.getElementById('drop').style.display = 'none';
		document.getElementById('player').style.display = 'none';
		document.getElementById('message').style.display = 'block';
		document.getElementById('message').innerHTML = "Congratulations " + this.currentPlayer + ", you won!"; 
	}
	else if (this.count === 42) {
		this.end = true;
		document.getElementById('drop').style.display = 'none';
		document.getElementById('player').style.display = 'none';
		document.getElementById('message').style.display = 'block';
		document.getElementById('message').innerHTML = "It's a tie!";
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
				this.color = 'Red';
				document.getElementById('player').innerHTML = 'Current Player: Red';
				document.getElementById('player').style.color = '#A00000';
				document.getElementById('a').style.backgroundColor = '#A00000';
				document.getElementById('b').style.backgroundColor = '#A00000';
				document.getElementById('c').style.backgroundColor = '#A00000';
				document.getElementById('d').style.backgroundColor = '#A00000';
				document.getElementById('e').style.backgroundColor = '#A00000';
				document.getElementById('f').style.backgroundColor = '#A00000';
				document.getElementById('g').style.backgroundColor = '#A00000';
				document.getElementById('a').style.background = 'radial-gradient(#A00000, #5e0101, #560303)';
				document.getElementById('b').style.background = 'radial-gradient(#A00000, #5e0101, #560303)';
				document.getElementById('c').style.background = 'radial-gradient(#A00000, #5e0101, #560303)';
				document.getElementById('d').style.background = 'radial-gradient(#A00000, #5e0101, #560303)';
				document.getElementById('e').style.background = 'radial-gradient(#A00000, #5e0101, #560303)';
				document.getElementById('f').style.background = 'radial-gradient(#A00000, #5e0101, #560303)';
				document.getElementById('g').style.background = 'radial-gradient(#A00000, #5e0101, #560303)';
				console.log('Next turn: ' + this.currentPlayer + ' (Red!)');
				break;

			case 'Player 2':
				this.currentPlayer = 'Player 1';
				this.color = 'Black';
				document.getElementById('player').innerHTML = 'Current Player: Black';
				document.getElementById('player').style.color = '#000000';
				document.getElementById('a').style.backgroundColor = '#000000';
				document.getElementById('b').style.backgroundColor = '#000000';
				document.getElementById('c').style.backgroundColor = '#000000';
				document.getElementById('d').style.backgroundColor = '#000000';
				document.getElementById('e').style.backgroundColor = '#000000';
				document.getElementById('f').style.backgroundColor = '#000000';
				document.getElementById('g').style.backgroundColor = '#000000';
				document.getElementById('a').style.background = 'radial-gradient(#282727, #141313, #000000)';
				document.getElementById('b').style.background = 'radial-gradient(#282727, #141313, #000000)';
				document.getElementById('c').style.background = 'radial-gradient(#282727, #141313, #000000)';
				document.getElementById('d').style.background = 'radial-gradient(#282727, #141313, #000000)';
				document.getElementById('e').style.background = 'radial-gradient(#282727, #141313, #000000)';
				document.getElementById('f').style.background = 'radial-gradient(#282727, #141313, #000000)';
				document.getElementById('g').style.background = 'radial-gradient(#282727, #141313, #000000)';
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
		  token.addEventListener('click', move)
	};	};
