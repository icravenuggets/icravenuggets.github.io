// Perlin Noise
// Alex Chen


let myRect, time, rectWidth, rectHeight;
let numberOfRects = 10;
let rects = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  time = 0;
  rectWidth = width / numberOfRects;
  generateInitialTerrain();
}

function draw() {
  background(220);
  fill(0);
  rects.shift();

  rectHeight = noise(time) * height;
    rectWidth = 50;
    myRect = {
      height: rectHeight,
      width: rectWidth,
      x: width - rectWidth,
      y: height - rectHeight,
    };
  rects.push(myRect);
  time += 0.01;


  for (let i = 0; i < rects.length; i++) {
    rect(rect[i].x, rect[i].y, rect[i].width, rect[i].height);
  }
}


function generateInitialTerrain() {
  for (let i = 0; i < numberOfRects; i ++) {
    rectHeight = noise(time) * height;
    rectWidth = 50;
    myRect = {
      height: rectHeight,
      width: rectWidth,
      x: i * rectWidth,
      y: height - rectHeight,
    };
  }
  rects.push(myRect);
  time += 0.01;
}