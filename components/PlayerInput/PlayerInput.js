export class PlayerInput {
  constructor(game) {
    this.w;
    this.a;
    this.s;
    this.d;

    document.addEventListener("keydown", function (e) {
      if (e.key === "w") {
        game.playerInput.w = true;
      }
      if (e.key === "a") {
        game.playerInput.a = true;
      }
      if (e.key === "s") {
        game.playerInput.s = true;
      }
      if (e.key === "d") {
        game.playerInput.d = true;
      }
    });

    document.addEventListener("keyup", function (e) {
      if (e.key === "w") {
        game.playerInput.w = false;
      }
      if (e.key === "a") {
        game.playerInput.a = false;
      }
      if (e.key === "s") {
        game.playerInput.s = false;
      }
      if (e.key === "d") {
        game.playerInput.d = false;
      }
    });
  }
}
