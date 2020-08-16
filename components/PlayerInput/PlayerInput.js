export class PlayerInput {
  constructor(game) {
    this.up = "";
    this.down = "";
    this.left = "";
    this.right = "";

    document.addEventListener("keydown", function (e) {
      if (e.key === "w") {
        game.playerInput.up = true;
      }
      if (e.key === "a") {
        game.playerInput.left = true;
      }
      if (e.key === "s") {
        game.playerInput.down = true;
      }
      if (e.key === "d") {
        game.playerInput.right = true;
      }
    });

    document.addEventListener("keyup", function (e) {
      if (e.key === "w") {
        game.playerInput.up = false;
      }
      if (e.key === "a") {
        game.playerInput.left = false;
      }
      if (e.key === "s") {
        game.playerInput.down = false;
      }
      if (e.key === "d") {
        game.playerInput.right = false;
      }
    });
  }
}
