import { SpriteAnimate } from "../Sprite/SpriteAnimate.js";
import { SpriteMove } from "../Sprite/SpriteMove.js";

export class Character {
  constructor(game) {
    this.info = "character info";
    this.currentAnimation = 'idleUp';
    this.spriteSheets = {
      'idleUp': "url('/components/character/img/Char_one/Idle/Char_idle_up.png')",
      'idleDown': "url('/components/character/img/Char_one/Idle/Char_idle_down.png')",
      'idleLeft': "url('/components/character/img/Char_one/Idle/Char_idle_left.png')",
      'idleRight': "url('/components/character/img/Char_one/Idle/Char_idle_right.png')"
    }
  }

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
    document.getElementById("world").appendChild(this.element);
  }

  render(game) {
    this.spriteMove(game);
    this.spriteAnimate(game);

    if (this.currentAnimation == 'idleDown') {
      this.element.style.backgroundImage = this.spriteSheets.idleUp;
    } else if (this.currentAnimation == 'idleUp') {
      this.element.style.backgroundImage = this.spriteSheets.idleDown;
    } else if (this.currentAnimation == 'idleLeft') {
      this.element.style.backgroundImage = this.spriteSheets.idleLeft;
    } else if (this.currentAnimation == 'idleRight') {
      this.element.style.backgroundImage = this.spriteSheets.idleRight;
    }
  }
}

export function createCharacter(x, y) {
  const character = new Character();
  character.create(x, y);
  return character;
}

Object.assign(Character.prototype, SpriteAnimate);
Object.assign(Character.prototype, SpriteMove);