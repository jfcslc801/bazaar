import React, { Component } from "react";
import { Modal, NavItem, Row, Icon, Input, Button } from 'react-materialize';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class LogIn extends Component {
  constructor(props) {
		super(props);
		this.state = {
      open: false,
      email: '',
      password: ''
    };
  };

  componentDidMount() {
    this.setState({
      open: this.props.isOpen
    }, () => {
      console.log("this.state.open")
      console.log(this.state.open)
    }
  )
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  signUp = () => {
    this.props.signUp(this.state.email, this.state.password)
  }

  logIn = () => {
    this.props.logIn(this.state.email, this.state.password)
  }

  render() {
    console.log(this);
    
    // const { open } = this.state;
    return (
      // <div style={styles}>
        <Modal
          // open='true'
          id={this.props.modalID}
          header='Log In'
          >
          <div>
            <Row>
              <Input s={12} name="email" label="Email" validate value={this.state.email} onChange={this.handleChange}><Icon>account_circle</Icon></Input>
              <Input s={12} name="password" label="Password" validate value={this.state.password} onChange={this.handleChange} type='password'><Icon>lock</Icon></Input>
              <Button onClick={this.signUp} waves='light'>Sign Up</Button>
              <Button onClick={this.logIn} waves='light'>Log In</Button>
              <Button onClick={this.props.logOut} waves='light'>Log Out</Button>
            </Row>
          </div>
        </Modal>
     // {/* </div> */}
    );
  }
}

export default LogIn;
