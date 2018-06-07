import {makeActionCreator} from "./action-creator";
import {SET_START_SEARCH_CITY, SET_START_SEARCH_REGION} from "../types/start-types";

export const setStartSearchCity = makeActionCreator(SET_START_SEARCH_CITY, 'payload');
export const setStartSearchRegion = makeActionCreator(SET_START_SEARCH_REGION, 'payload');