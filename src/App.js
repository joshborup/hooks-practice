import React, { Component } from "react";
import logo from "./logo.svg";
import PokeFetcher from "./components/PokeFetcher";
import ConvertedFetcher from "./components/ConvertedFetcher";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<PokeFetcher />
				<ConvertedFetcher />
			</div>
		);
	}
}

export default App;
