import React, { Component } from 'react';
import "./DeleteBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
class DeleteBtn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this);
    
    return (
      <span onClick={this.props.openModal} className="delete-btn" {...this.props}>
        ✗
      </span>
    )
  }

};

export default DeleteBtn;
