import { ActualTime } from '../interfaces/time.interfaces';
import { Clock } from './clock.class';

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
