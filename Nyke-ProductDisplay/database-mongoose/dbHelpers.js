//import db
// const { Product } = require('./index')

// module.exports = {
//   getAll: ()=> Product.find({}),
//   getAllShoeSet: (name)=> Product.find({name: `${name}`}),
//   getOne: (nikeID) => Product.findOne({count: nikeID}),
//   postOne: (obj)=> Product.create({obj}),
//   deleteOne: (_id) => Product.destroy(_id),
//   updateShoe: (newObj, id) => {},
//   returnsku: (count) => Product.findOne({count: count})
// }

// const { MongoClient } = require('mongodb');
// const assert = require('assert');

// const url = 'mongodb://localhost:27017';

// MongoClient.connect((url, (err, client) => {
//   if (err) {
//     console.log('error connecting to mongo', err)
//   } 
//   assert.equal(null, err);
//   console.log("Connected successfully to server");
//   var mydb = client.db('nyke');
//   // var mong = mydb.collection('nykeshoes')
//   console.log('test', mydb)
// }))

const db = require('./');

module.exports = {
  getAll: ()=> shoes.then(y => y.find({})),
  // getAllShoeSet: (name)=> shoes.find({name: `${name}`}),
  getOne: (nikeID) => db('get', nikeID),
  postOne: (obj)=> shoes.then(y => y.create({obj})),
  deleteOne: (_id) => shoes.then( y=> y.destroy(_id)),
  updateShoe: (newObj, id) => {},
  returnsku: (count) => shoes.then(y => y.findOne({count: count}))
}
