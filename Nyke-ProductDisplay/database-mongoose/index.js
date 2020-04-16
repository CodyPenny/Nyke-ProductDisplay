// commenting out mongoose connection
// const mongoose = require('mongoose');
// const productSchema = require('./schema')

// mongoose.Promise = global.Promise;
// //need to seed DB
// mongoose.connect('mongodb://localhost/nyke', {
//   useUnifiedTopology: true,
//   useNewUrlParser: true,
// });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.on('connected', ()=> {
//   console.log('connected on mongoose');
// })

// var Product = mongoose.model('nykeshoes', productSchema);

//mongo

const { MongoClient } = require('mongodb');

module.exports = async (method, target) => {
  
  //config for ec2

  const mongopath ="ip-172-31-3-141.us-west-1.compute.internal:27017";

  const URI = `mongodb://${mongopath}/nyke`;

  let options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  };
  try {
    let connection = await MongoClient.connect(URI, options);
    let db = connection.db('nyke');
    var mydb = db.collection('nykeproducts'); // Collection object
   
    if (method === 'get') {
      // console.log('searching', target)
      return await mydb.findOne({nikeID: Number(target)})
    }
    if (method === 'post') {
      return await mydb.create({target})
    }
    if (method === 'delete') {
      return await mydb.deleteOne({nikeID: Number(target)})
    }
  
  } catch (err) {
    console.log('error connecting to mongo', err)
  }
  // finally {
  //   console.log('closing')
  //   connection.close();
  // }

}




