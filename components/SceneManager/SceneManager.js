import { World } from "../World/World.js";
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
    game.world.element.parentNode.removeChild(game.world.element);

    clearInterval(game.world.FPSsetInterval);
    cancelAnimationFrame(game.world.requestAnimationFrame);

    game.world = new World(game);

    game.world.element = document.createElement("div");
    document.getElementsByTagName("body")[0].appendChild(game.world.element);
    game.world.element.id = "world";

    if (sceneName !== "fromLocalStorage") {
      localStorage.setItem("scene", sceneName);
    }

    if (localStorage.getItem("scene") === "title") {
      game.world.scene = new Title(game);
    } else if (localStorage.getItem("scene") === "main") {
      game.world.scene = new Main(game);
    }
  }
}
