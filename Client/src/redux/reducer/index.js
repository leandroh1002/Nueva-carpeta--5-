import { GET_CARRER, GET_COMPANIES, GET_PUBLISH} from "../actions/action-types";

const initialState = {
    allPublish: [],
    allCarrer: [],
    allCompanies: [],
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
        case GET_COMPANIES:
            return {...state,
            allCompanies: payload,
        }
        default:
            return {
                ...state,
            };
    }
};

export default rootReducer;
