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
//update
router.put("/:id", async (req, res) => {
    try {
        const updatedGuesthouse = await Guesthouse.findByIdAndUpdate(req.params.id,{ $set: req.body}, {new: true});
        res.status(200).json(updatedGuesthouse);
    } catch(err) {
        res.status(500).json(err);
    }
});
//delete
router.delete("/:id", async(req, res)=>{
    try{
        await Guesthouse.findByIdAndDelete(req.params.id);
        res.status(200).json("Guesthouse has been deleted...");
    } catch(err) {
        res.status(500).json(err);
    }
});
//get
router.get("/:id", async(req, res)=>{
    try{
        const guesthouse = await Guesthouse.findById(req.params.id);
        res.status(200).json(guesthouse);
    } catch(err) {
        res.status(500).json(err);
    }
});
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