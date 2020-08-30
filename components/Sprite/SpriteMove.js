export const SpriteMove = {
    spriteMove(game) {
        if (game.playerInput.w) {
          this.element.style.top = parseInt(this.element.style.top) - 4 + "px";
          this.currentAnimation = 'idleDown';
        } else if (game.playerInput.s) {
          this.element.style.top = parseInt(this.element.style.top) + 4 + "px";
          this.currentAnimation = 'idleUp';
        }
    
        if (game.playerInput.a) {
          this.element.style.left = parseInt(this.element.style.left) - 4 + "px";
          this.currentAnimation = 'idleLeft';
        } else if (game.playerInput.d) {
          this.element.style.left = parseInt(this.element.style.left) + 4 + "px";
          this.currentAnimation = 'idleRight';
        }
      }
}