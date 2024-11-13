import { getSerach } from "../controller/Search.controller.js";

import express from "express";

const router = express.Router()

router.get("/",getSerach)

export default router