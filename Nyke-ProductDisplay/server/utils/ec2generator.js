const faker = require('faker');
const helpers = require('./helpers');
const fs = require('fs');
const JSONStream = require('JSONStream');

let counter = 9600099;
var iteration = 399901;

const writeFile = fs.createWriteStream(__dirname + '/ec2.json');


const forLoop = async () => {
    writeFile.write('[');

    for (let i = 0; i < iteration; i++) {
        counter++;
        let sex = helpers.randomGender();
        let fakeprice = faker.commerce.price();
        let obj = {
            name : 'Nike ' + faker.company.bsAdjective() + ' ' + faker.commerce.productAdjective() + ' ' + faker.hacker.adjective()+ ' ' + faker.commerce.productMaterial() + ' ' + helpers.randomVariant(),
            gender : sex,
            type : helpers.randomType(sex),
            price: fakeprice,
            discountPrice: fakeprice - (fakeprice*.15),
            colorStyles: helpers.randomStyle(),
            productPictures: helpers.getImages(),
            productDetails: {
                weight: helpers.randomWeight(),
                last: faker.random.word(),
                offset: faker.random.word(),
                style: faker.random.word()
            },
            availSizes: helpers.randomSizes(sex),
            nikeID: counter
        };
        
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
            resolve()
    }))
}

forLoop();
