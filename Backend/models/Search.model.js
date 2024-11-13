import mongoose from "mongoose";

const searchSchema = mongoose.Schema({
    title: String,
    section : String,
    data : Array
})

const Search = mongoose.model("search",searchSchema);

export default Search;