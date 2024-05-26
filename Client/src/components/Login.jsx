import React from 'react'
import { Link } from 'react-router-dom'
import PATHROUTES from "../helpers/PathRoutes.helper";


function Login() {
  return (
    <div><section className="text-gray-600 body-font">
    <div className="container px-5 py-20 mx-auto flex flex-wrap items-center">
      <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
        <h1 className="title-font font-medium text-3xl text-gray-900">Slow-carb next level shoindcgoitch ethical authentic, poko scenester</h1>
        <p className="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
      </div>
      <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
          <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-[#ca7d10] focus:ring-2 focus:ring-[#d9b662] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <div className="relative mb-4">
          <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Password</label>
          <input type="password" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-[#ca7d10] focus:ring-2 focus:ring-[#d9b662] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <Link to={PATHROUTES.HOME}>
        <button className="text-white bg-[#ca7d10] border-0 py-2 px-8 focus:outline-none hover:bg-[#ca7d10] rounded text-lg">Iniciar Sesion</button></Link>
        <p className="text-xs text-gray-500 mt-3">Tu cuenta en autogestion debe estar accesible.</p>
      </div>
    </div>
  </section></div>
  )
}

export default Login