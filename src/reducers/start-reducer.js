import {SET_START_SEARCH_CITY} from "../types/start-types";

export const initialState = {
    city: ""
};

export const startReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_START_SEARCH_CITY: {
            return {...state, city: action.payload};
        }
        default: {
            return state;
        }
    }
};