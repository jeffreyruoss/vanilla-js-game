import { Init } from "./components/init/init.js";
import { SceneManager } from "./components/SceneManager/SceneManager.js";
import { Stage } from "./components/Stage/Stage.js";

const init = new Init();
const stage = new Stage();
window.sceneManager = new SceneManager(stage);
