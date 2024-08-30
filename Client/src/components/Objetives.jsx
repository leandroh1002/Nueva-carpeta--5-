import React from 'react'
import imagenobjetives from "../assets/LandingImages/Taskmanagement.png"
import compass from "../assets/LandingImages/compass.svg"
import tools from "../assets/LandingImages/tools.svg"
import targetarrow from "../assets/LandingImages/target-arrow.svg"
import charthistogram from "../assets/LandingImages/chart-histogram.svg"


function Objetives() {
  return (
    <div className='flex min-h-[647px] items-center content-center'>
        <div className=''>
            <img className='w-[550px] h-[550px]' src={imagenobjetives} alt="" />
        </div>

        <div className='text-left w-[710px]'>
            <div className='flex'>
            <img className='w-[33px] h-[33px]' src={tools} alt="" />
                <div className='pl-5 pb-6'>
                    <h4>Experiencia Real en la Industria</h4>
                    <p>Trabaja en proyectos reales y adquiere experiencia práctica que te preparará para el mundo laboral.</p>
                </div>
            </div>
            <div className='flex'>
            <img className='w-[33px] h-[33px]' src={compass} alt="" />
                <div className='pl-5 pb-6'>
                    <h4>Mentoría Personalizada</h4>
                    <p>Aprende de expertos de la industria que te guiarán y apoyarán durante toda tu pasantía</p>
                </div>
            </div>
            <div className='flex'>
            <img className='w-[33px] h-[33px]' src={targetarrow} alt="" />
                <div className='pl-5 pb-6'>    
                    <h4>Desarrollo de Habilidades Clave</h4>
                    <p>Mejora tus habilidades técnicas y blandas a través de experiencias prácticas y desafíos que te preparan para el éxito profesional</p>
                </div>
            </div>
            <div className='flex'>
            <img className='w-[33px] h-[33px]' src={charthistogram} alt="" />
                <div className='pl-5 pb-6'>
                    <h4>Oportunidades de Crecimiento</h4>
                    <p>Accede a oportunidades exclusivas de desarrollo profesional y crecimiento dentro de la empresa</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Objetives