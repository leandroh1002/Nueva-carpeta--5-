import React from 'react'
import StoreItem from "../helpers/LocalStorage";


function Logout() {
    const tokenStorage = localStorage.getItem("token");//accede al token del localstorage
    console.log("tokenStorage", tokenStorage);
    localStorage.removeItem(StoreItem.passwordUser);
    localStorage.removeItem(StoreItem.email);
    localStorage.removeItem(StoreItem.fullName);
  return (
    <div>
        <button>Logout</button>
    </div>
  )
}

export default Logout