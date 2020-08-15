import { LOGIN, LOGOUT } from "./types"

const defaultState = {
  isLoggedin: false,
};

const appReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
        Object.assign({},state, {
            isLoggedin: true
        })
    case LOGOUT:
        Object.assign({},state, {
            isLoggedin: false
        })
    default:
      return state;
  }
};

export { appReducer }
