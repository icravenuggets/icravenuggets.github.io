// State Variables Assignment
// Alex Chen
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let gameState = "mainMenu";


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function preload() {
  playButton = loadImage("assets/play.png");
}

function draw() {
  background(255);
  pickingGameState();
}


function pickingGameState() {
  if (gameState === "mainMenu") {
    mainMenu();
  }

  // if (gameState === "") {
  //
  //}
}

function mainMenu() {

}