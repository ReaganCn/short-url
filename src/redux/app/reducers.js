import {
  LOGIN,
  LOGOUT,
  REQUEST_USER_LINKS,
  RECEIVE_USER_LINKS,
  UPDATE_COPY,
  DEFAULT,
  AUTO_LOGIN,
  FAILED_AUTO_LOGIN,
} from "./types";

const defaultState = {
  isLoggedin: false,
  autoLogin: false,
  user: "",
  id: null,
  previousLinks: [],
  isFetching: null,
  firstName: "",
  isLogging: true,
};

const appReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {
        isLoggedin: true,
        user: action.user.userName,
        firstName: action.user.firstName
      });
    case FAILED_AUTO_LOGIN:
      return Object.assign({}, state, {
        isLogging: false,
      });
    case AUTO_LOGIN:
      return Object.assign({}, state, {
        isLoggedin: true,
        autoLogin: true,
        id: action.data._id,
        user: action.data.userName,
        firstName: action.data.firstName,
      });
    case LOGOUT:
      return Object.assign({}, state, {
        isLoggedin: false,
        isLogging: false,
      });
    case REQUEST_USER_LINKS:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_USER_LINKS:
      const newData = action.data.map((item) => {
        item.copy = false;
        return item;
      });
      return Object.assign({}, state, {
        isFetching: false,
        previousLinks: newData,
      });
    case UPDATE_COPY:
      const newLinks = state.previousLinks.map((item) => {
        if (item._id === action.id) {
          item.copied ? (item.copied = false) : (item.copied = true);
        }
        return item;
      });
      return Object.assign({}, state, {
        previousLinks: newLinks,
      });
    default:
      return state;
  }
};

export { appReducer };
