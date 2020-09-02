import { SUBMIT_URL, RECEIVE_SHORT, POST_CUSTOM, RECEIVE_CUSTOM } from "./types";
import { ON_CHANGE } from "../app/types";

const defaultState = {
  linkid: "",
  url: "",
  shorturl: "",
  customurl: "",
  custom: "",
  domain: "https://reagan-urlshort.glitch.me/shorturl/",
  isFetching: null,
  fetchingCustom: false
};

const shorteningReducer = (state = defaultState, action) => {
  switch (action.type) {
    case POST_CUSTOM:
        return Object.assign({}, state, {
          fetchingCustom: true
        })
    case RECEIVE_CUSTOM:
        return Object.assign({}, state, {
          previousCustom: state.custom,
          custom: action.custom,
          fetchingCustom: false
        })
    case ON_CHANGE:
      if (action.name === "url") {
        return Object.assign({}, state, {
          [action.name]: action.value,
          shorturl: "",
          custom: ""
        });
      } else if(action.name === "customurl"){
        return Object.assign({}, state, {
          customurl: action.value.split(" ").join("")
      })
      } 
      else {
        return Object.assign({}, state, {
          [action.name]: action.value,
        });
      }

    case SUBMIT_URL:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_SHORT:
      return Object.assign({}, state, {
        linkid: action.url.id,
        previousShort: state.shorturl,
        shorturl: action.url.short_url,
        isFetching: false,
      });
    default:
      return state;
  }
};

export { shorteningReducer };
