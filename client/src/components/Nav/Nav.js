import React, { Component } from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize';
import LogIn from "./../../components/LogInModal"
// import {$,jQuery} from 'jquery';
// export for others scripts to use
// window.$ = $;
// window.jQuery = jQuery;

class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		};

	}

    render () {
      return (
        <div>
          
        <Navbar brand='Bazaar' right>
          {!this.props.isLoggedIn ? 
          <NavItem onClick={(event) => {
            event.preventDefault();
            this.props.logInModalTrigger()
          }
            
          }><i class="large material-icons">account_circle</i></NavItem>
          :
          <NavItem href='get-started.html'>{this.props.username}</NavItem>
          }
          <NavItem onClick={() => {
            // event.preventDefault();
            // $('#log-in').modal('open')
          }}
          ><Icon>search</Icon></NavItem>
          <NavItem href='get-started.html'><i class="large material-icons">location_on</i></NavItem>
        </Navbar>
        <p> {console.log("hello user" + this.props.username)}test </p>
        </div>
      
      )
    }



}


export default Nav;
