import { AppClock } from './clock.class';

export class AppClass {
  private _clock = new AppClock(13, 58);
  get clock () {
    return this._clock;
  }

}
