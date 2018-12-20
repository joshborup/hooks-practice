import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CustomHook() {
	const [data, setData] = useState(null);
	useEffect(() => {
		if (data === null) {
			axios
				.get("https://api.pokemontcg.io/v1/cards?pageSize=5")
				.then((res) => {
					console.log(res.data.cards);
					setData(res.data.cards);
				});
		}
	});
	const pokeCards = data
		? data.map((card) => {
				return <img src={card.imageUrl} />;
		  })
		: "loading...";
	return (
		<div>
			<h1>Converted Fetcher</h1>
			{pokeCards}
		</div>
	);
}
