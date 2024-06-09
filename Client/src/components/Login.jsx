import { Link, useNavigate } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import PATHROUTES from "../helpers/PathRoutes.helper";
import StoreItem from "../helpers/LocalStorage";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ButtonDefault from './ButtonDefault';
const REACT_APP_API_URL = import.meta.env.VITE_BASE_URL;
import { jwtDecode } from "jwt-decode";
import Swal from 'sweetalert2';


function Login() {
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);//esto era para recordar el inicio de sesion

  useEffect(() => {
    const tokenStorage = localStorage.getItem("token");//accede al token del localstorage
    console.log("tokenStorage", tokenStorage);
    if (tokenStorage) {
      console.log("tokenStorage", tokenStorage);
      try {
        const decodedToken = jwtDecode(tokenStorage);
        const username = decodedToken.fullName;
        console.log("Usuario ya autenticado:", decodedToken.fullName);
        console.log("typeAdmin:", decodedToken.typeAdmin);
        Swal.fire({
          icon: "success",
          title: `¡Bienvenido de nuevo ${username}!`,
          text: `Vamos ver las pasantías?`,
          showDenyButton: true,
          confirmButtonText: "SI!",
          denyButtonText: `Volver al Login`,
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/home");
          } else if (result.isDenied) {
            navigate("/login");
          }
        });
      } catch (error) {
        console.log("Error al decodificar el token:", error);
      }
    }
  }, [navigate]);

  return (
    <div><section className="text-gray-600 body-font">
    <div className="container px-5 py-20 mx-auto flex flex-wrap items-center">
      <div className="ALFA lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
        <h1 className="title-font font-medium text-3xl text-gray-900">Slow-carb next level shoindcgoitch ethical authentic, poko scenester</h1>
        <p className="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
      </div>
      <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validate={(values) => {
        let errors = {};

        // Validación nombre
        if (!values.email) {
          errors.email = 'Ingresa la Carrera';
        } else if (values.password.length > 40) {
          errors.email = 'El nombre solo puede tener Letras y Espacios';
        }

        // Validación de la description
        if (!values.password) {
          errors.password = 'Ingresa una descripción';
        } else if (values.password.length > 40) {
          errors.password = 'La descripción no puede tener más de 40 caracteres';
        }
        return errors;
      }}
      onSubmit={(values, { resetForm }) => {
        axios.post(`${REACT_APP_API_URL}/login`, values)
          .then((response) => {
            if (response.status === 201 || response.status === 200) {
              const token = response.data.token;
              console.log(rememberMe, "remenberMe");
              console.log("Token recibido del servidor:", token);
              localStorage.setItem("token", token);
              if (rememberMe) {
                const passwordUser = response.data.password;
                const email = response.data.email;
                console.log(
                  "Email y password recibida del servidor:",
                  email,
                  passwordUser
                );
                localStorage.setItem(StoreItem.passwordUser, JSON.stringify(passwordUser));
                localStorage.setItem(StoreItem.idPeople, JSON.stringify(idPeople));
                localStorage.setItem(StoreItem.email, JSON.stringify(email));
              }
              dispatch(guncion(idPeople))
              navigate("/home");
              setSuccess(true);
              resetForm();
              console.log(response)
              setTimeout(() => setSuccess(false), 5000);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }}
      >
        {({ errors }) => (
      <Form className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:m-auto w-full mt-10 md:mt-0">
        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
        <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email: </label>
              <Field
                className="w-full bg-white rounded border border-gray-300 focus:border-[#ca7d10] focus:ring-2 focus:ring-[#d9b662] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                type="text"
                id="email"
                name="email"
                placeholder="Email"
              />
              <ErrorMessage name="email" component={() => (<div className="error">{errors.email}</div>)} />
            </div>
            <div className="relative mb-4">
              <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password: </label>
              <Field
                className="w-full bg-white rounded border border-gray-300 focus:border-[#ca7d10] focus:ring-2 focus:ring-[#d9b662] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                type="text"
                id="password"
                name="password"
                placeholder="Password"
              />
              <ErrorMessage name="password" component={() => (<div className="error">{errors.password}</div>)} />
            </div>
            <div>
            <label>
              <input type="checkbox" id="cbox1" value="first_checkbox" /> Recordar</label>
            </div>
            <ButtonDefault type="submit" props="Iniciar Sesion"></ButtonDefault>
        <p className="text-xs text-gray-500 mt-3">Tu cuenta en autogestion debe estar accesible.</p><Link to={PATHROUTES.SIGNIN}>Register</Link>
        </Form>)}
      </Formik>
    </div>
  </section></div>
  )
}

export default Login