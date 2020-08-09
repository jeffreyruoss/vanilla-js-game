export class FPS {
  constructor(game) {
    this.createFPScontainer(game);
    this.styleFPScontainer();
    this.trackFPS(game);
  }

  createFPScontainer(game) {
    this.FPScontainer = document.createElement("div");
    this.FPScontainer.setAttribute("id", "fps-container");
    this.FPScontainer.innerHTML = `
    <label>FPS: </label>
    <span id="fps-value">0</span>
    `;
    game.stage.element.appendChild(this.FPScontainer);
    game.stage.FPSvalue = document.getElementById("fps-value");
  }

  styleFPScontainer() {
    this.FPScontainer.style.padding = "10px";
    this.FPScontainer.style.backgroundColor = "#000";
    this.FPScontainer.style.color = "#35c735";
  }

  trackFPS(game) {
    let clockCurrent = 0;
    game.stage.FPSsetInterval = setInterval(function () {
      game.stage.FPSvalue.innerText = game.stage.clock - clockCurrent;
      clockCurrent = game.stage.clock;
    }, 1000);
  }
}
