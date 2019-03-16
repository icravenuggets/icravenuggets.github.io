// State Variables Assignment
// Alex Chen
// Date
//
// State Variables usage:
// - Game state, and other states for different menus (options and instructions)
// - Different game state if it is an AI game
// - Win state that changes if someone wins
//
// Extra for Experts:
// - Arrays
//
// Ideas for Stuff to Do:
// - Simple and complex AI
//    - Easy: Random
//    - Medium: Tries to stay alive
//    - Hard: With Algorithm
// - Options menu
//    - Sound On/Off
//    - Volume Up/Down
//    - Background Colour
// - Instructions menu
// - Aesthetics
//    - Better Menus (With titles and stuff)
//    - Better Cursor in menus
// - Keyboard interaction
// - Score board
// - Music or sound effects
// - Comments
// - Organization into files



let button, turn, blockSizeX, blockSizeY, clickSpotX, clickSpotY, tilesCounter, winState, gameState;

function setup() {
  createCanvas(windowWidth, windowHeight);
  resizeScalars();
  textAlign(CENTER, CENTER);
  textSize(100);
  noCursor();
  turn = floor(random(1, 3));
  initiateBoard();
  gameState = "mainMenu";
  winState = 0;
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
  checkForWinner();
  isWinner();
  checkForTie();
}

function drawCursor() {
  textAlign(CENTER, CENTER);
  textSize(windowWidth / 30);
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
  if (windowWidth > windowHeight)
    textSize(windowHeight / 3);
  else {
    textSize(windowWidth / 3);
  }
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
    if (winState === 0) {
      clickSpotX = floor(mouseX / blockSizeX);
      clickSpotY = floor(mouseY / blockSizeY);
      if (board[clickSpotX][clickSpotY] === 0) {
        board[clickSpotX][clickSpotY] = turn;
        if (turn === 1) {
          turn = 2;
        }
        else if (turn === 2) {
          turn = 1;
        }
      }
    }
    else if (winState > 0) {
      initiateBoard();
      winState = 0
    }
  }
  else if (gameState === "mainMenu") {
    if (mouseIsPressed && mouseX < windowWidth / 2 + button.RadiusWidth && mouseX > windowWidth / 2 - button.RadiusWidth && mouseY < windowHeight / 2 + button.RadiusHeight && mouseY > windowHeight / 2 - button.RadiusHeight) {
      gameState = "game";
    }
  }
}


function checkForWinner() {
  for (let checkingX = 0; checkingX < board.length; checkingX ++) {
    if (board[checkingX][0] > 0 && board[checkingX][0] === board[checkingX][1] && board[checkingX][0] === board[checkingX][2]) {
      winState = board[checkingX][0];
    }
  }
  for (let checkingY = 0; checkingY < board.length; checkingY++) {
    if (board[0][checkingY] > 0 && board[0][checkingY] === board[1][checkingY] && board[0][checkingY] === board[2][checkingY]) {
      winState = board[0][checkingY];
    }
  }
  if (board[0][0] > 0 && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
    winState = board[0][0];
  }
  else if (board[0][2] > 0 && board[0][2] === board[1][1] && board[0][2] == board[2][0]) {
    winState = board[0][2];
  }
}


function isWinner() {
  if (winState > 0) {
    textSize(windowWidth / 10);
    fill(255, 0, 0);
    text("Click to Reset", windowWidth / 2, windowHeight / 2 + (windowHeight / 5));
  }
  if (winState === 1) {
    text("Player X Wins!", windowWidth / 2, windowHeight / 2);
  }
  else if (winState === 2) {
    text("Player O Wins!", windowWidth / 2, windowHeight / 2);
  }
  else if (winState === 3) {
    text("It's a Tie!", windowWidth / 2, windowHeight / 2);
  }
}


function checkForTie() {
  tilesCounter = 0;
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board.length; y++) {
      if (board[x][y] > 0) {
        tilesCounter ++;
        if (tilesCounter >= 9 && winState === 0) {
          winState = 3;
        }
      }
    }
  }
}




