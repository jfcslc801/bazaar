import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Items from "./pages/Items";
import Listing from "./pages/Listing";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import "./components/Form/Form.css"

const App = () => (
  <Router>
    <div>
      <Nav />

      <Switch>
        <Route exact path="/" component={Items} />
        <Route exact path="/Listing" component={Listing} />
        <Route exact path="/Detail" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
