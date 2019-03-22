// State Variables Assignment
// Alex Chen
// March 25, 2019
//
// State Variables usage:
// - Game state
// - Different states for different menus
// - Different state if it is the AI's turn to play
// - Win state that changes if someone wins
//
// Extra for Experts:
// - Arrays
// - Simple CPU Opponent
//
// Unfinished Ideas for Stuff to Do in the Future:
// - Complex AI
//    - Medium: Tries to stay alive
//    - Hard: With Algorithm
// - Options menu
//    - Sound On/Off
//    - Volume Up/Down
//    - Background Colour
//    - Different cursors
// - Instructions menu
// - Aesthetics
//    - Better Menus (With titles and stuff)
//    - Better Cursor in menus
// - Keyboard interaction
// - Score board
// - Music or sound effects
// - Organization into files


// Defining variables
let button, turn, blockSizeX, blockSizeY, clickSpotX, clickSpotY, tilesCounter, winState, gameState, tempSpotX, tempSpotY, fpsTimer, timer;

function setup() {
// Setup functions including canvas, noCursor, and defining some of the variables above such as default game states
  createCanvas(windowWidth, windowHeight);
  resizeScalars();
  textAlign(CENTER, CENTER);
  textSize(100);
  noCursor();
  turn = floor(random(1, 3));
  initiateBoard();
  gameState = "mainMenu";
  winState = 0;
  timer = 0;
  fpsTimer = 0;
}

function preload() {
// Preloading the different images used for buttons
  playButton = loadImage("assets/play.png");
  // optionsButton = loadImage("assets/options.png");
  pvpButton = loadImage("assets/pvp.png");
  easyButton = loadImage("assets/easy.png");
  hardButton = loadImage("assets/hard.png");
}

function windowResized() {
// What to do if the window is resized by the user
  createCanvas(windowWidth, windowHeight);
  resizeScalars();
}

function resizeScalars() {
// Sets the button object's width, height, and other things that I used for each button
  button = {
    ScalarWidth: windowWidth / 5,
    ScalarHeight: windowHeight / 5,
    RadiusWidth: windowWidth / 5 / 2,
    RadiusHeight: windowHeight / 5 / 2,
  };
// Defines the size of each block in the game (3 by 3)
  blockSizeX = windowWidth / 3;
  blockSizeY = windowHeight / 3;
}


function drawBoardLines() {
// Draws lines separating where the clockable blocks should be
  background(255);
  line(blockSizeX, 0, blockSizeX, windowHeight);
  line(windowWidth - blockSizeX, 0, windowWidth - blockSizeX, windowHeight);
  line(0, blockSizeY, windowWidth, blockSizeY);
  line(0, windowHeight - blockSizeY, windowWidth, windowHeight - blockSizeY);
}



function draw() {
// Main draw loop that calls to other functions
  background(255);
  pickingGameState();
  drawCursor();
  timeCounting();
  fpsTimer += 1;     // Used later for my timer
}


function pickingGameState() {
// This function picks the game state and does whatever function the game state currently is, such as "mainMenu"
  if (gameState === "mainMenu") {
    mainMenu();
  }
  // else if (gameState === "optionsMenu") {
  //   optionsMenu();
  // }
  else if (gameState === "game") {
    game();
  }
  else if (gameState === "gameMenu") {
    gameMenu();
  }
  else if (gameState === "easyMode") {
    easyMode();
  }
}

function initiateBoard() {
// Sets the board so that every spot is filled with a zero (which can later be filled by a 1 or a 2)
  board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
}


function mainMenu() {
// Main menu function with the title text and the play button
  fill(0);
  textSize(windowWidth / 7);
  text("Tic Tac Toe", windowWidth / 2, windowHeight / 4);
  image(playButton, (windowWidth / 2) - button.RadiusWidth, (windowHeight / 2) - button.RadiusHeight, button.ScalarWidth, button.ScalarHeight);
  // image(optionsButton, windowWidth / 2 - button.RadiusWidth, windowHeight - windowHeight / 4 - button.RadiusHeight, button.ScalarWidth, button.ScalarHeight);
}

// function optionsMenu() {

// }

function gameMenu() {
// The menu after the main menu that allows you to pick either player vs player or player vs CPU game modes
  image(pvpButton, (windowWidth / 2) - button.RadiusWidth, (windowHeight / 3) - button.RadiusHeight, button.ScalarWidth, button.ScalarHeight);
  image(easyButton, (windowWidth / 2) - button.RadiusWidth, (windowHeight - windowHeight / 3) - button.RadiusHeight, button.ScalarWidth, button.ScalarHeight);
}

function easyMode() {
// The game mode where you play against an easy CPU opponent that picks blocks randomly
  drawBoardLines();
  fillInBlocks();
  checkForWinner();
  isWinner();
  checkForTie();
  aiTurnToPlay();
}

function game() {
// The main game mode where you can play against other opponents
  drawBoardLines();
  fillInBlocks();
  checkForWinner();
  isWinner();
  checkForTie();
}

function drawCursor() {
// Determines and draws the appropriate cursor depending on what you are doing
  textAlign(CENTER, CENTER);
  textSize(windowWidth / 30);
  if (gameState != "game" && gameState != "easyMode") {
  // If you are in the menus, displays a red ellipse as the cursor
    fill(255, 0, 0)
    ellipse(mouseX, mouseY, 10, 10)
  }
  else if (gameState === "game" || gameState === "easyMode") {
  // If you are playing PvP or PvC, the cursor displays X or O depending on turn
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
// Once the array is changed to either 1 or 2, this function displays either an X or an O on screen in the correct location
  fill(0);
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
// The function that is called when you click on the mouse
  if (gameState === "game") {
  // If you click, this determines if you are allowed to click there, and if you are, it changes the array
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
    // Resets the board, winState, and randomizes the turn once the game is over
      initiateBoard();
      winState = 0
      turn = floor(random(1, 3));
    }
  }
  else if (gameState === "easyMode") {
  // This is what happens when you click in an easy Player vs CPU match
    if (winState === 0 && turn === 1) {
      clickSpotX = floor(mouseX / blockSizeX);
      clickSpotY = floor(mouseY / blockSizeY);
      if (board[clickSpotX][clickSpotY] === 0) {
        board[clickSpotX][clickSpotY] = turn;
        turn = 2;
        timer = 0;
        fpsTimer = 0;
      }
    }
    else if (winState > 0) {
      initiateBoard();
      winState = 0
      turn = floor(random(1, 3));
    }
  }
  // The following sections are just checks to see if you clicked a button in any of the menus
  else if (gameState === "mainMenu") {
    if (mouseX < windowWidth / 2 + button.RadiusWidth && mouseX > windowWidth / 2 - button.RadiusWidth && mouseY < windowHeight / 2 + button.RadiusHeight && mouseY > windowHeight / 2 - button.RadiusHeight) {
      gameState = "gameMenu";
    }
  }
  else if (gameState === "gameMenu") {
    if (mouseX < windowWidth / 2 + button.RadiusWidth && mouseX > windowWidth / 2 - button.RadiusWidth && mouseY < windowHeight / 3 + button.RadiusHeight && mouseY > windowHeight / 3 - button.RadiusHeight) {
      gameState = "game";
    }
    else if (mouseX < windowWidth / 2 + button.RadiusWidth && mouseX > windowWidth / 2 - button.RadiusWidth && mouseY < windowHeight - windowHeight / 3 + button.RadiusHeight && mouseY > windowHeight - windowHeight / 3 - button.RadiusHeight) {
      gameState = "easyMode";
    }
  }
}

function aiTurnToPlay() {
// If it is the AI's turn to pick something, it waits one second and then randomly selects somewhere available to click
  if (turn === 2 && winState === 0) {
    tempSpotX = floor(random(0, 3));
    tempSpotY = floor(random(0, 3));
    if (board[tempSpotX][tempSpotY] === 0) {
      if (timer > 0) {
        board[tempSpotX][tempSpotY] = 2;
        turn = 1;
      }
    }
  }
}

function timeCounting() {
// The timer function that allows the CPU to buffer for one second before making it's choice 
  if (fpsTimer >= 60) {
    timer += 1;
    fpsTimer = 0;
  }
}


function checkForWinner() {
// Uses different for loops to check whether someone has won horizontally
  for (let checkingX = 0; checkingX < board.length; checkingX ++) {
    if (board[checkingX][0] > 0 && board[checkingX][0] === board[checkingX][1] && board[checkingX][0] === board[checkingX][2]) {
      winState = board[checkingX][0];
    }
  }
// Checks for a win vertically
  for (let checkingY = 0; checkingY < board.length; checkingY++) {
    if (board[0][checkingY] > 0 && board[0][checkingY] === board[1][checkingY] && board[0][checkingY] === board[2][checkingY]) {
      winState = board[0][checkingY];
    }
  }
// Checks for a win diagonally
  if (board[0][0] > 0 && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
    winState = board[0][0];
  }
  else if (board[0][2] > 0 && board[0][2] === board[1][1] && board[0][2] == board[2][0]) {
    winState = board[0][2];
  }
}


function isWinner() {
// Once the checkForWinner function has found a winner, this function displays text on screen showing who won or if a tie has occurred
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
// This function checks for a tie and ends the game if all 9 tiles are filled
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




