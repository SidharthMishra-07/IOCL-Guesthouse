import e from "express";

export const createGuesthouse = async (req, res) => {
    const newGuesthouse = new Guesthouse(req.body);
    try {
        const savedGuesthouse = await newGuesthouse.save();
        res.status(200).json(savedGuesthouse);
    } catch(err) {
        next(err);
    }
}
export const updateGuesthouse = async (req, res) => {
    try {
        const updatedGuesthouse = await Guesthouse.findByIdAndUpdate(req.params.id,{ $set: req.body}, {new: true});
        res.status(200).json(updatedGuesthouse);
    } catch(err) {
        next(err);
    }
}
export const deleteGuesthouse = async (req, res) => {
    try{
        await Guesthouse.findByIdAndDelete(req.params.id);
        res.status(200).json("Guesthouse has been deleted...");
    } catch(err) {
        next(err);
    }
}
export const getGuesthouse = async (req, res) => {
    try{
        const guesthouse = await Guesthouse.findById(req.params.id);
        res.status(200).json(guesthouse);
    } catch(err) {
        next(err);
    }
}
export const getAllGuesthouse = async (req, res) => {
    try{
        const guesthouses = await Guesthouse.find();
        res.status(200).json(guesthouses);
    } catch(err) {
        next(err);
    }
}