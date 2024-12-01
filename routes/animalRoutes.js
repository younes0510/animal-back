const express = require('express');

const animalControllers = require('../controllers/animalControllers');

const router = express.Router();


router.get('/animals', animalControllers.getAnimals);
router.post('/animals', animalControllers.createAnimal);
router.get('/animals/:id', animalControllers.getAnimal);
router.put('/animals/:id', animalControllers.updateAnimal);
router.delete('/animals/:id', animalControllers.deleteAnimal);


module.exports = router;