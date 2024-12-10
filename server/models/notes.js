const mongoose = require('mongoose');

const NotesSchema = new mongoose.Schema({
    img: String,
    comment: String
})

const NotesModel = mongoose.model("notes", NotesSchema);
module.exports = NotesModel;