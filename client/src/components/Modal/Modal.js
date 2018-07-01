import React from "react";
import { Modal, Button } from 'react-materialize';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class CustomModal extends React.Component {
  state = {
    open: false
  };


  openModal = () => {
    this.setState({ open: true }, 
    () => {
      console.log('modal.js state open' + this.state.open);
      
    }
    );
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
      {React.cloneElement(this.props.children, { openModal: this.openModal })}
        <Modal
        open={this.state.open}
        id='normal-modal'
          header='Modal Header'>
          <div>
            {this.props.children}
         
    

          </div>
        </Modal>
      </div>
    );
  }
}

export default CustomModal;
