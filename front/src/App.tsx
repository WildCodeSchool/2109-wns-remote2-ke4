import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Board from './pages/Board';
import { theme } from './Theme';
import { ThemeProvider } from '@mui/system';
import Header from './components/Header';
import { url, pageWithNotHeader } from './libs/utils';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ width: '100%', height: '100vh' }}>
        <Router>
          {!pageWithNotHeader.includes(url) && <Header />}

          <Switch>
            <Route exact path="/">
              {/* <Board /> */}
            </Route>
            <Route path="/login">{/* login component */}</Route>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}
