import { ActionTypes } from "../Constants/action-types";

const initialState = {
    harklists: [],
}; 
export const harklistReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_HARKLIST:
            return {...state, harklists: payload };
            break;
        default:
            return state;
    }

} 
