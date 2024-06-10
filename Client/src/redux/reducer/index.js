import { ACCESS_BACK_SAVE_DATA, GET_CARRER, GET_COMPANIES, GET_PUBLISH, GET_USERLOGUED} from "../actions/action-types";

const initialState = {
    allPublish: [],
    allCarrer: [],
    allCompanies: [],
    UserLogued: [],//hay que ver porque capaz que puedo usar el token para los cambios
};

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {


        case GET_PUBLISH:
            return {...state,
            allPublish: payload,
        }
        case GET_CARRER:
            return {...state,
            allCarrer: payload,
        }
        case GET_USERLOGUED:
            return {...state,
            UserLogued: payload,
        }
        case GET_COMPANIES:
            return {...state,
            allCompanies: payload,
        }
        case ACCESS_BACK_SAVE_DATA:
            return {...state,
            UserLogued: payload,
        }
        default:
            return {
                ...state,
            };
    }
};

export default rootReducer;
