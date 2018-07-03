import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
// import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Input, Card, CardTitle, Button, Icon } from 'react-materialize';
import DeleteBtn from "../../components/DeleteBtn";
import CustomCardPanel from "../../components/CardPanel";
import DataPanel from "../../components/DataPanel";
import CustomTable from "../../components/Table";
import { List, ListItem } from "../../components/List";
import "./Detail.css";



class Listing extends Component {
  state = {

    item: {}
  };
  // When this component mounts, grab the item with the _id of this.props.match.params.id
  // e.g. localhost:3000/items/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getItem(this.props.match.params.id)
      .then(res => this.setState({ item: res.data }))
      .catch(err => console.log(err));

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
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (


      <div className="container">
        <CustomCardPanel>

        </CustomCardPanel>
        <DataPanel>

        </DataPanel>
      </div>

    );
  }
}

export default Listing;
