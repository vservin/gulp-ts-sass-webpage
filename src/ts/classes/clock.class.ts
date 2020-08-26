import { ClockInterface, LocalDateOptions } from '../interfaces/time.interfaces';

export class Clock implements ClockInterface, LocalDateOptions {
  private _currentTime: Date = new Date();
  readonly localeDateOptionsFormat = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };

  constructor(h: number, m: number) {
    this._currentTime.setHours(h, m, 0, 0);
  }

  setTime(d: Date) {
    this._currentTime = d;
  }

  getTime(formatted = false): Date | string {
    if (formatted) {
      return this._currentTime.toLocaleDateString('es-MX', this.localeDateOptionsFormat);
    }
    return this._currentTime;
  }
}
