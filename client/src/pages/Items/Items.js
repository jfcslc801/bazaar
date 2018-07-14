import React, { Component } from 'react';
import API from "../../utils/API";
import { Input, Card, CardTitle, Button, Icon, Row } from 'react-materialize';
import CardP1 from '../../components/CardP';
import SimpleModalWrapped2 from '../../components/OfferModal';
import CustomCardPanel from "../../components/CardPanel";
import ItemListing2 from '../../components/ItemListing2';
import "./Items.css"

class Items extends Component {

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



  // saveListed = event => {
  //   event.preventDefault();
  //   if (this.state.id && this.state.itemName && this.state.image_url) {
  //     API.saveItem({
  //       id: this.state.id,
  //       author: this.state.itemName,
  //       image_url: this.state.image_url 
  //     })
  //       .then(res => this.loadItems(res.itemData))
  //       .catch(err => console.log(err));
  //   }
  // };

  saveItem = event => {
    event.preventDefault();
    API.saveItem({
      itemName: this.state.itemName,
      userID: this.props.auth.email,
      listed_price: this.state.listed_price,
      description: this.state.description,
      location: this.state.location,
      image_url: this.state.image_url
    })

      .then(res => this.loadItems())
      .catch(err => console.log(err));
  };
  render() {
    console.log(this)
    return (
      <div className="container">
        <CardP1>
          <h5> Welcome: Listings!</h5>
        </CardP1>
        <CardP1 className="container">
          <Row>
            <div style={{ background: "", display: "flex", flexWrap: "wrap", width: "100%", justifyContent: "space-around" }}>
              {this.state.listedItems.map(listed => (
                <ItemListing2
                  removeListed={this.removeListed}
                  saveItem={this.saveItem}
                  id={listed._id}
                  key={listed._id}
                  name={listed.itemName}
                  image={listed.image_url}
                  user={listed.userID}
                  value={listed.listed_price}
                  location={listed.location}
                  auth={this.props.auth}
                />
              ))}
            </div>
        
          </Row>
        </CardP1 >
      </div>
    );
  }
}

export default Items;