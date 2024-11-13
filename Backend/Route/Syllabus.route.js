import { getSyllabus } from "../controller/Syllabus.controller.js";

import express from "express";


const router = express.Router()

router.get("/",getSyllabus)

export default router