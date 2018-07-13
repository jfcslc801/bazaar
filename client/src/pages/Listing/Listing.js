import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import DataPanel from "../../components/DataPanel";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
// import { Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
import { TextArea, FormBtn } from "../../components/Form";
import ReactDOM from "react-dom";

import { Row, Input, Card, Col, CardTitle, Button, Icon, } from 'react-materialize';
// import Button from '@material-ui/core/Button';
import "./Listing.css";
const CLOUDINARY_UPLOAD_PRESET = 'tqvt7jrm';


class Listing extends Component {
  state = {
    itemName: "",
    userID: "",
    listed_price: "",
    description: "",
    location: "",
    date: "",
    image_url: null,
    imageFile: null
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
      .then(res => ReactDOM.render(<div style={{ color: "red" }}>Your listing has been uploaded! <Icon small>check</Icon></div>, document.getElementById('submitButton')))
      .catch(err => window.location.reload());


    if (this.state.imageFile) {
      console.log(this.state.imageFile);

      let fd = new FormData();
      fd.append('file', this.state.imageFile);
      fd.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

      // This sends the image to the Cloudinary server for storage. Will receive URL as part of callback
      API.cloudinaryImage(fd)
        .then(res => {
          console.log(res.data.secure_url)
          this.setState({
            image_url: res.data.secure_url
          },
            // Run Callback - Once state has been updated, then send info over to database 
            () => {
              console.log('you hit the savedata function');
              console.log('this is afer the savedata log' + this.state.image_url);
              
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
            })
        })
        .catch(err => console.log(err))
    }
  };

  fileHandler = event => {
    console.log(event.target.files[0]);
    this.setState({
      imageFile: event.target.files[0]
    })
  }

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
            <Input label="Item Name" s={6} style={{ color: "white" }}
              value={this.state.itemName}
              onChange={this.handleInputChange}
              name="itemName"
              validate
            />
            <Input label="Listing Price" s={6} style={{ color: "white" }}
              value={this.state.listed_price}
              onChange={this.handleInputChange}
              name="listed_price"
              type="number"
              validate
            />
            <Input label="Description" s={6} style={{ color: "white" }}
              value={this.state.description}
              onChange={this.handleInputChange}
              name="description"
            />
            <Input label="Location" s={6} style={{ color: "white" }}
              value={this.state.location}
              onChange={this.handleInputChange}
              name="location"
              validate
            />

            <Input label="Image" s={6} style={{ color: "white" }}
              value={this.state.image_url}
              onChange={this.handleInputChange}
              name="image_url"
              validate
            />
            <div id='submitButton' style={{ color: "white" }}>
              <FormBtn 
                disabled={!(this.state.itemName && this.props.auth && this.state.listed_price && this.state.description && this.state.image_url)}

            <Input type='file' onChange={this.fileHandler} />

            <div id='submitButton' style={{ color: "white" }}>
              <Button style={{ background: "white" }} Button floating large className='black' waves='light' icon='check'
                disabled={!(this.state.itemName && this.props.auth && this.state.listed_price && this.state.description && this.state.imageFile)}
                onClick={this.handleFormSubmit}
              > Submit
          </FormBtn>
            </div>
          </Row>
        </DataPanel>

      </div>
    );
  }
}

export default Listing;
