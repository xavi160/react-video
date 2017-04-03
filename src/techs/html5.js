export default class HTML5VideoTech {
  constructor(el) {
    this.el = el;
  }

  get source() {
    return this.el.src;
  }

  set source(source) {
    this.el.src = source;
  }

  get currentTime() {
    return this.el.currentTime;
  }

  set currentTime(currentTime) {
    this.el.currentTime = currentTime;
  }

  get duration() {
    return this.el.duration;
  }

  set duration(duration) {
    this.el.duration = duration;
  }

  get paused() {
    return this.el.paused;
  }

  set paused(paused) {
    if (paused) {
      this.el.pause();
    } else {
      this.el.play();
    }
  }

  get muted() {
    return this.el.muted;
  }

  set muted(muted) {
    this.el.muted = muted;
  }

  get volume() {
    return this.volume;
  }

  set volume(volume) {
    this.el.volume = volume;
  }
}
