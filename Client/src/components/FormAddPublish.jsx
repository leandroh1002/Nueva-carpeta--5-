import React, { useState } from 'react'
import { Formik , Form, Field, ErrorMessage } from 'formik'
import ButtonDefault from "./ButtonDefault"
import axios from 'axios';
const REACT_APP_API_URL = import.meta.env.VITE_BASE_URL;


function FormAddPublish() {
    const [success, setSuccess] = useState(false)



  return (
    <>
        <Formik //esto es para que formik maneje el sumbit sin el handlesubmit 
            initialValues={{
                name: '',
                description: '',
                department: '',
                duration: '',
            }}
            validate={(valores) =>{ //aqui van todas las validaciones
                let errores = {}

                //validacion nombre
                if(!valores.name){
                    errores.name = 'Ingresa la Carrera'
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)){
                    errores.name = 'El nombre solo puede tener Letras y Espacios'
                }

                //validacion de la description
                if(!valores.description){
                    errores.description = 'Ingresa una descripcion'
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.description)){
                    errores.description = 'Ingresa una descripcion'
                }

                //validacion de la department
                if(!valores.department){
                    errores.department = 'Ingresa a que departamento pertenece la carrera'
                } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.department)){
                    errores.department = 'Ingresa el departamento'
                }

                //validacion de la duration
                if(!valores.duration){
                    errores.duration = 'Aqui va la duracion de la carrera'
                } else if (!/[a-zA-Z0-9-.]+$/.test(valores.duration)){
                    errores.duration = 'Solo numeros'
                }
                return errores
            }} 
            onSubmit={(valores, {resetForm}) =>{
                resetForm()
                console.log('formulario enviado' , valores)
                
                axios.post(`${REACT_APP_API_URL}/carrer`, valores)
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
                <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Agregar Publicaciones</h2>
                <div className="relative mb-4">
                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Nombre de la Carrera: </label>
                    {/* el Fiel maneja los datos del formulario, se encarga de enviar a formik las validaciones del input */}
                    <Field 
                        className="w-full bg-white rounded border border-gray-300 focus:border-[#ca7d10] focus:ring-2 focus:ring-[#d9b662] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        type="text" 
                        id='name' 
                        name='name' 
                        placeholder='Ej. Ingenieria Informatica'
                        />
                    {/* este maneja solo los errores, con los datos definidos mas arriba */}
                    <ErrorMessage name='name' component={() => (<div className='error'>{errors.name}</div>)}/>
                </div>

                <div className="relative mb-4">
                    <label htmlFor="description" className="leading-7 text-sm text-gray-600">Descripción: </label>
                    <Field 
                    className="w-full bg-white rounded border border-gray-300 focus:border-[#ca7d10] focus:ring-2 focus:ring-[#d9b662] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    type="text" 
                    id='description' 
                    name='description' 
                    placeholder='Descripción'
                    />
                    <ErrorMessage name='description' component={() => (<div className='error'>{errors.description}</div>)}/>
                </div>
                <div className="relative mb-4">
                    <label htmlFor="department" className="leading-7 text-sm text-gray-600">Departmento: </label>
                    <Field 
                    className="w-full bg-white rounded border border-gray-300 focus:border-[#ca7d10] focus:ring-2 focus:ring-[#d9b662] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    type="text" 
                    id='department' 
                    name='department' 
                    placeholder='Ej. Ingeniería'
                    />
                    <ErrorMessage name='department' component={() => (<div className='error'>{errors.department}</div>)}/>
                </div>
                <div className="relative mb-4">
                    <label htmlFor="duration" className="leading-7 text-sm text-gray-600">Duración: </label>
                    <Field 
                    className="w-full bg-white rounded border border-gray-300 focus:border-[#ca7d10] focus:ring-2 focus:ring-[#d9b662] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    type="number" 
                    id='duration' 
                    name='duration' 
                    placeholder='Cantidad de años'
                    />
                    <ErrorMessage name='duration' component={() => (<div className='error'>{errors.duration}</div>)}/>
                </div>
                <div className='relative mb-4'>
                    <Field name='carrer' as='select' className="w-full bg-white rounded border border-gray-300 focus:border-[#ca7d10] focus:ring-2 focus:ring-[#d9b662] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                            <option value="ingenieria en computacion">computacion</option>
                            <option value="at">at</option>
                            <option value="contador">contador</option>
                    </Field>
                </div>
                <div className='relative mb-4'>
                    <Field name='companies' as='select' className="w-full bg-white rounded border border-gray-300 focus:border-[#ca7d10] focus:ring-2 focus:ring-[#d9b662] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                        <option value="ingenieria en computacion">computacion</option>
                        <option value="at">at</option>
                        <option value="contador">contador</option>
                    </Field>
                </div>
                <ButtonDefault type='submit' props="Enviar"></ButtonDefault>
            </Form>
        )}
    </Formik>
    </>
  )
}

export default FormAddPublish