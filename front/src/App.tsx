import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {/* board component */}
        </Route>
        <Route path="/login">
          {/* login component */}
        </Route>
      </Switch>
    </Router>
  );
}
