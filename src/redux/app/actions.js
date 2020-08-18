import { ON_CHANGE, LOGIN, LOGOUT, REQUEST_USER_INFO, RECEIVE_USER_INFO } from "./types";

const handleChange = (event) => {
  const { name, value } = event.target;
  return {
    type: ON_CHANGE,
    name,
    value,
  };
};

const requestInfo = () => {
  return {
    type: REQUEST_USER_INFO
  }
}

const receiveInfo = (data) => {
  return {
    type: RECEIVE_USER_INFO,
    data
  }
}

const loginAction = (user) => {
  return {
    type: LOGIN,
    user
  };
};

const logoutAction = () => {
  return {
    type: LOGOUT,
  };
};

export { handleChange, loginAction, logoutAction };
