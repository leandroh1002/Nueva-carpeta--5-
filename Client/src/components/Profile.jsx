import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import PATHROUTES from '../helpers/PathRoutes.helper';
import { useSelector } from 'react-redux';

function Profile({imagePerfil}) {
  const userLoggedInfo = useSelector(state => state.UserLogued);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const navigate = useNavigate()

    const handleLogout = () =>{
      localStorage.clear();
      setTimeout(() => navigate(PATHROUTES.LANDING), 1000);
    }

    useEffect(() => {
      if (imagePerfil) {
        // console.log('Profile image updated:', imagePerfil);
      }
    }, [imagePerfil]);

  return (
    <div>      
              <div className="relative ml-3">
      <div>
        <button
          type="button"
          className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          id="user-menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={toggleMenu}
        >
          <span className="absolute -inset-1.5"></span>
          <span className="sr-only">Open user menu</span>
          <img
            className="h-8 w-8 rounded-full"
            src={imagePerfil}
            alt=""
          />
        </button>
      </div>
    </div>
    {isOpen && (
  <div
    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
    role="menu"
    aria-orientation="vertical"
    aria-labelledby="user-menu-button"
    tabIndex="-1"
  >{!userLoggedInfo.typeAdmin && (
    <Link to={PATHROUTES.PERFIL}>
      <a
        href="#"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        role="menuitem"
        tabIndex="-1"
        id="user-menu-item-0"
      >
        Your Profile
      </a>
    </Link>)}
    {userLoggedInfo.typeAdmin && (
      <>
        <Link to={PATHROUTES.FORM_ADD_COMPANIES}>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
            tabIndex="-1"
          >
            Add Company
          </a>
        </Link>
        <Link to={PATHROUTES.FORM_ADD_CARRER}>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
            tabIndex="-1"
          >
            Add Career
          </a>
        </Link>
        <Link to={PATHROUTES.PUBLISH}>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
            tabIndex="-1"
          >
            Add Publish
          </a>
        </Link>
      </>
    )}
    <a
      href="#"
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      role="menuitem"
      tabIndex="-1"
      id="user-menu-item-2"
      onClick={handleLogout}
    >
      Sign out
    </a>
  </div>
)}

    </div>
  )
}

export default Profile