import { AppClass } from './app.class';
import { fromEvent } from 'rxjs';

const app = new AppClass(13, 58);
console.log(`The current time is: ${ app.getCurrentTime().toLocaleString() }`);
console.log(`The current time (formatted) is: ${ app.getCurrentTime(true) }`);
console.log(`The time set is: ${ app.getTime().toLocaleString() }`);
console.log(`The time set (formatted) is: ${ app.getTime(true) }`);


const button = document.querySelector('#myButton');

fromEvent(button, 'click').subscribe((event) => {
  console.log('The button was clicked!', event);
});
