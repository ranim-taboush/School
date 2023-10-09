const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
    title: { type: String, required: [true, "title is required"], trim: true, unique: true },
    description: { type: String, required: [true, "description is required"], trim: true },
    chapters: [
        { type: mongoose.Types.ObjectId, ref: 'Chapter' }
    ],
    semester: { type: mongoose.Types.ObjectId, ref: 'Semester', required: [true, "semester id is required"] }
})

const Subject = mongoose.model("Subject", subjectSchema)
module.exports = Subject;