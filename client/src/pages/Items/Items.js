import React, { Component } from 'react';
import listedItems from "./../../../src/listed.json";
import ItemCard from "./../../components/ItemCard";
import { List, ListItem } from './../../components/BarterWindow';
import "./Items.css";

// This is a cheap fix, using this as a psuedo database for the time being until we have data stored in a database
let dbOffer = {
	date: "09/09/09",
	offer: "iPhone SE 64GB",
	itemDetails: "It is a great condition phone, AT&T Network",
	user: "Izzlenizzle"
}

class Items extends Component {

	state = {
		listedItems
	};


	render() {
		return (
			<span className="App">
				<h1> Listed Items </h1>

				<List>
					<ListItem
						date={dbOffer.date}
						offer={dbOffer.offer}
						itemDetails={dbOffer.itemDetails}
						user={dbOffer.user}
					>
					</ListItem>
				</List>



				{this.state.listedItems.map(listed => (
					<ItemCard
						id={listed.id}
						key={listed.id}
						name={listed.name}
						image={listed.image}
						value={listed.value}
						location={listed.location}
					/>
				))}
				{/* <div className="clear-fix">.</div> */}
			</span>
		);
	}
}

export default Items;
