import { useState } from 'react';
import CreateProject from './pages/CreateProject';
import Register from './pages/Register';
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import CreateTicket from './pages/CreateTicket';
import { useGetAllMyProjectsNavbarQuery } from './graphql/Queries/Project/Project.query';

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
  const { data: dataProject } = useGetAllMyProjectsNavbarQuery();
  const urlPageProject = (dataProject?.getAllProjectsByViewer || []).map(
    (el) => `/project/${el?.id}`
  );
  const [navbar, setNavbar] = useState(false);
  const arrUrl = pageWithImageBackground.concat(urlPageProject);
  const statePageWithImageBackground = arrUrl.includes(
    window.location.pathname
  );

  const viewer = data?.getViewer;

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error message:{error.message}</h1>;
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
    window.location.pathname !== '/newpassword' &&
    window.location.pathname !== '/updatepassword' &&
    window.location.pathname.includes('/resetpassword')
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
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/newpassword"
                element={<NewPassword viewer={viewer} />}
              />
              <Route
                path="/resetpassword/:token"
                element={<ResetPassword viewer={viewer} />}
              />
              <Route path="/ke4" element={<HomeAccount />} />
              <Route path="/project/:id" element={<Board />} />
              <Route path="/project" element={<AllCards />} />
              <Route path="/updatepassword" element={<UpdatePassword />} />
              <Route
                path="/updateprofil"
                element={<UpdateProfil viewer={viewer} />}
              />
              <Route path="/reseaux" element={<Reseaux viewer={viewer} />} />
              <Route path="/createproject" element={<CreateProject />} />
              <Route path="/createticket" element={<CreateTicket />} />

              <Route path="/" element={<Home />} />
            </Routes>
          </BodyWithNavbar>
        </BodyApp>

        <Footer />
      </Router>
    </ThemeProvider>
  );
}
