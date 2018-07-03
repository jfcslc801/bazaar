import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import {$,jQuery} from 'jquery';
// export for others scripts to use
// window.$ = $;
// window.jQuery = jQuery;
import Items from "./pages/Items";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import CustomModal from "./components/Modal";
import LogIn from "./components/LogInModal";
import firebase from "firebase/app";
import "firebase/auth";
import Listing from "./pages/Listing";
import Detail from "./pages/Detail";
import DeleteBtn from './components/DeleteBtn';
import SimpleModal from './components/MaterialModal';



// Initialize Firebase
var config = {
  apiKey: "AIzaSyDbX869774z70nCO0tq_S2JRqLV_1118KM",
  authDomain: "bazaar-260d7.firebaseapp.com",
  databaseURL: "https://bazaar-260d7.firebaseio.com",
  projectId: "bazaar-260d7",
  storageBucket: "bazaar-260d7.appspot.com",
  messagingSenderId: "188721019857"
};
firebase.initializeApp(config);
// Variables with user authentication
const auth = firebase.auth();
auth.onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    // user = firebaseUser;
    console.log(firebaseUser)
    console.log("is this working?")
    console.log(firebaseUser.email)
    // console.log(user.uid + 'this is your uid');
    // console.log(firebaseUser.Kb.I)
    // logOut.classList.remove("hide");
    // $("#profileHeader").text("Welcome " + firebaseUser.email + "!");
    // profileGetAJAX();
  } else {
    // console notification that the user is not logged in
    console.log('not logged in');

    // links to navbar
    // logOut.classList.add("hide");
    // $("#userName").html("<a href='/'>Hi! Click to Log In</a>");
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      username: null,
      logInModalOpen: false
    };

  }


  logInModalTrigger = () => {
    console.log('you hit the trigger');

    this.setState(prevState => ({
      logInModalOpen: !prevState.logInModalOpen
    }));
  }

  signUp = (inputEmail, inputPassword) => {

    // Sign up 
    const promise = auth.createUserWithEmailAndPassword(inputEmail, inputPassword);
    promise
      .then(response => {
        console.log('response', response);
        this.setState({
          username: response.user.email,
          isLoggedIn: true
        })
      })
      .catch(e => {
        console.log(e.message)
        // $("#errormessage").html(e.message);
        console.log('you didnt sign in');
        // run the error modal
        // logInError();
      });

  }

  logIn = (inputEmail, inputPassword) => {

    // Sign in 
    const promise = auth.signInWithEmailAndPassword(inputEmail, inputPassword);
    promise
      .then(response => {
        console.log('logged in', response);

      })
      .catch(e => {
        console.log(e.message)
        console.log('you didnt sign in');

      });

  }

  logOut = () => {

    auth.signOut();

  }

  render() {
    console.log(this.state.logInModalOpen);

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
