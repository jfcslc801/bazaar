import React, { Component } from 'react';
import API from "../../utils/API";
// import listedItems from "./../../../src/listed.json";
import ItemCard from "./../../components/ItemCard";
// import { Container } from './../../components/Grid/Container';
import { Navbar, NavItem, Icon, Container } from 'react-materialize';
import "./Items.css";
import DataPanel from '../../components/DataPanel';
import CustomCardPanel from '../../components/CardPanel';

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

removeListed = id => {
	// Filter this.state.friends for friends with an id not equal to the id being removed
	const listedItems = this.state.listedItems.filter(listed => listed.id !== id);
	// Set this.state.friends equal to the new friends array
	this.setState({ listedItems });
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
                        <CustomCardPanel s={1} className='grid-example'
                                    removeListed={this.removeListed}
                id={listed.id}
                key={listed.id}
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