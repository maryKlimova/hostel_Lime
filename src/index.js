if (process.env.NODE_ENV === 'development') {
  require('preact/debug');
}


import { h, render } from 'preact';
import './ie'
//import './helpers/values-polyfill'
import App from './app'
//import 'core-js/es6/number';


if (process.env.NODE_ENV === 'production') {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').then(registration => {
        console.log('SW registered: ', registration);
      }).catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
    });
  }
}

render(<App />, document.body)