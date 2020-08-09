export class PauseButton {
  constructor(stage) {
    if (localStorage.getItem("pauseState") === null) {
      localStorage.setItem("pauseState", "unpaused");
    }
    this.createButton(stage);
    this.addClickEvent();
  }

  createButton(stage) {
    this.element = document.createElement("button");
    stage.element.appendChild(this.element);
    if (localStorage.getItem("pauseState") === "unpaused") {
      this.element.innerText = "PAUSE";
    } else {
      this.element.innerText = "UNPAUSE";
    }
    this.element.style.top = "80px";
    this.element.style.padding = "7px 10px";
  }

  addClickEvent() {
    this.element.addEventListener("click", () => {
      if (localStorage.getItem("pauseState") === "paused") {
        localStorage.setItem("pauseState", "unpaused");
        this.element.innerText = "PAUSE";
      } else {
        localStorage.setItem("pauseState", "paused");
        this.element.innerText = "UNPAUSE";
      }
    });
  }
}
