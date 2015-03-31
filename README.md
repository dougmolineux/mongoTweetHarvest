# mongoTweetHarvest
Mongo Tweet Harvest

You'll need to add the tokens to the top of app.js and make sure mongod is running locally.

First run, "npm install".

Then, run with "node app.js cats" to search for tweets with cats.

Problems:
```
node_modules/mongoose/node_modules/mongodb/lib/server.js:228
        process.nextTick(function() { throw err; })
                                            ^
Error
    at Error.MongoError (.../node_modules/mongoose/node_modules/mongodb/node_modules/mongodb-core/lib/error.js:13:17)
```
Make sure mongod is running "sudo mongod"
