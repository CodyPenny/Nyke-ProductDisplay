const router = require("express").Router();
const controller = require("../controllers");
// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
	console.log(`Time: `.green, `${Date.now()}`.green);
	next();
});



//get shoe by ID
router.route("/shoe/:nikeID").get(controller.getOneShoe)

//get shoeset by name
router.route("/shoes/:name").get(controller.getShoes);




module.exports = router;
