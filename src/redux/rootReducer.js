import { combineReducers } from "redux";
import { signinReducer } from "./login/reducers";
import { shorteningReducer } from "./short/reducers";

const rootReducer = combineReducers ({
    signin: signinReducer,
    shorten: shorteningReducer
})

export default rootReducer;