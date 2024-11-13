import { getcourse } from "../controller/Course.controller.js";
import express from "express";

const router = express.Router();

router.get('/',getcourse)

export default router;

