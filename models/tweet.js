var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	db = "mth";

var localDb = mongoose.createConnection('mongodb://127.0.0.1:27017/'+ db, {});
localDb.on('connected', function () {
  console.log("Connected to local DB: ", (localDb.host + ':' + localDb.port + '/' + localDb.name));
});

var tweetSchema = new Schema({
  author: String,
  body:   String,
  date: { 
    type: Date, 
    default: Date.now 
  },
});

var TweetModel = localDb.model('tweets', tweetSchema);

module.exports.tweet = TweetModel;