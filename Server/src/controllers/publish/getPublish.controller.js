const { getPublishService } = require('../../services/people/getPeople.service.js');
const { Publish , People} = require("../../db.js");


const getPublishController = async (req, res) => {
    try {
        const publishes = await Publish.findAll({
            // include: Activity
        });

        res.status(200).json(publishes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Hubo un error al procesar la solicitud" });
    }
};
module.exports = { getPublishController };