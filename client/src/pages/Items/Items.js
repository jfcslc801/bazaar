import React, { Component } from 'react';
import listedItems from "./../../../src/listed.json";
import ItemCard from "./../../components/ItemCard";
import { Table1, TableItem } from './../../components/BarterWindow';

import "./Items.css";

// This is a cheap fix, using this as a psuedo database for the time being until we have data stored in a database
let dbOffer = [{
	id: 1,
	date: "09/09/09",
	offer: "iPhone SE 64GB",
	itemDetails: "It is a great condition phone, AT&T Network",
	user: "Izzlenizzle"
},
{
	id: 2,
	date: "09/09/09",
	offer: "iPhone SE 64GB",
	itemDetails: "It is a great condition phone, AT&T Network",
	user: "Izzlenizzle"
},
{
	id: 3,
	date: "09/09/09",
	offer: "iPhone SE 64GB",
	itemDetails: "It is a great condition phone, AT&T Network",
	user: "Izzlenizzle"
},
{
	id: 4,
	date: "09/09/09",
	offer: "iPhone SE 64GB",
	itemDetails: "It is a great condition phone, AT&T Network",
	user: "Izzlenizzle"
}]

class Items extends Component {

	state = {
		listedItems
	};


	render() {
		return (
			<span className="App">

				<h1> Listed Items </h1>


				<Table1>
				{dbOffer.map(offer => (
					<TableItem
					key={offer.id}
					user={offer.user}
					date={offer.date}
					offer={offer.offer}
					
					/>
				))}
				</Table1>

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
			</span>
		);
	}
}

export default Items;

