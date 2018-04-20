import React, { Component } from "react";
import Header from "./Header";
import "../css/App.css";
import Search from "./Search";
import ArticleList from "./ArticleList";

//ajax request to the api
var helpers = require("../utils/helpers");

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			filterText: "",
			articles: []
		};
		this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
		this.componentDidMount = this.componentDidMount.bind(this);
	}

	componentDidMount(){
		helpers.getArticles()
		.then(function(response){
			if (response !== this.state.articles){
				console.log("Articles: ", response.data);
				this.setState({articles: response.data});
			}
		});
	}

	handleFilterTextInput(filterText){
		this.setState({
			filterText: filterText
		});
	}

	render(){
		return(
			<div className="container">
				<Header />
				<Search
					filterText={this.state.filterText}
					onFilterTextInput={this.handleFilterTextInput}
				/>
				<hr />
				<ArticleList
					filterText={this.state.filterText}
					articles={this.state.articles} 
				/>
			</div>

		);
	}
}

export default App; 