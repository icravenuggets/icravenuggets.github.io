// Wizard Game
// Alex Chen
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let tilesScalar, windowSize, tileSizes;


function setup() {
  createCanvas(windowWidth, windowHeight);
  windowResized();
}

function draw() {
  drawBackground();


}

function windowResized() {
  if (windowHeight > windowWidth) {
    windowSize = windowWidth;
  }
  else {
    windowSize = windowHeight;
  }
  createCanvas(windowSize, windowSize);
  tilesSize = windowSize / 20;
}


function drawBackground() {
  for (let i = 0; i < windowSize / tilesSize; i ++) {
    for (let j = 0; j < windowSize /tilesSize; j ++) {
        fill(122, 122, 122);
        rect(i * tilesSize, j * tilesSize, tilesSize, tilesSize);
    }
  }
}

