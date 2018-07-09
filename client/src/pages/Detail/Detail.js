import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
// import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Input, Card, CardTitle, Button, Icon } from 'react-materialize';
import DeleteBtn from "../../components/DeleteBtn";
// import CustomCardPanel from "../../components/CardPanel";
import DataPanel from "../../components/DataPanel";
import CustomCardPanel from "../../components/CardPanel";
import ItemCard from "../../components/ItemCard";
import ItemListing from "../../components/ItemListing";
import CustomTable from "../../components/Table";
import { List, ListItem } from "../../components/List";
import "./Detail.css";
const uuidv1 = require('uuid/v1');
uuidv1();



class Detail extends Component {
  state = {
    listedItems: []
  };

  componentDidMount() {
    this.loadItems();
  }

  loadItems = () => {
    console.log("Before Calling API");
    API.getItems()
      .then(res =>
        this.setState({ listedItems: res.data })
      )
      .catch(err => console.log(err));
  };

  removeListed = (event, _id) => {
    event.preventDefault();
    console.log(event);
    // // Filter this.state.friends for friends with an id not equal to the id being removed
    const listedItems = this.state.listedItems.filter(listed => listed._id !== _id);
    // // Set this.state.friends equal to the new friends array
    this.setState({ listedItems });
    API.deleteItem(_id);

  };

  render() {
    return (

      <div className="container">
        <DataPanel>
          <h4>Welcome: Your Offers!
        </h4>
        </DataPanel>
        <DataPanel>
          <div style={{ background: "", display: "flex", flexWrap: "wrap", width: "100%", justifyContent: "space-around" }}>
            {/*                     <h1> Listed Items </h1> */}
            {this.state.listedItems.map(listed => (
              <ItemListing s={1} className='grid-example'
                removeListed={this.removeListed}
                id={listed._id}
                key={listed._id}
                name={listed.itemName}
                image={listed.image_url}
                user={listed.userID}
                value={listed.listed_price}
                location={listed.location}
              />
            ))}
          </div>
        </DataPanel>
      </div>

    );
  }
}

export default Detail;
