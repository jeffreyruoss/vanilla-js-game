import { Game } from "./components/Game/Game.js";
import { SceneManager } from "./components/SceneManager/SceneManager.js";
import { Stage } from "./components/Stage/Stage.js";

const game = new Game();
const stage = new Stage();
window.sceneManager = new SceneManager(stage);
