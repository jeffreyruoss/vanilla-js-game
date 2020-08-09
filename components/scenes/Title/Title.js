export class Title {
  constructor(stage) {
    this.info = "info in the title scene";
    console.log("this is title");

    this.startButton = document.createElement("button");
    stage.element.appendChild(this.startButton);
    this.startButton.value = "START";
    this.startButton.innerText = "START";
    this.startButton.addEventListener("click", () => {
      sceneManager.loadScene(stage, "main");
    });

    console.log(stage);
  }
}
