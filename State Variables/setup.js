// State Variables Assignment
// Alex Chen
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let gameState = "mainMenu";
let buttonScalarWidth, buttonScalarHeight, buttonRadiusWidth, buttonRadiusHeight


function setup() {
  createCanvas(windowWidth, windowHeight);
  resizeScalars();
}

function preload() {
  playButton = loadImage("assets/play.png");
  instructionsButton = loadImage("assets/play.png");
  optionsButton = loadImage("assets/play.png");
}

function windowResized() {
  resizeCanvas();
  resizeScalars();
}

function resizeScalars() {
  buttonScalarWidth = windowWidth / 10;
  buttonScalarHeight = windowHeight / 10;
  buttonRadiusWidth = (windowWidth / 10) / 2;
  buttonRadiusHeight = (windowHeight / 10) / 2;
}


// Pointer cursor


function draw() {
  background(255);
  pickingGameState();
}


function pickingGameState() {
if (gameState === "mainMenu") {
  mainMenu();
}
if (gameState === "optionsMenu") {
  optionsMenu();
}
if (gameState === "instructionsMenu") {
  instructionsMenu();
}
}


function mainMenu() {
  image(playButton, windowWidth / 2 - buttonRadiusWidth, windowHeight / 2 - buttonRadiusHeight);
}

function optionsMenu() {

}

function instructionsMenu() {

}