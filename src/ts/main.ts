import { AppClass } from './classes/app.class';

const app = new AppClass();
console.log(`%cTypeScript examples!`, 'color: #00D1B2; font-size: 18pt;');
console.log(`The current time is:`, app.clock.getCurrentTime().toLocaleString());
console.log(`The current time (formatted) is: ${ app.clock.getCurrentTime(true) }`);
console.log(`The time set is: ${ app.clock.getTime().toLocaleString() }`);
console.log(`The time set (formatted) is: ${ app.clock.getTime(true) }`);

