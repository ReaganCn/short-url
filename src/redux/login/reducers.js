import { ON_CHANGE, AUTH_USER, LOGIN_DEMO, RESET_LOGINS } from "./types";

const defaultState = {
  firstname: "",
  username: "",
  password: "",
  confirmpassword: "",
  authenticated: false,
};

const signinReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ON_CHANGE:
      if (action.name !== "username") {
        return Object.assign({}, state, {
          [action.name]: action.value,
        });
      } else {
        return Object.assign({}, state, {
          username: action.value.split(" ").join("").toLowerCase(),
        });
      }
    case AUTH_USER:
      if (action.value) {
        return Object.assign({}, state, {
          authenticated: true,
        });
      } else {
        return Object.assign({}, state, {
          authenticated: null,
        });
      }
    case LOGIN_DEMO:
      return Object.assign({}, state, {
        username: "demo1",
        password: "demo1",
      });
    case RESET_LOGINS: 
      return Object.assign({}, state, {
        username: "",
        password: "",   
      })
    default:
      return state;
  }
};

export { signinReducer };
