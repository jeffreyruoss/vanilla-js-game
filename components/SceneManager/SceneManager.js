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
    if (game.world.scene !== undefined) {
      game.world.scene.deconstructor(game);
    }
    game.world.element.parentNode.removeChild(game.world.element);

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

    game.world.scene.load(game);
    game.world.scene.start(game);

    console.log(
      `%c${localStorage.getItem("scene")} scene loaded`,
      "color: #60ff4b; text-transform: capitalize; border-bottom: 1px solid #60ff4b78;"
    );
  }
}
