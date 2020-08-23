export class Title {
  constructor(game) {}

  load(game) {
    this.name = "Title";
    this.info = "info in the title scene";

    this.startButton = document.createElement("button");
    game.world.element.appendChild(this.startButton);
    this.startButton.value = "START";
    this.startButton.innerText = "START";
    this.startButton.addEventListener("click", () => {
      game.sceneManager.loadScene(game, "main");
    });

    this.titleText = document.createElement("h1");
    game.world.element.appendChild(this.titleText);
    this.titleText.innerText = "BATTLE LAND";
    this.titleText.style.top = "300px";
    this.titleText.style.left = "280px";
    this.titleText.style.fontSize = "100px";
  }

  start(game) {}

  deconstructor() {}
}
