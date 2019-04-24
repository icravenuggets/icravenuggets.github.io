


class fireSpell {
  constructor(startingX, startingY, speed, direction) {
    this.x = startingX;
    this.y = startingY;
    this.size = tileSize;
    this.speed = speed;
    this.direction = direction;
    this.counter = millis();
    this.exists = true;
  }

  implant() {
    if (this.exists) {
      field[this.x][this.y] = "f";
    }
  }

  move() {
    if (millis() - this.counter >= 200 && this.exists) {
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
  constructor(startingX, startingY, speed, direction) {
    this.x = startingX;
    this.y = startingY;
    this.size = tileSize;
    this.speed = speed;
    this.direction = direction;
    this.counter = millis();
    this.exists = true;
  }

  implant() {
    if (this.exists) {
      field[this.x][this.y] = "w";
    }
  }

  move() {
    if (millis() - this.counter >= 200 && this.exists) {
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
  constructor(startingX, startingY, speed, direction) {
    this.x = startingX;
    this.y = startingY;
    this.size = tileSize;
    this.speed = speed;
    this.direction = direction;
    this.counter = millis();
    this.exists = true;
  }

  implant() {
    if (this.exists) {
      field[this.x][this.y] = "g";
    }
  }

  move() {
    if (millis() - this.counter >= 200 && this.exists) {
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