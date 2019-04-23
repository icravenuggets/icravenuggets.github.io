// Wizard Game
// Alex Chen
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"







class fireSpell {
  constructor(startingX, startingY, speed, direction) {
    this.x = startingX;
    this.y = startingY;
    this.size = tileSize;
    this.speed = speed;
    this.direction = direction;
    this.counter = millis();
  }

  implant() {
    field[this.x][this.y] = "f";  
  }

  move() {
    if (millis() - this.counter >= 250) {
      if (this.direction === "up") {
        if (field[this.x][this.y - 1] != "#") {
          this.counter = millis();
          field[this.x][this.y] = ".";
          this.y -= 1;
          field[this.x][this.y] = "f";
        }
      }
      else if (this.direction === "down") {
        
      }
    }
  }
}


let lines, amountOfTiles,  tileSize, playerDirection, playerX, playerY, startingX, startingY, gameState;
let counter;
let quarterSeconds = 0;
let field = [];
let spells = [];



function preload() {
  levelToLoad = "assets/levels/template.txt";
  lines = loadStrings(levelToLoad);
  playerUp = loadImage("assets/playerUp.png");
  playerDown = loadImage("assets/playerDown.png");
  playerRight = loadImage("assets/playerRight.png");
  playerLeft = loadImage("assets/playerLeft.png");
}

function setup() {
  gameState = "game";
  windowResized();
  playerDirection = "up";
  amountOfTiles = lines.length;
  field = createEmpty2dArray();
  for (let y = 0; y < amountOfTiles; y++) {
    for (let x = 0; x < amountOfTiles; x++) {
      let tileType = lines[y][x];
      field[x][y] = tileType;
    }
  }
  findPlayer();
  counter = millis();
}

function createEmpty2dArray() {
  let someGrid = [];
  for (let i = 0; i < amountOfTiles; i++) {
    someGrid.push([]);
    for (let j = 0; j < amountOfTiles; j++) {
      someGrid[i].push(0);
    }
  }
  return someGrid;
}

function findPlayer() {
  for (let x = 0; x < amountOfTiles; x++) {
    for (let y = 0; y < amountOfTiles; y++) {
      if (field[x][y] === "p") {
        playerX = x;
        playerY = y;
      }
    }
  }
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


function countingTime() {
  if (millis() - counter >= 250) {
    quarterSeconds += 1;
    counter = millis();
  }
}


function draw() {
  assignTiles();
  spellStuff();
  countingTime();
}


function assignTiles() {
  background(122, 122, 122);

  for (let y = 0; y < amountOfTiles; y++) {
    for (let x = 0; x < amountOfTiles; x++) {
      showTiles(x, y);
    }
  }
}

function showTiles(x, y) {
  if (field[x][y] === ".") {
    fill(122, 122, 122);
    rect(x * tileSize, y * tileSize, tileSize, tileSize);
  }
  else if (field[x][y] === "#") {
    fill(50, 40, 40);
    rect(x * tileSize, y * tileSize, tileSize, tileSize);
  }
  else if (field[x][y] === "f") {
    fill(255, 0, 0);
    rect(x * tileSize, y * tileSize, tileSize, tileSize);
  }
  else if (field[x][y] === "p") {
    showPlayer(x, y);
  }
}


function showPlayer(x, y) {
  if (playerDirection === "up") {
    image(playerUp, x * tileSize, y * tileSize, tileSize, tileSize)
  }
  else if (playerDirection === "down") {
    image(playerDown, x * tileSize, y * tileSize, tileSize, tileSize)
  }
  else if (playerDirection === "right") {
    image(playerRight, x * tileSize, y * tileSize, tileSize, tileSize)
  }
  else if (playerDirection === "left") {
    image(playerLeft, x * tileSize, y * tileSize, tileSize, tileSize)
  }
}


function keyTyped() {
  if (gameState === "game") {
    playerMovement();
    castingSpells();
  }
}

function playerMovement() {
  if (key === "w") {
    playerDirection = "up";
    if (field[playerX][playerY - 1] != "#") {
      field[playerX][playerY] = ".";
      playerY -= 1;
      field[playerX][playerY] = "p"
    }
  }
  else if (key === "s") {
    playerDirection = "down";
    if (field[playerX][playerY + 1] != "#") {
      field[playerX][playerY] = ".";
      playerY += 1;
      field[playerX][playerY] = "p"
    }
  }
  else if (key === "a") {
    playerDirection = "left";
    if (field[playerX - 1][playerY] != "#") {
      field[playerX][playerY] = ".";
      playerX -= 1;
      field[playerX][playerY] = "p"
    }
  }
  else if (key === "d") {
    playerDirection = "right";
    if (field[playerX + 1][playerY] != "#") {
      field[playerX][playerY] = ".";
      playerX += 1;
      field[playerX][playerY] = "p"
    }
  }
}

function castingSpells() {
  if (key === "c") {
    if (playerDirection === "up" && field[playerX][playerY - 1] != "#") {
      let someSpell = new fireSpell(playerX, playerY - 1, 3, "up");
      spells.push(someSpell);
    }
    else if (playerDirection === "down" && field[playerX][playerY + 1] != "#") {
      let someSpell = new fireSpell(playerX, playerY + 1, 3, "down");
      spells.push(someSpell);
    }
    else if (playerDirection === "left" && field[playerX - 1][playerY] != "#") {
      let someSpell = new fireSpell(playerX - 1, playerY, 3, "left");
      spells.push(someSpell);
    }
    else if (playerDirection === "right" && field[playerX + 1][playerY] != "#") {
      let someSpell = new fireSpell(playerX + 1, playerY, 3, "right");
      spells.push(someSpell);
    }
  }
}


function spellStuff() {
  for (let i = 0; i < spells.length; i++) {
    spells[i].implant();
    spells[i].move();
  }
}