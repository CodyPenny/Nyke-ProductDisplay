const MongoClient = require('mongodb').MongoClient;
const faker = require('faker');
const helpers = require('./helpers');
const fs = require('fs');
// const BSON = require('bson');

const JSONStream = require('JSONStream');
const es = require('event-stream');
const streamToMongoDB = require('stream-to-mongo-db').streamToMongoDB;

const outputDBConfig = { dbURL: 'mongodb://localhost:27017/nyke', collection: 'nykeshoes' };


const writeFile = fs.createWriteStream(__dirname + '/tenmillion.json');

var start = new Date();
var hrstart = process.hrtime();

const getExecutionTime = () => {
  var end = new Date() - start,
    hrend = process.hrtime(hrstart)

  console.info('Execution time: %dms', end);
  console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000);
}

let counter = 1;
var iteration = 1000000;

MongoClient.connect(outputDBConfig.dbURL, { useNewUrlParser: true }, (error, db) => {
    if (error) { 
        console.log('err', error);
    }
    console.log(`Connected MongoDB to Database: nykeproducts`);
    var dbo = db.db("nykeproducts");
    // dbo.dropDatabase();
    dbo.createCollection("nykeshoes", function(err, result){
        if(err) {
            console.log('err', err)
        }
        console.log('collection created');
        forLoop()
        .then(() => {
            console.log('reading...');
            const writableStream = streamToMongoDB(outputDBConfig);
            const readingStream = fs.createReadStream(__dirname + '/tenmillion.json')
                .on('open', () => {
                    readingStream.pipe(JSONStream.parse('*'))
                    .pipe(writableStream);
                    console.log('complete seeding to mongodb')
                    getExecutionTime();
                })
        })
        .catch(err => console.log(err))
    })
})

const forLoop = async () => {
    writeFile.write('[');

    for (let i = 0; i < iteration; i++) {
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
        if ( i < iteration - 1) {
            writeFile.write(JSON.stringify(obj));
            // JSONStream.stringify().pipe(writeFile);
            // JSONStream.stringify().write(obj);
            writeFile.write(',');
        } else {
            writeFile.write(JSON.stringify(obj));
            writeFile.write(']');

        // JSONStream.stringify().pipe(writeFile);

        }
    } 
    await Promise.resolve(writeFile.end());

    return new Promise((resolve => {
            console.log('write completed');
            getExecutionTime();
            resolve()
    }))
}





// const seedDb = async () => {
//         writeFile.write('[');
//         for (let i = 0; i < iteration; i++) {
//             let sex = helpers.randomGender();
//             let obj = {
//                 name : 'Nike ' + faker.company.bsAdjective() + ' ' + faker.commerce.productAdjective() + ' '+ faker.commerce.productMaterial() + ' ' + helpers.randomVariant(),
//                 gender : sex,
//                 type : helpers.randomType(sex),
//                 price: faker.commerce.price(),
//                 nikeID: faker.lorem.word().toUpperCase() + faker.random.number(),
//                 colorStyles: helpers.randomStyle(),
//                 productPictures: helpers.getImages(),
//                 productDetails: {
//                     weight: helpers.randomWeight(),
//                     last: faker.random.word(),
//                     offset: faker.random.word(),
//                     style: faker.random.word()
//                 },
//                 availSizes: helpers.randomSizes(sex),
//                 count: counter
//             };
//             counter++;
//             if ( i < iteration - 1) {
//                 writeFile.write(JSON.stringify(obj));
//                 writeFile.write(',');
//             } else {
//                 writeFile.write(JSON.stringify(obj));
//                 writeFile.write(']');
//             }
//         } 
//         await Promise.resolve(writeFile.end());
//         await getExecutionTime();
//         console.log('write completed');
//         // readFile.on ('data', chunk => {
//         //     console.log('chunk', chunk)
//         //     db.create(chunk, err => {
//         //         if (err) {
//         //           console.log('error writing to db', err)
//         //         } else {
//         //           console.log('write to db complete');
//         //           //implement time recording here
//         //         }
//         //     });
//         // })
        
//         readFile
//              .pipe(JSONStream.parse('*'))
//              // .pipe(es.map(function(doc, next) {
//              //     console.log('in pipe');
//              //     Product.create(doc)
//              // }))
//              .pipe(writableStream);
//     };
    
//     seedDb();
    




// .explain docs 
// artillery test suite to query on local machine
// to test on server loader.io after deployment
// 