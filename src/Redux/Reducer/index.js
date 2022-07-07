import { combineReducers } from "redux";
import { tagsReducer} from "./tagsReducer";
import { harklistReducer } from "./harklistReducer";

const reducers = combineReducers({
    allTags: tagsReducer,
    allHarklists: harklistReducer,
});

export default reducers;