import { SUBMIT_DETAILS, ON_CHANGE, AUTH_USER, LOGIN_DEMO, RESET_LOGINS } from "./types";

const submitDetailsAction = () => {
  return {
    type: SUBMIT_DETAILS,
  };
};


const authenticateUser = (value) => {
  return {
    type: AUTH_USER,
    value
  }
}

const loginDemoAction = () => {
  return {
    type: LOGIN_DEMO
  }
}

const resetLoginsAction = () => {
  return {
    type: RESET_LOGINS
  }
}

export {authenticateUser, loginDemoAction, resetLoginsAction}; 