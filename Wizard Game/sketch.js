// Wizard Game
// Alex Chen
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



class fireSpell {
  constructor(startingX, startingY) { //, speed, direction
    this.x = startingX;
    this.y = startingY;
    this.size = tileSize;
    // this.speed = speed;
    // this.direction = direction;
  }

  display() {
    fill(255, 0, 0)
    rect(this.x, this.y, tileSize, tileSize)
  }

//   move() {
       
//   }
}

let tilesScalar, windowSize, tileSize, tileSpot, startingX, startingY, tilesHigh, tilesWide, tempString;
let field = [];
let spells = [];
let playerDirection, playerX, playerY;
let tilesLarge = 20;




function preload() {
  initArray();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  windowResized();
  // playerX = 9;
  // playerY = 18;
  playerDirection = "up";
  
  tempString = loadStrings(levelToLoad);
  field = createEmpty2dArray(tilesLarge);
}

function draw() {
  assignTiles();
  showStuff();
  // field[playerX][playerY] = "p";
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
}



function assignTiles() {
  for (let j = 0; j < tempString.length; j ++) {
    for (let i = 0; i < tempString.length; i ++) {
      tileSpot = tempString[j][i];
      // showTiles(field[j][i], i, j);
      if (tileSpot === ".") {
        fill(122, 122, 122);
        rect(i * tileSize, j * tileSize, tileSize, tileSize);
      }
      else if (tileSpot === "#") {
        fill(50, 40, 40);
        rect(i * tileSize, j * tileSize, tileSize, tileSize);
      }
      else if (tileSpot === "p") {
        fill(255);
        rect(tileSize * i, tileSize * j, tileSize, tileSize);
      }
      // else if (tileSpot === "o") {
      //   fill(0);
      //   rect(tileSize )
      // }
    }
  }
}


// function showTiles(location, x, y) {
//   if (tileSpot === ".") {
//     fill(122, 122, 122);
//     rect(x * tileSize, y * tileSize, tileSize, tileSize);
//   }
//   else if (tileSpot === "#") {
//     fill(50, 40, 40);
//     rect(x * tileSize, y * tileSize, tileSize, tileSize);
//   }
//   else if (tileSpot === "p") {
//     fill(255);
//     rect(tileSize * playerX, tileSize * playerY, tileSize, tileSize);
//   }
// }

function showStuff() {
  for (let i = 0; i < spells.length; i++) {
    spells[i].display();
  }
}


function createEmpty2dArray(tilesLarge) {
  let someGrid = [];
  for (let x = 0; x < tilesLarge; x++) {
    someGrid.push(["."]);
    for (let y = 0; y < tilesLarge; y++) {
      someGrid[x].push(".");
    }
  }
  return someGrid;
}


function keyTyped() {
  if (key === "w") {
    playerDirection = "up";
    field[playerX][playerY] = "."
    playerY -= 1;
    field[playerX][playerY] = "p"
  }
  else if (key === "s") {
    playerDirection = "down";
    playerY += 1;
  }
  else if (key === "a") {
    playerDirection = "left";
    playerX -= 1;
  }
  else if (key === "d") {
    playerDirection = "right";
    playerX += 1;
  }
  else if (key === "c") {
    if (playerDirection === "up") {
      let someSpell = new fireSpell(playerX * tileSize, (playerY - 1) * tileSize); //, 3, "up"
      spells.push(someSpell);
    }
    else if (playerDirection === "down") {
      let someSpell = new fireSpell(playerX * tileSize, (playerY + 1) * tileSize); //, 3, "up"
      spells.push(someSpell);
    }
    else if (playerDirection === "left") {
      let someSpell = new fireSpell((playerX - 1) * tileSize, playerY * tileSize); //, 3, "up"
      spells.push(someSpell);
    }
    else if (playerDirection === "right") {
      let someSpell = new fireSpell((playerX + 1) * tileSize, playerY * tileSize); //, 3, "up"
      spells.push(someSpell);
    }
  }
}