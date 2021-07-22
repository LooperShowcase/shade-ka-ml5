class Player {
  constructor() {
    this.size = 100;
    this.x = this.size + 150;
    this.y = height - this.size;
    this.velocityY = 0;
    this.gravity = 1;
  }

  move() {
    this.y = this.y + this.velocityY;
    this.velocityY += this.gravity;
    this.y = constrain(this.y, 0, height - this.size);
  }

  jump() {
    if (this.y == height - this.size) {
      this.velocityY = -20;
    }
  }

  show() {
    image(playerimage, this.x, this.y, this.size, this.size);
  }
  collided(cerrentOobs) {
    let iscolliding = collideRectRect(
      this.x,
      this.y,
      this.size,
      this.size,
      cerrentOobs.x,
      cerrentOobs.y,
      cerrentOobs.size,
      cerrentOobs.size
    );
    return iscolliding;
  }
}
