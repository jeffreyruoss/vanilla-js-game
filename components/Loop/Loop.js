export class Loop {
  constructor(game) {
    window.onload = init;

    function init() {
      window.requestAnimationFrame(gameLoop);
    }

    function gameLoop(timeStamp) {
      render();
      window.requestAnimationFrame(gameLoop);
    }

    function render() {
      if (localStorage.getItem("pauseState") === "unpaused") {
        game.clock++;
        game.sprites.map((sprite) => {
          sprite.render(game);
        });
      }
    }
  }
}
