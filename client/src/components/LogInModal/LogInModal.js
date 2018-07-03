import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Row, Icon, Input, Button } from 'react-materialize';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  };
}

class LogIn extends Component {
  constructor(props) {
		super(props);
		this.state = {
      email: '',
      password: ''
    };
  };

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
    this.props.logInModalTrigger();
  };

  signUp = () => {
    this.props.signUp(this.state.email, this.state.password)
  }

  logIn = () => {
    this.props.logIn(this.state.email, this.state.password)
  }

  render() {
    const { classes } = this.props;
    console.log(this);
    return (
        <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
          open={this.props.logInModalOpen}
          id={this.props.modalID}
          onClose={this.onCloseModal}
          header='Log In'
          >
          <div>
            <Row>
            <div style={getModalStyle()} className={classes.paper}>
              <h3>Log In:</h3>
              <Input s={12} name="email" label="Email" validate value={this.state.email} onChange={this.handleChange}><Icon>account_circle</Icon></Input>
              <Input s={12} name="password" label="Password" validate value={this.state.password} onChange={this.handleChange} type='password'><Icon>lock</Icon></Input>
              <Button onClick={this.signUp} waves='light'>Sign Up</Button>
              <Button onClick={this.logIn} waves='light'>Log In</Button>
              <Button onClick={this.props.logOut} waves='light'>Log Out</Button>
              </div>
            </Row>
          </div>
        </Modal>
    );
  }
}

// // We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(LogIn);

export default SimpleModalWrapped;
