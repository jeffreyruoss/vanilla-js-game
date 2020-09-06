export const SpriteAnimate = {
    spriteAnimate(game, currentAnimation) {
        if (game.world.clock % game.world.spriteSheetSpeed == 0) {
            if (parseInt(this.element.style.backgroundPositionX) == 320) {
              this.element.style.backgroundPositionX = 0;
            } else {
              this.element.style.backgroundPositionX =
                parseInt(this.element.style.backgroundPositionX) + 64 + "px";
            }
          }
    },
};