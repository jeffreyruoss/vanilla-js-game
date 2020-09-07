export const SpriteMove = {
    spriteMove(game) {
        if (game.playerInput.w || game.playerInput.s || game.playerInput.a || game.playerInput.d) {
          this.moving = true;
          this.currentAnimationSpeed = this.walkSpeed;
        } else {
          this.moving = false;
          this.currentAnimationSpeed = this.idleSpeed;
        }

        if (game.playerInput.w) {
          this.element.style.top = parseInt(this.element.style.top) - 4 + "px";
          this.element.style.backgroundImage = this.spriteSheets['walkUp'];
          this.currentDirection = 'up';
        } else if (game.playerInput.s) {
          this.element.style.top = parseInt(this.element.style.top) + 4 + "px";
          this.element.style.backgroundImage = this.spriteSheets['walkDown'];
          this.currentDirection = 'down';
        }
    
        if (game.playerInput.a) {
          this.element.style.left = parseInt(this.element.style.left) - 4 + "px";
          this.element.style.backgroundImage = this.spriteSheets['walkLeft'];
          this.currentDirection = 'left';
        } else if (game.playerInput.d) {
          this.element.style.left = parseInt(this.element.style.left) + 4 + "px";
          this.element.style.backgroundImage = this.spriteSheets['walkRight'];
          this.currentDirection = 'right';
        }
      }
}