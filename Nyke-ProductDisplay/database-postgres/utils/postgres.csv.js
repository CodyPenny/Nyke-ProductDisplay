const faker = require('faker');
const helpers = require('../../server/utils/helpers.js');
const fs = require('fs');
const fastcsv = require('fast-csv');


var filecount = 0;
var initial = 6499971;
var procedures = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

async function seedMore () {

    async function seed(n) {
        return new Promise ( resolve => {
        var iterations = 350000;
        var array = [];
        filecount++;
        const stream = fs.createWriteStream(__dirname + `/seed${filecount}.csv`);
        for (var i = 1; i < iterations; i++) {
            let sex = helpers.randomGender();
            
            let nameVal = 'Nyke ' + faker.company.bsAdjective() + ' ' + faker.commerce.productAdjective() + ' ' + faker.hacker.adjective()+ ' ' + faker.commerce.productMaterial() + ' ' + helpers.randomVariant();
            let genderVal = sex;
            let typeVal = helpers.randomType(sex);
            let priceVal= faker.commerce.price();
            let nikeIDVal= faker.lorem.word().toUpperCase() + faker.random.number();
            let colorStylesVal= helpers.randomStyle();
            let productPicturesVal= helpers.getImages();
            let productDetailsVal= {
                    weight: helpers.randomWeight(),
                    last: faker.hacker.adjective(),
                    offset: faker.hacker.adjective(),
                    style: faker.hacker.adjective()
                };
            let availSizesVal= helpers.randomSizes(sex);
            
         
            let data = {
                id: initial,
                product_name: nameVal,
                gender: genderVal,
                product_type: typeVal,
                price: priceVal,
                nikeID: nikeIDVal,
                colorStyles: `{${colorStylesVal}}`,
                productPictures: `{${productPicturesVal}}`,
                productDetails: JSON.stringify(productDetailsVal),
                availSizes: JSON.stringify(availSizesVal)
            };
            initial++;
            array.push(data);
      
        }
        fastcsv.write(array, {headers: true})
        .pipe(stream)
        .on("finish", () => {
            console.log('ended');
            resolve()
        })
    })}

    for (let procedure of procedures) {
      await seed(procedure)
    }
 

}

seedMore()

// seed().then(() => {
//     filecount++;
//     seed().then(()=> {
//         filecount++;
//         seed().then(()=> {
//             filecount++;
//             seed().then(() => {
//                 console.log('finish')
//             })
//         })
//     })
    
// })