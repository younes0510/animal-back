const Animal = require('../models/Animal') ;

exports.getAnimals = async (req,res) => {
    const animals = await Animal.find();
    return res.json(animals);
};



exports.getAnimal = async (req, res) => {
    const animal = await Animal.findById(req.params.id);
    return animal ? res.json(animal) : res.status(404).json({ message: "Animal not found" });
};

exports.createAnimal = async (req, res) => {
    const animal = await Animal.create({
        name: req.body.name,
        birthdate: req.body.birthdate,
        type: req.body.type,
        image: req.body.image,
        description: req.body.description,
        gender: req.body.gender,
    });
    return res.json(animal);
};

exports.updateAnimal = async (req, res) => {
    const animal = await Animal.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        birthdate: req.body.birthdate,
        type: req.body.type,
        image: req.body.image,
        description: req.body.description,
        gender: req.body.gender,
    }, { new: true });
    return animal ? res.json(animal) : res.status(404).json({ message: "animal not found" });
};

exports.deleteAnimal = async (req, res) => {
    await Animal.findByIdAndDelete(req.params.id);
    return res.json({ message: "Animal deleted successfully" });
};