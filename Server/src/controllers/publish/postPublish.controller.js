const { Router } = require("express");
const { Publish } = require("../../db");
const router = Router();

const postPublishController = async (req, res) => {
  try {
    const { Nombre, Dificultad, Duracion, Temporada, Carrer, Companies } = req.body;
    const [newPublish, created] = await Publish.findOrCreate({
      where: {
        Nombre, Dificultad, Duracion, Temporada
      }
    });

    if (created) {
      await Promise.all(Carrer.map(async carrers => await newPublish.addCountry(carrers)));
    }

    res.status(201).json(newPublish);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {postPublishController};
