import { fromEvent, interval } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { concatMap, delay, filter, tap } from 'rxjs/operators';
import { AppClass } from './classes/app.class';
import { User } from './interfaces/user.interfaces';
import { navBarEvents } from './helpers/navbar';

navBarEvents();

const app = new AppClass();
console.log('%cTypeScript examples!', 'color: #00D1B2; font-size: 18pt;');
console.log(`The current time is: ${ app.clock.getCurrentTime().toLocaleString() }`);
console.log(`The current time (formatted) is: ${ app.clock.getCurrentTime(true) }`);
console.log(`The time set is: ${ app.clock.getTime().toLocaleString() }`);
console.log(`The time set (formatted) is: ${ app.clock.getTime(true) }`);

/* Live clock example */
const milis = 1000;
let clockIsFrozen = false;
interval(milis).pipe(filter(() => !clockIsFrozen)).subscribe(() => app.refreshClock());
const clockControl = document.querySelector('#clock-control');
if (clockControl) {
  fromEvent(clockControl, 'click').subscribe(() => {
    if (clockIsFrozen) {
      clockIsFrozen = false;
      clockControl.classList.remove('is-success');
      clockControl.classList.add('is-danger');
      clockControl.innerHTML = 'Freeze clock';
      return;
    }
    clockIsFrozen = true;
    clockControl.classList.remove('is-danger');
    clockControl.classList.add('is-success');
    clockControl.innerHTML = 'Resume clock';
  });
}

/* Retrieve users example */
let activeUsers: User[] = [];
const triggerBtn = document.querySelector('#user-trigger');
const usersContainer = document.querySelector('#users-container');
if (triggerBtn) {
  fromEvent(triggerBtn, 'click').pipe(
    tap(() => {
      activeUsers = [];
      usersContainer.textContent = '';
      triggerBtn.classList.add('is-loading');
    }),
    delay(2000),
    concatMap(() => fromFetch<User[]>('https://jsonplaceholder.typicode.com/users', { selector: res => res.json() }))
  ).subscribe((users) => {
    triggerBtn.classList.remove('is-loading');
    activeUsers = users;
    usersContainer.textContent = JSON.stringify(activeUsers, undefined, 2);
  });
}
