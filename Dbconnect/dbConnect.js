const mongoose = require("mongoose");
require("dotenv").config();
const  DbConnect = process.env.DbConnect;
const dbConnect = mongoose.connect(DbConnect);

dbConnect.then(() => {
    console.log("Successfully connected DB...");
});

module.exports = dbConnect;