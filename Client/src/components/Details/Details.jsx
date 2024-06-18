import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import ButtonApply from '../ButtonApply';
import ButtonDefault from '../ButtonDefault';


function Details() {
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
    <div>
      <ButtonApply type='button' props="Postularse" />
      <ButtonDefault type='button' props="Volver"/>
        <p>{countries.namePublish}</p>
        <hr />
        <h3>Sos estudiante avanzado de {countries.Carrers && countries.Carrers.length > 0 && countries.Carrers[0].name}?</h3> 
        <p>Unite al equipo de {countries.Companies && countries.Companies.length > 0 && countries.Companies[0].name}</p>
        <p>{countries.description}</p>
        <h4>Algunas tareas a realizar:</h4>
        <p>{countries.task}</p>
        <h4>Ofrecemos</h4>
        <p>{countries.offer}</p>
        <p>{countries.location}</p>
        <p>{countries.otherDescription} a: pasantias@unsta.edu.ar</p>
    </div>
  )
}

export default Details