// main.app.js
import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Home from './root.component.js';
import eventBus from '../eventBus'; 

function domElementGetter() {
  return document.getElementById("react");
}

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Home,
  domElementGetter,
});

export const bootstrap = [
  reactLifecycles.bootstrap,
];

export const mount = [
  (props) => {
    return reactLifecycles.mount(props).then(() => {
      eventBus.subscribe('sharedEvent', (data) => {
        console.log('Received event in React:', data.message);
      });
    });
  }
];

export const unmount = [
  reactLifecycles.unmount,
];
