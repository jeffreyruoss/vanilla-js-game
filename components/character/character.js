import { SpriteAnimate } from "../Sprite/SpriteAnimate.js";
import { SpriteMove } from "../Sprite/SpriteMove.js";
import { SpriteSetMoveActions } from "../Sprite/SpriteMove.js";
import { SpriteSetIdleActions } from "../Sprite/SpriteIdle.js";

export class Character {
  constructor(game) {
    this.moving = false;
    this.walkSpeed = 1;
    this.idleSpeed = 0.5;
    this.currentAnimationSpeed = this.idleSpeed;
    this.currentAnimation = 'idleDown';
    this.currentDirection = 'down';
    this.spriteSheets = {
      'idleUp': "url('/components/character/img/Char_one/Idle/Char_idle_up.png')",
      'idleDown': "url('/components/character/img/Char_one/Idle/Char_idle_down.png')",
      'idleLeft': "url('/components/character/img/Char_one/Idle/Char_idle_left.png')",
      'idleRight': "url('/components/character/img/Char_one/Idle/Char_idle_right.png')",
      'walkUp': "url('/components/character/img/Char_one/Walk/Char_walk_up.png')",
      'walkDown': "url('/components/character/img/Char_one/Walk/Char_walk_down.png')",
      'walkLeft': "url('/components/character/img/Char_one/Walk/Char_walk_left.png')",
      'walkRight': "url('/components/character/img/Char_one/Walk/Char_walk_right.png')",
    };
    this.spriteSetIdleActions(game);
    this.spriteSetMoveActions(game);
  }

  create(x, y) {
    this.element = document.createElement("div");
    this.element.className = "character";
    this.element.style.width = "64px";
    this.element.style.height = "64px";
    this.element.style.top = y;
    this.element.style.left = x;
    this.element.style.backgroundPositionX = 0;
    this.element.style.backgroundSize = "600%";
    this.element.style.imageRendering = "pixelated";
    this.element.style.backgroundImage = this.spriteSheets[this.currentAnimation];
    document.getElementById("world").appendChild(this.element);
  }

  render(game) {
    this.spriteMove(game);
    this.spriteAnimate(game);
  }
}

export function createCharacter(x, y, game) {
  const character = new Character(game);
  character.create(x, y);
  return character;
}

Object.assign(Character.prototype, SpriteAnimate);
Object.assign(Character.prototype, SpriteMove);
Object.assign(Character.prototype, SpriteSetMoveActions);
Object.assign(Character.prototype, SpriteSetIdleActions);