const { People } = require("../../db");

const putPeopleController = async (req, res) => {
  try {
    const { idPeople, fullName, aboutMe, phone, email, password, location, country, image, yearsOfCarrer, cv } = req.body;

    if (!idPeople) {
      return res.status(400).json({
        error: "El id del usuario es requerido.",
      });
    }
    if (!email || !password) {
      return res.status(400).json({
        error: "El mail y la contraseña son requeridos.",
      });
    }

    const person = await People.findByPk(idPeople);

    if (!person) {
      return res.status(404).json({ error: "Persona no encontrada." });
    }

    const updatedPerson = await person.update({
      fullName,
      aboutMe,
      phone: parseInt(phone, 10), 
      email,
      password,
      location,
      country,
      image,
      cv,
      yearsOfCarrer
    });

    res.status(200).json({ message: "Usuario actualizado exitosamente", person: updatedPerson });
  } catch (error) {
    console.error("Error en la actualización:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = { putPeopleController };
