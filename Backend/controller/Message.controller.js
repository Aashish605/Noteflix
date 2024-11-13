import Message from "../models/Message.model.js"

export const createMessage = async (req,res) => {
    try {
        const user  = await new Message({ name: 'John Doe', email: 'john.doe@example.com', message : "hi"})
        user.save()
    } catch (error) {
        console.log(error);
    }
}
