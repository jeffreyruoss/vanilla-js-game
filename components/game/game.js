export class Game {
  constructor() {
    this.element = document.getElementById("game");
    this.sprites = [];
    this.spriteSheetSpeed = 20; // 60 is once per second / 1 is 60 per second
    this.element.style.backgroundColor = "grey";
    this.element.style.boxSizing = "border-box";
    this.element.style.width = "100%";
    this.element.style.height = "100%";
    this.element.style.padding = "30px";
    this.element.info = "test info";
    this.clock = 0;
  }
}
