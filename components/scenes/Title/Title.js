export class Title {
  constructor(game) {
    this.name = "Title";
    this.info = "info in the title scene";

    this.startButton = document.createElement("button");
    game.world.element.appendChild(this.startButton);
    this.startButton.value = "START";
    this.startButton.innerText = "START";
    this.startButton.addEventListener("click", () => {
      game.sceneManager.loadScene(game, "main");
    });
  }

  deconstructor() {}
}
