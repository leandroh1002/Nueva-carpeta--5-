import React, { useEffect, useState } from 'react'
import { Formik , Form, Field, ErrorMessage } from 'formik'
import ButtonDefault from "./ButtonDefault"
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCompanies, getAllCarrer } from "../redux/actions/index";
const REACT_APP_API_URL = import.meta.env.VITE_BASE_URL;

function FormAddPublish() {
  const [success, setSuccess] = useState(false);
  const allCarrers = useSelector((state) => state.allCarrer);
  const allCompanies = useSelector((state) => state.allCompanies);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getAllCarrer());
      dispatch(getAllCompanies());
  }, [dispatch]);
  console.log(allCarrers)
  
  return (
    <>
      <Formik
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
        validate={(values) => {
          let errors = {};

          // Validación namePublish
          if (!values.namePublish) {
            errors.namePublish = 'Ingresa la Carrera';
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.namePublish)) {
            errors.namePublish = 'El nombre solo puede tener Letras y Espacios';
          }

          // Validación de la description
          if (!values.description) {
            errors.description = 'Ingresa una descripción';
          } else if (values.description.length > 40) {
            errors.description = 'La descripción no puede tener más de 40 caracteres';
          }

          // Validación de la task
          if (!values.task) {
            errors.task = 'Ingresa a qué departamento pertenece la carrera';
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.task)) {
            errors.task = 'El departamento solo puede tener Letras y Espacios';
          }

          // Validación de la perfil
          if (!values.perfil) {
            errors.perfil = 'Aquí va la duración de la carrera';
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.perfil)) {
            errors.perfil = 'Solo números';
          }
          // Validación de la requirement
          if (!values.requirement) {
            errors.requirement = 'Ingresa una descripción';
          } else if (values.requirement.length > 40) {
            errors.requirement = 'La descripción no puede tener más de 40 caracteres';
          }

          // Validación de la offer
          if (!values.offer) {
            errors.offer = 'Ingresa a qué departamento pertenece la carrera';
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.offer)) {
            errors.offer = 'El departamento solo puede tener Letras y Espacios';
          }

          // Validación de la location
          if (!values.location) {
            errors.location = 'Aquí va la duración de la carrera';
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.location)) {
            errors.location = 'Solo números';
          }
          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
            console.log("valores de companias", values.idCompany)
            console.log("valores de carreras", values.idCarrer)
          axios.post(`${REACT_APP_API_URL}/publish`, values)
            .then((response) => {
              if (response.status === 201 || response.status === 200) {
                setSuccess(true);
                resetForm();
                setTimeout(() => setSuccess(false), 5000);
              }
            })
            .catch((error) => {
              console.log(error);
            });
        console.log("listo", values)
        }
    }
      >
        {({ errors }) => (
          <Form className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:m-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Agregar Publicaciones</h2>
            
            <div className="relative mb-4">
              <label htmlFor="namePublish" className="leading-7 text-sm text-gray-600">namePublish: </label>
              <Field
                className="w-full bg-white rounded border border-gray-300 focus:border-[#ca7d10] focus:ring-2 focus:ring-[#d9b662] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                type="text"
                id="namePublish"
                name="namePublish"
                placeholder="namePublish"
              />
              <ErrorMessage name="namePublish" component={() => (<div className="error">{errors.namePublish}</div>)} />
            </div>
            
            <div className="relative mb-4">
              <label htmlFor="description" className="leading-7 text-sm text-gray-600">description: </label>
              <Field
                className="w-full bg-white rounded border border-gray-300 focus:border-[#ca7d10] focus:ring-2 focus:ring-[#d9b662] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                type="description"
                id="description"
                name="description"
                placeholder="description"
              />
              <ErrorMessage name="description" component={() => (<div className="error">{errors.description}</div>)} />
            </div>
            
            <div className="relative mb-4">
              <label htmlFor="task" className="leading-7 text-sm text-gray-600">task: </label>
              <Field
                className="w-full bg-white rounded border border-gray-300 focus:border-[#ca7d10] focus:ring-2 focus:ring-[#d9b662] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                type="text"
                id="task"
                name="task"
                placeholder="task"
              />
              <ErrorMessage name="task" component={() => (<div className="error">{errors.task}</div>)} />
            </div>

            <div className="relative mb-4">
              <label htmlFor="perfil" className="leading-7 text-sm text-gray-600">perfil: </label>
              <Field
                className="w-full bg-white rounded border border-gray-300 focus:border-[#ca7d10] focus:ring-2 focus:ring-[#d9b662] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                type="text"
                id="perfil"
                name="perfil"
                placeholder="perfil"
              />
              <ErrorMessage name="perfil" component={() => (<div className="error">{errors.perfil}</div>)} />
            </div>

            <div className="relative mb-4">
              <label htmlFor="requirement" className="leading-7 text-sm text-gray-600">requirement: </label>
              <Field
                className="w-full bg-white rounded border border-gray-300 focus:border-[#ca7d10] focus:ring-2 focus:ring-[#d9b662] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                type="text"
                id="requirement"
                name="requirement"
                placeholder="requirement"
              />
              <ErrorMessage name="requirement" component={() => (<div className="error">{errors.requirement}</div>)} />
            </div>

            <div className="relative mb-4">
              <label htmlFor="offer" className="leading-7 text-sm text-gray-600">offer: </label>
              <Field
                className="w-full bg-white rounded border border-gray-300 focus:border-[#ca7d10] focus:ring-2 focus:ring-[#d9b662] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                type="text"
                id="offer"
                name="offer"
                placeholder="offer"
              />
              <ErrorMessage name="offer" component={() => (<div className="error">{errors.offer}</div>)} />
            </div>

            <div className="relative mb-4">
              <label htmlFor="duration" className="leading-7 text-sm text-gray-600">location: </label>
              <Field
                className="w-full bg-white rounded border border-gray-300 focus:border-[#ca7d10] focus:ring-2 focus:ring-[#d9b662] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                type="text"
                id="location"
                name="location"
                placeholder="location"
              />
              <ErrorMessage name="location" component={() => (<div className="error">{errors.location}</div>)} />
            </div>

            <div className='relative mb-4'>
                <Field name='idCarrer' as='select' className="w-full bg-white rounded border border-gray-300 focus:border-[#ca7d10] focus:ring-2 focus:ring-[#d9b662] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                    {allCarrers && allCarrers.map(carrer => (
                                <option key={carrer.idCarrer} value={carrer.idCarrer}>{carrer.name}</option>
                            ))}
                    </Field>
                </div>

                <div className='relative mb-4'>
                <Field name='idCompany' as='select' className="w-full bg-white rounded border border-gray-300 focus:border-[#ca7d10] focus:ring-2 focus:ring-[#d9b662] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                    {allCompanies && allCompanies.map(carrer => (
                                <option key={carrer.idCompanies} value={carrer.idCompanies}>{carrer.name}</option>
                            ))}
                    </Field>
                </div>
                
            <ButtonDefault type="submit" props="Enviar"></ButtonDefault>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default FormAddPublish;
