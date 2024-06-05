// root.component.js
import React, { useState, useEffect } from "react";
import eventBus from '../eventBus'; // Adjust the path as necessary

const App = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    eventBus.subscribe('sharedEvent', (data) => {
      setMessage(data.message);
    });
  }, []);

  const sendMessage = () => {
    const message = 'Hello from React';
    // localStorage.setItem('sharedMessage', message);
    eventBus.publish('sharedEvent', { message });
    // window.location.href = '/vue'

  };

  return (
    <div>
      <h1>Hello from React</h1>
      <p>Message: {message}</p>
      <button onClick={sendMessage}>Send Message to Vue</button>
    </div>
  );
}

export default App;
