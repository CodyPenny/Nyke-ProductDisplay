const mongoose = require('mongoose');
const productSchema = require('./schema')

mongoose.Promise = global.Promise;
//need to seed DB
mongoose.connect('mongodb://localhost/nykeproducts', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('DATABASE ON'.red)
});

var Product = mongoose.model('Product', productSchema);

module.exports = Product
