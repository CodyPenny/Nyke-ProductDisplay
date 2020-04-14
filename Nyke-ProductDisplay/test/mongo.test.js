// rename and append test if ready for test

const app = require('../server/');
const supertest = require('supertest');
const request = supertest(app);
const { MongoClient } = require('mongodb');

describe('mongo start', () => {
    let connection;
    let db;

    var URI = 'mongodb://localhost/nyke';

    beforeAll(async() => {
        connection = await MongoClient.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        db = await connection.db();
    });

    xit('should fetch sku 1', async () => {
        const start = new Date ();
        var hrstart = process.hrtime();
        const shoes = db.collection('nykeshoes');
        const item = await shoes.findOne({count: 1})
        if (item.count) {
            var end = new Date() - start,
            hrend = process.hrtime(hrstart)
            console.info(`Count 1 mongo- Execution time: %dms`, end);
            console.info(`Count 1 mongo- Execution time (hr): %ds %dms`, hrend[0], hrend[1] / 1000000);
        }
        expect(item.count).toBe(1)
    })
    
    xit('should fetch sku 1M', async () => {
        const start = new Date ();
        var hrstart = process.hrtime();
        const shoes = db.collection('nykeshoes');
        const item = await shoes.findOne({count: 1000000})
        if (item.count) {
            var end = new Date() - start,
            hrend = process.hrtime(hrstart)
            console.info(`Count 1M mongo- Execution time: %dms`, end);
            console.info(`Count 1M mongo- Execution time (hr): %ds %dms`, hrend[0], hrend[1] / 1000000);
        }
        expect(item.count).toBe(1000000)
    })

    it('should fetch sku 5M', async () => {
        const start = new Date ();
        var hrstart = process.hrtime();
        const shoes = db.collection('nykeshoes');
        const item = await shoes.findOne({count: 5000000})
        if (item.count) {
            var end = new Date() - start,
            hrend = process.hrtime(hrstart)
            console.info(`Count 5M mongo- Execution time: %dms`, end);
            console.info(`Count 5M mongo- Execution time (hr): %ds %dms`, hrend[0], hrend[1] / 1000000);
        }
        expect(item.count).toBe(5000000)
    })

    it('should fetch sku 9M', async () => {
        const start = new Date ();
        var hrstart = process.hrtime();
        const shoes = db.collection('nykeshoes');
        const item = await shoes.findOne({count: 9000000})
        if (item.count) {
            var end = new Date() - start,
            hrend = process.hrtime(hrstart)
            console.info(`Count 9M mongo- Execution time: %dms`, end);
            console.info(`Count 9M mongo- Execution time (hr): %ds %dms`, hrend[0], hrend[1] / 1000000);
        }
        expect(item.count).toBe(9000000)
    })

    it('should fetch sku 9.5M', async () => {
        const start = new Date ();
        var hrstart = process.hrtime();
        const shoes = db.collection('nykeshoes');
        const item = await shoes.findOne({count: 9500000})
        if (item.count) {
            var end = new Date() - start,
            hrend = process.hrtime(hrstart)
            console.info(`Count 9.5M mongo- Execution time: %dms`, end);
            console.info(`Count 9.5M mongo- Execution time (hr): %ds %dms`, hrend[0], hrend[1] / 1000000);
        }
        expect(item.count).toBe(9500000)
    })

    it('should fetch sku 9,500,500', async () => {
        const start = new Date ();
        var hrstart = process.hrtime();
        const shoes = db.collection('nykeshoes');
        const item = await shoes.findOne({count: 9500500})
        if (item.count) {
            var end = new Date() - start,
            hrend = process.hrtime(hrstart)
            console.info(`Count 9.500,500 mongo- Execution time: %dms`, end);
            console.info(`Count 9.500,500 mongo- Execution time (hr): %ds %dms`, hrend[0], hrend[1] / 1000000);
        }
        expect(item.count).toBe(9500500)
    })

    xit('should fetch name 9.500,500', async () => {
        const start = new Date ();
        var hrstart = process.hrtime();
        const shoes = db.collection('nykeshoes');
        const item = await shoes.findOne({name: "Nike vertical Small Frozen Solarsoft"})
        if (item.name) {
            var end = new Date() - start,
            hrend = process.hrtime(hrstart)
            console.info(`Name 9,500,500 mongo- Execution time: %dms`, end);
            console.info(`Name 9,500,500 mongo- Execution time (hr): %ds %dms`, hrend[0], hrend[1] / 1000000);
        }
        expect(item.name).toBe("Nike vertical Small Frozen Solarsoft");
        expect(item.count).toBe(9500500)
    })

    it('should fetch sku 9,600,500', async () => {
        const start = new Date ();
        var hrstart = process.hrtime();
        const shoes = db.collection('nykeshoes');
        const item = await shoes.findOne({count: 9600500})
        if (item.count) {
            var end = new Date() - start,
            hrend = process.hrtime(hrstart)
            console.info(`Count 9.600,500 mongo- Execution time: %dms`, end);
            console.info(`Count 9.600,500 mongo- Execution time (hr): %ds %dms`, hrend[0], hrend[1] / 1000000);
        }
        expect(item.count).toBe(9600500)
    })

    xit('should fetch name 9,600,500', async () => {
        const start = new Date ();
        var hrstart = process.hrtime();
        const shoes = db.collection('nykeshoes');
        const item = await shoes.findOne({name: "Nike distributed Gorgeous Plastic Offcourt"})
        if (item.name) {
            var end = new Date() - start,
            hrend = process.hrtime(hrstart)
            console.info(`Name 9.6M mongo- Execution time: %dms`, end);
            console.info(`Name 9.6M mongo- Execution time (hr): %ds %dms`, hrend[0], hrend[1] / 1000000);
        }
        expect(item.name).toBe("Nike distributed Gorgeous Plastic Offcourt");
    })

    it('should fetch sku 9,700,000', async () => {
        const start = new Date ();
        var hrstart = process.hrtime();
        const shoes = db.collection('nykeshoes');
        const item = await shoes.findOne({count: 9700000})
        if (item.count) {
            var end = new Date() - start,
            hrend = process.hrtime(hrstart)
            console.info(`Count 9.700,000 mongo- Execution time: %dms`, end);
            console.info(`Count 9.700,000 mongo- Execution time (hr): %ds %dms`, hrend[0], hrend[1] / 1000000);
        }
        expect(item.count).toBe(9700000)
    })

    xit('should fetch name 9,700,000', async () => {
        const start = new Date ();
        var hrstart = process.hrtime();
        const shoes = db.collection('nykeshoes');
        const item = await shoes.findOne({name: "Nike revolutionary Licensed Concrete Triax"})
        if (item.name) {
            var end = new Date() - start,
            hrend = process.hrtime(hrstart)
            console.info(`Name 9.7M mongo- Execution time: %dms`, end);
            console.info(`Name 9.7M mongo- Execution time (hr): %ds %dms`, hrend[0], hrend[1] / 1000000);
        }
        expect(item.name).toBe("Nike revolutionary Licensed Concrete Triax");
        expect(item.count).toBe(9700000)
    })

    it('should fetch sku 9,800,000', async () => {
        const start = new Date ();
        var hrstart = process.hrtime();
        const shoes = db.collection('nykeshoes');
        const item = await shoes.findOne({count: 9800000})
        if (item.count) {
            var end = new Date() - start,
            hrend = process.hrtime(hrstart)
            console.info(`Count 9.800,000 mongo- Execution time: %dms`, end);
            console.info(`Count 9.800,000 mongo- Execution time (hr): %ds %dms`, hrend[0], hrend[1] / 1000000);
        }
        expect(item.count).toBe(9800000)
    })

    xit('should fetch name 9,800,000', async () => {
        const start = new Date ();
        var hrstart = process.hrtime();
        const shoes = db.collection('nykeshoes');
        const item = await shoes.findOne({name: "Nike web-enabled Small Fresh Vomero"})
        if (item.name) {
            var end = new Date() - start,
            hrend = process.hrtime(hrstart)
            console.info(`Name 9.8M mongo- Execution time: %dms`, end);
            console.info(`Name 9.8M mongo- Execution time (hr): %ds %dms`, hrend[0], hrend[1] / 1000000);
        }
        expect(item.name).toBe("Nike web-enabled Small Fresh Vomero");
        expect(item.count).toBe(9800000)
    })

    it('should fetch sku 9,900,000', async () => {
        const start = new Date ();
        var hrstart = process.hrtime();
        const shoes = db.collection('nykeshoes');
        const item = await shoes.findOne({count: 9900000})
        if (item.count) {
            var end = new Date() - start,
            hrend = process.hrtime(hrstart)
            console.info(`Count 9.900,000 mongo- Execution time: %dms`, end);
            console.info(`Count 9.900,000 mongo- Execution time (hr): %ds %dms`, hrend[0], hrend[1] / 1000000);
        }
        expect(item.count).toBe(9900000)
    })

    xit('should fetch name 9,900,000', async () => {
        const start = new Date ();
        var hrstart = process.hrtime();
        const shoes = db.collection('nykeshoes');
        const item = await shoes.findOne({name: "Nike revolutionary Ergonomic Granite Presto"})
        if (item.name) {
            var end = new Date() - start,
            hrend = process.hrtime(hrstart)
            console.info(`Name 9.9M mongo- Execution time: %dms`, end);
            console.info(`Name 9.9M mongo- Execution time (hr): %ds %dms`, hrend[0], hrend[1] / 1000000);
        }
        expect(item.name).toBe("Nike revolutionary Ergonomic Granite Presto");
        expect(item.count).toBe(9900000)
    })

    xit('mongo by nikeID, 9,900,000', async () => {
        const start = new Date ();
        const id = "UNDE5720";
        const num = "nikeID, 9,900,000";
        var hrstart = process.hrtime();
        const shoes = db.collection('nykeshoes');
        const item = await shoes.findOne({nikeID: id})
        if (item.nikeID) {
            var end = new Date() - start,
            hrend = process.hrtime(hrstart)
            console.info(`${num} mongo- Execution time: %dms`, end);
            console.info(`${num} mongo- Execution time (hr): %ds %dms`, hrend[0], hrend[1] / 1000000);
        }
        expect(item.nikeID).toBe(id);
        expect(item.count).toBe(9900000);
    })

    xit('mongo by nikeID, 9,800,000', async () => {
        const start = new Date ();
        const id = "MAGNI18174";
        const num = "nikeID, 9,800,000";
        var hrstart = process.hrtime();
        const shoes = db.collection('nykeshoes');
        const item = await shoes.findOne({nikeID: id})
        if (item.nikeID) {
            var end = new Date() - start,
            hrend = process.hrtime(hrstart)
            console.info(`${num} mongo- Execution time: %dms`, end);
            console.info(`${num} mongo- Execution time (hr): %ds %dms`, hrend[0], hrend[1] / 1000000);
        }
        expect(item.nikeID).toBe(id);
        expect(item.count).toBe(9800000);
    })
})  