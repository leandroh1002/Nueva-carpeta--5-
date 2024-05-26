import React, { useState } from 'react'
import { Formik , Form, Field, ErrorMessage } from 'formik'
import ButtonDefault from "./ButtonDefault"
import axios from 'axios';
const REACT_APP_API_URL = import.meta.env.VITE_BASE_URL;


function FormAddCompanies() {
    const [success, setSuccess] = useState(false)



  return (
    <>
        <Formik //esto es para que formik maneje el sumbit sin el handlesubmit 
            initialValues={{
                name: '',
                description: '',
                image: '',
                duration: '',
            }}
            validate={(valores) =>{ //aqui van todas las validaciones
                let errores = {}

                //validacion nombre
                if(!valores.name){
                    errores.name = 'ingresa un nombre'
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)){
                    errores.name = 'el nombre solo puede tener letras y espacions'
                }

                //validacion de la description
                if(!valores.description){
                    errores.description = 'ingresa una description'
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.description)){
                    errores.description = 'aqui va el correo men'
                }

                //validacion de la image
                if(!valores.image){
                    errores.image = 'ingresa un mail'
                } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.image)){
                    errores.image = 'aqui va el correo men'
                }

                //validacion de la duration
                if(!valores.duration){
                    errores.duration = 'aqui va la duration de la pasantia'
                } else if (!/[a-zA-Z0-9-.]+$/.test(valores.duration)){
                    errores.duration = 'solo numeros'
                }
                return errores
            }} 
            onSubmit={(valores, {resetForm}) =>{
                resetForm()
                console.log('formulario enviado' , valores)
                
                axios.post(`${REACT_APP_API_URL}/companies`, valores)
                .then((response) => {
                  if (response.status === 201 || response.status === 200) {
                    // dispatch({
                    //   type: SET_SELECTED_OPPORTUNITIE,
                    //   payload: {
                    //     idOpportunitie: response.data.idOpportunitie
                    //   }
                    // })
                    // navigate(Helpers.UserDetail.replace(":id", props.user.idPeople))
                    console.log("todo ok", response)
                  }
                })
                .catch((error) => {
                    console.log(error)
                });

                setSuccess(true)
                setTimeout(() => setSuccess(false), 5000)
            }}
        >
        {( {errors} ) => (  
            // El Form de formik es quien se encarga de enviar el formulario
            <Form className=''>
                <div>
                    <label htmlFor="name">Nombre: </label>
                    {/* el Fiel maneja los datos del formulario, se encarga de enviar a formik las validaciones del input */}
                    <Field 
                        type="text" 
                        id='name' 
                        name='name' 
                        placeholder='aqui va el nombre'
                        />
                    {/* este maneja solo los errores, con los datos definidos mas arriba */}
                    <ErrorMessage name='name' component={() => (<div className='error'>{errors.name}</div>)}/>
                </div>

                <div>
                    <label htmlFor="description">Description: </label>
                    <Field 
                    type="text" 
                    id='description' 
                    name='description' 
                    placeholder='aqui va la description'
                    />
                    <ErrorMessage name='description' component={() => (<div className='error'>{errors.description}</div>)}/>
                </div>
                <div>
                    <label htmlFor="image">Image: </label>
                    <Field 
                    type="text" 
                    id='image' 
                    name='image' 
                    placeholder='aqui na el image'
                    />
                    <ErrorMessage name='image' component={() => (<div className='error'>{errors.image}</div>)}/>
                </div>
                <div>
                    <label htmlFor="duration">Duration: </label>
                    <Field 
                    type="number" 
                    id='duration' 
                    name='duration' 
                    placeholder='aqui na el duration'
                    />
                    <ErrorMessage name='duration' component={() => (<div className='error'>{errors.duration}</div>)}/>
                </div>
                <ButtonDefault type='submit' props="Enviar"></ButtonDefault>
            </Form>
        )}
    </Formik>
    </>
  )
}

export default FormAddCompanies