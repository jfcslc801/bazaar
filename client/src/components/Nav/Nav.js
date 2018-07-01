import React, { Component } from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize';
import LogIn from "./../../components/LogInModal"

class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		};

	}

  clicky = (event) => {
    // console.log('test');
    
    return event;
  }


    render () {
      return (
        <div>
        <Navbar brand={<img src="../assets/Bazzarlogo.png" height="60"/>} right>
          <LogIn signUp={this.props.signUp} logIn={this.props.logIn} />
          {/* {!props.isLoggedIn ? 
          <NavItem href='get-started.html'><i class="large material-icons">account_circle</i></NavItem>
          :
          <NavItem href='get-started.html'>{props.username}</NavItem>
          } */}
          <NavItem href='https://www.google.com'><Icon>search</Icon></NavItem>
          <NavItem href='get-started.html'><i class="large material-icons">location_on</i></NavItem>
        </Navbar>
        
        </div>
      
      )
    }



}


export default Nav;
