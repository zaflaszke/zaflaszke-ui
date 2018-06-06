import {combineReducers} from "redux";
import {startReducer} from "./start-reducer";

export const rootReducer = combineReducers({
    start: startReducer
});

export default rootReducer;