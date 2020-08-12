import { SUBMIT_URL, RECEIVE_SHORT } from "./types";
import { ON_CHANGE } from "../app/types";


const defaultState = {
    url: "",
    shorturl: "",
    domain: 'https://reagan-urlshort.glitch.me/shorturl/',
    isFetching: null
}

const shorteningReducer = ( state = defaultState, action) => {
        switch (action.type) {
            case ON_CHANGE:
                return Object.assign({}, state, {
                    [action.name]: action.value    
                })
            case SUBMIT_URL:
                return Object.assign ({}, state, {
                    isFetching: true,
                })
            case RECEIVE_SHORT:
                return Object.assign ({}, state, {
                    shorturl: action.shorturl,
                    isFetching: false,
                })
            default:
                return state
        }
}

export {shorteningReducer}