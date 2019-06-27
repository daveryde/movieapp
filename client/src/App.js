import React from 'react';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Main from './components/Main';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Landing />
      <Main />
    </Provider>
  );
}

export default App;
