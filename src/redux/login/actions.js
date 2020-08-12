import { SUBMIT_DETAILS, ON_CHANGE, AUTH_USER } from "./types";

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

export {authenticateUser};
