const { People } = require("../../db.js");
const jwt = require("jsonwebtoken")

exports.postLogInController = async (req, res) => {
  const { email, password } = req.body;
  console.log("Entre a login");

  try {
    // Verificar si el usuario proporcionó email y contraseña
    if (!email || !password) {
      return res.status(400).json({ error: "Email y contraseña son requeridos." });
    }

    // Buscar el usuario por email
    const user = await People.findOne({ where: { email } });
    console.log("user", user);
    console.log("People", People);

    // Verificar si el usuario existe
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado. Por favor, regístrese." });
    }

    // Verificar la contraseña
    if (password !== user.password) {
      return res.status(401).json({ error: "Contraseña incorrecta." });
    }

    // Generar el token JWT
    const token = jwt.sign(
      { idPeople: user.idPeople, fullName: user.fullName,email: user.email, typeAdmin: user.typeAdmin },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // En lugar de generar un token, puedes devolver una respuesta indicando el éxito del inicio de sesión
    res.status(200).json({ message: "Inicio de sesión exitoso", token });
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
