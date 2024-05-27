import React, { useEffect, useState } from 'react'
import { Formik , Form, Field, ErrorMessage } from 'formik'
import ButtonDefault from "./ButtonDefault"
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCompanies, getAllCarrer } from "../redux/actions/index";
const REACT_APP_API_URL = import.meta.env.VITE_BASE_URL;


function FormAddPublish() {
    const [success, setSuccess] = useState(false)
    const allCarrers = useSelector((state) => state.allCarrer);
    const allCompany = useSelector((state) => state.allCompanies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCarrer());
        dispatch(getAllCompanies());
    }, [dispatch]);
    console.log(allCarrers)

  return (
        <Formik //esto es para que formik maneje el sumbit sin el handlesubmit 
            initialValues={{
                namePublish: '',
                description: '',
                task: '',
                perfil: '',
                requirement: '',
                offer: '',
                location: '',
                idCarrer: '',
                idCompany: ''
            }}
            validate={(valores) =>{ //aqui van todas las validaciones
                let errores = {}

                //validacion nombre
                if(!valores.namePublish){
                    errores.namePublish = 'Ingresa la Carrera'
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.namePublish)){
                    errores.namePublish = 'El nombre solo puede tener Letras y Espacios'
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
                console.log('formulario enviado' , valores)
                
                axios.post(`${REACT_APP_API_URL}/carrer`, valores)
                .then((response) => {
                    if (response.status === 201 || response.status === 200) {
                        console.log("todo ok", response)
                    }
                })
                .catch((error) => {
                    console.log(error)
                });
                
                resetForm()
                setSuccess(true)
                setTimeout(() => setSuccess(false), 5000)
            }}
        >
        {( {errors} ) => (  
            // El Form de formik es quien se encarga de enviar el formulario
            <Form className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:m-auto w-full mt-10 md:mt-0">
                <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Agregar Publicaciones</h2>
                <div className="relative mb-4">
                    <label htmlFor="namePublish" className="leading-7 text-sm text-gray-600">Nombre de la publicacion: </label>
                    {/* el Fiel maneja los datos del formulario, se encarga de enviar a formik las validaciones del input */}
                    <Field 
                        className="w-full bg-white rounded border border-gray-300 focus:border-[#ca7d10] focus:ring-2 focus:ring-[#d9b662] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        type="text" 
                        id='namePublish' 
                        name='namePublish' 
                        placeholder='Ej. Ingenieria Informatica'
                        />
                    {/* este maneja solo los errores, con los datos definidos mas arriba */}
                    <ErrorMessage name='namePublish' component={() => (<div className='error'>{errors.namePublish}</div>)}/>
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
                    <label htmlFor="task" className="leading-7 text-sm text-gray-600">Tareas: </label>
                    <Field 
                    className="w-full bg-white rounded border border-gray-300 focus:border-[#ca7d10] focus:ring-2 focus:ring-[#d9b662] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    type="text" 
                    id='task' 
                    name='task' 
                    placeholder='Ej. Alguna tarea para el puesto requerido'
                    />
                    <ErrorMessage name='task' component={() => (<div className='error'>{errors.task}</div>)}/>
                </div>
                <div className="relative mb-4">
                    <label htmlFor="perfil" className="leading-7 text-sm text-gray-600">Perfil: </label>
                    <Field 
                    className="w-full bg-white rounded border border-gray-300 focus:border-[#ca7d10] focus:ring-2 focus:ring-[#d9b662] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    type="text" 
                    id='perfil' 
                    name='perfil' 
                    placeholder='Perfil que buscan para el puesto'
                    />
                    <ErrorMessage name='perfil' component={() => (<div className='error'>{errors.perfil}</div>)}/>
                </div>
                <div className="relative mb-4">
                    <label htmlFor="requirement" className="leading-7 text-sm text-gray-600">Requerimientos: </label>
                    <Field 
                    className="w-full bg-white rounded border border-gray-300 focus:border-[#ca7d10] focus:ring-2 focus:ring-[#d9b662] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    type="text" 
                    id='requirement' 
                    name='requirement' 
                    placeholder='Requisitos'
                    />
                    <ErrorMessage name='requirement' component={() => (<div className='error'>{errors.requirement}</div>)}/>
                </div>
                <div className="relative mb-4">
                    <label htmlFor="offer" className="leading-7 text-sm text-gray-600">Ofrece: </label>
                    <Field 
                    className="w-full bg-white rounded border border-gray-300 focus:border-[#ca7d10] focus:ring-2 focus:ring-[#d9b662] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    type="text" 
                    id='offer' 
                    name='offer' 
                    placeholder='Que ofrece la empresa'
                    />
                    <ErrorMessage name='offer' component={() => (<div className='error'>{errors.offer}</div>)}/>
                </div>
                <div className="relative mb-4">
                    <label htmlFor="location" className="leading-7 text-sm text-gray-600">Localizacion: </label>
                    <Field 
                    className="w-full bg-white rounded border border-gray-300 focus:border-[#ca7d10] focus:ring-2 focus:ring-[#d9b662] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    type="text" 
                    id='location' 
                    name='location' 
                    placeholder='Ej. San Miguel de Tucuman'
                    />
                    <ErrorMessage name='location' component={() => (<div className='error'>{errors.location}</div>)}/>
                </div>
                <div className='relative mb-4'>
                    <Field name='carrer' as='select' className="w-full bg-white rounded border border-gray-300 focus:border-[#ca7d10] focus:ring-2 focus:ring-[#d9b662] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                    {allCompany && allCompany.map(carrer => (
                                <option key={carrer.idCarrer} value={carrer.idCarrer}>{carrer.name}</option>
                            ))}
                    </Field>
                </div>
                <div className='relative mb-4'>
                <Field name='companies' as='select' className="w-full bg-white rounded border border-gray-300 focus:border-[#ca7d10] focus:ring-2 focus:ring-[#d9b662] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                    {allCarrers && allCarrers.map(carrer => (
                                <option key={carrer.idCarrer} value={carrer.idCarrer}>{carrer.name}</option>
                            ))}
                    </Field>
                </div>
                <ButtonDefault type='submit' props="Enviar"></ButtonDefault>
            </Form>
        )}
    </Formik>
  )
}

export default FormAddPublish