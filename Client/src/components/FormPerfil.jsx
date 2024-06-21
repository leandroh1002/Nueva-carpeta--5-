import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import ButtonDefault from './ButtonDefault';
import axios from 'axios';
import UploadWidget from './UploadWidget';
import ButtonBack from './ButtonBack';
import { useSelector } from 'react-redux';

const REACT_APP_API_URL = import.meta.env.VITE_BASE_URL;

function FormPerfil() {
  const [success, setSuccess] = useState(false);
  const userLoggedInfo = useSelector(state => state.UserLogued);
  console.log("usuario logueado", userLoggedInfo);

  return (
    <>
      <ButtonBack type="button" props="Volver"/>
      <Formik
        initialValues={{
          idPeople: userLoggedInfo.idPeople,
          fullName: userLoggedInfo.fullName,
          aboutMe: userLoggedInfo.aboutMe,
          email: userLoggedInfo.email,
          password: userLoggedInfo.password,
          phone: userLoggedInfo.phone,
          location: userLoggedInfo.location,
          country: userLoggedInfo.country,
          image: userLoggedInfo.image,
          yearsOfCarrer: userLoggedInfo.yearsOfCarrer,
        }}
      
        validate={(values) => {
          let errors = {};

          // Validación nombre
          if (!values.fullName) {
            errors.fullName = 'Ingresa la Carrera';
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.fullName)) {
            errors.fullName = 'El nombre solo puede tener Letras y Espacios';
          }

          // Validación de la AboutMe
          if (!values.aboutMe) {
            errors.aboutMe = 'Ingresa una descripción';
          } else if (values.aboutMe.length > 500) {
            errors.aboutMe = 'La descripción no puede tener más de 40 caracteres';
          }
          // Validación nombre
          if (!values.location) {
            errors.location = 'Ingresa la Carrera';
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.location)) {
            errors.location = 'El nombre solo puede tener Letras y Espacios';
          }

          // Validación de la AboutMe
          if (!values.country) {
            errors.country = 'Ingresa una descripción';
          } else if (values.country.length > 500) {
            errors.country = 'La descripción no puede tener más de 40 caracteres';
          }

          // Validación de la imagen (URL)
          if (!values.image) {
            errors.image = 'Ingresa la URL de la imagen';
          } else if (!/^https?:\/\/\S+$/.test(values.image)) {
            errors.image = 'Ingresa una URL válida';
          }

          // Validación de la duration
          if (!values.yearsOfCarrer) {
            errors.yearsOfCarrer = 'Aquí va la duración de la carrera';
          } else if (!/^\d+$/.test(values.yearsOfCarrer)) {
            errors.yearsOfCarrer = 'Solo números';
          }
          
          if (!values.phone) {
            errors.phone = 'Aquí va la duración de la carrera';
          } else if (!/^\d+$/.test(values.phone)) {
            errors.phone = 'Solo números';
          }
          return errors;
        }}
        onSubmit={(values) => {
          console.log("valores ",values);
          axios.put(`${REACT_APP_API_URL}/people`, values)
            .then((response) => {
              if (response.status === 201 || response.status === 200) {
                setSuccess(true);
                setTimeout(() => setSuccess(false), 5000);
              }
            })
            .catch((error) => {
              console.log(error);
            });
          console.log(values)
        }}
      >

        {({ errors, setFieldValue }) => {
          useEffect(() => {

          }, []);

          return (
          <Form className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:m-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Perfil</h2>
            <div className="relative mb-4">
              <label htmlFor="fullName" className="leading-7 text-sm text-gray-600">Nombre: </label>
              <Field
                className="w-full bg-white rounded border border-gray-300 focus:border-[#ca7d10] focus:ring-2 focus:ring-[#d9b662] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Ej. EDET"
              />
              <ErrorMessage name="fullName" component={() => (<div className="error">{errors.fullName}</div>)} />
            </div>

            <div className="relative mb-4">
              <label htmlFor="aboutMe" className="leading-7 text-sm text-gray-600">Descripción: </label>
              <Field
                className="w-full bg-white rounded border border-gray-300 focus:border-[#ca7d10] focus:ring-2 focus:ring-[#d9b662] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                type="text"
                id="aboutMe"
                name="aboutMe"
                placeholder="Descripción"
              />
              <ErrorMessage name="aboutMe" component={() => (<div className="error">{errors.aboutMe}</div>)} />
            </div>

            <div className="relative mb-4">
              <label htmlFor="phone" className="leading-7 text-sm text-gray-600">phone: </label>
              <Field
                className="w-full bg-white rounded border border-gray-300 focus:border-[#ca7d10] focus:ring-2 focus:ring-[#d9b662] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                type="text"
                id="phone"
                name="phone"
                placeholder="phone"
              />
              <ErrorMessage name="phone" component={() => (<div className="error">{errors.phone}</div>)} />
            </div>

            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">email: </label>
              <Field
                className="w-full bg-white rounded border border-gray-300 focus:border-[#ca7d10] focus:ring-2 focus:ring-[#d9b662] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                type="text"
                id="email"
                name="email"
                placeholder="Descripción"
              />
              <ErrorMessage name="email" component={() => (<div className="error">{errors.email}</div>)} />
            </div>

            <div className="relative mb-4">
              <label htmlFor="password" className="leading-7 text-sm text-gray-600">password: </label>
              <Field
                className="w-full bg-white rounded border border-gray-300 focus:border-[#ca7d10] focus:ring-2 focus:ring-[#d9b662] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                type="text"
                id="password"
                name="password"
                placeholder="password"
              />
              <ErrorMessage name="password" component={() => (<div className="error">{errors.password}</div>)} />
            </div>

            <div className="relative mb-4">
              <label htmlFor="location" className="leading-7 text-sm text-gray-600">location: </label>
              <Field
                className="w-full bg-white rounded border border-gray-300 focus:border-[#ca7d10] focus:ring-2 focus:ring-[#d9b662] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                type="text"
                id="location"
                name="location"
                placeholder="location"
              />
              <ErrorMessage name="location" component={() => (<div className="error">{errors.location}</div>)} />
            </div>

            <div className="relative mb-4">
              <label htmlFor="country" className="leading-7 text-sm text-gray-600">country: </label>
              <Field
                className="w-full bg-white rounded border border-gray-300 focus:border-[#ca7d10] focus:ring-2 focus:ring-[#d9b662] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                type="text"
                id="country"
                name="country"
                placeholder="country"
              />
              <ErrorMessage name="country" component={() => (<div className="error">{errors.country}</div>)} />
            </div>

            <div className="relative mb-4">
              <label htmlFor="image" className="leading-7 text-sm text-gray-600">Imagen: </label>
              <UploadWidget
                setPublicId={(imageUrl) => setFieldValue('image', imageUrl)} // Actualizamos el valor del campo 'image' en Formik
              />
              <Field
                className="w-full bg-white rounded border border-gray-300 focus:border-[#ca7d10] focus:ring-2 focus:ring-[#d9b662] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                type="text"
                id="image"
                name="image"
                placeholder="URL"
              />
              <ErrorMessage name="image" component={() => (<div className="error">{errors.image}</div>)} />
            </div>

            <div className="relative mb-4">
              <label htmlFor="yearsOfCarrer" className="leading-7 text-sm text-gray-600">Duración: </label>
              <Field
                className="w-full bg-white rounded border border-gray-300 focus:border-[#ca7d10] focus:ring-2 focus:ring-[#d9b662] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                type="number"
                id="yearsOfCarrer"
                name="yearsOfCarrer"
                placeholder="Anio que cursa"
              />
              <ErrorMessage name="yearsOfCarrer" component={() => (<div className="error">{errors.duration}</div>)} />
            </div>
            <ButtonDefault type="submit" props="Enviar"></ButtonDefault>
          </Form>
        )}}
      </Formik>
    </>
  );
}

export default FormPerfil;
