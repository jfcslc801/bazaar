import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
// import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Row, Input, Card, Col, CardTitle, Button, Icon } from 'react-materialize';
import DeleteBtn from "../../components/DeleteBtn";
import { List, ListItem } from "../../components/List";
import "./Detail.css";



class Listing extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
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


      <div className="contDiv listing">

        {this.state.books.length ? (
          <Card className="items" title='Posted Up!'>
            {/* <h1>Books On My List</h1> */}
            {this.state.books.map(book => (
              <List key={book._id}>
                <Link to={"/Listing/" + book._id}>
                  <strong>
                    {book.title} by {book.author}
                  </strong>
                </Link>
                <DeleteBtn onClick={() => this.deleteBook(book._id)} />
              </List>
            ))}
          </Card>
        ) : (
            <h3>No Results to Display</h3>
          )}
      </div>
    );
  }
}

export default Listing;
