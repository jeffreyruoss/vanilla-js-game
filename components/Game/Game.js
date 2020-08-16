import { PlayerInput } from "../PlayerInput/PlayerInput.js";

export class Game {
  constructor() {
    this.world;
    this.sceneManager;
    this.playerInput = new PlayerInput(this);
    this.globalStyles();
  }

  globalStyles() {
    const style = document.createElement("style");
    document.getElementsByTagName("head")[0].appendChild(style);
    style.innerText = "#world > * {position: absolute;} ";
    style.innerText = style.innerText + "body {margin: 0;}";
  }
}
