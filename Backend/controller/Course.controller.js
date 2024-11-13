import Book from "../models/Course.model.js";


export const getcourse = async (req,res) => {
    try {
        const course = await Book.findOne({title:`${req.name}`})
        // const course = await Book.find()
        res.status(200).json(course)
    } catch (error) {
        console.log("error:",error);
        res.status(500).json(error)
    }
}