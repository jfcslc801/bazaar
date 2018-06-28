import React, { Component } from 'react';
import listedItems from "./../../../src/listed.json";
import ItemCard from "./../../components/ItemCard";
// import { Container } from './../../components/Grid/Container';
import "./Items.css";

class Items extends Component {

	state = {
		listedItems
	};

	render() {
		return (
			<span className="App">
			<h1> Listed Items </h1>
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
