const mongoose = require("mongoose");

const chapterSchema = new mongoose.Schema({
    title: { type: String, required: [true, "title is required"], trim: true, unique: true },
    description: { type: String, required: [true, "description is required"], trim: true },
    files: { type: [String], default: [] },
    desc: { type: String, trim: true, required: [true, "description id is required"] },
    subject: { type: mongoose.Types.ObjectId, ref: 'Subject', required: [true, "subject id is required"] },
},
    {
        timestamps: true
    })

const Chapter = mongoose.model("Chapter", chapterSchema)
module.exports = Chapter;