import { Title } from "../Scenes/Title/Title.js";
import { Main } from "../Scenes/Main/Main.js";

export class SceneManager {
  constructor(stage) {
    if (localStorage.getItem("scene") === null) {
      localStorage.setItem("scene", "title");
    }
    this.loadScene(stage);
  }

  loadScene(stage, sceneName = "fromLocalStorage") {
    stage.element.parentNode.removeChild(stage.element);
    stage.element = document.createElement("div");
    document.getElementsByTagName("body")[0].appendChild(stage.element);
    stage.element.id = "stage";

    if (sceneName !== "fromLocalStorage") {
      localStorage.setItem("scene", sceneName);
    }

    if (localStorage.getItem("scene") === "title") {
      stage.scene = new Title(stage);
    } else if (localStorage.getItem("scene") === "main") {
      stage.scene = new Main(stage);
    }
  }
}
