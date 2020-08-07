import { combineReducers } from "redux";
import { signinReducer } from "./login/reducers";

const rootReducer = combineReducers ({
    signin: signinReducer
})

export default rootReducer;