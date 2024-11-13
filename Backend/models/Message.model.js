import mongoose from 'mongoose';

const messageSchema = mongoose.Schema({
    name:String,
    email:String,
    message:String
})

const Message = mongoose.model("Message",messageSchema)

export default Message;