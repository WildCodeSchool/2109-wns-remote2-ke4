import React from 'react';
import CreateProject from './pages/CreateProject';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {/* board component */}
        </Route>
        <Route path="/login">{/* login component */}</Route>
        <Route path="/createProject">
          <CreateProject />
        </Route>
      </Switch>
    </Router>
  );
}
