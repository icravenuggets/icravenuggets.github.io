// Traffic Light Starter Code
// Dan Schellenberg
// Sept 25, 2018

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/

let light = 0;
let timer = 0;
let fpsTimer = 0;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  drawOutlineOfLights();
  timeCounting();
  choosingLights();

  fpsTimer += 1;
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);

  //lights
  fill(255);
  ellipse(width/2, height/2 - 65, 50, 50); //top
  ellipse(width/2, height/2, 50, 50); //middle
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
}

function choosingLights() {
  if (light === 0) {
    redLight();
  }
  else if (light === 1) {
    greenLight();
  }
  else {
    amberLight();
  }
}

function redLight() {
  fill("red");
  ellipse(width/2, height/2 - 65, 50, 50); //top
  if (timer >= 10) {
    light = 1;
    timer = 0;
  }
}

function amberLight() {
  fill("yellow");
  ellipse(width/2, height/2, 50, 50); //middle
  if (timer >= 3) {
    light = 0;
    timer = 0;
  }
}

function greenLight() {
  fill("green");
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
  if (timer >= 10) {
    light = 2;
    timer = 0;
  }
}

function timeCounting() {
  if (fpsTimer >= 60) {
    timer += 1;
    fpsTimer = 0;
  }
}