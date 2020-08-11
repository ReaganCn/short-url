import { SUBMIT_DETAILS, ON_CHANGE, AUTH_USER } from "./types";

const submitDetailsAction = () => {
  return {
    type: SUBMIT_DETAILS,
  };
};

const handleChange = (event) => {
  const { name, value } = event.target;
  return {
    type: ON_CHANGE,
    name,
    value,
  };
};

const authenticateUser = (value) => {
  return {
    type: AUTH_USER,
    value
  }
}

export {handleChange, authenticateUser};
