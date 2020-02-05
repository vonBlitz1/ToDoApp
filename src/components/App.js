import React from 'react';
import '../css/App.scss';
import Navigation from './Navigation';
import ToDosContainer from './ToDosContainer';
import ToDonesContainer from './ToDonesContainer';
import Help from '../views/Help';
import NotFound from '../views/NotFound';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <div className="container">
              <div className="left">
                <ToDosContainer></ToDosContainer>
                <ToDonesContainer></ToDonesContainer>
              </div>
            </div>
          </Route>
          <Route exact path="/help" component={Help}></Route>
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
