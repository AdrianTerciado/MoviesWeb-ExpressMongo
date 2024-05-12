const Favorite = require("../models/mongo.model");

// CREATE
const addFavorite = async (req, res) => {
    try {
        const data = req.body;
        const response = await new Favorite(data).save();
        res.status(201).json(response);
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
    }
}

// READ
const getFavorites = async (req, res) => {
    try {
        let favorites = await Favorite.find({}, '-id, -__v');
        res.status(200).json(favorites);
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
    }
}

module.exports = {
    addFavorite,
    getFavorites
}