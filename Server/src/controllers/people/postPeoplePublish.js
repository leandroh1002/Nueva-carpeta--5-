const { People, Publish } = require("../../db.js");

const postPeoplePublish = async (req, res) => {
  console.log("Estoy en el signincontroller");

  try {
    const { idPeople, value } = req.body;

    if (!idPeople || !value ) {
      return res.status(400).json({
        error: "Todos los campos son requeridos.",
      });
    }

    const publish = await Publish.findByPk(value);
    if (!publish) {
      return res.status(404).json({ error: "Publicacion not found." });
    }
    const people = await People.findByPk(idPeople);
    if (!people) {
      return res.status(404).json({ error: "Persona not found." });
    }

    await publish.addPerson(people); 
    
    res.status(201).json({ message: "Usuario creado exitosamente" });
  } catch (error) {
    console.error("Error en el registro:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { postPeoplePublish };