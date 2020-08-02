export class FPS {
  constructor(game) {
    this.createFPScontainer(game);
    this.trackFPS(game);
  }

  createFPScontainer(game) {
    this.FPSContainer = document.createElement("div");
    this.FPSContainer.setAttribute("id", "fps-container");
    this.FPSContainer.innerHTML = `
    <table>
      <tr>
        <td><label>FPS (true): </label></td>
        <td><span id="fps-true">0</span></td>
      </tr>
      <tr>
        <td><label>FPS (game): </label></td>
        <td><span id="fps-game">0</span></td>
      </tr>
    </table>
    `;
    game.element.appendChild(this.FPSContainer);
    game.FPStrue = document.getElementById("fps-true");
    game.FPSgame = document.getElementById("fps-game");
  }

  // NEXT
  // Set the fps true and fps game element reference to game.fpstrue and game.fpsgame
  // That way I might be able to use them within setInterval

  trackFPS(game) {
    let clockCurrent = 0;
    setInterval(function () {
      game.FPStrue.innerText = game.clock - clockCurrent;
      clockCurrent = game.clock;
    }, 1000);
  }

  /**
   * Actual number of time requestAnimationFrame ran
   */

  /**
   * Game FPS that we set
   */
}
