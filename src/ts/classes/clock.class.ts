import { ActualTime, ClockInterface, LocalDateOptions } from '../interfaces/time.interfaces';

export class Clock implements ClockInterface, LocalDateOptions {
  public readonly localeDateOptionsFormat = {
    year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'
  };

  private _currentTime: Date = new Date();

  protected constructor(h: number, m: number) {
    this._currentTime.setHours(h, m, 0, 0);
  }

  public setTime(d: Date) {
    this._currentTime = d;
  }

  public getTime(formatted = false): Date | string {
    if (formatted) {
      return this._currentTime.toLocaleDateString('en-UK', this.localeDateOptionsFormat);
    }
    return this._currentTime;
  }
}

export class AppClock extends Clock implements ActualTime {
  public constructor(h: number, m: number) {
    super(h, m);
  }

  public getCurrentTime(formatted = false): Date | string {
    if (formatted) {
      return (new Date()).toLocaleDateString('en-UK', this.localeDateOptionsFormat);
    }
    return new Date();
  }
}
