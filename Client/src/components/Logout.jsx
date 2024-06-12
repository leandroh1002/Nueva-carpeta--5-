import React from 'react'
import StoreItem from "../helpers/LocalStorage";


function Logout() {
    const tokenStorage = localStorage.getItem("token");//accede al token del localstorage
    console.log("tokenStorage", tokenStorage);
    localStorage.removeItem(StoreItem.passwordUser);
    // localStorage.removeItem(StoreItem.email);
    // localStorage.removeItem(StoreItem.fullName);
    // localStorage.removeItem(StoreItem.token);
    // localStorage.removeItem(StoreItem.idPeople);
    // localStorage.removeItem(StoreItem.isProvider);
    // localStorage.setItem(StoreItem.hola, "aqui estoy");
  return (
    <div>
        <button>Logout</button>
    </div>
  )
}

export default Logout