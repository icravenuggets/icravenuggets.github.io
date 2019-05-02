// I kept the spells as separate classes even though they are very similar because I plan
// to take these much further than they currently are at in terms of behavioural differences


class fireSpell {
  // Firespell beats grass but disappears if it collides with a water spell
  constructor(startingX, startingY, speed, direction, owner) {
    this.x = startingX;
    this.y = startingY;
    this.size = tileSize;
    this.speed = speed;
    this.direction = direction;
    this.counter = millis();
    this.exists = true;
    this.owner = owner;
  }

  implant() {
    if (this.exists) {
      field[this.x][this.y] = "f";
    }
  }

  move() {
    if (millis() - this.counter >= this.speed && this.exists) {
      if (this.direction === "up") {
        field[this.x][this.y] = ".";
        if (field[this.x][this.y - 1] != "#") {
          this.y -= 1;
        }
        else {
          this.exists = false;
          field[this.x][this.y] = ".";
        }
      }
      else if (this.direction === "down") {
        field[this.x][this.y] = ".";
        if (field[this.x][this.y + 1] != "#") {
          this.y += 1;
        }
        else {
          this.exists = false;
          field[this.x][this.y] = ".";
        }
      }
      else if (this.direction === "right") {
        field[this.x][this.y] = ".";
        if (field[this.x + 1][this.y] != "#") {
          this.x += 1;
        }
        else {
          this.exists = false;
          field[this.x][this.y] = ".";
        }
      }
      else if (this.direction === "left") {
        field[this.x][this.y] = ".";
        if (field[this.x - 1][this.y] != "#") {
          this.x -= 1;
        }
        else {
          this.exists = false;
          field[this.x][this.y] = ".";
        }
      }
      this.counter = millis();
    }
  }
}



class waterSpell {
  // beats fire but loses to grass
  constructor(startingX, startingY, speed, direction, owner) {
    this.x = startingX;
    this.y = startingY;
    this.size = tileSize;
    this.speed = speed;
    this.direction = direction;
    this.counter = millis();
    this.exists = true;
    this.owner = owner;
  }

  implant() {
    if (this.exists) {
      field[this.x][this.y] = "w";
    }
  }

  move() {
    if (millis() - this.counter >= this.speed && this.exists) {
      if (this.direction === "up") {
        field[this.x][this.y] = ".";
        if (field[this.x][this.y - 1] != "#") {
          this.y -= 1;
        }
        else {
          this.exists = false;
          field[this.x][this.y] = ".";
        }
      }
      else if (this.direction === "down") {
        field[this.x][this.y] = ".";
        if (field[this.x][this.y + 1] != "#") {
          this.y += 1;
        }
        else {
          this.exists = false;
          field[this.x][this.y] = ".";
        }
      }
      else if (this.direction === "right") {
        field[this.x][this.y] = ".";
        if (field[this.x + 1][this.y] != "#") {
          this.x += 1;
        }
        else {
          this.exists = false;
          field[this.x][this.y] = ".";
        }
      }
      else if (this.direction === "left") {
        field[this.x][this.y] = ".";
        if (field[this.x - 1][this.y] != "#") {
          this.x -= 1;
        }
        else {
          this.exists = false;
          field[this.x][this.y] = ".";
        }
      }
      this.counter = millis();
    }
  }
}





class grassSpell {
  // beats water, loses to fire
  constructor(startingX, startingY, speed, direction, owner) {
    this.x = startingX;
    this.y = startingY;
    this.size = tileSize;
    this.speed = speed;
    this.direction = direction;
    this.counter = millis();
    this.exists = true;
    this.owner = owner;
  }

  implant() {
    if (this.exists) {
      field[this.x][this.y] = "g";
    }
  }

  move() {
    if (millis() - this.counter >= this.speed && this.exists) {
      if (this.direction === "up") {
        field[this.x][this.y] = ".";
        if (field[this.x][this.y - 1] != "#") {
          this.y -= 1;
        }
        else {
          this.exists = false;
          field[this.x][this.y] = ".";
        }
      }
      else if (this.direction === "down") {
        field[this.x][this.y] = ".";
        if (field[this.x][this.y + 1] != "#") {
          this.y += 1;
        }
        else {
          this.exists = false;
          field[this.x][this.y] = ".";
        }
      }
      else if (this.direction === "right") {
        field[this.x][this.y] = ".";
        if (field[this.x + 1][this.y] != "#") {
          this.x += 1;
        }
        else {
          this.exists = false;
          field[this.x][this.y] = ".";
        }
      }
      else if (this.direction === "left") {
        field[this.x][this.y] = ".";
        if (field[this.x - 1][this.y] != "#") {
          this.x -= 1;
        }
        else {
          this.exists = false;
          field[this.x][this.y] = ".";
        }
      }
      this.counter = millis();
    }
  }
}



class button {
  constructor(x, y, buttonHeight, color, text) {
    // the x and y is in the center of the button
    this.x = x - buttonHeight * 1.5 / 2;
    this.y = y - buttonHeight / 2;
    this.textX = x;
    this.textY = y;
    this.height = buttonHeight;
    this.width = buttonHeight * 1.5;
    this.color = color;
    this.text = text;
  }

  display() {
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
    textSize(this.width / 5);
    fill(0);
    text(this.text, this.textX, this.textY);
  }
}


class healthbar {
  constructor(x, y, health) {

  }
}