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
    game.stage.spriteSheetSpeed = 20; // 60 is once per second / 1 is 60 per second
    game.stage.element.style.backgroundColor = "grey";
    game.stage.element.style.boxSizing = "border-box";
    game.stage.element.style.width = "100%";
    game.stage.element.style.height = "100%";
    game.stage.element.style.padding = "30px";
    game.stage.clock = 0;
    game.stage.loop = new Loop(game);
    game.stage.fps = new FPS(game);
    game.stage.pauseButton = new PauseButton(game);

    const character1 = createCharacter(500, 300, 1, game);
    game.stage.sprites.push(character1);

    const character2 = createCharacter(200, 400, 2, game);
    game.stage.sprites.push(character2);

    this.backToTitleButton = document.createElement("button");
    game.stage.element.appendChild(this.backToTitleButton);
    this.backToTitleButton.value = "Back to title";
    this.backToTitleButton.innerText = "Back to title";
    this.backToTitleButton.style.top = "130px";
    this.backToTitleButton.addEventListener("click", () => {
      game.sceneManager.loadScene(game, "title");
    });
  }
}
