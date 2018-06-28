import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
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

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.itemName && this.state.userID && this.state.listed_price && this.state.description && this.state.location && this.state.date && this.state.image_url) {
      API.saveItem({
        itemName: this.state.itemName,
        userID: this.state.userID,
        listed_price: this.state.listed_price,
        description: this.state.description,
        location: this.state.location,
        date: this.state.date,
        image_url: this.state.image_url
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
    console.log("success")

  };

  render() {

    console.log(this);
    return (


      <div className="contDiv">

        <Card className='listing  red  lighten-1 black-text' textColor='red' title='Barter Up!'>
          <TextArea
            value={this.state.itemName}
            onChange={this.handleInputChange}
            name="itemName"
            placeholder="Item (required)"
          />
          <TextArea
            value={this.state.userID}
            onChange={this.handleInputChange}
            name="userID"
            placeholder="User ID (required)"
          />
          <TextArea
            value={this.state.listed_price}
            onChange={this.handleInputChange}
            name="listed_price"
            placeholder="Listed Price (required)"
          />
          <TextArea
            value={this.state.description}
            onChange={this.handleInputChange}
            name="description"
            placeholder="Description (required)"
          />
          <TextArea
            value={this.state.location}
            onChange={this.handleInputChange}
            name="location"
            placeholder="Location (Optional)"
          />
          <TextArea
            value={this.state.date}
            onChange={this.handleInputChange}
            name="date"
            placeholder="Date (Optional)"
          />
          <TextArea
            value={this.state.image_url}
            onChange={this.handleInputChange}
            name="image_url"
            placeholder="Picture (required)"
          />
          <FormBtn
            disabled={!(this.state.itemName && this.state.userID && this.state.listed_price && this.state.description && this.state.image_url)}
            onClick={this.handleFormSubmit}
          >
            Submit
              </FormBtn>
        </Card>

      </div>
    );
  }
}

export default Listing;
