import { ActionTypes } from "../Constants/action-types";
export const setTags = (tags) => {
    return{
        type: ActionTypes.SET_TAGS,
        payload: tags
    };
};

export const setHarklist = (harklists) => {
    return{
        type: ActionTypes.SET_HARKLIST,
        payload: harklists
    };
};