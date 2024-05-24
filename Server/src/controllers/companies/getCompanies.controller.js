const { Companies } = require("../../db.js");

const getCompaniesController = async (req, res) => {
    try {
        const company = await Companies.findAll({
            // include: Activity
        });

        res.status(200).json(company);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Hubo un error al procesar la solicitud" });
    }
};
module.exports = { getCompaniesController };