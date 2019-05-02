// defining variables
let lines, amountOfTiles,  tileSize, playerOneDirection, playerOneX, playerOneY, playerTwoDirection, playerTwoX, playerTwoY, startingX, startingY, gameState;
let counter, spellSpeed, mapState, windowSize;
let cooldownTimerOne = 0;
let cooldownTimerTwo = 0;
let timerThing = 0;
let field = [];
let spells = [];
let buttons = [];
let buttonObject;



function preload() {
  // preloading levels, images, and eventually other things such as sound
  levelOne = loadStrings("assets/levels/levelOne.txt");
  levelTwo = loadStrings("assets/levels/levelTwo.txt");
  levelThree = loadStrings("assets/levels/levelThree.txt");
  levelFour = loadStrings("assets/levels/levelFour.txt");
  levelFive = loadStrings("assets/levels/levelFive.txt");
  playerUp = loadImage("assets/playerUp.png");
  playerDown = loadImage("assets/playerDown.png");
  playerRight = loadImage("assets/playerRight.png");
  playerLeft = loadImage("assets/playerLeft.png");
}

function setup() {
  // setup functions such as setting default variables and calling one-time functions
  gameState = "mainMenu";
  textAlign(CENTER, CENTER);
  windowResized();
  buttonObject = {
    mainMenuButton: new button(windowSize/2, windowSize/2, 100, "red", "PLAY")
  };
}

function gameSetup() {
  // Another setup function but only called when the game actually starts
  playerOneDirection = "up";
  playerTwoDirection = "down";
  spellSpeed = 100;
  amountOfTiles = lines.length;
  field = createEmpty2dArray();
  for (let y = 0; y < amountOfTiles; y++) {
    for (let x = 0; x < amountOfTiles; x++) {
      let tileType = lines[y][x];
      field[x][y] = tileType;
    }
  }
  findPlayer();
  counter = millis();
}

function createEmpty2dArray() {
  // creates a 2-dimensional array consisting of only empty spaces
  let someGrid = [];
  for (let i = 0; i < amountOfTiles; i++) {
    someGrid.push([]);
    for (let j = 0; j < amountOfTiles; j++) {
      someGrid[i].push(0);
    }
  }
  return someGrid;
}

function findPlayer() {
  // finds the player's original spot based on the loaded map to set the playerOneX and playerOneY variables
  for (let x = 0; x < amountOfTiles; x++) {
    for (let y = 0; y < amountOfTiles; y++) {
      if (field[x][y] === "p") {
        playerOneX = x;
        playerOneY = y;
      }
      if (field[x][y] === "o") {
        playerTwoX = x;
        playerTwoY = y;
      }
    }
  }
}

function windowResized() {
  // called if the user resizes the window
  if (windowHeight > windowWidth) {
    windowSize = windowWidth;
  }
  else {
    windowSize = windowHeight;
  }
  createCanvas(windowSize, windowSize);
  tileSize = windowSize / 20;
}