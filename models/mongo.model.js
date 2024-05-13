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
    },
    backdrop_path: { 
        type: String
    },
    overview: { 
        type: String
    },
    vote_average: { 
        type: String
    },

};

const productSchema = mongoose.Schema(objectSchema);

const Favorite = mongoose.model('Favorite', productSchema);

module.exports = Favorite;