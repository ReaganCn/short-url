import {
  SUBMIT_URL,
  RECEIVE_SHORT,
  POST_CUSTOM,
  RECEIVE_CUSTOM,
} from "./types";

const submitAction = () => {
  return {
    type: SUBMIT_URL,
  };
};

const receiveAction = (url) => {
  return {
    type: RECEIVE_SHORT,
    url,
  };
};

const postingCustom = () => {
  return {
    type: POST_CUSTOM,
  };
};

const receiveCustom = (custom) => {
  return {
    type: RECEIVE_CUSTOM,
    custom,
  };
};

const getShortUrl = (data, user) => {
  return (dispatch) => {
    dispatch(submitAction());
    //console.log("here")
    return fetch(
      `https://reagan-urlshort.glitch.me/shorturl?username=${user}`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((doc) => doc.json())
      .then((newUrl) => {
        dispatch(receiveAction(newUrl));
      })
      .catch((err) => console.log(err));
  };
};

const customizeLink = (id, url, username) => {
    const data = {customurl: url};
  return (dispatch) => {
    dispatch(postingCustom());
    return fetch(
      `https://reagan-urlshort.glitch.me/shorturl/custom/${username}?id=${id}`,
      {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(data),
      }
    ).then(doc => doc.json())
    .then (doc => {
        if(doc.custom){
            dispatch(receiveCustom(doc.custom))
        }
    })
  };
};

export { getShortUrl, customizeLink };
