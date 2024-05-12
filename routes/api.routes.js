const router = require("express").Router();
const apiController = require('../controllers/api.controller');

// http://localhost:3000/api/
router.get('/', apiController.getFavorites);
router.post('/', apiController.addFavorite);

module.exports = router;