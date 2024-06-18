import React from 'react'
import { useSelector } from 'react-redux';

function ButtonDefault({props , type}) {
  const userLoggedInfo = useSelector(state => state.UserLogued);


  return (
    <button type={type} value={userLoggedInfo.idPeople} className="inline-flex text-white mx-4 bg-[#ca7d10] border-0 py-2 px-6 focus:outline-none hover:bg-[#ca7d10] rounded text-lg">{props}</button>
  )
}

export default ButtonDefault