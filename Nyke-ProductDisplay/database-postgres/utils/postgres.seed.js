const faker = require('faker');
const helpers = require('../../server/utils/helpers.js');
const fs = require('fs');

const stream = fs.createWriteStream(__dirname + '/seed.sql');


async function seed() {
    var iterations =40;
    var insertPrefix = "INSERT INTO testtable (id, product_name, gender, product_type, price, nikeID, colorStyles, productPictures, productDetails, availSizes) VALUES ";
    var counter = 9999961;
    stream.write(insertPrefix);
    
    for (let i = 0; i < iterations; i++) {
        let sex = helpers.randomGender();
        
        let nameVal = 'Nike ' + faker.company.bsAdjective() + ' ' + faker.commerce.productAdjective() + ' ' + faker.hacker.adjective()+ ' ' + faker.commerce.productMaterial() + ' ' + helpers.randomVariant();
        let genderVal = sex;
        let typeVal = helpers.randomType(sex);
        let priceVal= faker.commerce.price();
        let nikeIDVal= faker.lorem.word().toUpperCase() + faker.random.number();
        let colorStylesVal= JSON.stringify(helpers.randomStyle());
        colorStylesVal = colorStylesVal.substring(1, colorStylesVal.length - 1);
        let productPicturesVal= JSON.stringify(helpers.getImages()).replace(/"/g,"'");
        let productDetailsVal= {
                "weight": helpers.randomWeight(),
                "last": faker.hacker.adjective(),
                "offset": faker.hacker.adjective(),
                "style": faker.hacker.adjective()
            };
        let availSizesVal= helpers.randomSizes(sex);
        let count = counter;
        
        if (i === iterations-1) {
            let data = `('${count}','${nameVal}', '${genderVal}', '${typeVal}', ${priceVal}, '${nikeIDVal}', '{${colorStylesVal}}', ARRAY ${productPicturesVal}, '${JSON.stringify(productDetailsVal)}', '${JSON.stringify(availSizesVal)}')`;
            stream.write(data);
            
        } else {
            let data = `('${count}','${nameVal}', '${genderVal}', '${typeVal}', ${priceVal}, '${nikeIDVal}', '{${colorStylesVal}}', ARRAY ${productPicturesVal}, '${JSON.stringify(productDetailsVal)}', '${JSON.stringify(availSizesVal)}')`;
            stream.write(data + ',');
            counter++;
        }

    }
    stream.write(';');
}

seed();
