export class PauseButton {
  constructor(game) {
    this.pauseText = "PAUSE (⎵)";
    this.unpauseText = "UNPAUSE (⎵)";
    this.createButton(game);
    this.addClickEvent();
    this.addKeyDownEvent();
  }

  createButton(game) {
    this.element = document.createElement("button");
    game.world.element.appendChild(this.element);
    localStorage.setItem("pauseState", "unpaused");
    this.element.innerText = this.pauseText;
    this.element.style.top = "80px";
    this.element.style.padding = "7px 10px";
  }

  addClickEvent() {
    this.element.addEventListener("click", () => {
      this.setPauseState();
    });
  }

  addKeyDownEvent() {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode == 32) {
        this.setPauseState();
      }
    });
  }

  setPauseState() {
    if (localStorage.getItem("pauseState") === "paused") {
      localStorage.setItem("pauseState", "unpaused");
      this.element.innerText = this.pauseText;
    } else {
      localStorage.setItem("pauseState", "paused");
      this.element.innerText = this.unpauseText;
    }
  }

  deconstructor() {
    localStorage.removeItem("pauseState");
  }
}
