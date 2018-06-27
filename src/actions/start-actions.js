import {makeActionCreator} from "./action-creator";
import {FETCHED_REGIONS, SET_START_SEARCH_CITY, SET_START_SEARCH_REGION} from "../types/start-types";
import RegionService from "../services/region-service";

const regionService = new RegionService();

export const setStartSearchCity = makeActionCreator(SET_START_SEARCH_CITY, 'payload');
export const setStartSearchRegion = makeActionCreator(SET_START_SEARCH_REGION, 'payload');


export const fetchedRegions = makeActionCreator(FETCHED_REGIONS, 'payload');

export const fetchRegions = () => {
    return (dispatch) => {
        return regionService.getAllRegions()
            .then(response => {
                dispatch(fetchedRegions(response.data));
            });
    };
};