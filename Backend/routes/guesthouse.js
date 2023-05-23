import express from "express";
import Guesthouse from "../models/Guest.js";
import { countByCity, countByType, createGuesthouse, deleteGuesthouse, getAllGuesthouse, getGuestRooms, getGuesthouse, updateGuesthouse } from "../controllers/guesthouse_controller.js";
import {verifyAdmin} from "../utils/verifyToken.js"

const router = express.Router();

//create
router.post("/", verifyAdmin, createGuesthouse);

//update
router.put("/:id", verifyAdmin, updateGuesthouse);

//delete
router.delete("/:id", verifyAdmin, deleteGuesthouse);

//get
router.get("/find/:id", getGuesthouse);

//get all
router.get("/", getAllGuesthouse);

router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getGuestRooms);

export default router