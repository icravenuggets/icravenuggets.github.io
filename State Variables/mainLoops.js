function draw() {
// Main draw loop that calls to other functions
  background(255);
  pickingGameState();
  drawCursor();
  timeCounting();
  fpsTimer += 1;     // Used later for my timer
}


function pickingGameState() {
// This function picks the game state and does whatever function the game state currently is, such as "mainMenu"
  if (gameState === "mainMenu") {
    mainMenu();
  }
  else if (gameState === "optionsMenu") {
    optionsMenu();
  }
  else if (gameState === "game") {
    game();
  }
  else if (gameState === "gameMenu") {
    gameMenu();
  }
  else if (gameState === "easyMode") {
    easyMode();
  }
}


function mainMenu() {
// Main menu function with the title text and the play button
  fill(0);
  textSize(windowWidth / 7);
  text("Tic Tac Toe", windowWidth / 2, windowHeight / 4);
  image(playButton, (windowWidth / 2) - button.RadiusWidth, (windowHeight / 2) - button.RadiusHeight, button.ScalarWidth, button.ScalarHeight);
  // image(optionsButton, windowWidth / 2 - button.RadiusWidth, windowHeight - windowHeight / 4 - button.RadiusHeight, button.ScalarWidth, button.ScalarHeight);
}

function optionsMenu() {
// The options menu, however it is currently unfinished

}

function gameMenu() {
// The menu after the main menu that allows you to pick either player vs player or player vs CPU game modes
  image(pvpButton, (windowWidth / 2) - button.RadiusWidth, (windowHeight / 3) - button.RadiusHeight, button.ScalarWidth, button.ScalarHeight);
  image(easyButton, (windowWidth / 2) - button.RadiusWidth, (windowHeight - windowHeight / 3) - button.RadiusHeight, button.ScalarWidth, button.ScalarHeight);
}

function easyMode() {
// The game mode where you play against an easy CPU opponent that picks blocks randomly
  drawBoardLines();
  fillInBlocks();
  checkForWinner();
  isWinner();
  checkForTie();
  aiTurnToPlay();
}

function game() {
// The main game mode where you can play against other opponents
  drawBoardLines();
  fillInBlocks();
  checkForWinner();
  isWinner();
  checkForTie();
}


function fillInBlocks() {
// Once the array is changed to either 1 or 2, this function displays either an X or an O on screen in the correct location
  fill(0);
  if (windowWidth > windowHeight) {
    textSize(windowHeight / 3);
  }
  else {
    textSize(windowWidth / 3);
  }
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board.length; y++) {
      if (board[x][y] === 1) {
        text("X", x * blockSizeX + (blockSizeX / 2), y * blockSizeY + (blockSizeY / 2));
      }
      else if (board[x][y] === 2) {
        text("O", x * blockSizeX + (blockSizeX / 2), y * blockSizeY + (blockSizeY / 2));
      }
    }
  }
}


function mousePressed() {
// The function that is called when you click on the mouse
  if (gameState === "game") {
    mousePressedGame();
  }
  else if (gameState === "easyMode") {
    mousePressedEasy();
  }
  // The following sections are just checks to see if you clicked a button in any of the menus
  else if (gameState === "mainMenu") {
    mousePressedMain();
  }
  else if (gameState === "gameMenu") {
    mousePressedGameMenu();
  }
  else if (gameState === "optionsMenu") {
    mousePressedOptions();
  }
}



function aiTurnToPlay() {
// If it is the AI's turn to pick something, it waits one second and then randomly selects somewhere available to click
  if (turn === 2 && winState === 0) {
    tempSpotX = floor(random(0, 3));
    tempSpotY = floor(random(0, 3));
    if (board[tempSpotX][tempSpotY] === 0) {
      if (timer > 0) {
        board[tempSpotX][tempSpotY] = 2;
        turn = 1;
        clickSound.play();
      }
    }
  }
}



function timeCounting() {
// The timer function that allows the CPU to buffer for one second before making it's choice 
  if (fpsTimer >= 60) {
    timer += 1;
    fpsTimer = 0;
  }
}


function checkForWinner() {
// Uses different for loops to check whether someone has won horizontally
  if (winState === 0) {
    for (let checkingX = 0; checkingX < board.length; checkingX ++) {
      if (board[checkingX][0] > 0 && board[checkingX][0] === board[checkingX][1] && board[checkingX][0] === board[checkingX][2]) {
        winState = board[checkingX][0];
        playWinSound = true;
      }
    }
  // Checks for a win vertically
    for (let checkingY = 0; checkingY < board.length; checkingY++) {
      if (board[0][checkingY] > 0 && board[0][checkingY] === board[1][checkingY] && board[0][checkingY] === board[2][checkingY]) {
        winState = board[0][checkingY];
        playWinSound = true;
      }
    }
  // Checks for a win diagonally
    if (board[0][0] > 0 && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
      winState = board[0][0];
      playWinSound = true;
    }
    else if (board[0][2] > 0 && board[0][2] === board[1][1] && board[0][2] == board[2][0]) {
      winState = board[0][2];
      playWinSound = true;
    }
  }
}


function isWinner() {
// Once the checkForWinner function has found a winner, this function displays text on screen showing who won or if a tie has occurred
  if (winState > 0) {
    textSize(windowWidth / 10);
    fill(255, 0, 0);
    text("Click to Reset", windowWidth / 2, windowHeight / 2 + (windowHeight / 5));
  }
  if (winState === 1) {
    text("Player X Wins!", windowWidth / 2, windowHeight / 2);
  }
  else if (winState === 2) {
    text("Player O Wins!", windowWidth / 2, windowHeight / 2);
  }
  else if (winState === 3) {
    text("It's a Tie!", windowWidth / 2, windowHeight / 2);
  }
  if (playWinSound) {
    winSound.play();
    playWinSound = false;
  }
}


function checkForTie() {
// This function checks for a tie and ends the game if all 9 tiles are filled
  tilesCounter = 0;
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board.length; y++) {
      if (board[x][y] > 0) {
        tilesCounter ++;
        if (tilesCounter >= 9 && winState === 0) {
          winState = 3;
        }
      }
    }
  }
}




