const mongoose = require("mongoose");

const chapterSchema = new mongoose.Schema({
    title: { type: String, required: [true, "title is required"], trim: true, unique: true },
    numberOfFiles: { type: Number, default: 0, },
    files: { type: [String], default: [] },
    subject: { type: mongoose.Types.ObjectId, ref: 'Subject', required: [true, "subject id is required"] } 
})
 
const Chapter = mongoose.model("Chapter", chapterSchema)
module.exports = Chapter;