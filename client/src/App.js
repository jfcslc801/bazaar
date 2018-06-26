import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav"
import showNavPop from "./components/SideNav";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      showNavPop: false,
    }
  }

  toggleShowNavPop = () => {
    let def = !this.state.showNavPop;
    let updated;
    if(!this.props.showNavPop) {
    this.setState({
      showNavPop: true,
    })

   
  };
 
    return(
      <Router>
        <div>
          <Nav toggleShowNavPop={this.toggleShowNavPop} />
          <Switch>
            <Route exact path="/" component={Books}/>
            <Route exact path="/books" component={Books} />
            <Route exact path="/books/:id" component={Detail} />
            <Route component={NoMatch} />
          </Switch>        
        </div>
      </Router>
    )
  }  
};

export default App;
