const { Publish, Companies, Carrer } = require("../../db.js");

const getPublishController = async (req, res) => {
    try {
        const publishes = await Publish.findAll({
            include: [
                {
                    model: Companies,
                    attributes: ['idCompanies', 'name', 'description', 'image', 'duration']
                },
                {
                    model: Carrer,
                    attributes: ['idCarrer', 'name', 'description', 'duration']
                }
            ]
        });

        res.status(200).json(publishes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Hubo un error al procesar la solicitud" });
    }
};

module.exports = { getPublishController };
