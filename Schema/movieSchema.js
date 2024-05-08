const mongoose = require("mongoose");
const CastSchema = require("./castSchema");

const MovieSchema = new mongoose.Schema({
    movieName: {
        type: String,
        required: true,
        unique: true
    },
    movieDescription: {
        type: String,
        required: true
    },
    language:{
        type: String,
        required: true
    },
    releaseDate:{
        type:String,
        required: true
    },
    movieImage: {
        type: String,
        required: true
    },
    category: {
        type:String,
        required:true
    },
    rating: {
        type:String,
        required:true
    },
    ottPlatform: {
        type:String,
        required:true
    },
    cast: {
        type: CastSchema,
        required: true
    },
    genre: {
        type: [String],
        required:true
    },
    duration:{
        type:String,
        required:true
    }
})

const Movie = mongoose.model("Movie", MovieSchema);
module.exports = Movie;