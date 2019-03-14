// State Variables Assignment
// Alex Chen
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let gameState = "mainMenu";
let button;
let turn = 0;
let winState = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  resizeScalars();
  textAlign(CENTER, CENTER);
  textSize(100);
  createBoard();
  noCursor();
}

function preload() {
  playButton = loadImage("assets/play.png");
  instructionsButton = loadImage("assets/play.png");
  optionsButton = loadImage("assets/play.png");
}

function windowResized() {
  createCanvas(windowWidth, windowHeight);
  resizeScalars();
}

function resizeScalars() {
  button = {
    ScalarWidth: windowWidth / 5,
    ScalarHeight: windowHeight / 5,
    RadiusWidth: windowWidth / 5 / 2,
    RadiusHeight: windowHeight / 5 / 2,
  }
}


// Pointer cursor

function createBoard() {

}

function drawBoardLines() {
	background(255);
  line(windowWidth / 3, 0, windowWidth /3, windowHeight);
  line(windowWidth - windowWidth / 3, 0, windowWidth - windowWidth / 3, windowHeight);
  line(0, windowHeight / 3, windowWidth, windowHeight / 3);
  line(0, windowHeight - windowHeight / 3, windowWidth, windowHeight - windowHeight / 3);
}



function draw() {
  background(255);
  pickingGameState();
  drawCursor();
  console.log(gameState)
}


function pickingGameState() {
  if (gameState === "mainMenu") {
    mainMenu();
  }
  if (gameState === "optionsMenu") {
    optionsMenu();
  }
  if (gameState === "instructionsMenu") {
    instructionsMenu();
  }
  if (gameState === "game") {
    game();
  }
}


function mainMenu() {
  image(playButton, (windowWidth / 2) - button.RadiusWidth, (windowHeight / 2) - button.RadiusHeight, button.ScalarWidth, button.ScalarHeight);
  if (mouseIsPressed && mouseX < windowWidth / 2 + button.RadiusWidth && mouseX > windowWidth / 2 - button.RadiusWidth && mouseY < windowHeight / 2 + button.RadiusHeight && mouseY > windowHeight / 2 - button.RadiusHeight) {
    gameState = "game";
  }

}

function optionsMenu() {

}

function instructionsMenu() {

}

function game() {
  drawBoardLines();
}

function drawCursor() {
  if (gameState != "game") {
    fill(255, 0, 0)
    noStroke()
    ellipse(mouseX, mouseY, 10, 10)
  }
  else if (gameState === "game") {
    fill(0)
    text("X", mouseX, mouseY)
  //   if (turn === 1) {
  //     text("X", mouseX, mouseY);
  //   }
  //   if (turn === 2) {
  //     text("O", mouseX, mouseY);
  //   }
  }
}



















// let tic;


// function draw() {

// 	drawBoard();

	

// 	for(let i = 0; i < tic.length; i++) {

// 		for(let j = 0; j < tic[i].length; j++) {

// 			if (tic[i][j] === 1) {

// 				text("X", i * 100 + 50, j * 100 + 50);

// 			}

// 			else if (tic[i][j] === 2) {

// 				text("O", i * 100 + 50, j * 100 + 50);

// 			}

// 		}

// 	}

// }





// function initBoard() {

// 	tic = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

// }


// function mousePressed() {

// 	let temp1 = Math.floor(mouseX/100);

// 	let temp2 = Math.floor(mouseY/100);

// 	if (tic[temp1][temp2] === 0) {

// 		tic[temp1][temp2] = turn;

// 		if (turn === 1) {

// 			turn = 2;

// 		}

// 		else {

// 			turn = 1;

// 		}

// 	}

// 	winner();

// }


// function winner() {

// 	for(let i = 0; i < tic.length; i++) {

// 		winState = isWinner(tic[i][0], tic[i][1], tic[i][2]);

// 		// print(winState);

// 	}

// 	if (winState > 0) {

// 		if (winState === 1) {

// 			textSize(10);

// 			text("Player 1 wins!", width/2, height/2);

// 			noLoop();

// 		}

// 	}

// }


// function isWinner(a, b, c) {

// 	print(str(a) + str(b) + str(c));

// 	if(a > 0 && b > 0 && c > 0) {

// 		if (a === b && b === c) {

// 			return a;

// 		}

// 		else {

// 			return 0;

// 		}

// 	}

// 	else {

// 		return 0;

// 	}

// }