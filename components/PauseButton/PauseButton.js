export class PauseButton {
  constructor(game) {
    this.element = document.createElement("button");
    game.element.appendChild(this.element);

    this.element.innerText = "PAUSE";
    this.element.style.top = "80px";
    this.element.style.padding = "7px 10px";

    this.element.addEventListener("click", function () {
      if (game.pause) {
        this.innerText = "PAUSE";
        game.pause = false;
      } else {
        this.innerText = "UNPAUSE";
        game.pause = true;
      }
    });
  }
}
