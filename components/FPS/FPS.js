export class FPS {
  constructor(game) {
    this.createFPScontainer(game);
    this.trackFPS(game);
  }
  createFPScontainer(game) {
    this.FPSContainer = document.createElement("div");
    this.FPSContainer.setAttribute("id", "fps-container");
    this.FPSContainer.innerHTML = `
    <label>FPS: </label>
    <span id="fps-value">0</span>
    `;
    game.element.appendChild(this.FPSContainer);
    game.FPSvalue = document.getElementById("fps-value");
  }

  trackFPS(game) {
    let clockCurrent = 0;
    setInterval(function () {
      game.FPSvalue.innerText = game.clock - clockCurrent;
      clockCurrent = game.clock;
    }, 1000);
  }
}
