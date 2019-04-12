// Wizard Game
// Alex Chen
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



// class fireSpell {
//   constructor(startingX, startingY, speed, direction) {
//     this.x = startingX;
//     this.y = startingY;
//     this.size = tileSize;
//     this.speed = speed;
//     this.direction = direction;
//   }

//   display() {
//     image()
//   }

//   move() {

//   }
// }

let tilesScalar, windowSize, tileSize, tileSpot;
let field = [];
let playerOne, playerX, playerY;




function preload() {
  initArray();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  windowResized();
  playerOne = {
    x: playerX,
    y: playerY,
    direction: "up"
  };
}

function draw() {
  assignTiles();
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
      if (tileSpot === "p") {
        playerX = field[j];
        playerY = field[i];
      }
      showTiles(field[j][i], i, j);
    }
  }
}


function showTiles(location, x, y) {
  if (tileSpot === ".") {
    fill(122, 122, 122);
    rect(x * tileSize, y * tileSize, tileSize, tileSize);
  }
  else if (tileSpot === "#") {
    fill(50, 40, 40);
    rect(x * tileSize, y * tileSize, tileSize, tileSize);
  }
  else if (tileSpot === "p") {
    fill(255, 0, 0);
    rect(x * tileSize, y * tileSize, tileSize, tileSize);
  }
}


function keyTyped() {
  if (key === "w") {

  }
}