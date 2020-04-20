import React from "react";
import "./App.css";
import { Link, Route, Switch, BrowserRouter } from "react-router-dom";

import Check from "./checkServer/Check";
import Home from "./components/Home";
import Secret from "./components/Secret";
import Login from "./components/Login";
import Protected from "./components/Protected";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1> I am React </h1>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/secret">Secret</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/" exact component={Home} />

            <Route path="/about">
              <Protected cmp={About} />
            </Route>

            <Route path="/secret" exact>
              <Protected cmp={Secret} />
            </Route>

            <Route path="/login" exact component={Login} />
          </Switch>
        </div>

        {/* <Check /> */}
        {/* <Login /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
