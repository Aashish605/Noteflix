import Search from "../models/Search.model.js";

export const getSerach = async (req, res) => { 
try {
    const resonse = await Search.find()
    res.status(200).json(resonse)
} catch (error) {
    console.log(error);
}
}

