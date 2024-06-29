const { People, Carrer } = require("../../db.js");


const getPeopleController = async (req, res) => {
    try {
        const peoples = await People.findAll({
            include: Carrer
        });

        res.status(200).json(peoples);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Hubo un error al procesar la solicitud" });
    }
};
module.exports = { getPeopleController };