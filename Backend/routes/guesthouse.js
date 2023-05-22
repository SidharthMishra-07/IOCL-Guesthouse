import express from "express";
import Guesthouse from "../models/Guest.js";
import { createGuesthouse, deleteGuesthouse, getAllGuesthouse, getGuesthouse, updateGuesthouse } from "../controllers/guesthouse_Controller.js";

const router = express.Router();

//create
router.post("/", createGuesthouse);

//update
router.put("/:id", updateGuesthouse);

//delete
router.delete("/:id", deleteGuesthouse);

//get
router.get("/:id", getGuesthouse);

//get all
router.get("/", getAllGuesthouse);

export default router