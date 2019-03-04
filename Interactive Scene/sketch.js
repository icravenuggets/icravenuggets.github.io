// Interactive Scene: Money Clicker Game
// Alex Chen
// March 4, 2019
//
// Extra for Experts:
// - Resizing the canvas based on the size of the window
// - Used on-screen text
// - Imported and used different fonts for text
// - Implemented Sound (background and interactive)
// - Scalar on the cursor that is more satisfying to click on by changing size temporarily
// - A gameOn variable that allows me to have a title screen with a play button
// - A time function that counts time played
// - An exponential worker system that allows you to pay 50 clicks for a worker that in turn
//   gets you one click per second



// Instructions:
// - click on the screen to gain clicks (currency)
// - The background changes as you progress to show a new and improved work place
// - press "w" to get a worker (costs 50) that automatically earns you one click per second
// - press "r" to reset the game
// - press "m" to mute or unmute (toggle)
// - press "u" to turn up the volume
// - press "d" to turn down the volume


// Defining variables
let timeCounter = 0;
let secondsRunning = 0;
let clicks, scalar, changingScalar;
let workerAmount = 0;
let soundOn = true;
let soundVolume = 1;
let gameOn = false;



function preload() {
  // Preloading the images, font(s), and sounds used
  dollarSign = loadImage('assets/dollarSign.png');
  money = loadImage('assets/money.png');
  street = loadImage('assets/street.jpg');
  garage = loadImage('assets/garage.jpg');
  room = loadImage('assets/room.jpg');
  office = loadImage('assets/office.jpg');
  beach = loadImage('assets/beach.png');
  playButton = loadImage('assets/play.png')
  // Preloading a text font
  fontObelix = loadFont('assets/obelix.ttf');
  // Preloading sounds
  soundFormats('mp3');
  moneySound = loadSound('assets/moneySound.mp3');
  backgroundMusic = loadSound('assets/backgroundMusic.mp3');
}



function setup() {
  // Creating the canvas, setting scalars based on window size, starting background music, etc.
  createCanvas(windowWidth, windowHeight);
  scalar = windowWidth / 30;
  changingScalar = windowWidth / 30;
  backgroundMusic.setVolume(soundVolume);
  backgroundMusic.loop();
  noCursor();
}



function draw() {
  // Main game loop
  // Game turns on if gameOn equals 1
  if (gameOn) {
    setting();
    cursorStuff();
    clickCounter();
    countingTime();
  }

  else if (!gameOn) {
    // Title Screen if game is not on
    titleScreen();
  }
}




function mousePressed() {
  // What happens when you click the mouse
  clicks += 1;
  if (changingScalar < windowWidth / 20) {
    changingScalar += 10;
  }
  moneySound.setVolume(soundVolume);
  moneySound.play();
}



function titleScreen() {
  // Title Screen function if game is not on
  background(50, 100, 255);
  image(playButton, windowWidth / 2 - (scalar * 3.5), windowHeight / 2, scalar * 7, scalar * 5);
  textSize(scalar * 2);
  fill(255);
  text("Money Clicker Game", windowWidth / 2 - scalar * 10, 200);
  fill(255, 0, 0);
  ellipse(mouseX, mouseY, scalar / 3, scalar / 3);
  if (mouseIsPressed && mouseX > (windowWidth / 2 - (scalar * 3.5)) && mouseX < (windowWidth / 2 - (scalar * 3.5) + (scalar * 7)) && mouseY > windowHeight / 2 && mouseY < windowHeight / 2 + (scalar * 5)) {
    // If you click inside the play button
    clicks = 0;
    gameOn = 1;
  }
}




function clickCounter() {
    // Click counter on-screen (also currency)
    textSize(scalar);
    fill(255, 0, 0);
    text("Clicks: $" + clicks, windowWidth / 9, windowHeight - (windowHeight / 2));

}




function cursorStuff() {
  // Dollar sign cursor that changes size
  image(dollarSign, mouseX - (changingScalar/2), mouseY - (changingScalar/2), changingScalar, changingScalar);
  if (changingScalar >= windowWidth/30) {
    changingScalar -= 2;
  }
}




function countingTime() {
  // Counting time and worker earnings per second
  timeCounter += 1;
  if (timeCounter >= 60) {
    secondsRunning += 1;
    timeCounter = 0;
    clicks += (workerAmount * 1);
  }

  // Shows seconds that the game has been running
  textSize(scalar);
  fill(255);
  text(secondsRunning, windowWidth - (windowWidth / 7), windowHeight - (windowHeight / 6));
  textSize(scalar / 2);
  fill(255);
  text("Time", windowWidth - (windowWidth / 7), windowHeight - (windowHeight / 6) - 100);

  // Showing number of workers
  textSize(scalar);
  fill(255);
  text(workerAmount, windowWidth - (windowWidth / 2), windowHeight - (windowHeight / 6));
  textSize(scalar / 2);
  fill(255);
  text("Number of workers ($50 each)", windowWidth / 2 - 200, windowHeight - (windowHeight / 6) - 100);
}




function windowResized() {
  // The canvas size and cursor size are changed to fit the new window size
  resizeCanvas(windowWidth, windowHeight);
  // Maximum and minimum size for the scalars despite window size
  scalar = windowWidth / 30;
  if (scalar < 30) {
    scalar = 30;
  }
  else if (scalar > 150) {
    scalar = 150;
  }
  changingScalar = windowWidth / 30;
  if (changingScalar < 30) {
    changingScalar = 30;
  }
  else if (changingScalar > 150) {
    changingScalar = 150;
  }
}




function setting() {
  // Background based on amount of dollars
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
    text("Medium sized work place", 50, 100);
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
}




function keyTyped() {
  // What happens when you type a key on the keyboard
  if (key === "m") {
  // "m" mutes or unmutes
    if (soundOn) {
      backgroundMusic.setVolume(0);
      moneySound.setVolume(0);
      soundOn = false;
    }
    else {
      backgroundMusic.setVolume(soundVolume);
      moneySound.setVolume(soundVolume);
      soundOn = true;
    }
  }
  else if (key === "u") {
    // "u" key turns the volume up
    if (soundVolume < 3 && soundOn) {
      backgroundMusic.setVolume(soundVolume += 0.1);
      moneySound.setVolume(soundVolume += 0.1);
    }
  }
  else if (key === "d") {
    // "d" key turns the volume down
    if (soundVolume > 0.2 && soundOn) {
      backgroundMusic.setVolume(soundVolume -= 0.1);
      moneySound.setVolume(soundVolume -= 0.1);
    }
  }
  else if (key === "r") {
    // "r" key resets clicks and worker amount
    clicks = 0;
    workerAmount = 0;
    secondsRunning = 0;
  }

  else if (key === "w") {
    // "w" key gives you a worker in exchange for 50 clicks
    if (clicks >= 50) {
      workerAmount += 1;
      clicks -= 50;
    }
  }
}


