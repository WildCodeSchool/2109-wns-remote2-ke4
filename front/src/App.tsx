import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Board from './pages/Board';
import { theme } from './Theme';
import { ThemeProvider } from '@mui/system';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
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
