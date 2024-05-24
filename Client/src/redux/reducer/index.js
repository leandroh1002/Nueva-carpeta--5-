import { GET_PUBLISH} from "../actions/action-types";

const initialState = {
    allPublish: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {


        case GET_PUBLISH:
            return {...state,
            allPublish: payload,
        }
        default:
            return {
                ...state,
            };
    }
};

export default rootReducer;
