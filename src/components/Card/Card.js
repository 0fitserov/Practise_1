import React from "react";
import "./Card.css";
import Counter from "../Counter";

class Card extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="card">
				<img className="pic" src={this.props.pictures} alt={this.props.name}/>
				<div className="price">{this.props.price}</div>
				<div className="count">{this.props.stock}</div>
				<div className="name">{this.props.name}</div>
				<Counter/>
			</div>
		)
	}
}

export default Card;
