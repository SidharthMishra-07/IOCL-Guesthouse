import express from "express";
import Guesthouse from "../models/Guest.js";
import { createGuesthouse, deleteGuesthouse, getGuesthouse, updateGuesthouse } from "../controllers/guesthouse_Controller.js";

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
router.get("/", async(req, res, next)=>{
    try{
        const guesthouses = await Guesthouse.find();
        res.status(200).json(guesthouses);
    } catch(err) {
        next(err);
    }
});

export default router