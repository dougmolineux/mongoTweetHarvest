var Twit = require('twit')

var T = new Twit({
    consumer_key:         ''
  , consumer_secret:      ''
  , access_token:         ''
  , access_token_secret:  ''
})

//
//  tweet 'hello world!'
//
// T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
//   console.log(data)
//})

//
//  search twitter for all tweets containing the word 'banana' since Nov. 11, 2011
//
var topic = process.argv[2];
if(!topic) {
  console.log("Provide topic to search for as parameter(ie: node index.js leicester):");
  process.exit();
}

T.get('search/tweets', { q: topic+' since:2015-02-04', count: 1000 }, function(err, data, response) {
   data.statuses.forEach(function(tweet) {
      console.log("tweet: "+tweet.text+"\n");
   });
});

//
//  get the list of user id's that follow @tolga_tezel
//
// T.get('followers/ids', { screen_name: 'tolga_tezel' },  function (err, data, response) {
//   console.log(data)
// })

//
//  retweet a tweet with id '343360866131001345'
//
// T.post('statuses/retweet/:id', { id: '343360866131001345' }, function (err, data, response) {
//   console.log(data)
// })

//
//  destroy a tweet with id '343360866131001345'
//
// T.post('statuses/destroy/:id', { id: '343360866131001345' }, function (err, data, response) {
//   console.log(data)
// })

//
// get `funny` twitter users
//
// T.get('users/suggestions/:slug', { slug: 'funny' }, function (err, data, response) {
//   console.log(data)
// })

//
//  stream a sample of public statuses
//
// var stream = T.stream('statuses/sample')

// stream.on('tweet', function (tweet) {
//   console.log(tweet)
// })

// //
// //  filter the twitter public stream by the word 'mango'.
// //
// var stream = T.stream('statuses/filter', { track: 'mango' })

// stream.on('tweet', function (tweet) {
//   console.log(tweet)
// })

// //
// // filter the public stream by the latitude/longitude bounded box of San Francisco
// //
// var sanFrancisco = [ '-122.75', '36.8', '-121.75', '37.8' ]

// var stream = T.stream('statuses/filter', { locations: sanFrancisco })

// stream.on('tweet', function (tweet) {
//   console.log(tweet)
// })

// //
// // filter the public stream by english tweets containing `#apple`
// //
// var stream = T.stream('statuses/filter', { track: '#apple', language: 'en' })

// stream.on('tweet', function (tweet) {
//   console.log(tweet)
// })
