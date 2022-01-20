import React from 'react';
import CreateProject from './pages/CreateProject';
import Register from './pages/Register';
import Login from './pages/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Board from './pages/Board';
import { theme } from './Theme';
import { ThemeProvider } from '@mui/system';
import UpdateProfil from './pages/UpdateProfil';
import NewPassword from './pages/NewPassword';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Board />
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
    </ThemeProvider>
  );
}
