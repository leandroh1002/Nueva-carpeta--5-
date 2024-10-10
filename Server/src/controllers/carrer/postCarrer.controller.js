const { Carrer } = require("../../db");

const postCarrerController = async (req, res) => {
  try {
    const { name, description, department, duration } = req.body;
    const [newCarrer, created] = await Carrer.findOrCreate({
      where: { name ,description, department, duration }
    });

    if (created) {
      res.status(201).json(newCarrer);
    } else {
      res.status(200).json({ message: "La carrera ya existe", company: newCarrer });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { postCarrerController };
