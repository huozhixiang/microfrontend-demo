// vue.app.js
import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import Hello from './main.vue';
import eventBus from '../eventBus'; // Adjust the path as necessary

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#vue',
    render: r => r(Hello)
  }
});

export const bootstrap = [
  vueLifecycles.bootstrap,
];

export const mount = [
  (props) => {
    return vueLifecycles.mount(props).then(() => {
      // Subscribe to sharedEvent when the component is mounted
      eventBus.subscribe('sharedEvent', (data) => {
        console.log('Received event in Vue:', data.message);
      });
    });
  }
];

export const unmount = [
  vueLifecycles.unmount,
];
