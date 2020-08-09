import { Stage } from "../Stage/Stage.js";
import { Title } from "../Scenes/Title/Title.js";
import { Main } from "../Scenes/Main/Main.js";

export class SceneManager {
  constructor(game) {
    if (localStorage.getItem("scene") === null) {
      localStorage.setItem("scene", "title");
    }
    this.loadScene(game);
  }

  loadScene(game, sceneName = "fromLocalStorage") {
    game.stage.element.parentNode.removeChild(game.stage.element);

    clearInterval(game.stage.FPSsetInterval);
    cancelAnimationFrame(game.stage.requestAnimationFrame);

    game.stage = new Stage(game);

    game.stage.element = document.createElement("div");
    document.getElementsByTagName("body")[0].appendChild(game.stage.element);
    game.stage.element.id = "stage";

    if (sceneName !== "fromLocalStorage") {
      localStorage.setItem("scene", sceneName);
    }

    if (localStorage.getItem("scene") === "title") {
      game.stage.scene = new Title(game);
    } else if (localStorage.getItem("scene") === "main") {
      game.stage.scene = new Main(game);
    }
  }
}
