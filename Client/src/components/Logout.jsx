import React from 'react';
import { useNavigate } from 'react-router-dom';
import PATHROUTES from '../helpers/PathRoutes.helper'; // Asumiendo que PATHROUTES es un objeto o archivo con las rutas

function Logout() {
  const navigate = useNavigate();
  console.log(PATHROUTES.LANDING);

  const handleLogout = async () => {
    console.log("inicio del deslogueo")
    // try {
    //   localStorage.clear(); // Limpiar el almacenamiento local
    //   console.log("por direccionar");
    //   await navigate(PATHROUTES.LANDING); // Navegar a la ruta de landing después de limpiar
    //   console.log("direccionado correctamente");
    // } catch (error) {
    //   console.error('Error al intentar cerrar sesión:', error);
    //   // Manejar cualquier error que ocurra durante la navegación
    // }
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
