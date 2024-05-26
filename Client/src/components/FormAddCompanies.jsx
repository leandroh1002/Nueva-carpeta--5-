import React, { useState } from 'react'
import { Formik , Form, Field, ErrorMessage } from 'formik'

function FormAddCompanies() {
    const [success, setSuccess] = useState(false)
  return (


    <>
        <Formik //esto es para que formik maneje el sumbit sin el handlesubmit 
            initialValues={{
                nombre: '',
                descripcion: '',
                imagen: '',
                duracion: '',
            }}
            validate={(valores) =>{ //aqui van todas las validaciones
                let errores = {}

                //validacion nombre
                if(!valores.nombre){
                    errores.nombre = 'ingresa un nombre'
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
                    errores.nombre = 'el nombre solo puede tener letras y espacions'
                }

                //validacion de la descripcion
                if(!valores.descripcion){
                    errores.descripcion = 'ingresa una descripcion'
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.descripcion)){
                    errores.descripcion = 'aqui va el correo men'
                }

                //validacion de la imagen
                if(!valores.imagen){
                    errores.imagen = 'ingresa un mail'
                } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.imagen)){
                    errores.imagen = 'aqui va el correo men'
                }

                //validacion de la duracion
                if(!valores.duracion){
                    errores.duracion = 'aqui va la duracion de la pasantia'
                } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.duracion)){
                    errores.duracion = 'solo numeros'
                }
                return errores
            }} 
            onSubmit={(valores, {resetForm}) =>{
                resetForm()
                console.log('formulario enviado' , valores)
                setSuccess(true)
                setTimeout(() => setSuccess(false), 5000)
            }}
        >
        {( {errors} ) => (  
            // El Form de formik es quien se encarga de enviar el formulario
            <Form className=''>
                <div>
                    <label htmlFor="nombre">Nombre: </label>
                    {/* el Fiel maneja los datos del formulario, se encarga de enviar a formik las validaciones del input */}
                    <Field 
                        type="text" 
                        id='nombre' 
                        name='nombre' 
                        placeholder='aqui va el nombre'
                        />
                    {/* este maneja solo los errores, con los datos definidos mas arriba */}
                    <ErrorMessage name='nombre' component={() => (<div className='error'>{errors.nombre}</div>)}/>
                </div>

                <div>
                    <label htmlFor="descripcion">Descripcion: </label>
                    <Field 
                    type="text" 
                    id='descripcion' 
                    name='descripcion' 
                    placeholder='aqui va la descripcion'
                    />
                    <ErrorMessage name='descripcion' component={() => (<div className='error'>{errors.descripcion}</div>)}/>
                </div>
                <div>
                    <label htmlFor="imagen">Imagen: </label>
                    <Field 
                    type="text" 
                    id='imagen' 
                    name='imagen' 
                    placeholder='aqui na el imagen'
                    />
                    <ErrorMessage name='imagen' component={() => (<div className='error'>{errors.imagen}</div>)}/>
                </div>
                <div>
                    <label htmlFor="duracion">Duracion: </label>
                    <Field 
                    type="text" 
                    id='duracion' 
                    name='duracion' 
                    placeholder='aqui na el duracion'
                    />
                    <ErrorMessage name='duracion' component={() => (<div className='error'>{errors.duracion}</div>)}/>
                </div>
                <button type='submit'>Enviar</button>
            </Form>
        )}
    </Formik>
    </>
  )
}

export default FormAddCompanies