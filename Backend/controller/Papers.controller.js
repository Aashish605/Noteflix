import Papers from "../models/Papers.model.js"

export const getpaper = async (req,res) => {
    try {
        const course = await Papers.findOne({title:`${req.name}`})
        res.status(200).json(course)
    } catch (error) {
        console.log(error);   
    }
}