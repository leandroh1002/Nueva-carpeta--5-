const { People, Carrer } = require("../../db.js");
const jwt = require("jsonwebtoken");

exports.postLogInController = async (req, res) => {
  const { email, password } = req.body;
  console.log("Entre a login");

  try {
    // Verificar si el usuario proporcionó email y contraseña
    if (!email || !password) {
      return res.status(400).json({ error: "Email y contraseña son requeridos." });
    }

    // Buscar el usuario por email
    const user = await People.findOne({
      where: { email },
      include: [
        {
          model: Carrer,
          attributes: ['idCarrer', 'name']
        }
      ]
    });

    console.log("user", user);

    // Verificar si el usuario existe
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado. Por favor, regístrese." });
    }

    // Verificar la contraseña
    if (password !== user.password) {
      return res.status(401).json({ error: "Contraseña incorrecta." });
    }

    // Obtener idCarrer si el usuario es un alumno
    const idCarrer = user.Carrers && user.Carrers.length > 0 ? user.Carrers[0].idCarrer : null;

    // Generar el token JWT
    const tokenPayload = {
      idPeople: user.idPeople,
      fullName: user.fullName,
      email: user.email,
      typeAdmin: user.typeAdmin,
      idCarrer: idCarrer
    };

    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, { expiresIn: "1h" });

    // Devolver el token y un mensaje de éxito
    return res.status(200).json({ message: "Inicio de sesión exitoso", token });
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};
