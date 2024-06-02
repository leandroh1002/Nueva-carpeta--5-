import axios from "axios";
import Swal from "sweetalert2";

import {
  GET_CARRER,
  GET_COMPANIES,
  GET_PUBLISH,
} from "../actions/action-types";

const REACT_APP_API_URL = import.meta.env.VITE_BASE_URL;

const getAllPublish = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get(`${REACT_APP_API_URL}/publish`);
        return dispatch({
          type: GET_PUBLISH,
          payload: response.data,
        });
      } catch (error) {
        Swal.fire({
          title: `${error}`,
          text: "Error al obtener Publicaciones",
          icon: 'warning',
          confirmButtonText: 'Aceptar'
        });
      }
    };
  };
const getAllCarrer = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get(`${REACT_APP_API_URL}/carrer`);
        return dispatch({
          type: GET_CARRER,
          payload: response.data,
        });
      } catch (error) {
        Swal.fire({
          title: `${error}`,
          text: "Error al obtener las carreras",
          icon: 'warning',
          confirmButtonText: 'Aceptar'
        });
      }
    };
  };
const getAllCompanies = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get(`${REACT_APP_API_URL}/companies`);
        return dispatch({
          type: GET_COMPANIES,
          payload: response.data,
        });
      } catch (error) {
        Swal.fire({
          title: `${error}`,
          text: "Error al obtener las empresas",
          icon: 'warning',
          confirmButtonText: 'Aceptar'
        });
      }
    };
  };
  
const getUser = (userData) => {
  try {
    const { email, password } = userData;
    
  } catch (error) {
    console.log(error)
  }
}

  export {
    getAllPublish,
    getAllCarrer,
    getAllCompanies,
  };
  