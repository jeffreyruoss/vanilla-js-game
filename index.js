import { Init } from "./components/init/init.js";
import { SceneManager } from "./components/SceneManager/SceneManager.js";
import { Main } from "./components/Scenes/Main/Main.js";
import * as Character from "./components/character/character.js";
import { PauseButton } from "./components/PauseButton/PauseButton.js";
import { FPS } from "./components/FPS/FPS.js";
import { Loop } from "./components/Loop/Loop.js";

const init = new Init();
const sceneManager = new SceneManager();

if (localStorage.getItem("scene") === "title") {
  console.log("This will be the title scene");
} else if (localStorage.getItem("scene") === "main") {
  const main = new Main();
  const loop = new Loop(main);
  const pauseButton = new PauseButton(main);
  const fps = new FPS(main);

  const character1 = Character.create(500, 300, 1, main);
  main.sprites.push(character1);

  const character2 = Character.create(200, 400, 2, main);
  main.sprites.push(character2);
}
