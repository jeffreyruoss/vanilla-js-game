export class Title {
  constructor(game) {
    this.name = "Title";
    this.info = "info in the title scene";
    console.log("this is title");

    this.startButton = document.createElement("button");
    game.stage.element.appendChild(this.startButton);
    this.startButton.value = "START";
    this.startButton.innerText = "START";
    this.startButton.addEventListener("click", () => {
      game.sceneManager.loadScene(game, "main");
    });
  }
}
