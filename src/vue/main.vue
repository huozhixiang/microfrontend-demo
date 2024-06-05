
<template>
  <div>
    <h1>Hello from Vue</h1>
    <p>Message: {{ message }}</p>
    <button @click="sendMessage">Send Message to React</button>
  </div>
</template>

<script>
import eventBus from '../eventBus';

export default {
  data() {
    return {
      message: ''
    };
  },
  created() {
    // const storedMessage = localStorage.getItem('sharedMessage');
    // if (storedMessage) {
    //  this.message = storedMessage;
    // }
    eventBus.subscribe('sharedEvent', (data) => {
      this.message = data.message;
    });
  },
  methods: {
    sendMessage() {
      eventBus.publish('sharedEvent', { message: 'Hello from Vue' });
    }
  }
};
</script>
