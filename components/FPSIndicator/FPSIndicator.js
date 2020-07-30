export class FPSIndicator {
  constructor(game) {
    this.element = document.createElement("div");
    game.element.appendChild(this.element);
    this.element.innerText = "FPS: ";

    const fpsNumber = document.createElement("span");
    this.element.appendChild(fpsNumber);
    fpsNumber.innerText = 0;
  }
}
