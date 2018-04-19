//include axios for http requests
let axios = require("axios");

//helper function for api calls
var helper = {
	runQuery: function(location){
		console.log(location);
	}

	getArticles: function(){
		return axios.get("/api");
	}

	postArticle: function(location){
		return axios.post("/api", {location: location});
	}
}

module.exports = helper;