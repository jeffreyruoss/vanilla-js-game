import { Loop } from "../../../components/Loop/Loop.js";
import { PauseButton } from "../../../components/PauseButton/PauseButton.js";
import { FPS } from "../../../components/FPS/FPS.js";
import {
  Character,
  createCharacter,
} from "../../../components/Character/Character.js";

export class Main {
  constructor(game) {}

  load(game) {
    this.name = "Main";
    game.world.spriteSheetSpeed = 5; // 60 is once per second / 1 is 60 per second
    game.world.element.style.backgroundColor = "grey";
    game.world.element.style.boxSizing = "border-box";
    game.world.element.style.width = "100%";
    game.world.element.style.height = "100%";
    game.world.element.style.padding = "30px";
    game.world.fps = new FPS(game);
    game.world.pauseButton = new PauseButton(game);

    const character1 = createCharacter(500, 300, 1, game);
    game.world.sprites.push(character1);

    this.backToTitleButton = document.createElement("button");
    game.world.element.appendChild(this.backToTitleButton);
    this.backToTitleButton.value = "Back to title";
    this.backToTitleButton.innerText = "Back to title";
    this.backToTitleButton.style.top = "130px";
    this.backToTitleButton.addEventListener("click", () => {
      game.sceneManager.loadScene(game, "title");
    });
  }

  start(game) {
    game.world.clock = 0;
    game.world.loop = new Loop(game);
  }

  deconstructor(game) {
    game.world.pauseButton.deconstructor();
    clearInterval(game.world.FPSsetInterval);
    cancelAnimationFrame(game.world.requestAnimationFrame);
  }
}
