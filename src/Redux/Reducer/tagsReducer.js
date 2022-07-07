import { ActionTypes } from "../Constants/action-types";

const initialState = {
    tags: [],
}; 
export const tagsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_TAGS:
            return {...state, tags: payload };
            break;
        default:
            return state;
    }

} 