function draw() {
  // main draw loop consisting of functions that need to be called constantly
  pickingGameState();
}


function pickingGameState() {
  // determines what draw functions should be called based on what the game state is
  if (gameState === "mainMenu") {
    mainMenu();
  }
  else if (gameState === "game") {
    assignTiles();
    spellStuff();
    countingTime();
    showPlayer(playerOneX, playerOneY, playerTwoX, playerTwoY);
  }
}

function mainMenu() {
  // The main menu that shows up when you first start the page
  fill(0);
  textSize(width/7);
  text("Wizard Game", width/2, height/2);
  textSize(width/10);
  text("Press a number 1 to 5", width/2, height - height/3);
  buttonObject.mainMenuButton.display();
}

function assignTiles() {
  // combined with the showTiles function, this assigns and displays an image depending on array
  for (let y = 0; y < amountOfTiles; y++) {
    for (let x = 0; x < amountOfTiles; x++) {
      showTiles(x, y);
    }
  }
}

function showTiles(x, y) {
  // displays an image based on what the given spot is in an array (for ex. grey square if the spot
  // in the array contains a ".", which is the background)
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


function showPlayer(x, y, i, j) {
  // Depending on the state variable playerDirection, this displays the appropriate image of the player
  if (playerOneDirection === "up") {
    image(playerUp, x * tileSize, y * tileSize, tileSize, tileSize)
  }
  else if (playerOneDirection === "down") {
    image(playerDown, x * tileSize, y * tileSize, tileSize, tileSize)
  }
  else if (playerOneDirection === "right") {
    image(playerRight, x * tileSize, y * tileSize, tileSize, tileSize)
  }
  else if (playerOneDirection === "left") {
    image(playerLeft, x * tileSize, y * tileSize, tileSize, tileSize)
  }
  // Player Two
  if (playerTwoDirection === "up") {
    image(playerUp, i * tileSize, j * tileSize, tileSize, tileSize)
  }
  else if (playerTwoDirection === "down") {
    image(playerDown, i * tileSize, j * tileSize, tileSize, tileSize)
  }
  else if (playerTwoDirection === "right") {
    image(playerRight, i * tileSize, j * tileSize, tileSize, tileSize)
  }
  else if (playerTwoDirection === "left") {
    image(playerLeft, i * tileSize, j * tileSize, tileSize, tileSize)
  }
}


function keyTyped() {
  // called if a key on the keyboard is pressed
  if (gameState === "mainMenu") {
    if (key === "1" || key === "2" || key === "3" || key === "4" || key === "5") {
      if (key === "1") {
        lines = levelOne;
      }
      else if (key === "2") {
        lines = levelTwo;
      }
      else if (key === "3") {
        lines = levelThree;
      }
      else if (key === "4") {
        lines = levelFour;
      }
      else if (key === "5") {
        lines = levelFive;
      }
      gameSetup();
      gameState = "game";
    }
  }
  if (gameState === "game") {
    playerMovement();
    castingSpells();
  }
}

function playerMovement() {
  // called by the keyTyped() function, this sees which key was pressed and moves the player as needed
  if (key === "w") {
    playerOneDirection = "up";
    if (field[playerOneX][playerOneY - 1] != "#") {
      field[playerOneX][playerOneY] = ".";
      playerOneY -= 1;
      field[playerOneX][playerOneY] = "p"
    }
  }
  else if (key === "s") {
    playerOneDirection = "down";
    if (field[playerOneX][playerOneY + 1] != "#") {
      field[playerOneX][playerOneY] = ".";
      playerOneY += 1;
      field[playerOneX][playerOneY] = "p"
    }
  }
  else if (key === "a") {
    playerOneDirection = "left";
    if (field[playerOneX - 1][playerOneY] != "#") {
      field[playerOneX][playerOneY] = ".";
      playerOneX -= 1;
      field[playerOneX][playerOneY] = "p"
    }
  }
  else if (key === "d") {
    playerOneDirection = "right";
    if (field[playerOneX + 1][playerOneY] != "#") {
      field[playerOneX][playerOneY] = ".";
      playerOneX += 1;
      field[playerOneX][playerOneY] = "p"
    }
  }



  // Player Two movement
  else if (key === "i") {
    playerTwoDirection = "up";
    if (field[playerTwoX][playerTwoY - 1] != "#") {
      field[playerTwoX][playerTwoY] = ".";
      playerTwoY -= 1;
      field[playerTwoX][playerTwoY] = "p"
    }
  }
  else if (key === "k") {
    playerTwoDirection = "down";
    if (field[playerTwoX][playerTwoY + 1] != "#") {
      field[playerTwoX][playerTwoY] = ".";
      playerTwoY += 1;
      field[playerTwoX][playerTwoY] = "p"
    }
  }
  else if (key === "j") {
    playerTwoDirection = "left";
    if (field[playerTwoX - 1][playerTwoY] != "#") {
      field[playerTwoX][playerTwoY] = ".";
      playerTwoX -= 1;
      field[playerTwoX][playerTwoY] = "p"
    }
  }
  else if (key === "l") {
    playerTwoDirection = "right";
    if (field[playerTwoX + 1][playerTwoY] != "#") {
      field[playerTwoX][playerTwoY] = ".";
      playerTwoX += 1;
      field[playerTwoX][playerTwoY] = "p"
    }
  }
}

function castingSpells() {
  // if the key pressed in keyTyped() is not a movement key, but a spell, this is called to cast the spell
  if ((key === "x" || key === "c" || key === "v") && millis() - cooldownTimerOne >= 1000) {
    // this is to add a cooldown so that you cannot shoot spells too quickly
    if (key === "x") {
      // fire spell
      if (playerOneDirection === "up" && field[playerOneX][playerOneY - 1] != "#") {
        // these shoot the spell in the correct direction and location and make new objects from the class
        let someSpell = new fireSpell(playerOneX, playerOneY - 1, spellSpeed, "up", "p");
        spells.push(someSpell);
        cooldownTimerOne = millis();
      }
      else if (playerOneDirection === "down" && field[playerOneX][playerOneY + 1] != "#") {
        let someSpell = new fireSpell(playerOneX, playerOneY + 1, spellSpeed, "down", "p");
        spells.push(someSpell);
        cooldownTimerOne = millis();
      }
      else if (playerOneDirection === "left" && field[playerOneX - 1][playerOneY] != "#") {
        let someSpell = new fireSpell(playerOneX - 1, playerOneY, spellSpeed, "left", "p");
        spells.push(someSpell);
        cooldownTimerOne = millis();
      }
      else if (playerOneDirection === "right" && field[playerOneX + 1][playerOneY] != "#") {
        let someSpell = new fireSpell(playerOneX + 1, playerOneY, spellSpeed, "right", "p");
        spells.push(someSpell);
        cooldownTimerOne = millis();
      }
    }
    else if (key === "c") {
      // water spell
      if (playerOneDirection === "up" && field[playerOneX][playerOneY - 1] != "#") {
        let someSpell = new waterSpell(playerOneX, playerOneY - 1, spellSpeed, "up", "p");
        spells.push(someSpell);
        cooldownTimerOne = millis();
      }
      else if (playerOneDirection === "down" && field[playerOneX][playerOneY + 1] != "#") {
        let someSpell = new waterSpell(playerOneX, playerOneY + 1, spellSpeed, "down", "p");
        spells.push(someSpell);
        cooldownTimerOne = millis();
      }
      else if (playerOneDirection === "left" && field[playerOneX - 1][playerOneY] != "#") {
        let someSpell = new waterSpell(playerOneX - 1, playerOneY, spellSpeed, "left", "p");
        spells.push(someSpell);
        cooldownTimerOne = millis();
      }
      else if (playerOneDirection === "right" && field[playerOneX + 1][playerOneY] != "#") {
        let someSpell = new waterSpell(playerOneX + 1, playerOneY, spellSpeed, "right", "p");
        spells.push(someSpell);
        cooldownTimerOne = millis();
      }
    }
    else if (key === "v") {
      // grass spell
      if (playerOneDirection === "up" && field[playerOneX][playerOneY - 1] != "#") {
        let someSpell = new grassSpell(playerOneX, playerOneY - 1, spellSpeed, "up", "p");
        spells.push(someSpell);
        cooldownTimerOne = millis();
      }
      else if (playerOneDirection === "down" && field[playerOneX][playerOneY + 1] != "#") {
        let someSpell = new grassSpell(playerOneX, playerOneY + 1, spellSpeed, "down", "p");
        spells.push(someSpell);
        cooldownTimerOne = millis();
      }
      else if (playerOneDirection === "left" && field[playerOneX - 1][playerOneY] != "#") {
        let someSpell = new grassSpell(playerOneX - 1, playerOneY, spellSpeed, "left", "p");
        spells.push(someSpell);
        cooldownTimerOne = millis();
      }
      else if (playerOneDirection === "right" && field[playerOneX + 1][playerOneY] != "#") {
        let someSpell = new grassSpell(playerOneX + 1, playerOneY, spellSpeed, "right", "p");
        spells.push(someSpell);
        cooldownTimerOne = millis();
      }
    }
  }



  // Player Two Spells
  if ((key === "," || key === "." || key === "/") && millis() - cooldownTimerTwo >= 1000) {
    if (key === ",") {
      // fire spell
      if (playerTwoDirection === "up" && field[playerTwoX][playerTwoY - 1] != "#") {
        let someSpell = new fireSpell(playerTwoX, playerTwoY - 1, spellSpeed, "up", "o");
        spells.push(someSpell);
        cooldownTimerTwo = millis();
      }
      else if (playerTwoDirection === "down" && field[playerTwoX][playerTwoY + 1] != "#") {
        let someSpell = new fireSpell(playerTwoX, playerTwoY + 1, spellSpeed, "down", "o");
        spells.push(someSpell);
        cooldownTimerTwo = millis();
      }
      else if (playerTwoDirection === "left" && field[playerTwoX - 1][playerTwoY] != "#") {
        let someSpell = new fireSpell(playerTwoX - 1, playerTwoY, spellSpeed, "left", "o");
        spells.push(someSpell);
        cooldownTimerTwo = millis();
      }
      else if (playerTwoDirection === "right" && field[playerTwoX + 1][playerTwoY] != "#") {
        let someSpell = new fireSpell(playerTwoX + 1, playerTwoY, spellSpeed, "right", "o");
        spells.push(someSpell);
        cooldownTimerTwo = millis();
      }
    }
    else if (key === ".") {
      // water spell
      if (playerTwoDirection === "up" && field[playerTwoX][playerTwoY - 1] != "#") {
        let someSpell = new waterSpell(playerTwoX, playerTwoY - 1, spellSpeed, "up", "o");
        spells.push(someSpell);
        cooldownTimerTwo = millis();
      }
      else if (playerTwoDirection === "down" && field[playerTwoX][playerTwoY + 1] != "#") {
        let someSpell = new waterSpell(playerTwoX, playerTwoY + 1, spellSpeed, "down", "o");
        spells.push(someSpell);
        cooldownTimerTwo = millis();
      }
      else if (playerTwoDirection === "left" && field[playerTwoX - 1][playerTwoY] != "#") {
        let someSpell = new waterSpell(playerTwoX - 1, playerTwoY, spellSpeed, "left", "o");
        spells.push(someSpell);
        cooldownTimerTwo = millis();
      }
      else if (playerTwoDirection === "right" && field[playerTwoX + 1][playerTwoY] != "#") {
        let someSpell = new waterSpell(playerTwoX + 1, playerTwoY, spellSpeed, "right", "o");
        spells.push(someSpell);
        cooldownTimerTwo = millis();
      }
    }
    else if (key === "/") {
      // grass spell
      if (playerTwoDirection === "up" && field[playerTwoX][playerTwoY - 1] != "#") {
        let someSpell = new grassSpell(playerTwoX, playerTwoY - 1, spellSpeed, "up", "o");
        spells.push(someSpell);
        cooldownTimerTwo = millis();
      }
      else if (playerTwoDirection === "down" && field[playerTwoX][playerTwoY + 1] != "#") {
        let someSpell = new grassSpell(playerTwoX, playerTwoY + 1, spellSpeed, "down", "o");
        spells.push(someSpell);
        cooldownTimerTwo = millis();
      }
      else if (playerTwoDirection === "left" && field[playerTwoX - 1][playerTwoY] != "#") {
        let someSpell = new grassSpell(playerTwoX - 1, playerTwoY, spellSpeed, "left", "o");
        spells.push(someSpell);
        cooldownTimerTwo = millis();
      }
      else if (playerTwoDirection === "right" && field[playerTwoX + 1][playerTwoY] != "#") {
        let someSpell = new grassSpell(playerTwoX + 1, playerTwoY, spellSpeed, "right", "o");
        spells.push(someSpell);
        cooldownTimerTwo = millis();
      }
    }
  }
}


function spellStuff() {
  // continuously goes through the spell array and calls the spell functions so they can keep working
  for (let i = 0; i < spells.length; i++) {
    spells[i].implant();
    spells[i].move();
  }
}



function countingTime() {
  // a function that counts time
  if (millis() - counter >= 100) {
    timerThing += 1;
    counter = millis();
  }
}


function mousePressed() {
  // If the mouse is pressed at any point
  // Nothing yet here
}

