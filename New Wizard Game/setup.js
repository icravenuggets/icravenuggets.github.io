


let lines, amountOfTiles,  tileSize, playerDirection, playerX, playerY, startingX, startingY, gameState;
let counter;
let cooldownTimer = 0;
let timerThing = 0;
let field = [];
let spells = [];



function preload() {
  levelToLoad = "assets/levels/template.txt";
  lines = loadStrings(levelToLoad);
  playerUp = loadImage("assets/playerUp.png");
  playerDown = loadImage("assets/playerDown.png");
  playerRight = loadImage("assets/playerRight.png");
  playerLeft = loadImage("assets/playerLeft.png");
}

function setup() {
  gameState = "game";
  windowResized();
  playerDirection = "up";
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
  for (let x = 0; x < amountOfTiles; x++) {
    for (let y = 0; y < amountOfTiles; y++) {
      if (field[x][y] === "p") {
        playerX = x;
        playerY = y;
      }
    }
  }
}

function windowResized() {
  if (windowHeight > windowWidth) {
    windowSize = windowWidth;
  }
  else {
    windowSize = windowHeight;
  }
  createCanvas(windowSize, windowSize);
  tileSize = windowSize / 20;
}


function countingTime() {
  if (millis() - counter >= 100) {
    timerThing += 1;
    counter = millis();
  }
}
