import React from 'react';
import CreateProject from './pages/CreateProject';
import Register from './pages/Register';
import Login from './pages/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UpdateProfil from './pages/UpdateProfil';
import NewPassword from './pages/NewPassword';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {/* board component */}
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/createProject">
          <CreateProject />
        </Route>
        <Route path="/updateprofil">
          <UpdateProfil />
        </Route>
        <Route path="/newpassword">
          <NewPassword />
        </Route>
      </Switch>
    </Router>
  );
}
