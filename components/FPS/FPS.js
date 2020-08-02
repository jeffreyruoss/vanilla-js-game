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
    game.element.appendChild(this.FPScontainer);
    game.FPSvalue = document.getElementById("fps-value");
  }

  styleFPScontainer() {
    console.log(this.FPScontainer);
    this.FPScontainer.style.padding = "10px";
    this.FPScontainer.style.backgroundColor = "#000";
    this.FPScontainer.style.color = "#35c735";
  }

  trackFPS(game) {
    let clockCurrent = 0;
    setInterval(function () {
      game.FPSvalue.innerText = game.clock - clockCurrent;
      clockCurrent = game.clock;
    }, 1000);
  }
}
