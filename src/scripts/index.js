import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import './component/nav-bar';
import './component/foot-bar';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'

// eslint-disable-next-line no-unused-vars
const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
