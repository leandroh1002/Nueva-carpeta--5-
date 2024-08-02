import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import ButtonApply from '../ButtonApply';
import ButtonDefault from '../ButtonDefault';
import ButtonBack from '../ButtonBack';
import styles from "./Details.module.sass"


function Details({valueId}) {
    const [countries, setCountries] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        axios(`/publish/${id}`).then(({ data }) => {
            console.log(data)
           if (data.idPublish) {
              setCountries(data);
           } else {
              window.alert('No hay publicaciones con ese ID');
           }
        });
        return setCountries({});
     }, [id]);

  return (
    <div className={styles.container}>
      <div>
         <ButtonBack type='button' props="Volver"/>
         <ButtonApply type='button' props="Postularse" idPublish={countries.idPublish} value={valueId}/>
      </div>
      <div className={styles.content}>
        <p>{countries.namePublish}</p>
        <hr />
        <h3>Sos estudiante avanzado de {countries.Carrers && countries.Carrers.length > 0 && countries.Carrers[0].name}?</h3> 
        <p>Unite al equipo de {countries.Companies && countries.Companies.length > 0 && countries.Companies[0].name}</p>
        <p>{countries.description}</p>
        <h4>Algunas tareas a realizar:</h4>
        <p>{countries.task}</p>
        <h4>Ofrecemos</h4>
        <p>{countries.perfil}</p>
        <p>{countries.requirement}</p>
        <p>{countries.offer}</p>
        <p>{countries.location}</p>
      </div>
    </div>
  )
}

export default Details