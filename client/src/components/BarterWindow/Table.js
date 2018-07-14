import React, { Component } from "react";
import { Table, Input, Row, Button, Icon } from 'react-materialize';
import ReactDOM from "react-dom";
import API from "../../utils/API";
import "./List.css";

export class Table1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offer: ''
    };
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  submitOffer = (event, itemID, offer) => {
    event.preventDefault();
    // api call to save offer
    API.saveOffer({
      userID: this.props.auth.email,
      email: this.props.auth.email,
      offer: offer,
      itemID: itemID
    })
      .then(res => {
        this.props.getOffers()
        ReactDOM.render(<div>Your offer has been uploaded! <Icon small>check</Icon></div>, document.getElementById('submitButton'));
        this.setState({offer: ''})
      })
      .catch(err => window.location.reload());
    console.log('submit offer plus ' + itemID + 'user stuff ' + this.props.auth.email + 'lastly offer' + offer);

    document.getElementById('submitButton').innerHTML = `Your offer is uploading, please wait. <img id='loadImage' src='https://i.gifer.com/ZKZg.gif'></img>`;

  }


  render() {

    return (

      <Row>
        <h6>Current Offers{this.props.children && (`: ${this.props.children.length}`)}</h6>
        <Table className='offer-table'>

          <thead>
            <tr>
              <th data-field="date">Date</th>
              <th data-field="user">User</th>
              <th data-field="offer">Offer</th>
            </tr>
          </thead>

          <tbody>
            {this.props.children ? (
              this.props.children
            ) : (
                <h5>There are no current offers, be the first to offer!</h5>
              )}
          </tbody>

        </Table>
        <hr />
        <h6>Make an Offer</h6>
        <Input
          className='offer'
          s={12}
          label="New Offer"
          name='offer'
          onChange={this.handleInputChange}
          value={this.state.offer}
        />
        <div id='submitButton'>
        <Button 
          onClick={event => this.submitOffer(event, this.props.id, this.state.offer)}
          disabled={!(this.props.auth && this.state.offer)}
        >Submit</Button>
        </div>
      </Row>


    )
  }



};

