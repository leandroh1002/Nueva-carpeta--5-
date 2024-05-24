const { Companies } = require("../../db");

const postCompaniesController = async (req, res) => {
  try {
    const { name, description, image, duration } = req.body;
    const [newCompany, created] = await Companies.findOrCreate({
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

module.exports = { postCompaniesController };
