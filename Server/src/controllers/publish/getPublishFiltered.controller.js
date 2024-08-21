const { Publish, Companies, Carrer, People } = require("../../db");

const getPublishFiltered = async (req, res) => {
  const { idCarrer } = req.params;
    try {
        const filteredPublishes = await Publish.findAll({
            where: { isDeleted: false },
            include: [{
                model: Carrer,
                where: { idCarrer },
            }]
        });

        if (filteredPublishes.length === 0) {
            return res.status(404).json({ message: 'No se encontraron publicaciones con esa carrera' });
        }

        res.status(200).json(filteredPublishes);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las publicaciones' });
    }
};

module.exports = { getPublishFiltered };
