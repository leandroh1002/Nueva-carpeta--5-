const { Router } = require("express");
const { Publish, Carrer, Companies } = require("../../db");
const router = Router();

const postPublishController = async (req, res) => {
  try {
    const { namePublish, description, task, perfil, location, offer, requirement, idCarrer, idCompany} = req.body;

    // Busca las instancias de Carrer y Company por sus IDs
    const carrer = await Carrer.findByPk(idCarrer);
    const company = await Companies.findByPk(idCompany);

    // Verifica si las instancias de Carrer y Company existen
    if (!carrer || !company) {
      return res.status(404).json({ error: "Carrer or Company not found." });
    }

    // Crea la nueva publicación y establece las relaciones con Carrer y Company
    const newPublish = await Publish.create({
      namePublish,
      description,
      task,
      perfil,
      location,
      offer,
      requirement
    });
    await newPublish.addCarrer(carrer);
    await newPublish.addCompany(company);

    res.status(201).json(newPublish);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { postPublishController };
