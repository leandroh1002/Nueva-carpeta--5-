import React from 'react'
import ButtonDefault from "./ButtonDefault"

function Hero() {
  return (
    <div><section class="text-gray-600 body-font">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <img class="object-cover object-center rounded" alt="hero" src="https://gananci.org/wp-content/uploads/2016/10/Trabajar-desde-casa.jpg"/>
      </div>
      <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Pasantías
          <br class="hidden lg:inline-block"/>Viví tu Profesión desde la Práctica
        </h1>
        <p class="mb-8 leading-relaxed">La Sub-secretaría de Asuntos Estudiantiles ha implementado el Régimen de Pasantías Rentadas dirigida a estudiantes Universitarios de acuerdo a lo establecido en la Ley N° 26.427 promulgada el 18 de diciembre de 2008. Se entiende como “pasantía educativa” al conjunto de actividades formativas que realicen los estudiantes en empresas y organismos públicos, o empresas privadas con personería jurídica, sustantivamente relacionado con la propuesta curricular de los estudios cursados en unidades educativas, que se reconoce como experiencia de alto valor pedagógico, sin carácter obligatorio (Art. 2º Ley 26.427).</p>
        <div class="flex justify-center">
          <ButtonDefault props="Ver Pasantías"/>
          {/* <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default Hero