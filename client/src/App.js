import React from 'react';

// React router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Navbar from './components/layout/Navbar';
import Landing from './components/landing/Landing';
import SearchView from './components/sections/SearchView';
import MovieDetail from './components/sections/MovieDetail';

// SCSS compiled CSS
import './App.css';

function App() {
  return (
    <Router>
      <div className='container-fluid'>
        <Navbar />
        <Switch>
          <Route exact path='/'><Landing /></Route>
          <Route exact path='/searchView'><SearchView /></Route>
          <Route exact path='/movieDetail'><MovieDetail /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
