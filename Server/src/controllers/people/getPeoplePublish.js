const { People, Publish } = require("../../db");

const getPeoplePublish = async (req, res) => {
  const { idPeople } = req.params;

  try {
    const people = await People.findOne({
      where: { idPeople: idPeople },
      include: [
        {
            model: Publish,
            attributes: ['idPublish']
        }
    ]
    });

    return people ? res.status(200).json(people) : res.status(404).json({ message: 'Persona no encontrada.' });
    
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = { getPeoplePublish };
