import { Game } from "./components/Game/Game.js";
import { SceneManager } from "./components/SceneManager/SceneManager.js";
import { World } from "./components/World/World.js";

const game = new Game();
game.world = new World();
game.sceneManager = new SceneManager(game);
