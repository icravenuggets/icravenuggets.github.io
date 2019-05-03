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
      if (playerOneDirection === "up") {
        // these shoot the spell in the correct direction and location and make new objects from the class
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            if (field[playerOneX - 1 + i][playerOneY - 1 + j] != "#") {
              let someSpell = new fireSpell(playerOneX - 1 + i, playerOneY - 1 + j, fireSpellSpeed, "up", "p");
              spells.push(someSpell);
            }
          }
        }
        cooldownTimerOne = millis();
      }
      else if (playerOneDirection === "down") {
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            if (field[playerOneX - 1 + i][playerOneY - 1 + j] != "#") {
              let someSpell = new fireSpell(playerOneX - 1 + i, playerOneY - 1 + j, fireSpellSpeed, "down", "p");
              spells.push(someSpell);
            }
          }
        }
        cooldownTimerOne = millis();
      }
      else if (playerOneDirection === "left") {
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            if (field[playerOneX - 1 + i][playerOneY - 1 + j] != "#") {
              let someSpell = new fireSpell(playerOneX - 1 + i, playerOneY - 1 + j, fireSpellSpeed, "left", "p");
              spells.push(someSpell);
            }
          }
        }
        cooldownTimerOne = millis();
      }
      else if (playerOneDirection === "right") {
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            if (field[playerOneX - 1 + i][playerOneY - 1 + j] != "#") {
              let someSpell = new fireSpell(playerOneX - 1 + i, playerOneY - 1 + j, fireSpellSpeed, "right", "p");
              spells.push(someSpell);
            }
          }
        }
        cooldownTimerOne = millis();;
      }
    }
    else if (key === "c") {
      // water spell
      if (playerOneDirection === "up") {
        for (let i = 0; i < 5; i++) {
          if (i > 2) {
            if (playerOneX - 2 + i >= 0 && playerOneX - 2 + i < 20 && field[playerOneX - 2 + i][playerOneY - 3 + i] != "#") {
              let someSpell = new waterSpell(playerOneX - 2 + i, playerOneY - 3 + i, waterSpellSpeed, "up", "p");
              spells.push(someSpell);
            }
          }
          else if (i <= 2) {
            if (playerOneX - 2 + i >= 0 && playerOneX - 2 + i < 20 && field[playerOneX - 2 + i][playerOneY + 1 - 1] != "#") {
              let someSpell = new waterSpell(playerOneX - 2 + i, playerOneY + 1 - i, waterSpellSpeed, "up", "p");
              spells.push(someSpell);
            }
          }
        }
        cooldownTimerOne = millis();
      }
      else if (playerOneDirection === "down") {
        for (let i = 0; i < 5; i++) {
          if (i < 2) {
            if (playerOneX + 2 - i >= 0 && playerOneX + 2 - i < 20 && field[playerOneX + 2 - i][playerOneY - 3 + i] != "#") {
              let someSpell = new waterSpell(playerOneX + 2 - i, playerOneY - 1 + i, waterSpellSpeed, "down", "p");
              spells.push(someSpell);
            }
          }
          else if (i >= 2) {
            if (playerOneX + 2 - i >= 0 && playerOneX + 2 - i < 20 && field[playerOneX + 2 - i][playerOneY + 1 - 1] != "#") {
              let someSpell = new waterSpell(playerOneX + 2 - i, playerOneY + 3 - i, waterSpellSpeed, "down", "p");
              spells.push(someSpell);
            }
          }
        }
        cooldownTimerOne = millis();
      }
      else if (playerOneDirection === "left") {
        for (let i = 0; i < 5; i++) {
          if (i > 2) {
            if (playerOneX - 3 + i >= 0 && playerOneX - 3 + i < 20 && field[playerOneX - 3 + i][playerOneY - 2 + i] != "#") {
              let someSpell = new waterSpell(playerOneX - 3 + i, playerOneY - 2 + i, waterSpellSpeed, "left", "p");
              spells.push(someSpell);
            }
          }
          else if (i <= 2) {
            if (playerOneX + 1 - i >= 0 && playerOneX + 1 - i < 20 && field[playerOneX + 1 - i][playerOneY - 2 + i] != "#") {
              let someSpell = new waterSpell(playerOneX + 1 - i, playerOneY - 2 + i, waterSpellSpeed, "left", "p");
              spells.push(someSpell);
            }
          }
        }
        cooldownTimerOne = millis();
      }
      else if (playerOneDirection === "right") {
        for (let i = 0; i < 5; i++) {
          if (i < 2) {
            if (playerOneX - 1 + i >= 0 && playerOneX - 1 + i < 20 && field[playerOneX - 1 + i][playerOneY - 2 + i] != "#") {
              let someSpell = new waterSpell(playerOneX - 1 + i, playerOneY - 2 + i, waterSpellSpeed, "right", "p");
              spells.push(someSpell);
            }
          }
          else if (i >= 2) {
            if (playerOneX + 3 - i >= 0 && playerOneX + 3 - i < 20 && field[playerOneX + 3 - i][playerOneY - 2 + i] != "#") {
              let someSpell = new waterSpell(playerOneX + 3 - i, playerOneY - 2 + i, waterSpellSpeed, "right", "p");
              spells.push(someSpell);
            }
          }
        }
        cooldownTimerOne = millis();
      }
    }
    else if (key === "v") {
      // grass spell
      if (playerOneDirection === "up") {
        for (let i = 0; i < 5; i++) {
          if (field[playerOneX][playerOneY - 2 + i] != "#") {
            let someSpell = new grassSpell(playerOneX, playerOneY - 2 + i, grassSpellSpeed, "up", "p");
            spells.push(someSpell);
          }
        cooldownTimerOne = millis();
        }
      }
      else if (playerOneDirection === "down") {
        for (let i = 0; i < 5; i++) {
          if (field[playerOneX][playerOneY - 2 + i] != "#") {
            let someSpell = new grassSpell(playerOneX, playerOneY - 2 + i, grassSpellSpeed, "down", "p");
            spells.push(someSpell);
          }
        cooldownTimerOne = millis();
        }
      }
      else if (playerOneDirection === "left") {
        for (let i = 0; i < 5; i++) {
          if (playerOneX + 2 - i >= 0 && field[playerOneX + 2 - i][playerOneY] != "#") {
            let someSpell = new grassSpell(playerOneX + 2 - i, playerOneY, grassSpellSpeed, "left", "p");
            spells.push(someSpell);
          }
        cooldownTimerOne = millis();
        }
      }
      else if (playerOneDirection === "right") {
        for (let i = 0; i < 5; i++) {
          if (playerOneX - 2 + i < 20 && field[playerOneX - 2 + i][playerOneY] != "#") {
            let someSpell = new grassSpell(playerOneX - 2 + i, playerOneY, grassSpellSpeed, "right", "p");
            spells.push(someSpell);
          }
        cooldownTimerOne = millis();
        }
      }
    }
  }



  // Player Two Spells
  if ((key === "," || key === "." || key === "/") && millis() - cooldownTimerTwo >= 1000) {
    if (key === ",") {
      // fire spell
      if (playerTwoDirection === "up") {
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            if (field[playerTwoX - 1 + i][playerTwoY - 1 + j] != "#") {
              let someSpell = new fireSpell(playerTwoX - 1 + i, playerTwoY - 1 + j, fireSpellSpeed, "up", "o");
              spells.push(someSpell);
            }
          }
        }
        cooldownTimerTwo = millis();
      }
      else if (playerTwoDirection === "down") {
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            if (field[playerTwoX - 1 + i][playerTwoY - 1 + j] != "#") {
              let someSpell = new fireSpell(playerTwoX - 1 + i, playerTwoY - 1 + j, fireSpellSpeed, "down", "o");
              spells.push(someSpell);
            }
          }
        }
        cooldownTimerTwo = millis();
      }
      else if (playerTwoDirection === "left") {
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            if (field[playerTwoX - 1 + i][playerTwoY - 1 + j] != "#") {
              let someSpell = new fireSpell(playerTwoX - 1 + i, playerTwoY - 1 + j, fireSpellSpeed, "left", "o");
              spells.push(someSpell);
            }
          }
        }
        cooldownTimerTwo = millis();
      }
      else if (playerTwoDirection === "right") {
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            if (field[playerTwoX - 1 + i][playerTwoY - 1 + j] != "#") {
              let someSpell = new fireSpell(playerTwoX - 1 + i, playerTwoY - 1 + j, fireSpellSpeed, "right", "o");
              spells.push(someSpell);
            }
          }
        }
        cooldownTimerTwo = millis();
      }
    }
    else if (key === ".") {
      // water spell
      if (playerTwoDirection === "up") {
        for (let i = 0; i < 5; i++) {
          if (i > 2) {
            if (playerTwoX - 2 + i >= 0 && playerTwoX - 2 + i < 20 && field[playerTwoX - 2 + i][playerTwoY - 3 + i] != "#") {
              let someSpell = new waterSpell(playerTwoX - 2 + i, playerTwoY - 3 + i, waterSpellSpeed, "up", "o");
              spells.push(someSpell);
            }
          }
          else if (i <= 2) {
            if (playerTwoX - 2 + i >= 0 && playerTwoX - 2 + i < 20 && field[playerTwoX - 2 + i][playerTwoY + 1 - 1] != "#") {
              let someSpell = new waterSpell(playerTwoX - 2 + i, playerTwoY + 1 - i, waterSpellSpeed, "up", "o");
              spells.push(someSpell);
            }
          }
        }
        cooldownTimerTwo = millis();
      }
      else if (playerTwoDirection === "down") {
        let someSpell = new waterSpell(playerTwoX, playerTwoY + 1, waterSpellSpeed, "down", "o");
        spells.push(someSpell);
        cooldownTimerTwo = millis();
      }
      else if (playerTwoDirection === "left") {
        let someSpell = new waterSpell(playerTwoX - 1, playerTwoY, waterSpellSpeed, "left", "o");
        spells.push(someSpell);
        cooldownTimerTwo = millis();
      }
      else if (playerTwoDirection === "right") {
        let someSpell = new waterSpell(playerTwoX + 1, playerTwoY, waterSpellSpeed, "right", "o");
        spells.push(someSpell);
        cooldownTimerTwo = millis();
      }
    }
    else if (key === "/") {
      // grass spell
      if (playerTwoDirection === "up") {
        for (let i = 0; i < 5; i++) {
          if (field[playerTwoX][playerTwoY - 2 + i] != "#") {
            let someSpell = new grassSpell(playerTwoX, playerTwoY - 2 + i, grassSpellSpeed, "up", "o");
            spells.push(someSpell);
          }
        cooldownTimerTwo = millis();
        }
      }
      else if (playerTwoDirection === "down") {
        for (let i = 0; i < 5; i++) {
          if (field[playerTwoX][playerTwoY - 2 + i] != "#") {
            let someSpell = new grassSpell(playerTwoX, playerTwoY - 2 + i, grassSpellSpeed, "down", "o");
            spells.push(someSpell);
          }
        cooldownTimerTwo = millis();
        }
      }
      else if (playerTwoDirection === "left") {
        for (let i = 0; i < 5; i++) {
          if (playerTwoX + 2 - i >= 0 && field[playerTwoX + 2 - i][playerTwoY] != "#") {
            let someSpell = new grassSpell(playerTwoX + 2 - i, playerTwoY, grassSpellSpeed, "left", "o");
            spells.push(someSpell);
          }
        cooldownTimerTwo = millis();
        }
      }
      else if (playerTwoDirection === "right") {
        for (let i = 0; i < 5; i++) {
          if (playerTwoX - 2 + i < 20 && field[playerTwoX - 2 + i][playerTwoY] != "#") {
            let someSpell = new grassSpell(playerTwoX - 2 + i, playerTwoY, grassSpellSpeed, "right", "o");
            spells.push(someSpell);
          }
        cooldownTimerTwo = millis();
        }
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
  if (millis() - counter >= 1000) {
    counter = millis();
    playerOneRemainingHealth -= 1;
    playerTwoRemainingHealth -= 1;
  }
}


function healthStuff() {
  healthbarObject.playerOneHealthbar.display(playerOneRemainingHealth);
  healthbarObject.playerTwoHealthbar.display(playerTwoRemainingHealth);
}