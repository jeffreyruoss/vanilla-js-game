export class Loop {
  constructor(game) {
    init();

    function init() {
      window.requestAnimationFrame(gameLoop);
    }

    function gameLoop(timeStamp) {
      render(game);
      game.world.requestAnimationFrame = requestAnimationFrame(gameLoop);
    }

    function render(game) {
      if (localStorage.getItem("pauseState") === "unpaused") {
        game.world.clock++;
        game.world.sprites.map((sprite) => {
          sprite.render(game);
        });
      }
    }
  }
}
