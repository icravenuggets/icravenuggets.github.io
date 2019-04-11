// Wizard Game
// Alex Chen
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let tilesScalar, windowSize, tileSize, tileSpot;
let field = [];

function preload() {
  initArray();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  windowResized();
}

function draw() {
  drawTiles();
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
  for (let i = 0; i < windowSize / tileSize; i ++) {
    for (let j = 0; j < windowSize /tileSize; j ++) {
      tileSpot = field[i][j];
    }
  }
}


function drawTiles() {
  for (let i = 0; i < windowSize / tileSize; i ++) {
    for (let j = 0; j < windowSize /tileSize; j ++) {
      showTiles(field[i][j], i, j);
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
}
