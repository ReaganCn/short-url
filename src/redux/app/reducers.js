import { LOGIN, LOGOUT, REQUEST_USER_LINKS, RECEIVE_USER_LINKS } from "./types";

const defaultState = {
  isLoggedin: false,
  user: "",
  previousLinks: [],
  isFetching: null,
};

const appReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {
        isLoggedin: true,
        user: action.user,
      });
    case LOGOUT:
      return Object.assign({}, state, {
        isLoggedin: false,
      });
    case REQUEST_USER_LINKS:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_USER_LINKS:
      return Object.assign({}, state, {
        isFetching: false,
        previousLinks: action.data
      });
    default:
      return state;
  }
};

export { appReducer };
