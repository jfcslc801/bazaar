import React, { Component } from 'react';
import { Navbar, NavItem, Icon, Button } from 'react-materialize';
import LogIn from "./../../components/LogInModal"

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  tFunction = () => {
    console.log(this.props.auth);
    console.log('tfunction');
    if (this.props.auth) {
      return (
        <NavItem onClick={
          (event) => {
            event.preventDefault();
            this.props.logInModalTrigger()
          }
        }>
        {this.props.auth.email}</NavItem>
      )
    } else {
      return (

        <NavItem 
          onClick={
            (event) => {
              event.preventDefault();
              this.props.logInModalTrigger()
            }
          }>
          <i class="large material-icons">
          account_circle
          </i>
        </NavItem>
      )
    }

  }

  render() {
    console.log(this);

    return (
      <div>

        <Navbar brand={<img src="../assets/Bazaarlogo.png" height="60"/>} right>
        
            

            {/* user logged in Logic */}
            {this.tFunction()}
            
            <NavItem href='get-started.html'>
            {this.props.username}
            </NavItem>
          
          <NavItem onClick={() => {
            // event.preventDefault();
            // $('#log-in').modal('open')
          }}
          >
          <Icon>search</Icon>
          
          </NavItem>
          
          <NavItem href='get-started.html'><i class="large material-icons">location_on</i></NavItem>
        </Navbar>


      </div>

    )
  }



}


export default Nav;
