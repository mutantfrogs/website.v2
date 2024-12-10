const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const NotesModel = require('./models/notes')
require("dotenv").config();
const uri = process.env.DATABASE_URI;

const app = express();
app.use(cors());
app.use(express.json())

mongoose.connect(uri)
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch(err => console.error("Error connecting to MongoDB:", err));

app.post("/uploadNote", (req, res) => {
    NotesModel.create(req.body)
        .then(() => {
            res.status(200).send("Note uploaded successfully");
        })
        .catch(err => {
            console.error("Error uploading note:", err);
            res.status(500).send("Error saving note to the database");
        });
});

app.get("/getNotes", (req, res) => {
    NotesModel.find() 
        .then(notes => {
            res.status(200).json(notes);
        })
        .catch(err => {
            console.error("Error retrieving notes:", err);
            res.status(500).send("Error retrieving notes from the database");
        });
});

app.listen(3001, () => {
    console.log("Server started on port 3001")
})
