import {
  ON_CHANGE,
  LOGIN,
  LOGOUT,
  REQUEST_USER_INFO,
  RECEIVE_USER_INFO,
  REQUEST_USER_LINKS,
  RECEIVE_USER_LINKS,
} from "./types";

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
    type: REQUEST_USER_INFO,
  };
};

const receiveInfo = (data) => {
  return {
    type: RECEIVE_USER_INFO,
    data,
  };
};

const requestLinks = () => {
  return {
    type: REQUEST_USER_LINKS,
  };
};

const receiveLinks = (data) => {
  return {
    type: RECEIVE_USER_LINKS,
    data,
  };
};

const loginAction = (user) => {
  return {
    type: LOGIN,
    user,
  };
};

const logoutAction = () => {
  return {
    type: LOGOUT,
  };
};

const getLinks = (username) => {
  return (dispatch) => {
    dispatch(requestLinks())
    return fetch(`https://reagan-urlshort.glitch.me/users/links?username=${username}`)
    .then (doc => doc.json())
    .then(data => dispatch(receiveLinks(data)) )
    .catch(err => console.log(err));
  };
};

export { handleChange, loginAction, logoutAction, getLinks };
