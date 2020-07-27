export class Game {
  element = document.getElementById("game");
  pause = false;
  sprites = [];

  clock = 0;

  constructor() {
    this.element.style.backgroundColor = "grey";
    this.element.style.boxSizing = "border-box";
    this.element.style.width = "100%";
    this.element.style.height = "100%";
    this.element.style.padding = "30px";
    this.element.info = "test info";
  }
}
