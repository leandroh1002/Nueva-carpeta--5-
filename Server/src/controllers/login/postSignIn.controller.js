const { People } = require("../../db.js");


const postSignInController = async (req, res) => {
    try {
        const peoples = await People.findAll({
            // include: Activity
        });

        res.status(200).json(peoples);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Hubo un error al procesar la solicitud" });
    }
};
module.exports = { postSignInController };