import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/landing/Landing';
import SearchView from './components/sections/SearchView';
import MovieDetail from './components/sections/MovieDetail';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='container-fluid'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/searchView' component={SearchView} />
            <Route exact path='/movieDetail' component={MovieDetail} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
