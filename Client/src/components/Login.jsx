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
import { useDispatch } from 'react-redux';
import { getUser } from '../redux/actions';
import Taskscomplete from "../assets/LandingImages/Taskscomplete.svg"


function Login() {
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [rememberMe, setRememberMe] = useState(false);//esto era para recordar el inicio de sesion

  // useEffect(() => {
  //   const tokenVacio = localStorage.getItem(StoreItem.token)
  //   console.log("tokenStorage", tokenVacio);
  //   const tokenStorage = localStorage.getItem(StoreItem.token);//accede al token del localstorage
  //   console.log("tokenStorage", tokenStorage);
  //   const decodedToken = jwtDecode(tokenStorage);
  //   console.log("decodificacion",decodedToken)
  //   if (tokenStorage !== "") {
  //     try {
  //       const decodedToken = jwtDecode(tokenStorage);
  //       const username = decodedToken.fullName;
  //       console.log("Usuario ya autenticado:", decodedToken.fullName);
  //       console.log("typeAdmin:", decodedToken.typeAdmin);
  //       Swal.fire({
  //         icon: "success",
  //         title: `¡Bienvenido de nuevo ${username}!`,
  //         text: `Vamos ver las pasantías?`,
  //         showDenyButton: true,
  //         confirmButtonText: "SI!",
  //         denyButtonText: `Volver al Login`,
  //       }).then((result) => {
  //         if (result.isConfirmed) {
  //           navigate("/home");
  //         } else if (result.isDenied) {
  //           navigate("/login");
  //         }
  //       });
  //     } catch (error) {
  //       console.log("Error al decodificar el token:", error);
  //     }
  //   }
  // }, [navigate]);

  return (
    <div><section className="  bg-[#d3eeff]">
    <div className="container px-5 py-20 mx-auto flex flex-wrap items-center">
      <div className=" text-left ALFA lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
        <h3 >Bienvenido de Nuevo</h3>
        <p className="leading-relaxed mt-4">Accede a tu cuenta para continuar explorando nuestras oportunidades de pasantías y seguir desarrollando tu carrera profesional. Si aún no tienes una cuenta, ¡regístrate y únete a nuestra comunidad!</p>
      <img className='w-[428px] h-[395px]' src={Taskscomplete} alt="" />
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
          errors.email = 'Ingresa tu email';
        } else if (values.password.length > 40) {
          errors.email = 'El nombre solo puede tener Letras y Espacios';
        }

        // Validación de la description
        if (!values.password) {
          errors.password = 'Ingresa tu contraseña';
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
              //console.log(rememberMe, "remenberMe");
              const decToken = jwtDecode(token);
              localStorage.setItem("token", token);
              const passwordUser = decToken.password;
              localStorage.setItem(StoreItem.passwordUser, JSON.stringify(passwordUser));
              if (!rememberMe) {
                const decToken = jwtDecode(token);
                const passwordUser = values.password;
                const email = values.email;
                /*console.log(
                  "Email y password recibida del servidor:",
                  email,
                  passwordUser,
                  decToken.idPeople,
                  decToken.idCarrer
                );*/
                localStorage.setItem(StoreItem.passwordUser, JSON.stringify(passwordUser));
                localStorage.setItem(StoreItem.idCarrer, JSON.stringify(decToken.idCarrer));
                localStorage.setItem(StoreItem.idPeople, JSON.stringify(decToken.idPeople));
                localStorage.setItem(StoreItem.email, JSON.stringify(email));
              }
              const idLocalStorage = JSON.parse(localStorage.getItem("idPeople"));
              dispatch(getUser(idLocalStorage))
              navigate(PATHROUTES.HOME);
              setSuccess(true);
              resetForm();
              //console.log(response)
              setTimeout(() => setSuccess(false), 5000);
            }
          })
          .catch((error) => {
            console.log(error.response.data);
            Swal.fire({
              title: `${error.response.data.error}`,
              text: "",
              icon: 'warning',
              confirmButtonText: 'Aceptar'
            });
          });
      }}
      >
        {({ errors }) => (
      <Form className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 pb-4 flex flex-col md:m-auto w-full mt-10 md:mt-18">
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
            {/* <div>
            <label><input type="checkbox" id="cbox1" value="first_checkbox" /> Recordar</label>
            </div> */}
            <ButtonDefault id="iniciarSesion" type="submit" props="Iniciar Sesion"></ButtonDefault>
        <p className="text-xs text-gray-500 mt-3">Tu cuenta en autogestion debe estar accesible.</p><Link className='p-2' to={PATHROUTES.SIGNIN}>Register</Link>
        </Form>)}
      </Formik>
    </div>
  </section></div>
  )
}

export default Login