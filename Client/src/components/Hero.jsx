import React from 'react'
import ButtonDefault from "./ButtonDefault"
import styles from "../components/styles/Hero.module.sass"

function Hero() {
  return (
  //   <div><section className="text-gray-600 body-font">
  //   <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
  //     <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
  //       <img className="object-cover object-center rounded" alt="hero" src="https://gananci.org/wp-content/uploads/2016/10/Trabajar-desde-casa.jpg"/>
  //     </div>
  //     <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
  //       <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Pasantías
  //         <br className="hidden lg:inline-block"/>Viví tu Profesión desde la Práctica
  //       </h1>
  //       <p className="mb-8 leading-relaxed">La Sub-secretaría de Asuntos Estudiantiles ha implementado el Régimen de Pasantías Rentadas dirigida a estudiantes Universitarios de acuerdo a lo establecido en la Ley N° 26.427 promulgada el 18 de diciembre de 2008. Se entiende como “pasantía educativa” al conjunto de actividades formativas que realicen los estudiantes en empresas y organismos públicos, o empresas privadas con personería jurídica, sustantivamente relacionado con la propuesta curricular de los estudios cursados en unidades educativas, que se reconoce como experiencia de alto valor pedagógico, sin carácter obligatorio (Art. 2º Ley 26.427).</p>
  //       <div className="flex justify-center">
  //         <ButtonDefault type='button' props="Ver Pasantías"/>
  //         {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
  //       </div>
  //     </div>
  //   </div>
  // </section></div>
  <div className={styles.mainContainer}>
    <div className={styles.secondaryContainer}>
      <div className={styles.containerLeft}>
        <h1>¡Explora Nuestras Pasantías!</h1>
        <p className={styles.parrafo}>Desarrolla tus habilidades y gana experiencia en un entorno profesional.</p>
        <p>En nuestro programa de pasantías, tendrás la oportunidad de trabajar con expertos en la industria, participar en proyectos reales y expandir tu red profesional. ¡No pierdas la oportunidad de dar el primer paso hacia tu carrera soñada!

</p>
        <ButtonDefault type='button' props="¡Aplica Ahora!"/>
      </div>
      <div className={styles.containerRight}>
        <img className="object-cover object-center rounded" alt="hero" src="https://gananci.org/wp-content/uploads/2016/10/Trabajar-desde-casa.jpg"/>
      </div>
    </div>
  </div>
  )
}

export default Hero