import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { firebase } from './firebase';
import Items from "./pages/Items";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import CustomModal from "./components/Modal";
import LogIn from "./components/LogInModal";
// import firebase from "firebase/app";
// import "firebase/auth";
import Listing from "./pages/Listing";
import Detail from "./pages/Detail";
import DeleteBtn from './components/DeleteBtn';
import SimpleModal from './components/MaterialModal';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      username: null,
      logInModalOpen: false,
      authUser: null
    };

  }


  logInModalTrigger = () => {
    console.log('you hit the trigger');

    this.setState(prevState => ({
      logInModalOpen: !prevState.logInModalOpen
    }));
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ?
          // () => {
            // console.log('you are logged in');
            this.setState(() => ({ authUser }))
          // }
        : 
        // () => {
          // console.log('you are not logged in');
          this.setState(() => ({ authUser: null }));
        // }
    });
  }

  render() {
    console.log(this);

    return (
      // <MyProvider>
      <Router>
        <div>
          <Nav 
            signUp={this.signUp}
            logIn={this.logIn}
            isLoggedIn={this.state.isLoggedIn}
            username={this.state.username}
            logOut={this.logOut}
            logInModalTrigger={this.logInModalTrigger}
          />

          {/* Ideally I would have my loginnav component here and just send the triggers to where they need to go. */}
          <LogIn 
            logInModalOpen={this.state.logInModalOpen}
            logInModalTrigger={this.logInModalTrigger}
          />




          <Switch>
            <Route exact path="/" render={() => <Items signUp={this.signUp} />} />
            <Route exact path="/Listing" component={Listing} />
            <Route exact path="/Detail" component={Detail} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
      // </MyProvider>
    )
  }

};

export default App;
