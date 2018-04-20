import React, { Component } from "react";
import ArticleNav from "./ArticleNav";
import Article from "./Article";

class ArticleList extends Component{
	renderList(){
		//declare search term
		let searchTerm = this.props.filterText.toLowerCase();
		//array for search results
		let rows = [];
		this.props.articles.forEach((article)=>{
			let title = article.title.toLowerCase();

			if (title.indexOf(searchTerm) === -1){
				return;
			}
			rows.push(<div>
				<Article key={article.title} article={article} />
				</div>);
		});
		return rows;
	}
	render(){
		return(
			<div>
				<div><ArticleNav /></div>
				<ul className="list-group">
					{this.renderList()}
				</ul>
				<div></div>
			</div>
		);
	}
}

export default ArticleList;