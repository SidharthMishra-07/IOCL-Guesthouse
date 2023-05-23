import express from "express";
import Guesthouse from "../models/Guest.js";
import { createGuesthouse, deleteGuesthouse, getAllGuesthouse, getGuesthouse, updateGuesthouse } from "../controllers/guesthouse_controller.js";
import {verifyAdmin} from "../utils/verifyToken.js"

const router = express.Router();

//create
router.post("/", verifyAdmin, createGuesthouse);

//update
router.put("/:id", verifyAdmin, updateGuesthouse);

//delete
router.delete("/:id", verifyAdmin, deleteGuesthouse);

//get
router.get("/:id", getGuesthouse);

//get all
router.get("/", getAllGuesthouse);

export default router