export class Loop {
  constructor(stage) {
    init();

    function init() {
      window.requestAnimationFrame(gameLoop);
    }

    function gameLoop(timeStamp) {
      render();
      window.requestAnimationFrame(gameLoop);
    }

    function render() {
      if (localStorage.getItem("pauseState") === "unpaused") {
        stage.clock++;
        stage.sprites.map((sprite) => {
          sprite.render(stage);
        });
      }
    }
  }
}
