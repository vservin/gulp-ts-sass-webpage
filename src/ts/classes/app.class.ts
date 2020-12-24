import { AppClock } from './clock.class';

export class AppClass {
  private _clock = new AppClock(13, 58);
  public get clock () {
    return this._clock;
  }

  public refreshClock() {
    const element = document.querySelector('#clock-example');
    element.innerHTML = this._clock.getCurrentTime(true) as string;
  }
}
