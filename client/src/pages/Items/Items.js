import React, { Component } from 'react';
import API from "../../utils/API";
// import listedItems from "./../../../src/listed.json";
import ItemCard from "./../../components/ItemCard";
// import { Container } from './../../components/Grid/Container';
import { Navbar, NavItem, Icon, Container, Button } from 'react-materialize';
import "./Items.css";
import DataPanel from '../../components/DataPanel';
import ItemListing2 from '../../components/ItemListing2';

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
    image_url: this.state.image_url})
  
    .then(res => this.loadItems())
    .catch(err => console.log(err));
};
    render() {
        return (
	
            <div className="container">
        <DataPanel>
          <h4>Welcome: Listings!
        </h4>
        </DataPanel>
        <DataPanel >
          <div style={{ background: "", display: "flex", flexWrap: "wrap", width: "100%", justifyContent: "space-around" }}>          
                {this.state.listedItems.map(listed => (
                <ItemListing2 s={1} className='grid-example'
                saveItem={this.saveItem}
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
            
                </DataPanel >

            </div>
        );
    }
}

export default Items;