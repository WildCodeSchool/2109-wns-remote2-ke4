import React, { useState } from 'react';
import CreateProject from './pages/CreateProject';
import CreateTicket from './pages/CreateTicket';
import Register from './pages/Register';
import Login from './pages/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
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
import HomeAccount from './pages/HomeAccount';
import UpdatePassword from './pages/UpdatePassword';
import Reseaux from './pages/Reseaux';
import Home from './pages/Home';
import ResetPassword from './pages/resetPassword';
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer';

import { useGetViewerQuery } from './graphql/Queries/User/User.query';

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
  const { data, loading, error } = useGetViewerQuery();
  const [navbar, setNavbar] = useState(false);
  const statePageWithImageBackground = pageWithImageBackground.includes(
    window.location.pathname
  );

  const viewer = data?.getViewer;

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error message: {error.message}</h1>;
  }

  if (
    viewer &&
    (window.location.pathname === '/login' ||
      window.location.pathname === '/register')
  ) {
    window.location.replace('/ke4');
  }

  if (
    !viewer &&
    window.location.pathname !== '/login' &&
    window.location.pathname !== '/register' &&
    window.location.pathname !== '/' &&
    window.location.pathname !== '/newpassword'
  ) {
    window.location.replace('/login');
  }

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Toaster position="bottom-center" />

        <BodyApp>
          <Navbar navbar={navbar} onChange={setNavbar} />

          <BodyWithNavbar
            widthNav={navbar ? 'calc(100% - 300px)' : '100%'}
            bBody={
              !statePageWithImageBackground ? '#fff' : `url(${background})`
            }
          >
            {!pageWithNotHeader.includes(window.location.pathname) && (
              <Header
                onChange={setNavbar}
                color={!statePageWithImageBackground ? '#000' : '#fff'}
                viewer={viewer}
              />
            )}
            <Switch>
              <Route path="/login">
                <Login />
              </Route>

              <Route path="/register">
                <Register />
              </Route>

              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/ke4">
                <HomeAccount viewer={viewer} />
              </Route>
              <Route path="/project/:id">
                <Board />
              </Route>
              <Route path="/createProject">
                <CreateProject />
              </Route>
              <Route path="/createTicket">
                <CreateTicket />
              </Route>
              <Route path="/updateprofil">
                <UpdateProfil viewer={viewer} />
              </Route>
              <Route path="/updatepassword">
                <UpdatePassword />
              </Route>
              <Route path="/newpassword">
                <NewPassword viewer={viewer} />
              </Route>
              <Route path="/resetpassword/:token">
                <ResetPassword viewer={viewer} />
              </Route>
              <Route path="/cards">
                <AllCards />
              </Route>
              <Route path="/reseaux">
                <Reseaux viewer={viewer} />
              </Route>
            </Switch>
          </BodyWithNavbar>
        </BodyApp>

        <Footer />
      </Router>
    </ThemeProvider>
  );
}
