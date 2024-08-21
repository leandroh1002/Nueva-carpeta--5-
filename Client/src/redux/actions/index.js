import axios from "axios";
import Swal from "sweetalert2";

import {
  ACCESS_BACK_SAVE_DATA,
  GET_CARRER,
  GET_COMPANIES,
  GET_PUBLISH,
  USERLOGOUT,
  GET_USERLOGUED,
  FILTERED_PUBLISH,
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
const getFilteredPublish = (idCarrer) => {
  console.log(idCarrer);
  
    return async (dispatch) => {
      try {
        const response = await axios.get(`${REACT_APP_API_URL}/publishes/filtered/${idCarrer}`);
        return dispatch({
          type: FILTERED_PUBLISH,
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
  return async (dispatch) => {
    try {
      const idPeople = userData;
      const response = await axios.get(`${REACT_APP_API_URL}/people/${idPeople}`);
      console.log("respuesta url", `${REACT_APP_API_URL}/people/${idPeople}`)
      console.log("respuesta del id action", response.data)
      dispatch({
        type: GET_USERLOGUED,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

const logOutUser = () => {
  return async (dispatch) => {
    try {
      console.log("ese es el log del vaciado del global");
      await dispatch({
        type: USERLOGOUT,
        payload: [],
      });
    } catch (error) {
      console.log(error);
    }
  };
};


  export {
    getAllPublish,
    getAllCarrer,
    getAllCompanies,
    logOutUser,
    getFilteredPublish,
    getUser
  };
  