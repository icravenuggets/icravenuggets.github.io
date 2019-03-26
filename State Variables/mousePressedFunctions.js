function mousePressedGame() {
// If you click, this determines if you are allowed to click there, and if you are, it changes the array
  if (winState === 0) {
    clickSpotX = floor(mouseX / blockSizeX);
    clickSpotY = floor(mouseY / blockSizeY);
    if (board[clickSpotX][clickSpotY] === 0) {
      board[clickSpotX][clickSpotY] = turn;
      clickSound.play();
      if (turn === 1) {
        turn = 2;
      }
      else if (turn === 2) {
        turn = 1;
      }
    }
  }
  else if (winState > 0) {
  // Resets the board, winState, and randomizes the turn once the game is over
    initiateBoard();
    winState = 0;
    turn = floor(random(1, 3));
    menuThree.play();
  }
}

function mousePressedEasy() {
  // This is what happens when you click in an easy Player vs CPU match
  if (winState === 0 && turn === 1) {
    clickSpotX = floor(mouseX / blockSizeX);
    clickSpotY = floor(mouseY / blockSizeY);
    if (board[clickSpotX][clickSpotY] === 0) {
      board[clickSpotX][clickSpotY] = turn;
      clickSound.play();
      turn = 2;
      timer = 0;
      fpsTimer = 0;
    }
  }
  // If you click after winning or losing the game
  else if (winState > 0) {
    initiateBoard();
    winState = 0;
    turn = floor(random(1, 3));
    menuThree.play();
  }
}

function mousePressedMain() {
// This is called when you click in the main menu
  if (mouseX < windowWidth / 2 + button.RadiusWidth && mouseX > windowWidth / 2 - button.RadiusWidth && mouseY < windowHeight / 2 + button.RadiusHeight && mouseY > windowHeight / 2 - button.RadiusHeight) {
    gameState = "gameMenu";
    menuOne.play();
  }
  // else if (mouseX < windowWidth / 2 + button.RadiusWidth && mouseX > windowWidth / 2 - button.RadiusWidth && mouseY < windowHeight - windowHeight / 4 + button.RadiusHeight && mouseY > windowHeight - windowHeight / 4 - button.RadiusHeight) {
  //   gameState = "optionsMenu";
  //   menuOne.play();
  // }
}

function mousePressedGameMenu() {
// When you click in the game menu
  if (mouseX < windowWidth / 2 + button.RadiusWidth && mouseX > windowWidth / 2 - button.RadiusWidth && mouseY < windowHeight / 3 + button.RadiusHeight && mouseY > windowHeight / 3 - button.RadiusHeight) {
    gameState = "game";
    menuTwo.play();
  }
  else if (mouseX < windowWidth / 2 + button.RadiusWidth && mouseX > windowWidth / 2 - button.RadiusWidth && mouseY < windowHeight - windowHeight / 3 + button.RadiusHeight && mouseY > windowHeight - windowHeight / 3 - button.RadiusHeight) {
    gameState = "easyMode";
    menuTwo.play();
  }
}

function mousePressedOptions() {
// When you click a button in the options menu
  
}