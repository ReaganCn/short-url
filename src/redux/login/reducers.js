import { ON_CHANGE } from "./types";


const defaultState = {
firstname: "",
username: "",
password: "",
confirmpassword: ""
}

const signinReducer = ( state = defaultState, action) => {
        switch (action.type) {
            case ON_CHANGE:
                return Object.assign({}, state, {
                    [action.name]: action.value    
                })
            default:
                return state
        }
}

export {signinReducer}