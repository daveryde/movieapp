import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/landing/Landing';
import SearchView from './components/sections/SearchView';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/searchView' component={SearchView} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
