var Twit = require('twit'),
	 Tweet = require('./models/tweet').tweet,
    tweetsToSave = [],
    Q = require('q');

var twitterTokens = {
   consumer_key:         '',
   consumer_secret:      '',
   access_token:         '',
   access_token_secret:  '',
};

// search twitter for all tweets containing the word 'leicester' since Nov. 11, 2011
var topic = process.argv[2];
if(!topic) {
   console.log("Provide topic to search for as parameter(ie: node index.js leicester)");
   process.exit();
} else if(twitterTokens.consumer_key === "") {
   console.log("Update app.js with your twitter tokens (https://dev.twitter.com)");
   process.exit();
}

var T = new Twit(twitterTokens);
T.get('search/tweets', { 
   q: topic+' since:2015-03-27', 
   count: 100
}, function(err, data, response) {
   data.statuses.forEach(function(tweet) {
      var newTweet = {
         body: tweet.text,
         author: tweet.user.screename,
      };
      tweetsToSave.push(newTweet);
   });
   saveTweets(tweetsToSave).then(function() {
      console.log("Tweets saved. Bye");
      process.exit();
   }).fail(function(err) {
      console.log("Errors saving: ", err);
   });
});

function saveTweets(tweets) {
   var promises = [];
   tweets.forEach(function(tweet) {
      promises.push(saveTweet(tweet));
   });
   return Q.all(promises);
}

function saveTweet(tweet) {
   var defer = Q.defer();
   Tweet.create(tweet, function (err, savedTweet) {
      if(err) {
         console.log("Error saving: ", err);
         return defer.reject(err);
      } else {
         console.log("Saved Tweet: "+ savedTweet.body);
         return defer.resolve(savedTweet);
      }
   });
   return defer.promise;
}
