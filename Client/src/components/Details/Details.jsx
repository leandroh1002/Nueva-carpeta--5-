import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'


function Details() {
    const [countries, setCountries] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        axios(`/publish/${id}`).then(({ data }) => {
            console.log(data)
           if (data.namePublish) {
              setCountries(data);
           } else {
              window.alert('No hay publicaciones con ese ID');
           }
        });
        return setCountries({});
     }, [id]);


  return (
    <div>
        <p>{countries.namePublish}</p>
        <hr />
        <h3>Sos estudiante avanzado de </h3> <p>{countries.carrer}?</p>
        <p>Unite al equipo de {countries.enterprise}</p>
        <p>{countries.perfilDescription}</p>
        <h4>Algunas tareas a realizar</h4>
        <p>{countries.task}</p>
        <h4>Ofrecemos</h4>
        <p>{countries.offer}</p>
        <p>{countries.otherDescription} a: pasantias@unsta.edu.ar</p>
    </div>
  )
}

export default Details