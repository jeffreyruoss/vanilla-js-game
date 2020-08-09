import { Game } from "./components/Game/Game.js";
import { SceneManager } from "./components/SceneManager/SceneManager.js";
import { Stage } from "./components/Stage/Stage.js";

var testy = "this is test";

const game = new Game();
game.stage = new Stage();
game.sceneManager = new SceneManager(game);
