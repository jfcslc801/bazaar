import React from "react";
import "./ItemCard.css";
// import { Col } from "./../Grid";

const ItemCard = (props) => (
	<div>
		<div className="card" onClick={() => props.handleClick(props.id)}>
			<div className="img-container">
				<img
					alt={props.name}
					src={props.image}
				/>
				<h4>{props.name}</h4>
				<h4>{props.value}</h4>
				<h4>{props.location}</h4>
			</div>
		</div>
	</div>
);

export default ItemCard;
