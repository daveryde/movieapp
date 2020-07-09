import React from 'react';
import ReactDOM from 'react-dom';

// App component
import App from './App';

// Redux 
import { Provider } from 'react-redux';
import store from './store';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, rootElement);
