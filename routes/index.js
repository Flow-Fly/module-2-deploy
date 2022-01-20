var express = require("express");
const Cat = require("../models/Cat");
var router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
	res.render("index", {
		cats: await Cat.find(),
	});
});

module.exports = router;
