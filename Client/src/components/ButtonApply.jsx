import React from 'react'
import { useSelector } from 'react-redux';

function ButtonApply({props , type, value, idPublish}) {
  const userLoggedInfo = useSelector(state => state.UserLogued);
  
  const handleApply = (value, idPublish) => {
    console.log(value)
    console.log(idPublish)
  }

  return (
    <button type={type} value={userLoggedInfo.idPeople} onClick={() => handleApply(value, idPublish)} className="inline-flex text-white mx-4 bg-[#ca7d10] border-0 py-2 px-6 focus:outline-none hover:bg-[#ca7d10] rounded text-lg">{props}</button>
  )
}

export default ButtonApply