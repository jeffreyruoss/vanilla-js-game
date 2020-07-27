export class Character {
  constructor() {}

  characterID = "";

  element = "";

  create(x, y) {
    this.element = document.createElement("div");
    this.element.className = "character";
    this.element.style.width = "64px";
    this.element.style.height = "64px";
    this.element.style.top = y;
    this.element.style.left = x;
    this.element.style.backgroundPositionX = 0;
    this.element.style.backgroundImage =
      "url('/components/character/img/Char_one/Idle/Char_idle_down.png')";
    this.element.style.backgroundSize = "600%";
    this.element.style.imageRendering = "pixelated";
    document.getElementById("game").appendChild(this.element);
  }

  idleAnimation() {
    if (parseInt(this.element.style.backgroundPositionX) == 384) {
      this.element.style.backgroundPositionX = 0;
    } else {
      this.element.style.backgroundPositionX =
        parseInt(this.element.style.backgroundPositionX) + 64 + "px";
    }
  }

  render() {
    this.idleAnimation();
  }
}

export function create(x, y) {
  const character = new Character();
  character.create(x, y);
  return character;
}
