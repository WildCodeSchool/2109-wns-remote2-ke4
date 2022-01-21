import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Board from './pages/Board';
import { theme } from './Theme';
import { ThemeProvider } from '@mui/system';
import Navbar from './components/Navbar';

export default function App() {
  const [navbar, setNavbar] = useState<boolean>(true);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar navbar={navbar} onChange={setNavbar} />
        <Switch>
          <Route exact path="/">
            {/* <Board /> */}
          </Route>
          <Route path="/login">{/* login component */}</Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
