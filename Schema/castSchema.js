const mongoose = require("mongoose");

const castSchema = new mongoose.Schema({
    director: {
        type : String,
        required : true
    },
    writer: {
        type: String,
        required : true
    },
    actor: {
        type: String,
        required : true
    },
    actress: {
        type: String,
        required : true
    }

})