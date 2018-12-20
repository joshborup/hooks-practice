import React, { Component } from "react";
import axios from "axios";

export default class PokeFetcher extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pokeData: []
		};
	}
	componentDidMount() {
		axios
			.get("https://api.pokemontcg.io/v1/cards?pageSize=5")
			.then((response) => {
				this.setState({
					pokeData: response.data.cards
				});
			});
	}
	render() {
		const { pokeData } = this.state;
		const pokeCards = pokeData.map((card) => {
			return <img src={card.imageUrl} />;
		});

		return <div>{pokeCards}</div>;
	}
}
