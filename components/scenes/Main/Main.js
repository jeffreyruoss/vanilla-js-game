import { Loop } from "../../../components/Loop/Loop.js";
import { PauseButton } from "../../../components/PauseButton/PauseButton.js";
import { FPS } from "../../../components/FPS/FPS.js";
import {
  Character,
  createCharacter,
} from "../../../components/character/character.js";

export class Main {
  constructor(stage) {
    stage.spriteSheetSpeed = 20; // 60 is once per second / 1 is 60 per second
    stage.element.style.backgroundColor = "grey";
    stage.element.style.boxSizing = "border-box";
    stage.element.style.width = "100%";
    stage.element.style.height = "100%";
    stage.element.style.padding = "30px";
    stage.clock = 0;
    stage.loop = new Loop(stage);
    stage.fps = new FPS(stage);
    stage.pauseButton = new PauseButton(stage);

    const character1 = createCharacter(500, 300, 1, stage);
    stage.sprites.push(character1);

    const character2 = createCharacter(200, 400, 2, stage);
    stage.sprites.push(character2);

    this.backToTitleButton = document.createElement("button");
    stage.element.appendChild(this.backToTitleButton);
    this.backToTitleButton.value = "Back to title";
    this.backToTitleButton.innerText = "Back to title";
    this.backToTitleButton.addEventListener("click", () => {
      sceneManager.loadScene(stage, "title");
    });
  }
}
