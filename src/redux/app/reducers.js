import {
  LOGIN,
  LOGOUT,
  REQUEST_USER_LINKS,
  RECEIVE_USER_LINKS,
  UPDATE_COPY,
  DEFAULT,
  AUTO_LOGIN,
  FAILED_AUTO_LOGIN,
  REQUEST_UPDATE,
  RECIEVE_UPDATE,
  ON_CHANGE,
  RESET_ALERT,
  SET_ALERT
} from "./types";

const defaultState = {
  isLoggedin: false,
  autoLogin: false,
  user: "",
  id: null,
  previousLinks: [],
  isFetching: null,
  isFetchingUpdate: null,
  firstName: "",
  isLogging: true,
  newPassword: "",
  newFirstName: "",
  confirmPassword: "",
  alert: false,
  alertMessage: "",
};

const appReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {
        isLoggedin: true,
        user: action.user.userName,
        firstName: action.user.firstName,
        newFirstName: action.user.firstName,
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
        newFirstName: action.data.firstName,
      });
    case LOGOUT:
      return Object.assign({}, state, {
        isLoggedin: false,
        isLogging: false,
      });
    case ON_CHANGE:
      if (action.name !== "newFirstName") {
        return Object.assign({}, state, {
          [action.name]: action.value,
        });
      } else {
        return Object.assign({}, state, {
          newFirstName: action.value,
        });
      }
    case REQUEST_UPDATE:
      return Object.assign({}, state, {
        isFetchingUpdate: true,
      });
    case RECIEVE_UPDATE:
      return Object.assign({}, state, {
        firstName: action.name,
        isFetchingUpdate: false,
        alert: true,
        alertMessage: action.message,
      });
    case SET_ALERT:
      return Object.assign({}, state, {
        alert: true,
        alertMessage: action.message
      })
    case RESET_ALERT:
      return Object.assign({}, state, {
        alert: false,
        alertMessage: "",
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
