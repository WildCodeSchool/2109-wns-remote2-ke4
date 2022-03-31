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
import HomeAccount from './pages/HomeAccount';
import UpdatePassword from './pages/UpdatePassword';
import { useQueryViewer } from './graphql/Queries/User';
import { ViewerProvider } from './context/Viewer';
import Reseaux from './pages/Reseaux';
import Home from './pages/Home';
import ResetPassword from './pages/resetPassword';
import { Toaster } from 'react-hot-toast';

import Footer from './components/Footer';

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
  const { data, loading, error } = useQueryViewer();
  const [navbar, setNavbar] = useState(false);
  const statePageWithImageBackground = pageWithImageBackground.includes(
    window.location.pathname
  );

  const viewer = data?.getViewer || {};

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error message: {error.message}</h1>;
  }
  // if (viewer && (window.location.pathname === '/login' || '/register')) {
  //   history.push('/');
  // }

  // if (viewer === {} && (window.location.pathname !== '/login' || '/register')) {
  //   history.push('/login');
  // }

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
              <ViewerProvider value={viewer}>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/ke4">
                  {viewer && <HomeAccount viewer={viewer} />}
                </Route>
                <Route path="/project/:id">
                  <Board />
                </Route>
                <Route path="/createProject">
                  <CreateProject />
                </Route>
                <Route path="/updateprofil">
                  <UpdateProfil />
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
              </ViewerProvider>
            </Switch>
          </BodyWithNavbar>
        </BodyApp>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}
