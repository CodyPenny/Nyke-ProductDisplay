const router = require("express").Router();
const controller = require("../controllers");
// middleware that is specific to this router

// router.use(function timeLog(req, res, next) {
// 	console.log(`Time: `.green, `${Date.now()}`.green);
// 	next();
// });

router.route("/shoe")
	.post(controller.createItem)
// Nick's route
router.route("/shoe/:nikeID")
	.get(controller.getOneShoe)
	.delete(controller.deleteOne)

// router.route('/test/:count')
// 	.get(controller.getsku)


//Nick's route that fires after getting id
// router.route("/shoes/:name")
// 	.get(controller.getShoes);




module.exports = router;
