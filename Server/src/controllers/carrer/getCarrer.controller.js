const { Carrer } = require("../../db.js");

const getCarrerController = async (req, res) => {
    try {
        const carrers = await Carrer.findAll({
            // include: Activity
        });

        res.status(200).json(carrers);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Hubo un error al procesar la solicitud" });
    }
};
module.exports = { getCarrerController };