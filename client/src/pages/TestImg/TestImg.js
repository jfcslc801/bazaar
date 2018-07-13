import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Input, Card, CardTitle, Button, Icon } from 'react-materialize';
// import DeleteBtn from "../../components/DeleteBtn";
// import { Input, FormBtn } from "./../../components/Form";
import CustomCardPanel from "../../components/CardPanel";
import DataPanel from "../../components/DataPanel";
import CustomTable from "../../components/Table";
import { List, ListItem } from "../../components/List";
import "./TestImg.css";
const CLOUDINARY_UPLOAD_PRESET = 'tqvt7jrm'

class Listing extends Component {
  state = {
    imageFile: null,
    imageURL: null
  };
  // When this component mounts, grab the item with the _id of this.props.match.params.id
  // e.g. localhost:3000/items/599dcb67f0f16317844583fc
  // componentDidMount() {
  // 	API.getImages(this.props.match.params.id)
  // 		.then(res => this.setState({ images: res.data }))
  // 		.catch(err => console.log(err));

  // }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
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
            imageURL: res.data.secure_url
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

  // showImageUrl = (result) => {
  // 	console.log(result);
  // }
  
  render() {
    console.log(this);
    
    return (


      <div className="container">
            <form>
              {/* <Input
                // type="file"
                value={this.state.imageFile}
                onChange={this.handleInputChange}
                name="imageFile"
                placeholder="Location of the image to be uploaded"
              /> */}
              <input type='file' onChange={this.fileHandler}/>
              <Button
                disabled={!(this.state.imageFile )}
                onClick={this.handleFormSubmit}
              >
                Upload
              </Button>
            </form>
            <h3>
              {this.imageFile}
            </h3>
      </div>

    );
  }
}

export default Listing;
