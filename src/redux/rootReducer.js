import { combineReducers } from "redux";
import { signinReducer } from "./login/reducers";
import { shorteningReducer } from "./short/reducers";
import { appReducer } from "./app/reducers";

const rootReducer = combineReducers ({
    signin: signinReducer,
    shorten: shorteningReducer,
    app: appReducer
})

export default rootReducer;