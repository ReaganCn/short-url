import { LOGIN, LOGOUT } from "./types"

const defaultState = {
  isLoggedin: true,
};

const appReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      
       return Object.assign({},state, {
            isLoggedin: true
        })
    case LOGOUT:
       return Object.assign({},state, {
            isLoggedin: false
        })
    default:
      return state;
  }
};

export { appReducer }
