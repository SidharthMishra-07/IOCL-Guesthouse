import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import { createRoom, updateRoom, deleteRoom, getRoom, getAllRoom, updateRoomAvailability } from "../controllers/rooms_controller.js";

const router = express.Router();
//Create
router.post("/:guestId", verifyAdmin, createRoom);

//Update
router.put("/availability/:id", updateRoomAvailability);
router.put("/:id", verifyAdmin, updateRoom);

//Delete
router.delete("/:id/:guestId", verifyAdmin, deleteRoom);

//Get
router.get("/:id", verifyAdmin, getRoom);

//GetAll
router.get("/", verifyAdmin, getAllRoom);

export default router