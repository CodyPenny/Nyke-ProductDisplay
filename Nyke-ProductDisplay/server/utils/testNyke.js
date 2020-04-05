// this script creates 100K to json file only

const MongoClient = require('mongodb').MongoClient;
const faker = require('faker');
const helpers = require('./helpers');
const fs = require('fs');
const JSONStream = require('JSONStream');
const streamToMongoDB = require('stream-to-mongo-db').streamToMongoDB;

const outputDBConfig = { dbURL: 'mongodb://localhost:27017/nyke', collection: 'nykeshoes' };


var start = new Date();
var hrstart = process.hrtime();

const getExecutionTime = () => {
  var end = new Date() - start,
    hrend = process.hrtime(hrstart)

  console.info('Execution time: %dms', end);
  console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000);
}

let counter = 100110;
var iteration = 1000000;

function createItem () {
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
    }
    counter++;
    return new Promise (resolve => resolve(obj))
};

async function seedDb (num) {
    const writeFile = fs.createWriteStream(__dirname + `/tenmillion${num}.json`);
        writeFile.write('[');
        for (let i = 0; i < iteration; i++ ) {
        let obj = await createItem();
            if ( i < iteration - 1) {
                writeFile.write(JSON.stringify(obj));
                writeFile.write(',');
            } else {
                writeFile.write(JSON.stringify(obj));
                writeFile.write(']');
            }
        }
        return new Promise(resolve => {
            resolve();
        })
    } 

    
    seedDb();
    
    




// .explain docs 
// artillery test suite to query on local machine
// to test on server loader.io after deployment
// 