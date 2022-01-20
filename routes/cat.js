var express = require("express");
var router = express.Router();
const Cat = require("../models/Cat");

/* GET users listing. */
router.get("/", function (req, res, next) {
	res.render("create-cat");
});

router.post("/", async (req, res, next) => {
	await Cat.create(req.body);
	res.redirect("/");
});

module.exports = router;
