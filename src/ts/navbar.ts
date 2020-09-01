import { fromEvent } from 'rxjs';

export const navBarEvents = () => {
  const navControl = document.querySelector('nav.navbar .navbar-burger');
  const navMenu = document.querySelector('nav.navbar .navbar-menu');
  if (navControl && navMenu) {
    fromEvent(navControl, 'click').subscribe(() => {
      navControl.classList.toggle('is-active');
      navMenu.classList.toggle('is-active');
    });
  }
};
