import axios from 'axios';
import React from 'react'
import { useSelector } from 'react-redux';
const REACT_APP_API_URL = import.meta.env.VITE_BASE_URL;

function ButtonApply({props , type, value, idPublish}) {
  const userLoggedInfo = useSelector(state => state.UserLogued);
  
  const handleApply = async (value, idPublish) => {
    console.log(value)
    console.log(idPublish)
    try {
      const apply = await axios.post(`/people`, {value, idPublish})
      console.log(apply)
      if(apply.status === 201){
        console.log("Aplicado correctamente")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <button type={type} value={userLoggedInfo.idPeople} onClick={() => handleApply(value, idPublish)} className="inline-flex text-white mx-4 bg-[#ca7d10] border-0 py-2 px-6 focus:outline-none hover:bg-[#ca7d10] rounded text-lg">{props}</button>
  )
}

export default ButtonApply