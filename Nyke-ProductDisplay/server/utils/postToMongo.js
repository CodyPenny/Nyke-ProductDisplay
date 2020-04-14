// read json and stream to mongodb

const MongoClient = require('mongodb').MongoClient;
const faker = require('faker');
const helpers = require('./helpers');
const fs = require('fs');
const JSONStream = require('JSONStream');
const es = require('event-stream');
const streamToMongoDB = require('stream-to-mongo-db').streamToMongoDB;

// change database name 
const outputDBConfig = { dbURL: 'mongodb://localhost:27017/nyke', collection: 'nykeshoes' };
const writableStream = streamToMongoDB(outputDBConfig);

var start = new Date();
var hrstart = process.hrtime();

const getExecutionTime = () => {
  var end = new Date() - start,
    hrend = process.hrtime(hrstart)

  console.info('Execution time: %dms', end);
  console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000);
}

MongoClient.connect(outputDBConfig.dbURL, { useUnifiedTopology: true, useNewUrlParser: true }, (error, db) => {
    if (error) { 
        console.log('err', error);
    }
    console.log(`Connected MongoDB to Database: nyke`);
    var dbo = db.db("nyke");
    dbo.createCollection("nykeshoes", function(err, result){
        if(err) {
            console.log('err', err)
        }
        // console.log('reading...');
        // var iterator = [1,2,3,4,5];
        // var promises = [];
        // for (const value of iterator) {
        // promises.push(mongoWriter(value))    
        // }
        // Promise.all(promises)
        // .then(() => {
        //     console.log('caught them all');
        //     getExecutionTime();
        // })
        // .catch(err => console.log('err', err))
        mongoWriter(1)
        .then(() => {
            getExecutionTime();
            console.log('final')
        })
     })
    
})

async function mongoWriter (value) {
    const readingStream = fs.createReadStream(__dirname + `/tenmillion${value}.json`)
    .on('open', () => {
        readingStream.pipe(JSONStream.parse('*'))
        .pipe(writableStream);
        
    })
    // .on('finish', () => {
    //     console.log('finish', getExecutionTime())
    // })
    return new Promise (resolve => {
        console.log(`complete seeding ${value}`)
        getExecutionTime();
    })
}