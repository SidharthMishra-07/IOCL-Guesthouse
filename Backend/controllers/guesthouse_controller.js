import Guesthouse from "../models/Guest.js";
import Room from "../models/Room.js";

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
export const countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",");
    try {
      const list = await Promise.all(
        cities.map((city) => {
          return Guesthouse.countDocuments({ city: city });
        })
      );
      res.status(200).json(list);
    } catch (err) {
      next(err);
    }
};

export const countByType = async (req, res, next) => {
    try {
      const apartmentCount = await Guesthouse.countDocuments({ type: "apartment" });
      const resortCount = await Guesthouse.countDocuments({ type: "resort" });
      const villaCount = await Guesthouse.countDocuments({ type: "villa" });
      const cabinCount = await Guesthouse.countDocuments({ type: "cabin" });
  
      res.status(200).json([
        { type: "apartments", count: apartmentCount },
        { type: "resorts", count: resortCount },
        { type: "villas", count: villaCount },
        { type: "cabins", count: cabinCount },
      ]);
    } catch (err) {
      next(err);
    }
};

export const getGuestRooms = async (req, res, next) => {
    try {
      const guesth = await Guesthouse.findById(req.params.id);
      const list = await Promise.all(
        guesth.rooms.map((room) => {
          return Room.findById(room);
        })
      );
      res.status(200).json(list)
    } catch (err) {
      next(err);
    }
};