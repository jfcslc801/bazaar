import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Row, Icon, Input, Button } from 'react-materialize';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import { auth } from '../../firebase';
import "./LogInModal.css";

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

    auth.doCreateUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(authUser => {
      console.log('you have created a new user ' + authUser);
      
    })
    .catch(e => {
      console.log(e.message)
      console.log('you didnt create a new user');

    });

  }

  logIn = () => {

    auth.doSignInWithEmailAndPassword(this.state.email, this.state.password)
    .then(authUser => {
      console.log('you have logged in: ' + authUser);
    })
    .catch(e => {
      console.log(e.message)
      console.log('you didnt sign in');
    });

  }

  tFunction = () => {
    console.log(this.props.auth);
    console.log('tfunction');
    const { classes } = this.props;

    if (this.props.auth) {
      return (

        <div style={getModalStyle()} className={[classes.paper, "testing"].join(' ')}>
        <h3>Hello {this.props.auth.email}</h3>
        <Button onClick={auth.doSignOut} waves='light'>Log Out</Button>
        </div>

      )
    } else {
      return (

        <div style={getModalStyle()} className={classes.paper}>
        <h3>Log In:</h3>
        <Input s={12} name="email" label="Email" validate value={this.state.email} onChange={this.handleChange}><Icon>account_circle</Icon></Input>
        <Input s={12} name="password" label="Password" validate value={this.state.password} onChange={this.handleChange} type='password'><Icon>lock</Icon></Input>
        <Button onClick={this.signUp} waves='light'>Sign Up</Button>
        <Button onClick={this.logIn} waves='light'>Log In</Button>

        </div>
      )
    }

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
            

            {/* user logged in Logic */}
            {this.tFunction()}

              
            </Row>
          </div>
        </Modal>
    );
  }
}

// // We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(LogIn);

export default SimpleModalWrapped;
