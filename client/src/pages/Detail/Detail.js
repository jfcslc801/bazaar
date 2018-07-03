import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
// import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Input, Card, CardTitle, Button, Icon } from 'react-materialize';
import DeleteBtn from "../../components/DeleteBtn";
// import CustomCardPanel from "../../components/CardPanel";
import DataPanel from "../../components/DataPanel";
import ItemCard from "../../components/ItemCard";
import CustomTable from "../../components/Table";
import { List, ListItem } from "../../components/List";
import "./Detail.css";



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
              <ItemCard s={1} className='grid-example'
                id={listed.id}
                key={listed.id}
                name={listed.itemName}
                image={listed.image_url}
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
