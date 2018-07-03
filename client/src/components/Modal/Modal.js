import React, { Component } from "react";
// import { Modal, Button } from 'react-materialize';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class CustomModal extends Component {
  state = {
    open: false
  };


  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {

    return (
      // <div style={styles}>

        <Modal
          open={this.state.open}
          onClose={this.onCloseModal}
          id='normal-modal'
          header='Modal Header'>
          <div>
          </div>
        </Modal>
      // </div>
    );
  }
}


CustomModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default CustomModal;
