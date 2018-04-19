let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let ArticleSchema = new Schema({
	title: {
		type: String
	},
	date: {
		type: Date
	},
	url: {
		type: String
	},
	saved: {
		type: Boolean,
		default: false
	}
});

var Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;