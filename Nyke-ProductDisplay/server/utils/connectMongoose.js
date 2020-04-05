var mongoose = require('mongoose');
const db = require('../../database-mongoose');
const faker = require('faker');
const { Product } = require('../../database-mongoose');
const helpers = require('./helpers');

var start = new Date();
var hrstart = process.hrtime();

const getExecutionTime = () => {
  var end = new Date() - start,
    hrend = process.hrtime(hrstart)

  console.info('Execution time: %dms', end);
  console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000);
}


async function seed() {
    var counter = 6000001;

    for (let i = 0; i < 1000000; i++) {
        let sex = helpers.randomGender();
        
        let nameVal = 'Nike ' + faker.company.bsAdjective() + ' ' + faker.commerce.productAdjective() + ' '+ faker.commerce.productMaterial() + ' ' + helpers.randomVariant();
        let genderVal = sex;
        let typeVal = helpers.randomType(sex);
        let priceVal= faker.commerce.price();
        let nikeIDVal= faker.lorem.word().toUpperCase() + faker.random.number();
        let colorStylesVal= helpers.randomStyle();
        let productPicturesVal= helpers.getImages();
        let productDetailsVal= {
                weight: helpers.randomWeight(),
                last: faker.random.word(),
                offset: faker.random.word(),
                style: faker.random.word()
            };
        let availSizesVal= helpers.randomSizes(sex);
        let countVal= counter;
       

        let item = new Product({
            name: nameVal,
            gender: genderVal,
            type: typeVal,
            price: priceVal,
            nikeID: nikeIDVal,
            colorStyles: colorStylesVal,
            productPictures: productPicturesVal,
            productDetails: productDetailsVal,
            availSizes: availSizesVal,
            count: countVal
        })
        counter++;

        await 
        item
        .save()
        .then(success => {})
        .catch(err => {});
     

    }
    return new Promise (resolve => {
        resolve()
    })
}
console.log('seeding');
seed().then(()=> getExecutionTime())