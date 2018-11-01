'use strict'

var config = {
	port: process.env.PORT || 2000,
	db: process.env.MONGOLAB_URI || "mongodb://localhost:27017/Mongo_TestDB",
	test_port: 2001,
	test_db: "mongodb://localhost/Mongo_TestDB"
}
module.exports = config;