import React, { Component } from 'react';
import API from "../../utils/API";
// import listedItems from "./../../../src/listed.json";
import ItemCard from "./../../components/ItemCard";
// import { Container } from './../../components/Grid/Container';
import { Navbar, NavItem, Icon, Container } from 'react-materialize';
import "./Items.css";

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

    render() {
        return (
	
            <div className="containers">
                <span className="App">
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
                </span>
            </div>
        );
    }
}

export default Items;