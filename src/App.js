import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "./context";
import Navbar from "./components/Layout/Navbar";
import Home from "./components/Layout/Home";
import Lyrics from "./components/Tracks/Lyrics";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/lyrics/track/:track_id" component={Lyrics} />
            </Switch>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
