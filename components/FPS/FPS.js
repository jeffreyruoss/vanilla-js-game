export class FPS {
  constructor(stage) {
    this.createFPScontainer(stage);
    this.styleFPScontainer();
    this.trackFPS(stage);
  }
  createFPScontainer(stage) {
    this.FPScontainer = document.createElement("div");
    this.FPScontainer.setAttribute("id", "fps-container");
    this.FPScontainer.innerHTML = `
    <label>FPS: </label>
    <span id="fps-value">0</span>
    `;
    stage.element.appendChild(this.FPScontainer);
    stage.FPSvalue = document.getElementById("fps-value");
  }

  styleFPScontainer() {
    this.FPScontainer.style.padding = "10px";
    this.FPScontainer.style.backgroundColor = "#000";
    this.FPScontainer.style.color = "#35c735";
  }

  trackFPS(stage) {
    let clockCurrent = 0;
    setInterval(function () {
      stage.FPSvalue.innerText = stage.clock - clockCurrent;
      clockCurrent = stage.clock;
    }, 1000);
  }
}
