export class Dashboard {
  constructor(game) {
    this.pauseButton(game);
  }

  pauseButton(game) {
    const pauseButton = document.createElement("button");
    game.element.appendChild(pauseButton);
    pauseButton.innerText = "PAUSE";
    pauseButton.style.top = "60px";

    pauseButton.addEventListener("click", function () {
      game.pause = !game.pause;
    });
  }
}
