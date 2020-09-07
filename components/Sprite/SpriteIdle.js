export const SpriteIdle = {
    spriteIdle(game) {
        if (this.moving === false) {
            if (this.currentDirection === 'up') {
              this.element.style.backgroundImage = this.spriteSheets['idleUp'];
            } else if (this.currentDirection === 'down') {
              this.element.style.backgroundImage = this.spriteSheets['idleDown'];
            } else if (this.currentDirection === 'left') {
              this.element.style.backgroundImage = this.spriteSheets['idleLeft'];
            } else if (this.currentDirection === 'right') {
              this.element.style.backgroundImage = this.spriteSheets['idleRight'];
            }
          }
    }
}