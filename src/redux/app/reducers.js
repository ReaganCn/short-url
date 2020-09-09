import {
  LOGIN,
  LOGOUT,
  REQUEST_USER_LINKS,
  RECEIVE_USER_LINKS,
  UPDATE_COPY,
  DEFAULT,
  AUTO_LOGIN,
} from "./types";

const defaultState = {
  isLoggedin: false,
  user: "",
  id:null,
  previousLinks: [],
  isFetching: null,
  firstName: ""
};

const appReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {
        isLoggedin: true,
        user: action.user,
      });
    case AUTO_LOGIN:
      return Object.assign({}, state, {
        isLoggedin: true,
        id: action.data._id,
        user: action.data.userName,
        firstName: action.data.firstName
      })
    case LOGOUT:
      return Object.assign({}, state, {
        isLoggedin: false,
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
          item.copied ? item.copied = false : item.copied = true
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
