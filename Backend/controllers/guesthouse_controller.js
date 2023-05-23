import Guesthouse from "../models/Guest.js";

export const createGuesthouse = async (req, res, next) => {
    const newGuesthouse = new Guesthouse(req.body);
    try {
        const savedGuesthouse = await newGuesthouse.save();
        res.status(200).json(savedGuesthouse);
    } catch(err) {
        next(err);
    }
}
export const updateGuesthouse = async (req, res, next) => {
    try {
        const updatedGuesthouse = await Guesthouse.findByIdAndUpdate(req.params.id,{ $set: req.body}, {new: true});
        res.status(200).json(updatedGuesthouse);
    } catch(err) {
        next(err);
    }
}
export const deleteGuesthouse = async (req, res, next) => {
    try{
        await Guesthouse.findByIdAndDelete(req.params.id);
        res.status(200).json("Guesthouse has been deleted...");
    } catch(err) {
        next(err);
    }
}
export const getGuesthouse = async (req, res, next) => {
    try{
        const guesthouse = await Guesthouse.findById(req.params.id);
        res.status(200).json(guesthouse);
    } catch(err) {
        next(err);
    }
}
export const getAllGuesthouse = async (req, res, next) => {
    try{
        const guesthouses = await Guesthouse.find();
        res.status(200).json(guesthouses);
    } catch(err) {
        next(err);
    }
}