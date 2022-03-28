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
import { styled } from '@mui/system';
import AllCards from './pages/Cards';
import MyProjects from './pages/MyProjects';

interface DivProps {
  widthNav: string;
  bBody: string;
}

export const BodyWithNavbar = styled('div')<DivProps>(
  ({ widthNav, bBody }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: widthNav,
    transition: 'width .5s',
    background: bBody,
    minHeight: '100vh',
  })
);

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
        <BodyApp>
          <Navbar
            navbar={navbar}
            onChange={setNavbar}
            handleUrlPage={handleUrlPage}
          />
          <BodyWithNavbar
            widthNav={navbar ? 'calc(100% - 300px)' : '100%'}
            bBody={
              !statePageWithImageBackground ? '#fff' : `url(${background})`
            }
          >
            {!pageWithNotHeader.includes(urlPage) && (
              <Header
                onChange={setNavbar}
                color={!statePageWithImageBackground ? '#000' : '#fff'}
                handleUrlPage={handleUrlPage}
              />
            )}
            <Switch>
              <Route path="/login">
                <Login handleUrlPage={handleUrlPage} />
              </Route>

              <Route path="/register">
                <Register handleUrlPage={handleUrlPage} />
              </Route>
              <Route exact path="/">
                <p>Home</p>
              </Route>
              <Route path="/board">
                <Board />
              </Route>
              <Route path="/mesprojets">
                <MyProjects />
              </Route>
              <Route path="/createProject">
                <CreateProject />
              </Route>
              <Route path="/updateprofil">
                <UpdateProfil />
              </Route>
              <Route path="/newpassword">
                <NewPassword handleUrlPage={handleUrlPage} />
              </Route>
              <Route path="/cards">
                <AllCards />
              </Route>
            </Switch>
          </BodyWithNavbar>
        </BodyApp>
      </Router>
    </ThemeProvider>
  );
}
