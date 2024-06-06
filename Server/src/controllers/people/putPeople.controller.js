const { People } = require("../../db");

const putPeopleController = async (req, res) => {
  try {
    const { email, password, typeAdmin, yearsOfCarrer } = req.body;
    const [newCompany, created] = await People.findOrCreate({
      where: { name ,description, image, duration }
    });

    if (created) {
      res.status(201).json(newCompany);
    } else {
      res.status(200).json({ message: "La compañía ya existe", company: newCompany });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { putPeopleController };
