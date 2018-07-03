import React, { Component } from 'react';
import { Navbar, NavItem, Icon, Button } from 'react-materialize';
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



  render() {
    return (
      <div>

      <Navbar brand={<img src="../assets/Bazzarlogo.png" height="60"/>} right>

        
          <LogIn signUp={this.props.signUp} logIn={this.props.logIn} />
          {/* {!props.isLoggedIn ? 
          <NavItem href='get-started.html'><i class="large material-icons">account_circle</i></NavItem>
          :
          <NavItem href='get-started.html'>{props.username}</NavItem>
          } */}

        </Navbar>

        <Button floating fab='vertical' icon='mode_edit' className='purple' faicon='fa fa-plus' className='blue' large style={{ bottom: '45px', right: '24px' }}>
          <Button floating icon='home' className='lavender' node='a' href='/' />
          <Button floating icon='listing' className='green darken-1' node='a' href='/Listing' />
          <Button floating icon='publish' className='green blue' node='a' href='/Detail' />
        </Button>
      </div>

    )
  }



}


export default Nav;
