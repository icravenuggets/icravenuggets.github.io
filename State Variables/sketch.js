// State Variables Assignment
// Alex Chen
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// - explain state variables and their use
// - arrays
// - simple ai

let gameState = "mainMenu";
let button, turn, blockSizeX, blockSizeY, clickSpotX, clickSpotY;
let winState = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  resizeScalars();
  textAlign(CENTER, CENTER);
  textSize(100);
  createBoard();
  noCursor();
  turn = floor(random(1, 3));
  initiateBoard();
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
  };
  blockSizeX = windowWidth / 3;
  blockSizeY = windowHeight / 3;
}


// Pointer cursor

function createBoard() {

}

function drawBoardLines() {
  background(255);
  line(blockSizeX, 0, blockSizeX, windowHeight);
  line(windowWidth - blockSizeX, 0, windowWidth - blockSizeX, windowHeight);
  line(0, blockSizeY, windowWidth, blockSizeY);
  line(0, windowHeight - blockSizeY, windowWidth, windowHeight - blockSizeY);
}



function draw() {
  background(255);
  pickingGameState();
  drawCursor();
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

function initiateBoard() {
  board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
}


function mainMenu() {
  image(playButton, (windowWidth / 2) - button.RadiusWidth, (windowHeight / 2) - button.RadiusHeight, button.ScalarWidth, button.ScalarHeight);
}

function optionsMenu() {

}

function instructionsMenu() {

}

function game() {
  drawBoardLines();
  fillInBlocks();
}

function drawCursor() {
  textAlign(CENTER, CENTER);
  textSize(100);
  if (gameState != "game") {
    fill(255, 0, 0)
    ellipse(mouseX, mouseY, 10, 10)
  }
  else if (gameState === "game") {
    fill(0)
    if (turn === 1) {
      text("X", mouseX, mouseY);
    }
    if (turn === 2) {
      text("O", mouseX, mouseY);
    }
  }
}


function fillInBlocks() {
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board.length; y++) {
      if (board[x][y] === 1) {
        text("X", x * blockSizeX + (blockSizeX / 2), y * blockSizeY + (blockSizeY / 2));
      }
      else if (board[x][y] === 2) {
        text("O", x * blockSizeX + (blockSizeX / 2), y * blockSizeY + (blockSizeY / 2));
      }
    }
  }
}


function mousePressed() {
  if (gameState === "game") {
    clickSpotX = floor(mouseX / blockSizeX);
    clickSpotY = floor(mouseY / blockSizeY);
    if (board[clickSpotX][clickSpotY] === 0) {
      board[clickSpotX][clickSpotY] = turn;
      if (turn === 1) {
        turn = 2
      }
      else if (turn === 2) {
        turn = 1
      }
    }
  }
  if (gameState === "mainMenu") {
    if (mouseIsPressed && mouseX < windowWidth / 2 + button.RadiusWidth && mouseX > windowWidth / 2 - button.RadiusWidth && mouseY < windowHeight / 2 + button.RadiusHeight && mouseY > windowHeight / 2 - button.RadiusHeight) {
      gameState = "game";
    }
  }
}







// 	winner();




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