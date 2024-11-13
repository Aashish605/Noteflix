import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    tilte:String,
    data:Array
})

const Book = mongoose.model("Course",bookSchema)

export default Book ;