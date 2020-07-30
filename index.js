import { Init } from "./components/init/init.js";
import { Game } from "./components/game/game.js";
import * as Character from "./components/character/character.js";
import { PauseButton } from "./components/PauseButton/PauseButton.js";
import { FPSIndicator } from "./components/FPSIndicator/FPSIndicator.js";

const init = new Init();
const game = new Game();
const pauseButton = new PauseButton(game);
const fpsIndicator = new FPSIndicator(game);

let clock = game.clock;

window.onload = initLoop;

function initLoop() {
  window.requestAnimationFrame(gameLoop);
}

function gameLoop(timeStamp) {
  render();
  window.requestAnimationFrame(gameLoop);
}

const character1 = Character.create(500, 300, 1, game);
game.sprites.push(character1);

const character2 = Character.create(200, 400, 2, game);
game.sprites.push(character2);

function render() {
  if (!game.pause) {
    clock++;
    // console.log(clock);
    if (clock % 10 === 0) {
      game.sprites.map((sprite) => {
        sprite.render();
      });
    }
  }
}
