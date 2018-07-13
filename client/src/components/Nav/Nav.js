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
          <i class="x-large material-icons">
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


        <div class="navbar-fixed">
          <Navbar brand={<img src="../assets/bzr2.png" height="80" />} right class="black z-depth-0">

            {/* user logged in Logic */}
            {this.tFunction()}

            <NavItem href='get-started.html'>
              {this.props.username}
            </NavItem>

          </Navbar>
        </div>

        <Button floating icon='menu' large className='black' fab='vertical' large style={{ bottom: '45px', right: '24px' }}>
          <Button floating icon='home' large className='black' node='a' href='/' />
          <Button floating icon='list' large className='black' node='a' href='/Listing' />
          <Button floating icon='perm_identity' large className='black' node='a' href='/Detail' />
        </Button>
      </div>

    )
  }



}


export default Nav;
