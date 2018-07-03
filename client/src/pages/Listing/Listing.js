import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import DataPanel from "../../components/DataPanel";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { TextArea, FormBtn } from "../../components/Form";
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

  // componentDidMount() {
  //   this.loadBooks();
  // }

  // loadBooks = () => {
  //   API.getBooks()
  //     .then(res =>
  //       this.setState({ books: res.data, title: "", author: "", synopsis: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.saveItem({
      itemName: this.state.itemName,
      userID: this.state.userID,
      listed_price: this.state.listed_price,
      description: this.state.description,
      location: this.state.location,
      image_url: this.state.image_url
    })
      .then(res => console.log("success"))
      .catch(err => console.log(err));


  };

  render() {

    console.log(this);
    return (


      <div className="container">
        <DataPanel>
        <h3>Welcome Home
        </h3>
          
        </DataPanel>
        <DataPanel>
          <Row>
            <Input label="Item Name" s={6}
              value={this.state.itemName}
              onChange={this.handleInputChange}
              name="itemName"
              validate
            />
            <Input label="userID" s={6}
              value={this.state.userID}
              onChange={this.handleInputChange}
              name="userID"
              validate
            />
            <Input label="Listing Price" s={6}
              value={this.state.listed_price}
              onChange={this.handleInputChange}
              name="listed_price"
              type="number"
              validate
            />
            <Input label="Description" s={6}
              value={this.state.description}
              onChange={this.handleInputChange}
              name="description"
            />
            <Input label="Location" s={6}
              value={this.state.location}
              onChange={this.handleInputChange}
              name="location"
              validate
            />
            <Input label="Image" s={6}
              value={this.state.image_url}
              onChange={this.handleInputChange}
              name="image_url"
              validate
            />
            <FormBtn
              disabled={!(this.state.itemName && this.state.userID && this.state.listed_price && this.state.description && this.state.image_url)}
              onClick={this.handleFormSubmit}
            > Submit
          </FormBtn>
          </Row>
        </DataPanel>
      </div>
    );
  }
}

export default Listing;