const mongoose = require('mongoose');
require('../config/db_mongo');

const objectSchema = {
    id: { 
        type: Number, 
        required: true,
        unique: true
    },
    title: { 
        type: String, 
        required: true
    },
    poster_path: { 
        type: String
    },
    release_date: { 
        type: String, 
        required: true 
    }
};

/* {
    "id": 1,
    "title": "Hombres de Honor",
    "poster_path": "/wNUAnXV1mzOOfvnVBIYsalkk078.jpg",
    "release_date": "2000-09-13"
} */

const productSchema = mongoose.Schema(objectSchema);

const Favorite = mongoose.model('Favorite', productSchema);

module.exports = Favorite;