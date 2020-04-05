const router = require("express").Router();
const controller = require("../controllers");
// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
	console.log(`Time: `.green, `${Date.now()}`.green);
	next();
});

router.route("/shoe")
	.post(controller.createItem)
	
router.route("/shoe/:nikeID")
	.get(controller.getOneShoe)
	.delete(controller.deleteOne)


//get shoeset by name
router.route("/shoes/:name").get(controller.getShoes);




module.exports = router;
