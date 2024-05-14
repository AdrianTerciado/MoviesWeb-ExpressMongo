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
const getAllFavorites = async (req, res) => {

    let favorites = [];
    const pagination = req.query.hasOwnProperty('page') && req.query.hasOwnProperty('limit');

    try {
        if (pagination) {
            const page = parseInt(req.query.page);
            const limit = parseInt(req.query.limit);
            const skipIndex = (page - 1) * limit;

            favorites = await Favorite.find({}, '-id, -__v')
                .sort({ _id: 1 })
                .limit(limit)
                .skip(skipIndex)
                .exec();

            let totalCount = await Favorite.countDocuments();
            
            let result = {favorites,
                        "total": totalCount}

            res.status(200).json(result);
        } else {
            products = await Product.find({}, ' -_id -__v');
            res.status(200).json(products);
        }
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
    }
}

const deleteFavorite = async (req, res) => {
    try {
        const id = req.body;
        await Anuncio.deleteOne({ id });
        res.status(200).send("Pelicula borrada de favoritos");
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
    }
}

module.exports = {
    addFavorite,
    getAllFavorites,
    deleteFavorite
}