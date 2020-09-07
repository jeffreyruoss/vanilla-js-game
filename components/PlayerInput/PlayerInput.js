export class PlayerInput {
  constructor(game) {
    this.w;
    this.a;
    this.s;
    this.d;
    this.actions = {
      "w" : [],
      "a" : [],
      "s" : [],
      "d" : []
    };

    document.addEventListener("keydown", function (e) {
      if (e.key === "w") {
        if (!game.playerInput.w) {
          game.playerInput.actionOnce("w", game.playerInput.actionsList);
          game.playerInput.w = true;
        }
      }
      if (e.key === "a") {
        if (!game.playerInput.a) {
          game.playerInput.actionOnce("a", game.playerInput.actionsList);
          game.playerInput.a = true;
        }
      }
      if (e.key === "s") {
        if (!game.playerInput.s) {
          game.playerInput.actionOnce("s", game.playerInput.actionsList);
          game.playerInput.s = true;
        }
      }
      if (e.key === "d") {
        if (!game.playerInput.d) {
          game.playerInput.actionOnce("d", game.playerInput.actionsList);
          game.playerInput.d = true;
        }
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

  actionOnce(key) {
    let actions = this.actions[key];
    for (let action of actions) {
      action();
    }
  }

}
