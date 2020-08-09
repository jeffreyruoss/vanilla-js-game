export class SceneManager {
  constructor() {
    if (localStorage.getItem("scene") === null) {
      localStorage.setItem("scene", "game");
    }
  }
}
