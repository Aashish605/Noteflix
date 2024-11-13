import Syllabus from "../models/Syllabus.model.js"

export const getSyllabus = async (req,res) => {
    try {
        console.log(req.name);
        const data = await Syllabus.findOne({title:`${req.name}`})
        res.status(200).json(data)
    } catch (error) {
        console.log(error);
    }
}