// Interactive Scene: Money Clicker Game
// Alex Chen
// (Date)
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// - Resizing the canvas based on the size of the window
// - Used on-screen text
// - Imported and used different fonts for text
// - Implemented Sound (background and interactive)
// - Scalar on the cursor that is more satisfying to click on by changing size temporarily
// - A gameOn variable that allows me to have a title screen with a play button



// Ideas to implement:
// - automatic clicker that you can buy with clicks



let clicks = 0;
let timeCounter = 0;
let money, scalar, changingScalar;
let workerAmount = 0;
let soundOn = true
let soundVolume = 50
let gameOn = 0

// Preloading the images, font(s), and sounds used
function preload() {
  dollarSign = loadImage('assets/dollarSign.png');
  money = loadImage('assets/money.png');
  street = loadImage('assets/street.jpg');
  garage = loadImage('assets/garage.jpg');
  room = loadImage('assets/room.jpg');
  office = loadImage('assets/office.jpg');
  beach = loadImage('assets/beach.png');
  playButton = loadImage('assets/play.png')
  fontObelix = loadFont('assets/obelix.ttf');
  soundFormats('mp3');
  moneySound = loadSound('assets/moneySound.mp3');
  backgroundMusic = loadSound('assets/backgroundMusic.mp3');
}

// Creating the canvas
function setup() {
  createCanvas(windowWidth, windowHeight);
  scalar = windowWidth / 30;            // The scalar scales with window width
  changingScalar = windowWidth / 30;
  backgroundMusic.setVolume(soundVolume);
  backgroundMusic.play();
  noCursor()

}

function draw() {
  if (gameOn === 1) {
  // Background based on progress
    if (clicks < 100) {
      image(street, 0, 0, windowWidth, windowHeight);
      textSize(scalar);
      fill(255, 0, 0);
      textFont(fontObelix);
      text("Living on the streets", 50, 100);
    }
    else if (clicks < 1000) {
      image(garage, 0, 0, windowWidth, windowHeight);
      textSize(scalar);
      fill(255, 0, 0);
      textFont(fontObelix);
      text("Working from a garage", 50, 100);
    }
    else if (clicks < 10000) {
      image(room, 0, 0, windowWidth, windowHeight);
      textSize(scalar);
      fill(255, 0, 0);
      textFont(fontObelix);
      text("Decent work place", 50, 100);
    }
    else if (clicks < 100000) {
      image(office, 0, 0, windowWidth, windowHeight);
      textSize(scalar);
      fill(255, 0, 0);
      textFont(fontObelix);
      text("High quality office", 50, 100);
    } 
    else {
      image(beach, 0, 0, windowWidth, windowHeight);
      textSize(scalar);
      fill(255, 0, 0);
      textFont(fontObelix);
      text("Rich and retired", 50, 100);
    }

    // Dollar sign on cursor
    image(dollarSign, mouseX - (changingScalar/2), mouseY - (changingScalar/2), changingScalar, changingScalar);
    if (changingScalar >= windowWidth/30) {
      changingScalar -= 2;
    }
    
    // Click counter on-screen
    textSize(scalar);
    fill(255)
    text(clicks, windowWidth - (windowWidth - 100), windowHeight - 200)

    timeCounter += 1
  }

  // Title Screen if game is not on
  else if (gameOn === 0) {
    background(50, 100, 255);
    image(playButton, windowWidth / 2 - (scalar * 3.5), windowHeight / 2, scalar * 7, scalar * 5);
    textSize(scalar * 2);
    fill(255)
    text("Money Clicker Game", windowWidth / 2 - scalar * 10, 200)
    fill(255, 0, 0)
    ellipse(mouseX, mouseY, scalar / 3, scalar / 3);
    if (mouseIsPressed && mouseX > (windowWidth / 2 - (scalar * 3.5)) && mouseX < (windowWidth / 2 - (scalar * 3.5) + (scalar * 7)) && mouseY > windowHeight / 2 && mouseY < windowHeight / 2 + (scalar * 5)) {
      clicks = 0
      gameOn = 1
    }
  }
}

// What happens when you click the mouse
function mousePressed() {
  clicks += 1;
  if (changingScalar < windowWidth / 20) {
    changingScalar += 10;
  }
  moneySound.setVolume(soundVolume);
  moneySound.play();
}

// The canvas size and cursor size are changed to fit the new window size
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  scalar = windowWidth / 30;
  if (scalar < 30) {                // Scalar size limits in case it gets too small or big
    scalar = 30;
  }
  else if (scalar > 150) {
    scalar = 150;
  }
  changingScalar = windowWidth / 30;
  if (changingScalar < 30) {                // Scalar size limits in case it gets too small or big
    changingScalar = 30;
  }
  else if (changingScalar > 150) {
    changingScalar = 150;
  }
}


function keyTyped() {
  if (key === "m") {
    if (soundOn) {
      backgroundMusic.setVolume(0);
      backgroundMusic.play();
      moneySound.setVolume(0);
      moneySound.play();
    }
    else {
      backgroundMusic.setVolume(soundVolume);
      backgroundMusic.play();
      moneySound.setVolume(soundVolume);
      moneySound.play();
    }
  }
  else if (key === "u") {
    if (soundVolume < 50) {
      backgroundMusic.setVolume(soundVolume += 5);
      moneySound.setVolume(soundVolume += 5);
    }
  }
  else if (key === "d") {
    if (soundVolume > 0) {
      backgroundMusic.setVolume(soundVolume -= 5);
      moneySound.setVolume(soundVolume -= 5);
    }
  }
  else if (key === "r") {
    clicks = 0
  }
}