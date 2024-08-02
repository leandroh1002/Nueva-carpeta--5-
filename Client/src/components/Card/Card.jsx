import React from 'react'
import { Link, useLocation } from "react-router-dom";
import ButtonDefault from '../ButtonDefault';
import PATHROUTES from "../../helpers/PathRoutes.helper";
import ButtonApply from '../ButtonApply';
import style from "./Card.module.sass"



function Card({idPublish, namePublish, carrer, enterprise, image, Companies, task, otherDescription, perfilDecription, value }) {
  const uriparam = useLocation();
  const imagem = Companies[0].image;

  return (
    // <div className='m-3 flex  relative grid h-[30rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-[20px] bg-red-500 bg-clip-border text-center text-gray-700'>
    <div className={style.container}>
      <div className={style.imagenes}>
        <img className={style.logo} src={imagem} alt="" />
      </div>
      {/* className="relative p-6 px-6 py-14 md:px-12" */}
      {/* "mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased" */}
      <div className={style.contenido}>
            <p className={style.font}>{namePublish}</p>
            
            {uriparam.pathname === PATHROUTES.HOME 
            ? <ButtonApply type='button' props="Postularse" idPublish={idPublish} value={value}/>
            : <Link to={PATHROUTES.LOGIN}><ButtonDefault type='button' props="Iniciar sesion" /></Link>}

            <Link to={`/detail/${idPublish}`}><ButtonDefault type='button' props="Detalles"/></Link>
              {/* <img alt="Tania Andrew"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
              className="relative inline-block h-[74px] w-[74px] !rounded-full border-2 border-white object-cover object-center" /> */}
      </div>
    </div>
  )
}

export default Card