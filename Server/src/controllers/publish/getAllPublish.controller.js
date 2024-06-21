const { Publish, People, Carrer } = require("../../db.js");

const getAllPublishController = async (req, res) => {
    try {
        const publishes = await Publish.findAll({
            include: [
                {
                    model: People,
                    attributes: ['idPeople', 'fullName', 'aboutMe', 'yearsOfCarrer'],
                    include: [
                        {
                            model: Carrer,
                            attributes: ['idCarrer', 'name']
                        }
                    ]
                }
            ]
        });

        res.status(200).json(publishes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Hubo un error al procesar la solicitud" });
    }
};

module.exports = { getAllPublishController };
