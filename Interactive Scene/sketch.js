// Interactive Scene: Money Clicker Game
// Alex Chen
// (Date)
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// - Resizing the canvas based on the size of the window
// - Used on-screen text
// - Imported and used different fonts for text
// - Implemented Sound



// Ideas to implement:
// - Money falling from sky every click (figure out how to make images appear and disappear)
// - Cha-ching sounds every click (that restart itself)
// - Background music that loops
// - Keyboard interaction to pause music, change volume, reset (clicks = 0)



let clicks = 0;
let money, scalar;

// Preloading the images, font(s), and sounds used
function preload() {
  dollarSign = loadImage('assets/dollarSign.png');
  money = loadImage('assets/money.png');
  street = loadImage('assets/street.jpg');
  garage = loadImage('assets/garage.jpg');
  room = loadImage('assets/room.jpg');
  office = loadImage('assets/office.jpg');
  beach = loadImage('assets/beach.png');
  fontObelix = loadFont('assets/obelix.ttf');
  // soundFormats('mp3');
  // moneySound = loadSound('assets/moneySound.mp3');
  // backgroundMusic = loadSound('assets/backgroundMusic.mp3');
}

// Creating the canvas
function setup() {
  createCanvas(windowWidth, windowHeight);
  scalar = windowWidth / 30;            // The scalar on the dollar sign cursor scales with window width
}

function draw() {
  // Background based on progress
  if (clicks < 10) {
    image(street, 0, 0, windowWidth, windowHeight);
    textSize(scalar);
    fill(255, 0, 0);
    textFont(fontObelix);
    text("Living on the streets", 50, 100);
  }
  else if (clicks < 50) {
    image(garage, 0, 0, windowWidth, windowHeight);
    textSize(scalar);
    fill(255, 0, 0);
    textFont(fontObelix);
    text("Working from a garage", 50, 100);
  }
  else if (clicks < 100) {
    image(room, 0, 0, windowWidth, windowHeight);
    textSize(scalar);
    fill(255, 0, 0);
    textFont(fontObelix);
    text("Decent work place", 50, 100);
  }
  else if (clicks < 300) {
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
  image(dollarSign, mouseX - (scalar/2), mouseY - (scalar/2), scalar, scalar);
  
  // Click counter on-screen
  textSize(scalar);
  fill(255)
  text(clicks, windowWidth - (windowWidth - 100), windowHeight - 200)
}

// Counting the number of clicks
function mousePressed() {
  clicks += 1;
  // moneySound.setVolume(100);
  // moneySound.play();
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
}

// function moneyFalling() {
//   image(money, random(screenWidth), 0, scalar, scalar);
// }