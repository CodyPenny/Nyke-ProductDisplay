// rename and append test if ready for test

const app = require('../server/');
const supertest = require('supertest');
const request = supertest(app);
const mongoose = require('mongoose');
const databaseName = 'nyke';
const  { Product }  = require('../database-mongoose/index.js');


xbeforeAll( async () => {
  const url = `mongodb://localhost/${databaseName}`
  await mongoose.connect(url, { useNewUrlParser: true })
})

var sku = 1;
var sku1000 = 1000;
var sku100000 = 100000;
var sku_1M = 1000000;
var sku_5M = 5000000;
var sku_9M = 9000000;
var sku_9M5 = 9500000;

const getExecutionTime = () => {
    var end = new Date() - start,
      hrend = process.hrtime(hrstart)
  
    console.info('Execution time: %dms', end);
    console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000);
  }

xtest(`Gets the endpoint for api/test count ${sku}`, async () => {
     const res = await request
      .get(`/api/test/${sku}`)
      expect(res.statusCode).toEqual(200)
})

xtest(`Gets the endpoint for api/test ${sku1000}`, async () => {
    const res = await request
      .get(`/api/test/${sku1000}`)
      expect(res.statusCode).toBe(200)
})

xtest(`Gets the endpoint for api/test ${sku100000}`, async () => {
    const res = await request
      .get(`/api/test/${sku100000}`)
      expect(res.statusCode).toBe(200)
})

xtest(`Gets the endpoint for api/test ${sku_1M}`, async () => {
    const res = await request
      .get(`/api/test/${sku_1M}`)
      expect(res.statusCode).toBe(200)
})

xtest(`Gets the endpoint for api/test ${sku_5M}`, async () => {
    const res = await request
      .get(`/api/test/${sku_5M}`)
      expect(res.statusCode).toBe(200)
})

xtest(`Gets the endpoint for api/test ${sku_9M}`, async () => {
    const res = await request
      .get(`/api/test/${sku_9M}`)
      expect(res.statusCode).toBe(200)
})

xtest(`Gets the endpoint for api/test ${sku_9M5}`, async () => {
    const res = await request
      .get(`/api/test/${sku_9M5}`)
      expect(res.statusCode).toBe(200)
})


xit('search the db by sku 1', async () => {
    const start = new Date ();
    var hrstart = process.hrtime();
    const shoe = await Product.findOne({count: sku})
    if (shoe.count) {
        var end = new Date() - start,
        hrend = process.hrtime(hrstart)
        console.info(`Count ${sku}- Execution time: %dms`, end);
        console.info(`Count ${sku}-Execution time (hr): %ds %dms`, hrend[0], hrend[1] / 1000000);
    }
    expect(shoe.count).toBe(sku)
 
})

xit('search the db/mongoose by sku 1000', async done => {
    const start = new Date ();
    var hrstart = process.hrtime();
    const shoe = await Product.findOne({count: sku1000})
    if (shoe.count) {
        var end = new Date() - start,
        hrend = process.hrtime(hrstart)
        console.info(`Count ${sku1000}- Execution time: %dms`, end);
        console.info(`Count ${sku1000}Execution time (hr): %ds %dms`, hrend[0], hrend[1] / 1000000);
    }
    expect(shoe.count).toBe(sku1000)
    done();
})

xit('search the db/mongoose by sku 100,000', async done => {
    const start = new Date ();
    var hrstart = process.hrtime();
    const shoe = await Product.findOne({count: sku100000})
    if (shoe.count) {
        var end = new Date() - start,
        hrend = process.hrtime(hrstart)
        console.info(`Count ${sku100000}- Execution time: %dms`, end);
        console.info(`Count ${sku100000}- Execution time (hr): %ds %dms`, hrend[0], hrend[1] / 1000000);
    }
    expect(shoe.count).toBe(sku100000)
    done();
})

xit('search the db/mongoose by sku 1M', async done => {
    const start = new Date ();
    var hrstart = process.hrtime();
    const shoe = await Product.findOne({count: sku_1M})
    if (shoe.count) {
        var end = new Date() - start,
        hrend = process.hrtime(hrstart)
        console.info(`Count ${sku_1M}- Execution time: %dms`, end);
        console.info(`Count ${sku_1M}- Execution time (hr): %ds %dms`, hrend[0], hrend[1] / 1000000);
    }
    expect(shoe.count).toBe(sku_1M)
    done();
})

xit('search the db/mongoose by sku 5M', async done => {
    const start = new Date ();
    var hrstart = process.hrtime();
    const shoe = await Product.findOne({count: sku_5M})
    if (shoe.count) {
        var end = new Date() - start,
        hrend = process.hrtime(hrstart)
        console.info(`Count ${sku_5M}- Execution time: %dms`, end);
        console.info(`Count ${sku_5M}- Execution time (hr): %ds %dms`, hrend[0], hrend[1] / 1000000);
    }
    expect(shoe.count).toBe(sku_5M)
    done();
})

xit('search the db/mongoose by sku 9M', async done => {
    const start = new Date ();
    var hrstart = process.hrtime();
    const shoe = await Product.findOne({count: sku_9M})
    if (shoe.count) {
        var end = new Date() - start,
        hrend = process.hrtime(hrstart)
        console.info(`Count ${sku_9M}- Execution time: %dms`, end);
        console.info(`Count ${sku_9M}- Execution time (hr): %ds %dms`, hrend[0], hrend[1] / 1000000);
    }
    expect(shoe.count).toBe(sku_9M)
    done();
})

xit('search the db/mongoose by sku 9.5M', async done => {
    const start = new Date ();
    var hrstart = process.hrtime();
    const shoe = await Product.findOne({count: sku_9M5})
    if (shoe.count) {
        var end = new Date() - start,
        hrend = process.hrtime(hrstart)
        console.info(`Count ${sku_9M5}- Execution time: %dms`, end);
        console.info(`Count ${sku_9M5}- Execution time (hr): %ds %dms`, hrend[0], hrend[1] / 1000000);
    }
    expect(shoe.count).toBe(sku_9M5)
    done();
})

xit('search the db/mongoose by sku 9.5M', async done => {
    const start = new Date ();
    var hrstart = process.hrtime();
    const shoe = await Product.findOne({count: sku_9M5})
    if (shoe.count) {
        var end = new Date() - start,
        hrend = process.hrtime(hrstart)
        console.info(`Count ${sku_9M5}- Execution time: %dms`, end);
        console.info(`Count ${sku_9M5}- Execution time (hr): %ds %dms`, hrend[0], hrend[1] / 1000000);
    }
    expect(shoe.count).toBe(sku_9M5)
    done();
})

// it('search the db/mongoose by _id @ count 9,800,001', async done => {
//     const start = new Date ();
//     var hrstart = process.hrtime();
//     const shoe = await Product.findOne({_id: "5e8a7cfa19478b1c6e4ee8b7"})
//     if (shoe._id) {
//         var end = new Date() - start,
//         hrend = process.hrtime(hrstart)
//         console.info(`Count by _id @ count 9,800,001- Execution time: %dms`, end);
//         console.info(`Count by _id @ count 9,800,001- Execution time (hr): %ds %dms`, hrend[0], hrend[1] / 1000000);
//     }
    
//     expect(shoe._id).toMatchObject("5e8a7cfa19478b1c6e4ee8b7")
//     done();
// })

xit('search the db/mongoose by name @ count 9,500,500', async done => {
    const start = new Date ();
    var hrstart = process.hrtime();
    const shoe = await Product.findOne({name: "Nike vertical Small Frozen Solarsoft"})
    if (shoe.name) {
        var end = new Date() - start,
        hrend = process.hrtime(hrstart)
        console.info(`Count by name @ count 9,500,500- Execution time: %dms`, end);
        console.info(`Count by name @ count 9,500,500- Execution time (hr): %ds %dms`, hrend[0], hrend[1] / 1000000);
    }
    expect(shoe.name).toBe("Nike vertical Small Frozen Solarsoft")
    done();
})

xit('search the db by sku 5', async () => {
    const start = new Date ();
    var hrstart = process.hrtime();
    const shoe = await Product.findOne({count: 5})
    if (shoe.count) {
        var end = new Date() - start,
        hrend = process.hrtime(hrstart)
        console.info(`Count ${5}- Execution time: %dms`, end);
        console.info(`Count ${5}-Execution time (hr): %ds %dms`, hrend[0], hrend[1] / 1000000);
    }
    expect(shoe.count).toBe(5)
 
})

xit('search the db/mongoose by name @ count 9,500,500', async done => {
    const start = new Date ();
    var hrstart = process.hrtime();
    const shoe = await Product.findOne({name: "Nike vertical Small Frozen Solarsoft"})
    if (shoe.name) {
        var end = new Date() - start,
        hrend = process.hrtime(hrstart)
        console.info(`Count by name @ count 9,500,500- Execution time: %dms`, end);
        console.info(`Count by name @ count 9,500,500- Execution time (hr): %ds %dms`, hrend[0], hrend[1] / 1000000);
    }
    expect(shoe.name).toBe("Nike vertical Small Frozen Solarsoft")
    done();
})

xit('search the db/mongoose by name @ count 9,600,500', async done => {
    const start = new Date ();
    var hrstart = process.hrtime();
    const shoe = await Product.findOne({name: "Nike distributed Gorgeous Plastic Offcourt"})
    if (shoe.name) {
        var end = new Date() - start,
        hrend = process.hrtime(hrstart)
        console.info(`Count by name @ count 9,500,500- Execution time: %dms`, end);
        console.info(`Count by name @ count 9,500,500- Execution time (hr): %ds %dms`, hrend[0], hrend[1] / 1000000);
    }
    expect(shoe.name).toBe("Nike distributed Gorgeous Plastic Offcourt")
    done();
})

xit('search the db by sku 9,600,500', async () => {
    const start = new Date ();
    var hrstart = process.hrtime();
    const shoe = await Product.findOne({count: 9600500})
    if (shoe.count) {
        var end = new Date() - start,
        hrend = process.hrtime(hrstart)
        console.info(`Count 9,600,500- Execution time: %dms`, end);
        console.info(`Count 9,600,500-Execution time (hr): %ds %dms`, hrend[0], hrend[1] / 1000000);
    }
    expect(shoe.count).toBe(9600500)
 
})

xit('search the db/mongoose by name @ count 9,700,000', async done => {
    const start = new Date ();
    var hrstart = process.hrtime();
    const shoe = await Product.findOne({name: "Nike revolutionary Licensed Concrete Triax"})
    if (shoe.name) {
        var end = new Date() - start,
        hrend = process.hrtime(hrstart)
        console.info(`Count by name @ count 9,700,000- Execution time: %dms`, end);
        console.info(`Count by name @ count 9,700,000- Execution time (hr): %ds %dms`, hrend[0], hrend[1] / 1000000);
    }
    expect(shoe.name).toBe("Nike revolutionary Licensed Concrete Triax");
    expect(shoe.count).toBe(9700000)
    done();
})

xit('search the db by sku 9,700,000', async () => {
    const start = new Date ();
    var hrstart = process.hrtime();
    const shoe = await Product.findOne({count: 9700000})
    if (shoe.count) {
        var end = new Date() - start,
        hrend = process.hrtime(hrstart)
        console.info(`Count 9,700,000- Execution time: %dms`, end);
        console.info(`Count 9,700,000-Execution time (hr): %ds %dms`, hrend[0], hrend[1] / 1000000);
    }
    expect(shoe.count).toBe(9700000)
 
})

xit('search the db/mongoose by name @ count 9,800,000', async done => {
    const start = new Date ();
    var hrstart = process.hrtime();
    const shoe = await Product.findOne({name: "Nike web-enabled Small Fresh Vomero"})
    if (shoe.name) {
        var end = new Date() - start,
        hrend = process.hrtime(hrstart)
        console.info(`Count by name @ count 9,800,000- Execution time: %dms`, end);
        console.info(`Count by name @ count 9,800,000- Execution time (hr): %ds %dms`, hrend[0], hrend[1] / 1000000);
    }
    expect(shoe.name).toBe("Nike web-enabled Small Fresh Vomero");
    expect(shoe.count).toBe(9800000)
    done();
})

xit('search the db by sku 9,800,000', async () => {
    const start = new Date ();
    var hrstart = process.hrtime();
    const shoe = await Product.findOne({count: 9800000})
    if (shoe.count) {
        var end = new Date() - start,
        hrend = process.hrtime(hrstart)
        console.info(`Count 9,800,000- Execution time: %dms`, end);
        console.info(`Count 9,800,000-Execution time (hr): %ds %dms`, hrend[0], hrend[1] / 1000000);
    }
    expect(shoe.count).toBe(9800000)
 
})

xit('search the db/mongoose by name @ count 9,900,000', async done => {
    const start = new Date ();
    var hrstart = process.hrtime();
    const shoe = await Product.findOne({name: "Nike revolutionary Ergonomic Granite Presto"})
    if (shoe.name) {
        var end = new Date() - start,
        hrend = process.hrtime(hrstart)
        console.info(`Count by name @ count 9,900,000- Execution time: %dms`, end);
        console.info(`Count by name @ count 9,900,000- Execution time (hr): %ds %dms`, hrend[0], hrend[1] / 1000000);
    }
    expect(shoe.name).toBe("Nike revolutionary Ergonomic Granite Presto");
    expect(shoe.count).toBe(9900000)
    done();
})

xit('search the db by sku 9,900,000', async () => {
    const start = new Date ();
    var hrstart = process.hrtime();
    const shoe = await Product.findOne({count: 9900000})
    if (shoe.count) {
        var end = new Date() - start,
        hrend = process.hrtime(hrstart)
        console.info(`Count 9,900,000- Execution time: %dms`, end);
        console.info(`Count 9,900,000-Execution time (hr): %ds %dms`, hrend[0], hrend[1] / 1000000);
    }
    expect(shoe.count).toBe(9900000)
 
})



afterAll(() => {
    mongoose.connection.close()
})