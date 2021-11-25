import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Board from './pages/Board';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Board />
        </Route>
        <Route path="/login">{/* login component */}</Route>
      </Switch>
    </Router>
  );
}
