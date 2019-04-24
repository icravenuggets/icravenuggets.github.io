



function draw() {
  assignTiles();
  spellStuff();
  countingTime();
  showPlayer(playerX, playerY);
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
  else if (field[x][y] === "w") {
    fill(0,191,255);
    rect(x * tileSize, y *tileSize, tileSize, tileSize);
  }
  else if (field[x][y] === "g") {
    fill(0,255,0);
    rect(x * tileSize, y *tileSize, tileSize, tileSize);
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
  if ((key === "c" || key === "v" || key === "b") && millis() - cooldownTimer >= 1000) {
    if (key === "c") {
      if (playerDirection === "up" && field[playerX][playerY - 1] != "#") {
        let someSpell = new fireSpell(playerX, playerY - 1, 3, "up");
        spells.push(someSpell);
        cooldownTimer = millis();
      }
      else if (playerDirection === "down" && field[playerX][playerY + 1] != "#") {
        let someSpell = new fireSpell(playerX, playerY + 1, 3, "down");
        spells.push(someSpell);
        cooldownTimer = millis();
      }
      else if (playerDirection === "left" && field[playerX - 1][playerY] != "#") {
        let someSpell = new fireSpell(playerX - 1, playerY, 3, "left");
        spells.push(someSpell);
        cooldownTimer = millis();
      }
      else if (playerDirection === "right" && field[playerX + 1][playerY] != "#") {
        let someSpell = new fireSpell(playerX + 1, playerY, 3, "right");
        spells.push(someSpell);
        cooldownTimer = millis();
      }
    }
    else if (key === "v") {
      if (playerDirection === "up" && field[playerX][playerY - 1] != "#") {
        let someSpell = new waterSpell(playerX, playerY - 1, 3, "up");
        spells.push(someSpell);
        cooldownTimer = millis();
      }
      else if (playerDirection === "down" && field[playerX][playerY + 1] != "#") {
        let someSpell = new waterSpell(playerX, playerY + 1, 3, "down");
        spells.push(someSpell);
        cooldownTimer = millis();
      }
      else if (playerDirection === "left" && field[playerX - 1][playerY] != "#") {
        let someSpell = new waterSpell(playerX - 1, playerY, 3, "left");
        spells.push(someSpell);
        cooldownTimer = millis();
      }
      else if (playerDirection === "right" && field[playerX + 1][playerY] != "#") {
        let someSpell = new waterSpell(playerX + 1, playerY, 3, "right");
        spells.push(someSpell);
        cooldownTimer = millis();
      }
    }
    else if (key === "b") {
      if (playerDirection === "up" && field[playerX][playerY - 1] != "#") {
        let someSpell = new grassSpell(playerX, playerY - 1, 3, "up");
        spells.push(someSpell);
        cooldownTimer = millis();
      }
      else if (playerDirection === "down" && field[playerX][playerY + 1] != "#") {
        let someSpell = new grassSpell(playerX, playerY + 1, 3, "down");
        spells.push(someSpell);
        cooldownTimer = millis();
      }
      else if (playerDirection === "left" && field[playerX - 1][playerY] != "#") {
        let someSpell = new grassSpell(playerX - 1, playerY, 3, "left");
        spells.push(someSpell);
        cooldownTimer = millis();
      }
      else if (playerDirection === "right" && field[playerX + 1][playerY] != "#") {
        let someSpell = new grassSpell(playerX + 1, playerY, 3, "right");
        spells.push(someSpell);
        cooldownTimer = millis();
      }
    }
  }
}


function spellStuff() {
  for (let i = 0; i < spells.length; i++) {
    spells[i].implant();
    spells[i].move();
  }
}