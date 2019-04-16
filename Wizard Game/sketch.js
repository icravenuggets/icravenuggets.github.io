// Wizard Game
// Alex Chen
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



class fireSpell {
  constructor(startingX, startingY, speed, direction) {
    this.x = startingX;
    this.y = startingY;
    this.size = tileSize;
    this.speed = speed;
    this.direction = direction;
  }

  display() {
    image(startingX, startingY, tileSize, tileSize)
  }

//   move() {
       
//   }
}

let tilesScalar, windowSize, tileSize, tileSpot;
let field = [];
let spells = [];
let playerOne, playerX, playerY;




function preload() {
  initArray();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  windowResized();
  playerX = 9;
  playerY = 18;
  playerOne = {
    x: playerX,
    y: playerY,
    direction: "down"
  };
}

function draw() {
  assignTiles();
  showStuff();
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


function initArray() {
  levelToLoad = "assets/levels/template.txt";
  field = loadStrings(levelToLoad);
}



function assignTiles() {
  for (let j = 0; j < windowSize /tileSize; j ++) {
    for (let i = 0; i < windowSize / tileSize; i ++) {
      tileSpot = field[j][i];
      showBackground(field[j][i], i, j);
    }
  }
}


function showBackground(location, x, y) {
  if (tileSpot === ".") {
    fill(122, 122, 122);
    rect(x * tileSize, y * tileSize, tileSize, tileSize);
  }
  else if (tileSpot === "#") {
    fill(50, 40, 40);
    rect(x * tileSize, y * tileSize, tileSize, tileSize);
  }
}

function showStuff() {
  fill(255);
  rect(tileSize * playerX, tileSize * playerY, tileSize, tileSize);
}


function keyTyped() {
  if (key === "w") {
    playerOne.direction = "up";
    playerY -= 1;
  }
  else if (key === "s") {
    playerOne.direction = "down";
    playerY += 1;
  }
  else if (key === "a") {
    playerOne.direction = "left";
    playerX -= 1;
  }
  else if (key === "d") {
    playerOne.direction = "right";
    playerX += 1;
  }
}