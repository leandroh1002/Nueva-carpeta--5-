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
            <Form className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:m-auto w-full mt-10 md:mt-0">
                <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Agregar Empresas</h2>
                <div className="relative mb-4">
                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Nombre: </label>
                    {/* el Fiel maneja los datos del formulario, se encarga de enviar a formik las validaciones del input */}
                    <Field 
                        className="w-full bg-white rounded border border-gray-300 focus:border-[#ca7d10] focus:ring-2 focus:ring-[#d9b662] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        type="text" 
                        id='name' 
                        name='name' 
                        placeholder='aqui va el nombre'
                        />
                    {/* este maneja solo los errores, con los datos definidos mas arriba */}
                    <ErrorMessage name='name' component={() => (<div className='error'>{errors.name}</div>)}/>
                </div>

                <div className="relative mb-4">
                    <label htmlFor="description" className="leading-7 text-sm text-gray-600">Description: </label>
                    <Field 
                    className="w-full bg-white rounded border border-gray-300 focus:border-[#ca7d10] focus:ring-2 focus:ring-[#d9b662] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    type="text" 
                    id='description' 
                    name='description' 
                    placeholder='aqui va la description'
                    />
                    <ErrorMessage name='description' component={() => (<div className='error'>{errors.description}</div>)}/>
                </div>
                <div className="relative mb-4">
                    <label htmlFor="image" className="leading-7 text-sm text-gray-600">Image: </label>
                    <Field 
                    className="w-full bg-white rounded border border-gray-300 focus:border-[#ca7d10] focus:ring-2 focus:ring-[#d9b662] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    type="text" 
                    id='image' 
                    name='image' 
                    placeholder='aqui na el image'
                    />
                    <ErrorMessage name='image' component={() => (<div className='error'>{errors.image}</div>)}/>
                </div>
                <div className="relative mb-4">
                    <label htmlFor="duration" className="leading-7 text-sm text-gray-600">Duration: </label>
                    <Field 
                    className="w-full bg-white rounded border border-gray-300 focus:border-[#ca7d10] focus:ring-2 focus:ring-[#d9b662] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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