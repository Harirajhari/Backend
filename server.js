const { json } = require("body-parser");
const express = require("express");
const Dbconnect = require("./Dbconnect/dbConnect")
const MovieSchema = require("./Schema/movieSchema")
require("dotenv").config();
const app = express();
const port = process.env.port;

app.use(express.json());


app.get("/",async(req,res)=>{
    const data = await MovieSchema.find();
    res.send(data);
})

app.post("/",async(req,res)=>{
    const {movieName , movieDescription , language , releaseDate , movieImage , category , rating , ottPlatform , cast , genre , duration} = req.body;
    const newData = new MovieSchema({movieName , movieDescription , language , releaseDate , movieImage , category , rating , ottPlatform , cast , genre , duration});
    newData.save();
    res.json(newData)
    console.log("successfully add");
})


app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});

