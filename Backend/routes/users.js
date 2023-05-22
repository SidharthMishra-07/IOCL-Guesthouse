import express from "express";
import { deleteUser, getAllUsers, getUser, updateUser } from "../controllers/user_Controller.js";

const router = express.Router();

//update
router.put("/:id", updateUser);

//delete
router.delete("/:id", deleteUser);

//get
router.get("/:id", getUser);

//get all
router.get("/", getAllUsers);

export default router