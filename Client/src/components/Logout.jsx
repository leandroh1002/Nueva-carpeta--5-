import React from 'react'
import { useNavigate } from 'react-router-dom';
import PATHROUTES from '../helpers/PathRoutes.helper';


function Logout() {
  const navigate = useNavigate()

  const handleLogout = () =>{
    localStorage.clear();
    navigate(PATHROUTES.LANDING);
  }

  return (
    <div>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout