export class PauseButton {
  constructor(game) {
    this.element = document.createElement("button");
    game.element.appendChild(this.element);

    this.element.innerText = "PAUSE";
    this.element.style.top = "60px";

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
