const { Publish, Companies, Carrer } = require("../../db");

const getPublishIdController = async (req, res) => {
  const { idPublish } = req.params;

  try {
    const publishes = await Publish.findOne({
      where: { idPublish: idPublish },
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

    return publishes ? res.status(200).json(publishes) : res.status(404).json({ message: 'País no encontrado.' });
    
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = { getPublishIdController };
