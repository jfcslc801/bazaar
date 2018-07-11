import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Input, Card, CardTitle, Button, Icon } from 'react-materialize';
// import DeleteBtn from "../../components/DeleteBtn";
// import { Input, FormBtn } from "./../../components/Form";
import CustomCardPanel from "../../components/CardPanel";
import DataPanel from "../../components/DataPanel";
import CustomTable from "../../components/Table";
import { List, ListItem } from "../../components/List";
import "./TestImg.css";

class Listing extends Component {
	state = {
		imagePath: "",
		imageURL: ""
	};
	// When this component mounts, grab the item with the _id of this.props.match.params.id
	// e.g. localhost:3000/items/599dcb67f0f16317844583fc
	// componentDidMount() {
	// 	API.getImages(this.props.match.params.id)
	// 		.then(res => this.setState({ images: res.data }))
	// 		.catch(err => console.log(err));

	// }

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();
		if (this.state.imagePath) {
			console.log(this.state.imagePath);
			API.saveImage({
				imagePath: this.state.imagePath
			})
				// .then(res => this.setState({imagePath: res.data.url, imageURL: ""}))
				.then(res => console.log(res.data.url))
				.catch(err => console.log(err))
		}
	};

	// showImageUrl = (result) => {
	// 	console.log(result);
	// }
	
	render() {
		return (


			<div className="container">
						<form>
							<Input
								// type="file"
								value={this.state.imagePath}
								onChange={this.handleInputChange}
								name="imagePath"
								placeholder="Location of the image to be uploaded"
							/>
							<Button
								disabled={!(this.state.imagePath )}
								onClick={this.handleFormSubmit}
							>
								Upload
							</Button>
						</form>
						<h3>
							{this.imagePath}
						</h3>
			</div>

		);
	}
}

export default Listing;
