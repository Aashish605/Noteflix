import { getpaper    } from "../controller/Papers.controller.js";
import express from "express"

const router = express.Router()

router.get("/",getpaper)

export default router;