const { Pool, Client } = require('pg');
const fs = require('fs');
const copyFrom = require('pg-copy-streams').from;


const filestream = fs.createReadStream(__dirname + '/utils/seed.sql');

const pool = new Pool({
   database: 'nyke',
    port: 5432});

// const createTable = `CREATE TABLE IF NOT EXISTS products (
//     id SERIAL NOT NULL PRIMARY KEY,
//     product_name text NOT NULL,
//     gender VARCHAR(20) NOT NULL,
//     product_type text NOT NULL,
//     price money NOT NULL,
//     nikeID VARCHAR(20) NOT NULL,
//     colorStyles text [] NOT NULL,
//     productPictures text ARRAY NOT NULL,
//     productDetails json NOT NULL,
//     availSizes json NOT NULL,
//     count int NOT NULL
// );`

const columns = `INSERT INTO products (
    name, gender, type, price, nikeID, colorStyles, productPictures, productDetails, availSizes, count)
    VALUES ('test1', 'test2', 'test3', 4.99, 'idtest', ARRAY ['one', 'two'], ARRAY ['three', 'four'], '{"weight": "test"}', '{"sizes": "test"}', 1);`;

async function execute() {
    try {
        await pool.connect();
        filestream.on('open', () => {
            filestream.pipe(pool.query(copyFrom('COPY products (product_name, gender, product_type, price, nikeID, colorStyles, productPictures, productDetails, availSizes, count) FROM STDIN')))
        })
    }
    catch (err) {
        console.log('error',err);
    }

}

execute()

// CREATE TABLE testtable (
//     id SERIAL NOT NULL PRIMARY KEY,
//         product_name text NOT NULL,
//         gender VARCHAR(20) NOT NULL,
//         product_type text NOT NULL,
//         price money NOT NULL,
//         nikeID VARCHAR(20) NOT NULL,
//         colorStyles text [] NOT NULL,
//         productPictures text ARRAY NOT NULL,
//         productDetails json NOT NULL,
//         availSizes json NOT NULL)
