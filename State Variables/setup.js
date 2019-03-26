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
// - An array
// - Simple CPU Opponent
// - Sound Effects
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
//    - Better Menus
// - Keyboard interaction
// - Score board




// Defining variables
let button, turn, blockSizeX, blockSizeY, clickSpotX, clickSpotY, tilesCounter, winState, gameState, soundVolume, tempSpotX, tempSpotY, fpsTimer, timer, playWinSound;

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
  soundVolume = 2;
}

function preload() {
// Preloading the different images used for buttons
  playButton = loadImage("assets/play.png");
  optionsButton = loadImage("assets/options.png");
  cursorPicture = loadImage('assets/cursor.png')
  pvpButton = loadImage("assets/pvp.png");
  easyButton = loadImage("assets/easy.png");
  hardButton = loadImage("assets/hard.png");
  clickSound = loadSound('assets/clickSound.wav');
  menuOne = loadSound('assets/menuOne.wav');
  menuTwo = loadSound('assets/menuTwo.wav');
  menuThree = loadSound('assets/menuThree.wav');
  winSound = loadSound('assets/winSound.wav');
}

function windowResized() {
// What to do if the window is resized by the user
  createCanvas(windowWidth, windowHeight);
  resizeScalars();
}

function resizeScalars() {
// Sets the button object's width, height, and other things that I used for every menu button
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


function initiateBoard() {
// Sets the board so that every spot is filled with a zero (which can later be filled by a 1 or a 2)
      board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
}

function drawCursor() {
// Determines and draws the appropriate cursor depending on what you are doing
    textAlign(CENTER, CENTER);
    textSize(windowWidth / 30);
    if (gameState != "game" && gameState != "easyMode") {
    // If you are in the menus, displays a different cursor
    image(cursorPicture, mouseX - 7, mouseY, 30, 30)
    }
    else if (gameState === "game" || gameState === "easyMode") {
    // If you are playing PvP or PvC, the cursor displays X or O depending on turn
    fill(0);
    if (turn === 1) {
        text("X", mouseX, mouseY);
    }
    if (turn === 2) {
        text("O", mouseX, mouseY);
    }
    }
}

function drawBoardLines() {
// Draws lines separating where the clockable blocks should be
    background(255);
    line(blockSizeX, 0, blockSizeX, windowHeight);
    line(windowWidth - blockSizeX, 0, windowWidth - blockSizeX, windowHeight);
    line(0, blockSizeY, windowWidth, blockSizeY);
    line(0, windowHeight - blockSizeY, windowWidth, windowHeight - blockSizeY);
}    