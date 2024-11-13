import mongoose from "mongoose";

const paperSchema = mongoose.Schema({
    title:String,
    data:Array
})

const Papers = mongoose.model("pastpaper",paperSchema)

export default Papers