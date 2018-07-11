import React, { Component } from "react";
import { Modal, Button } from 'react-materialize';
import PropTypes from 'prop-types';


const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class CustomModal extends React.Component {
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
    const { open } = this.state;
    return (
      <div style={styles}>
        <Modal
          header='Modal Header'
          trigger={<Button style={{ bottom: '-15px', right: '15px' }} floating tiny className='red' waves='green' icon='delete'></Button>}>
          <div>
            {this.props.children}
          </div>
        </Modal>
      </div>
    );
  }
}

export default CustomModal;
