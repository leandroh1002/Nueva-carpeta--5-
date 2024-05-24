import axios from "axios";
import Swal from "sweetalert2";

import {
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

  export {
    getAllPublish,
  };
  