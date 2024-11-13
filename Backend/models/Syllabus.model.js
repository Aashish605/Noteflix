import mongoose from "mongoose";

const syllabusSchema = mongoose.Schema({
    title : String,
    data : Array
})

const Syllabus = mongoose.model("Syllabus",syllabusSchema)

export  default Syllabus