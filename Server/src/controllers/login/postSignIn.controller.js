const { People } = require("../../db.js");

exports.postSignInController = async (req, res) => {
  console.log("Estoy en el signincontroller");

  try {
    const { fullName, email, password, typeAdmin } = req.body;

    // Verifica si se proporcionaron email, contraseña y fullName
    if (!fullName || !email || !password) {
      return res.status(400).json({
        error: "fullName, email y contraseña son requeridos.",
      });
    }

    console.log("Paso la verificación de usuario, email y contraseña");
    const existingUser = await People.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: "El correo electrónico ya está registrado." });
    }

    console.log("El correo electrónico no está registrado, procediendo con la creación del usuario");

    const adminStatus = typeAdmin !== undefined ? typeAdmin : false;

    // Crear el nuevo usuario en la base de datos
    const newUser = await People.create({
      fullName,
      email,
      password, // Almacena la contraseña sin hashear (¡No recomendado para producción!)
      typeAdmin: adminStatus,
    });
    
    console.log("Creó el usuario en la DB");

    // Devolver una respuesta exitosa sin token
    res.status(201).json({ message: "Usuario creado exitosamente", user: newUser });
  } catch (error) {
    console.error("Error en el registro:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
