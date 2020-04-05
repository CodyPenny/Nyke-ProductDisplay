//import db
const db = require('./index')

module.exports = {
  getAll: ()=> db.find({}),
  getAllShoeSet: (name)=> db.find({name: `${name}`}),
  getOne: (nikeID) => db.findOne({nikeID: nikeID}),
  postOne: (obj)=> db.create({obj}),
  deleteOne: (_id) => db.destroy(_id),
  updateShoe: (newObj, id) => {}
}