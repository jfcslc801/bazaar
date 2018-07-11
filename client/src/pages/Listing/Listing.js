import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import DataPanel from "../../components/DataPanel";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
// import { Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
import { TextArea, FormBtn } from "../../components/Form";
import ReactDOM from "react-dom";
import { Row, Input, Card, Col, CardTitle, Button, Icon } from 'react-materialize';
import "./Listing.css";

class Listing extends Component {
  state = {
    itemName: "",
    userID: "",
    listed_price: "",
    description: "",
    location: "",
    date: "",
    image_url: ""
  };



  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {

    event.preventDefault();

    document.getElementById('submitButton').innerHTML = `Your listing is uploading, please wait. <img id='loadImage' src='https://i.gifer.com/ZKZg.gif'></img>`;
    API.saveItem({
      itemName: this.state.itemName,
      userID: this.props.auth.email,
      listed_price: this.state.listed_price,
      description: this.state.description,
      location: this.state.location,
      image_url: this.state.image_url
    })
      .then(res => ReactDOM.render(<div>Your listing has been uploaded! <Icon small>check</Icon></div>, document.getElementById('submitButton')))
      .catch(err => window.location.reload());


  };

  welcomeMessage = () => {
    if (this.props.auth) {
      return <div>
        <h3>Welcome {this.props.auth.email}</h3>
        <h5> Create your Listing!</h5>
      </div>
    }

    return <h3>'Please log in before listing an item'</h3>
  }

  render() {

    console.log(this);
    return (



      <div className="container">
        <DataPanel>
          {/* Logic to prompt user to log in if not logged in */}
          {this.welcomeMessage()}

        </DataPanel>
        <DataPanel>
          <Row>
            <Input label="Item Name" s={6} style={{color: "white"}}
              value={this.state.itemName}
              onChange={this.handleInputChange}
              name="itemName"
              validate
            />
            <Input label="Listing Price" s={6} style={{color: "white"}}
              value={this.state.listed_price}
              onChange={this.handleInputChange}
              name="listed_price"
              type="number"
              validate
            />
            <Input label="Description" s={6} style={{color: "white"}}
              value={this.state.description}
              onChange={this.handleInputChange}
              name="description"
            />
            <Input label="Location" s={6} style={{color: "white"}}
              value={this.state.location}
              onChange={this.handleInputChange}
              name="location"
              validate
            />
            <Input label="Image" s={6} style={{color: "white"}}
              value={this.state.image_url}
              onChange={this.handleInputChange}
              name="image_url"
              validate
            />
            <div id='submitButton' style={{color: "white"}}>
              <Button style={{background: "white"}} Button floating large className='black' waves='light' icon='check'
                disabled={!(this.state.itemName && this.props.auth && this.state.listed_price && this.state.description && this.state.image_url)}
                onClick={this.handleFormSubmit}
              > Submit
          </Button>
            </div>
          </Row>
        </DataPanel>

      </div>
    );
  }
}

export default Listing;
