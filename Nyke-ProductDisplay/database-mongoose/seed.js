var mongoose = require('mongoose');
const db = require('./index')
const data = require('./generatedData/parsedData')



db.create(data, (err) => {
  if(err){
      console.log(err);
  }
  else{
      console.log('Sample data inserted into database!');
  }
})






// NOTE: DO NOT invoke this function as part of your
// server code - it is meant to only be run once so that
// you have access to data to work with

//insertMockData()
//createProduct()






//Nike-zoom-black

// nike-zoom-pink
// https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/n2aj43jru2uemxzf7kxe/air-zoom-pegasus-36-womens-running-shoe-ksw5Hx.jpg
// https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/moo93xefvfwdczevq7gb/air-zoom-pegasus-36-womens-running-shoe-ksw5Hx.jpg
// https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/mqwkuzuzdni842lo0vr6/air-zoom-pegasus-36-womens-running-shoe-ksw5Hx.jpg
// https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/c18zt6wzkr1xpxmlyyog/air-zoom-pegasus-36-womens-running-shoe-ksw5Hx.jpg
// https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/v3pxdt6cgxrggudebdeh/air-zoom-pegasus-36-womens-running-shoe-ksw5Hx.jpg
// https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/eudkesttujgt6t8ikhbi/air-zoom-pegasus-36-womens-running-shoe-ksw5Hx.jpg












