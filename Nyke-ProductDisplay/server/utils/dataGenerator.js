const MongoClient = require('mongodb').MongoClient;
const faker = require('faker');
const helpers = require('./helpers');
const fs = require('fs');
// const BSON = require('bson');

const JSONStream = require('JSONStream');
const es = require('event-stream');
const streamToMongoDB = require('stream-to-mongo-db').streamToMongoDB;

const outputDBConfig = { dbURL: 'mongodb://localhost:27017/nykeproducts', collection: 'nykeshoes' };

const writableStream = streamToMongoDB(outputDBConfig);
const writeFile = fs.createWriteStream(__dirname + '/tenmillion.json');

var start = new Date();
var hrstart = process.hrtime();

const getExecutionTime = () => {
  var end = new Date() - start,
    hrend = process.hrtime(hrstart)

  console.info('Execution time: %dms', end);
  console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000);
}

var placeholder = [];

for (let j = 0; j < 5; j++) {
    placeholder.push(j);
}

let counter = 1;
var iteration = 5;
var subiteration = 4;

async function readFromJson () {
    console.log('readFromJson');
    return new Promise (resolve => {
        const readingStream = fs.createReadStream(__dirname + '/tenmillion.json')
        .on('open', () => {
            readingStream.pipe(JSONStream.parse('*'))
            .pipe(writableStream);
            console.log('complete seeding to mongodb');
            getExecutionTime();
            resolve()
        })
    })
}


async function writeToMongo (){  
    await readFromJson()
    return new Promise (resolve => {
        resolve()
    })
}

async function forLoop () {
    const promisesToAwait = [];
    for (let i = 0; i < subiteration; i++) {
        promisesToAwait.push(createItem(i));
        
    } 
    await Promise.all(promisesToAwait)

    return new Promise((resolve => {      
            console.log('write completed');
            getExecutionTime();
            resolve()
    }))
}

async function writeToJson(i, obj) {
    if ( i < subiteration - 1) {
        writeFile.write(JSON.stringify(obj));
        writeFile.write(',');
        console.log('wrote to file', obj.count);
    } else {
        writeFile.write(JSON.stringify(obj));
        writeFile.write(']');
        console.log('wrote to last ]', obj.count);
    }
    return new Promise (resolve => {
        resolve(obj)
    })
}


const createItem = async (i) => {
    let sex = helpers.randomGender();
        let obj = {
            name : 'Nike ' + faker.company.bsAdjective() + ' ' + faker.commerce.productAdjective() + ' '+ faker.commerce.productMaterial() + ' ' + helpers.randomVariant(),
            gender : sex,
            type : helpers.randomType(sex),
            price: faker.commerce.price(),
            nikeID: faker.lorem.word().toUpperCase() + faker.random.number(),
            colorStyles: helpers.randomStyle(),
            productPictures: helpers.getImages(),
            productDetails: {
                weight: helpers.randomWeight(),
                last: faker.random.word(),
                offset: faker.random.word(),
                style: faker.random.word()
            },
            availSizes: helpers.randomSizes(sex),
            count: counter
        };
        counter++;

        let done = await writeToJson(i, obj);

    return new Promise (resolve => {
        resolve(done)
    })
}

const resetFile = () => {
    fs.unlink(__dirname + '/tenmillion.json', (err) => {
        if (err) {
          console.error(err);
          return
        }
        console.log('file removed');
    });
    return new Promise ( resolve => {
        resolve()
    })
}



MongoClient.connect(outputDBConfig.dbURL, { useNewUrlParser: true }, (error, db) => {
    if (error) { 
        console.log('err', error);
    }
    console.log(`Connected MongoDB to Database: nykeproducts`);
    var dbo = db.db("nykeproducts");
    dbo.createCollection("nykeshoes", async function(err, result){
        if(err) {
            console.log('err', err)
        }
        console.log('collection created');

        for await (var value of placeholder) {
            writeFile.write('[');
            await forLoop()
            await writeToMongo()
            console.log('value', value);
            // await resetFile()
        
        }
  })
})






    




// .explain docs 
// artillery test suite to query on local machine
// to test on server loader.io after deployment
// 