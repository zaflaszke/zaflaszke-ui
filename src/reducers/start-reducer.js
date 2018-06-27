import {FETCHED_REGIONS, SET_START_SEARCH_CITY, SET_START_SEARCH_REGION} from "../types/start-types";

export const initialState = {
    city: "",
    region: "",

    regions: [],
};

export const startReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_START_SEARCH_CITY: {
            return {...state, city: action.payload};
        }
        case SET_START_SEARCH_REGION: {
            return {...state, region: action.payload};
        }
        case FETCHED_REGIONS: {
            return {...state, regions: action.payload}
        }
        default: {
            return state;
        }
    }
};