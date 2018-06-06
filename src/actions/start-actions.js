import {makeActionCreator} from "./action-creator";
import {SET_START_SEARCH_CITY} from "../types/start-types";

export const setStartSearchCity = makeActionCreator(SET_START_SEARCH_CITY, 'payload');