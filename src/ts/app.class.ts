import DateTimeFormatOptions = Intl.DateTimeFormatOptions;

interface ClockInterface {
  setTime(d: Date): void;
  getTime(formatted: boolean): Date | string;
}

interface ActualTime {
  getCurrentTime(formatted: boolean): Date | string;
}

interface LocalDateOptions {
  localeDateOptionsFormat: DateTimeFormatOptions;
}

class Clock implements ClockInterface, LocalDateOptions {
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


export class AppClass extends Clock implements ActualTime {

  constructor(h: number, m: number) {
    super(h, m);
  }

  getCurrentTime(formatted = false): Date | string {
    if (formatted) {
      return (new Date()).toLocaleDateString('es-MX', this.localeDateOptionsFormat);
    }
    return new Date();
  }

}
