// const app = require('../server/');
// const supertest = require('supertest');
// const request = supertest(app);
// const { Pool, Client } = require('pg');

// describe('tests query times against PostGreSql', () => {

//     let pool;
//     var tests = [1, 10, 100, 1000, 10000, 100000, 1000000, 5000000, 9000000, 9500000, 9600000, 9700000, 9800000, 9900000];
//     var names = [ 'Nike user-centric Awesome 1080p Granite Duo', 'Nyke dot-com Awesome neural Plastic Nova']

//     beforeAll( async ()=> {
//         pool = new Pool({
//             database: 'evelyn',
//             port: 5432
//         })
//         await pool.connect()
//         console.log('connected on postgres');

//     })

//     it(`should fetch id ${tests[0]}`, async() => {
//         const start = new Date ();
//         var hrstart = process.hrtime();
//         await pool.query(`Select * from testtable where id = ${tests[0]}`)
//         .then((res) => {
//             if(res.rows[0].id === tests[0]){
//             var end = new Date() - start;
//             var hrend = process.hrtime(hrstart);
//             console.info(`ID ${tests[0]} Execution time: %dms`, end);
//             console.info(`ID ${tests[0]} Execution time (hr): %ds %dms`, hrend[0], hrend[1] / 1000000);
//             }
//         })
//     })

//     it(`should fetch id ${tests[1]}`, async() => {
//         const start = new Date ();
//         var hrstart = process.hrtime();
//         await pool.query(`Select * from testtable where id = ${tests[1]}`)
//         .then((res) => {
//             if(res.rows[0].id === tests[1]){
//             var end = new Date() - start;
//             var hrend = process.hrtime(hrstart);
//             console.info(`ID ${tests[1]} Execution time: %dms`, end);
//             console.info(`ID ${tests[1]} Execution time (hr): %ds %dms`, hrend[0], hrend[1] / 1000000);
//             }
//         })
//     })

//     it(`should fetch id ${tests[2]}`, async() => {
//         const start = new Date ();
//         var hrstart = process.hrtime();
//         await pool.query(`Select * from testtable where id = ${tests[2]}`)
//         .then((res) => {
//             if(res.rows[0].id === tests[2]){
//             var end = new Date() - start;
//             var hrend = process.hrtime(hrstart);
//             console.info(`ID ${tests[2]} Execution time: %dms`, end);
//             console.info(`ID ${tests[2]} Execution time (hr): %ds %dms`, hrend[0], hrend[1] / 1000000);
//             }
//         })
//     })

//     it(`should fetch id ${tests[3]}`, async() => {
//         const start = new Date ();
//         var hrstart = process.hrtime();
//         await pool.query(`Select * from testtable where id = ${tests[3]}`)
//         .then((res) => {
//             if(res.rows[0].id === tests[3]){
//             var end = new Date() - start;
//             var hrend = process.hrtime(hrstart);
//             console.info(`ID ${tests[3]} Execution time: %dms`, end);
//             console.info(`ID ${tests[3]} Execution time (hr): %ds %dms`, hrend[0], hrend[1] / 1000000);
//             }
//         })
//     })

//     it(`should fetch id ${tests[4]}`, async() => {
//         const start = new Date ();
//         var hrstart = process.hrtime();
//         await pool.query(`Select * from testtable where id = ${tests[4]}`)
//         .then((res) => {
//             if(res.rows[0].id === tests[4]){
//             var end = new Date() - start;
//             var hrend = process.hrtime(hrstart);
//             console.info(`ID ${tests[4]} Execution time: %dms`, end);
//             console.info(`ID ${tests[4]} Execution time (hr): %ds %dms`, hrend[0], hrend[1] / 1000000);
//             }
//         })
//     })

//     it(`should fetch id ${tests[5]}`, async() => {
//         const start = new Date ();
//         var hrstart = process.hrtime();
//         await pool.query(`Select * from testtable where id = ${tests[5]}`)
//         .then((res) => {
//             if(res.rows[0].id === tests[5]){
//             var end = new Date() - start;
//             var hrend = process.hrtime(hrstart);
//             console.info(`ID ${tests[5]} Execution time: %dms`, end);
//             console.info(`ID ${tests[5]} Execution time (hr): %ds %dms`, hrend[0], hrend[1] / 1000000);
//             }
//         })
//     })

//     it(`should fetch id ${tests[6]}`, async() => {
//         const start = new Date ();
//         var hrstart = process.hrtime();
//         await pool.query(`Select * from testtable where id = ${tests[6]}`)
//         .then((res) => {
//             if(res.rows[0].id === tests[6]){
//             var end = new Date() - start;
//             var hrend = process.hrtime(hrstart);
//             console.info(`ID ${tests[6]} Execution time: %dms`, end);
//             console.info(`ID ${tests[6]} Execution time (hr): %ds %dms`, hrend[0], hrend[1] / 1000000);
//             }
//         })
//     })

//     it(`should fetch id ${tests[7]}`, async() => {
//         const start = new Date ();
//         var hrstart = process.hrtime();
//         await pool.query(`Select * from testtable where id = ${tests[7]}`)
//         .then((res) => {
//             if(res.rows[0].id === tests[7]){
//             var end = new Date() - start;
//             var hrend = process.hrtime(hrstart);
//             console.info(`ID ${tests[7]} Execution time: %dms`, end);
//             console.info(`ID ${tests[7]} Execution time (hr): %ds %dms`, hrend[0], hrend[1] / 1000000);
//             }
//         })
//     })

//     it(`should fetch id ${tests[8]}`, async() => {
//         const start = new Date ();
//         var hrstart = process.hrtime();
//         await pool.query(`Select * from testtable where id = ${tests[8]}`)
//         .then((res) => {
//             if(res.rows[0].id === tests[8]){
//             var end = new Date() - start;
//             var hrend = process.hrtime(hrstart);
//             console.info(`ID ${tests[8]} Execution time: %dms`, end);
//             console.info(`ID ${tests[8]} Execution time (hr): %ds %dms`, hrend[0], hrend[1] / 1000000);
//             }
//         })
//     })

//     it(`should fetch id ${tests[9]}`, async() => {
//         const start = new Date ();
//         var hrstart = process.hrtime();
//         await pool.query(`Select * from testtable where id = ${tests[9]}`)
//         .then((res) => {
//             if(res.rows[0].id === tests[9]){
//             var end = new Date() - start;
//             var hrend = process.hrtime(hrstart);
//             console.info(`ID ${tests[9]} Execution time: %dms`, end);
//             console.info(`ID ${tests[9]} Execution time (hr): %ds %dms`, hrend[0], hrend[1] / 1000000);
//             }
//         })
//     })

//     it(`should fetch id ${tests[10]}`, async() => {
//         const start = new Date ();
//         var hrstart = process.hrtime();
//         await pool.query(`Select * from testtable where id = ${tests[10]}`)
//         .then((res) => {
//             if(res.rows[0].id === tests[10]){
//             var end = new Date() - start;
//             var hrend = process.hrtime(hrstart);
//             console.info(`ID ${tests[10]} Execution time: %dms`, end);
//             console.info(`ID ${tests[10]} Execution time (hr): %ds %dms`, hrend[0], hrend[1] / 1000000);
//             }
//         })
//     })

//     it(`should fetch id ${tests[11]}`, async() => {
//         const start = new Date ();
//         var hrstart = process.hrtime();
//         await pool.query(`Select * from testtable where id = ${tests[11]}`)
//         .then((res) => {
//             if(res.rows[0].id === tests[11]){
//             var end = new Date() - start;
//             var hrend = process.hrtime(hrstart);
//             console.info(`ID ${tests[11]} Execution time: %dms`, end);
//             console.info(`ID ${tests[11]} Execution time (hr): %ds %dms`, hrend[0], hrend[1] / 1000000);
//             }
//         })
//     })

//     it(`should fetch id ${tests[12]}`, async() => {
//         const start = new Date ();
//         var hrstart = process.hrtime();
//         await pool.query(`Select * from testtable where id = ${tests[12]}`)
//         .then((res) => {
//             if(res.rows[0].id === tests[12]){
//             var end = new Date() - start;
//             var hrend = process.hrtime(hrstart);
//             console.info(`ID ${tests[12]} Execution time: %dms`, end);
//             console.info(`ID ${tests[12]} Execution time (hr): %ds %dms`, hrend[0], hrend[1] / 1000000);
//             }
//         })
//     })

//     it(`should fetch id ${tests[13]}`, async() => {
//         const start = new Date ();
//         var hrstart = process.hrtime();
//         await pool.query(`Select * from testtable where id = ${tests[13]}`)
//         .then((res) => {
//             if(res.rows[0].id === tests[13]){
//             var end = new Date() - start;
//             var hrend = process.hrtime(hrstart);
//             console.info(`ID ${tests[13]} Execution time: %dms`, end);
//             console.info(`ID ${tests[13]} Execution time (hr): %ds %dms`, hrend[0], hrend[1] / 1000000);
//             }
//         })
//     })

//     it(`should fetch product name ${names[0]}`, async() => {
//         const start = new Date ();
//         var hrstart = process.hrtime();
//         await pool.query(`Select * from testtable where product_name = '${names[0]}'`)
//         .then((res) => {
//             if(res.rows[0].product_name === names[0]){
//             var end = new Date() - start;
//             var hrend = process.hrtime(hrstart);
//             console.info(`Product Name ${tests[7]} Execution time: %dms`, end);
//             console.info(`Product Name ${tests[7]} Execution time (hr): %ds %dms`, hrend[0], hrend[1] / 1000000);
//             expect(res.rows[0].id).toBe(tests[7])
//             }
//         })
//     })

//     it(`should fetch product name ${names[1]}`, async() => {
//         const start = new Date ();
//         var hrstart = process.hrtime();
//         await pool.query(`Select * from testtable where product_name = '${names[1]}'`)
//         .then((res) => {
//             if(res.rows[0].product_name === names[1]){
//             var end = new Date() - start;
//             var hrend = process.hrtime(hrstart);
//             console.info(`Product Name ${tests[9]} Execution time: %dms`, end);
//             console.info(`Product Name ${tests[9]} Execution time (hr): %ds %dms`, hrend[0], hrend[1] / 1000000);
//             expect(res.rows[0].id).toBe(tests[9])
//             }
//         })
//     })


// })



