import { Loop } from "../../../components/Loop/Loop.js";
import { PauseButton } from "../../../components/PauseButton/PauseButton.js";
import { FPS } from "../../../components/FPS/FPS.js";
import {
  Character,
  createCharacter,
} from "../../../components/character/character.js";

export class Main {
  constructor(game) {
    this.name = "Main";
    game.world.spriteSheetSpeed = 20; // 60 is once per second / 1 is 60 per second
    game.world.element.style.backgroundColor = "grey";
    game.world.element.style.boxSizing = "border-box";
    game.world.element.style.width = "100%";
    game.world.element.style.height = "100%";
    game.world.element.style.padding = "30px";
    game.world.clock = 0;
    game.world.loop = new Loop(game);
    game.world.fps = new FPS(game);
    game.world.pauseButton = new PauseButton(game);

    const character1 = createCharacter(500, 300, 1, game);
    game.world.sprites.push(character1);

    const character2 = createCharacter(200, 400, 2, game);
    game.world.sprites.push(character2);

    this.backToTitleButton = document.createElement("button");
    game.world.element.appendChild(this.backToTitleButton);
    this.backToTitleButton.value = "Back to title";
    this.backToTitleButton.innerText = "Back to title";
    this.backToTitleButton.style.top = "130px";
    this.backToTitleButton.addEventListener("click", () => {
      game.sceneManager.loadScene(game, "title");
    });
  }
}
