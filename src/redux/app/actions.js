import { ON_CHANGE, LOGIN, LOGOUT } from "./types";

const handleChange = (event) => {
  const { name, value } = event.target;
  return {
    type: ON_CHANGE,
    name,
    value,
  };
};

const loginAction = () => {
  return {
    type: LOGIN,
  };
};

const logoutAction = () => {
  return {
    type: LOGOUT,
  };
};

export { handleChange, loginAction, logoutAction };
