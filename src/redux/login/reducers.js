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
                if (action.name !== "username"){
                    return Object.assign({}, state, {
                        [action.name]: action.value    
                    })
                }else {
                    return Object.assign({}, state, {
                        username: action.value.split(" ").join("").toLowerCase()
                    })
                }
            default:
                return state
        }
}

export {signinReducer}