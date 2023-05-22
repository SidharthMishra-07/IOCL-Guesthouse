import express from "express";
import Guesthouse from "../models/Guest.js";

const router = express.Router();

//create
router.post("/", async (req, res) => {
    const newGuesthouse = new Guesthouse(req.body);
    try {
        const savedGuesthouse = await newGuesthouse.save();
        res.status(200).json(savedGuesthouse);
    } catch(err) {
        res.status(500).json(err);
    }
});
export default router