const { json } = require("body-parser");
const express = require("express");
const Dbconnect = require("./Dbconnect/dbConnect")
const MovieSchema = require("./Schema/movieSchema")
require("dotenv").config();
const app = express();
const port = process.env.port;
const cors = require("cors");
app.use(cors());
const path = require("path");
const { log } = require("console");
const { generatePrimeSync } = require("crypto");


app.use(express.json());


// // Serve static files (images)
// app.use("/assets", express.static(path.join(__dirname, "assets")));

// Define a route to serve images
app.use('/images', express.static(path.join(__dirname, 'assert')));

app.get("/",async(req,res)=>{
    const data = await MovieSchema.find();
    res.send(data);
})

app.get("/movie/:id",async(req,res)=>{
    const data = await MovieSchema.findById(req.params.id);
    res.send(data);
})

app.get("/language/:language", async (req, res) => {
    const language = req.params.language;
    try {
        const movies = await MovieSchema.find({ language });
        res.json(movies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post("/",async(req,res)=>{
    const {movieName , movieDescription , language , releaseDate , movieImage , category , rating , ottPlatform , cast , genre , duration} = req.body;
    const newData = new MovieSchema({movieName , movieDescription , language , releaseDate , movieImage , category , rating , ottPlatform , cast , genre , duration});
    newData.save();
    res.json(newData)
    console.log("successfully add");
})




app.post("/", async (req, res) => {
    // Destructure the request body
    const { movieName, movieDescription, language, releaseDate, movieImage, category, rating, ottPlatform, cast, genre, duration } = req.body;

    const genreArray = typeof genre === 'string' ? genre.split(',') : genre;

    const newData = new MovieSchema({
        movieName,
        movieDescription,
        language,
        releaseDate,
        movieImage,
        category,
        rating,
        ottPlatform,
        cast,
        genre: genreArray,
        duration
    });
    newData.save();

    res.json(newData);
    console.log("Successfully added:", newData);
});



app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});

