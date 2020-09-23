import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Highlight from "./highlight";
import Selector from "./selector";
import PlaygroundComponent from "./component";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Highlight</Link>
            </li>
            <li>
              <Link to="/selector">Selector</Link>
            </li>
          </ul>
        </nav>
        <PlaygroundComponent />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/selector">
            <Selector />
          </Route>
          <Route path="/">
            <Highlight />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
