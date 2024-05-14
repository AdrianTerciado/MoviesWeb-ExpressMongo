const router = require("express").Router();
const apiController = require('../controllers/api.controller');

// http://localhost:3000/api/
router.get('/', apiController.getAllFavorites);
router.post('/', apiController.addFavorite);
router.delete('/:id', apiController.deleteFavorite);

module.exports = router;