const mongoose = require("mongoose");

mongoose
	.connect(process.env.MONGO_URI)
	.then((db) => console.log(`Connected to ${db.connection.name}`))
	.catch((e) => console.error(e));
