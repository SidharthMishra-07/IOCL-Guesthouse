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
        const guesthouses = await Guesthouse.find(req.query).limit(req.query.limit);
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
      const onebedCount = await Guesthouse.countDocuments({ type: "1Bed" });
      const twobedCount = await Guesthouse.countDocuments({ type: "2Bed" });
      const executiveCount = await Guesthouse.countDocuments({ type: "Executive" });
      const suiteCount = await Guesthouse.countDocuments({ type: "Suite" });
  
      res.status(200).json([
        { type: "1Bed", count: onebedCount },
        { type: "2Bed", count: twobedCount },
        { type: "Executive", count: executiveCount },
        { type: "Suite", count: suiteCount },
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