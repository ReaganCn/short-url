import { LOGIN, LOGOUT } from "./types"

const defaultState = {
  isLoggedin: true,
  user: "",
  previousUrls: []
};

const appReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      
       return Object.assign({},state, {
            isLoggedin: true,
            user: action.user
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
