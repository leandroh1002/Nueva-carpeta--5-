import React from 'react'
import ButtonDefault from "./ButtonDefault"
import styles from "../components/styles/Hero.module.sass"
import imagenportada from "../assets/LandingImages/BusinessStrategy.png"
import { motion } from "framer-motion"

function Hero() {
  return (
  <div className={styles.mainContainer}>
    <div className={styles.secondaryContainer}>
      <div className={styles.containerLeft}>
        <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        ><h1>¡Explora Nuestras Pasantías!</h1></motion.div>
        <h4 className={styles.parrafo}>Desarrolla tus habilidades y gana experiencia en un entorno profesional.</h4>
        <p>En nuestro programa de pasantías, tendrás la oportunidad de trabajar con expertos en la industria, participar en proyectos reales y expandir tu red profesional. ¡No pierdas la oportunidad de dar el primer paso hacia tu carrera soñada!</p>
      <a href="#nuestrasPasantias"><ButtonDefault type='button' props="¡Aplica Ahora!"/></a>
      </div>
      <div className={styles.containerRight}>
        <img id='imageHero' className="object-cover object-center rounded w-[590px] h-[590px]" alt="hero" src={imagenportada}/>
      </div>
    </div>
  </div>
  )
}

export default Hero