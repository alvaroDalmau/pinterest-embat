import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar.js';
import HomeList from './components/HomeList';
import OnePhoto from './components/OnePhoto';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route
          path="/"
          exact
          render={routeProps => {
            return <HomeList {...routeProps} />;
          }}
        />
        <Route
          path="/:id"
          render={routeProps => {
            return <OnePhoto {...routeProps} />;
          }}
        />
      </Switch>
    </React.Fragment>
  );
}

export default withRouter(App);
