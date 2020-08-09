export class Loop {
  constructor(game) {
    init();

    function init() {
      window.requestAnimationFrame(gameLoop);
    }

    function gameLoop(timeStamp) {
      render(game);
      game.stage.requestAnimationFrame = requestAnimationFrame(gameLoop);
    }

    function render(game) {
      if (localStorage.getItem("pauseState") === "unpaused") {
        game.stage.clock++;
        game.stage.sprites.map((sprite) => {
          sprite.render(game);
        });
      }
    }
  }
}
