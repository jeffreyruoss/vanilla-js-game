import { Init } from "./components/init/init.js";
import { Game } from "./components/game/game.js";
import * as Character from "./components/character/character.js";
import { PauseButton } from "./components/PauseButton/PauseButton.js";
import { FPS } from "./components/FPS/FPS.js";

const init = new Init();
const game = new Game();
const pauseButton = new PauseButton(game);
const fps = new FPS(game);

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
    game.clock++;
    // console.log(clock);
    game.sprites.map((sprite) => {
      sprite.render(game);
    });
  }
}
