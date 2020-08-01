export class FPS {
  constructor(game) {
    this.createFPScontainer(game);
    this.createFPStrue(game);
    this.createFPSgame(game);
    this.trackFPS(game);
  }

  createFPScontainer(game) {
    this.FPSContainer = document.createElement("div");
    this.FPSContainer.setAttribute("id", "fps-container");
    game.element.appendChild(this.FPSContainer);
  }

  createFPStrue(game) {
    this.FPStrue = document.createElement("div");
    this.FPStrue.setAttribute("id", "fps-true");
    this.FPSContainer.appendChild(this.FPStrue);
  }

  createFPSgame(game) {
    this.FPSgame = document.createElement("div");
    this.FPSgame.setAttribute("id", "fps-game");
    this.FPSContainer.appendChild(this.FPSgame);
  }

  // NEXT
  // Set the fps true and fps game element reference to game.fpstrue and game.fpsgame
  // That way I might be able to use them within setInterval

  trackFPS(game) {
    let clockCurrent = 0;
    setInterval(function () {
      console.log("test");
      console.log(game.clock - clockCurrent);
      clockCurrent = game.clock;
    }, 1000);
  }

  /**
   * Actual number of time requestAnimationFrame ran
   */
  setFPStrue(game) {}

  /**
   * Game FPS that we set
   */
  setFPSgame() {}
}
