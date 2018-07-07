import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Items from "./pages/Items";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import firebase from "firebase/app";
import "firebase/auth";
import Listing from "./pages/Listing";
import Detail from "./pages/Detail";



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
auth.onAuthStateChanged(firebaseUser => { });

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
      isLoggedIn : false,
      username : null
    };
    
  }

  signUp = (inputEmail, inputPassword) => {

    // Sign up 
    const promise = auth.createUserWithEmailAndPassword(inputEmail, inputPassword);
    promise
      .then(response => {
        console.log('response', response);
        this.setState({
          username : response.user.email,
          isLoggedIn : true
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

  render() {
    console.log(this);
    
    return (

      <Router>
        <div>
          <Nav signUp={this.signUp} logIn={this.logIn} isLoggedIn={this.state.isLoggedIn} username={this.state.username} />

          <Switch>
            <Route exact path="/" render={()=> <Items signUp={this.signUp} />}/>
            <Route exact path="/Listing" component={Listing} />
            <Route exact path="/Detail" component={Detail} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    )
  }

};

export default App;

