import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import PATHROUTES from "../helpers/PathRoutes.helper";
import Logout from './Logout';


function NavBar() {
  const location = useLocation();

  return (
    <div><header className="text-gray-50 body-font bg-[#194da0]">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-purple-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg> */}
        <Link to={`/home`}><img alt="UNSTA Universidad del Norte Santo Tomás de Aquino - Isologotipo" data-src="https://www.unsta.edu.ar/wp-content/uploads/2019/10/UNSTA_isologotipo-1.png" className="attachment-medium size-medium wp-image-7883 ls-is-cached lazyloaded" src="https://www.unsta.edu.ar/wp-content/uploads/2019/10/UNSTA_isologotipo-1.png"></img>
        </Link>
      </div>
      <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
        <a href="https://alumnos.unsta.edu.ar/" className="mr-5 hover:text-gray-900 cursor-pointer">Autogestion</a>
        <a href="https://seo.unsta.edu.ar/" className="mr-5 hover:text-gray-900 cursor-pointer">CEO</a>
      </nav>

      {/* <--------Boton para agregar empresas------> */}
      {location.pathname === PATHROUTES.FORM_ADD_COMPANIES && <button className="inline-flex items-center bg-[#ca7d10] border-0 py-1 px-3 focus:outline-none hover:bg-[#ca7d10] rounded text-base mt-4 md:mt-0">
      Agregar Empresas
        <svg className='ml-2 icon icon-tabler icons-tabler-outline icon-tabler-plus'  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
      </button>}


      
      {/* <--------Boton de Login------> */}
      {location.pathname === PATHROUTES.LANDING && <Link to={PATHROUTES.LOGIN}><button className="inline-flex items-center bg-[#ca7d10] border-0 py-1 px-3 focus:outline-none hover:bg-[#ca7d10] rounded text-base mt-4 md:mt-0">Login
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button></Link>}
      
      {/* <--------Boton de Logout------> */}
      {location.pathname === PATHROUTES.HOME && <Link to={PATHROUTES.LANDING}><Logout/></Link>}
    </div>
  </header></div>
  )
}

export default NavBar