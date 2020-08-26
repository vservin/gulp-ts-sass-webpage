import DateTimeFormatOptions = Intl.DateTimeFormatOptions;

export interface ClockInterface {
  setTime(d: Date): void;
  getTime(formatted: boolean): Date | string;
}

export interface ActualTime {
  getCurrentTime(formatted: boolean): Date | string;
}

export interface LocalDateOptions {
  localeDateOptionsFormat: DateTimeFormatOptions;
}
