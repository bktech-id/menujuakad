import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { routes } from './routes';

class App extends Component {
  render() {
      const pages = routes.map((route, index) => {
          return (
              <Route
                  component={route.component}
                  exact={route.exact}
                  path={route.path}
                  key={index}
              />
          );
      });

      return (
          <BrowserRouter>
              <Switch>
                {pages}
                <Redirect to='/'/>
              </Switch>
          </BrowserRouter>
      );
  }
}

export default App;
