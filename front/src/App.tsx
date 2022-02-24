import React, { useState } from 'react';
import CreateProject from './pages/CreateProject';
import Register from './pages/Register';
import Login from './pages/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Board from './pages/Board';
import { theme } from './Theme';
import { ThemeProvider } from '@mui/system';
import Header from './components/Header';
import { pageWithNotHeader, pageWithImageBackground } from './libs/utils';
import Navbar from './components/Navbar';
import UpdateProfil from './pages/UpdateProfil';
import NewPassword from './pages/NewPassword';
import background from './assets/images/background.jpg';
import BodyApp from './components/Body';

export default function App() {
  const [urlPage, setUrlPage] = useState(window.location.pathname);
  const [navbar, setNavbar] = useState(false);

  const statePageWithImageBackground =
    pageWithImageBackground.includes(urlPage);

  const handleUrlPage = (url: string) => {
    setUrlPage(url);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <BodyApp
          bBody={!statePageWithImageBackground ? '#fff' : `url(${background})`}
        >
          {!pageWithNotHeader.includes(urlPage) && (
            <Header
              onChange={setNavbar}
              color={!statePageWithImageBackground ? '#000' : '#fff'}
              handleUrlPage={handleUrlPage}
            />
          )}
          <Navbar
            navbar={navbar}
            onChange={setNavbar}
            handleUrlPage={handleUrlPage}
          />
          <Switch>
            <Route exact path="/">
              <p>Home</p>
            </Route>
            <Route exact path="/board">
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
        </BodyApp>
      </Router>
    </ThemeProvider>
  );
}
