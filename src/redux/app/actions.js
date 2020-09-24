import {
  ON_CHANGE,
  LOGIN,
  LOGOUT,
  REQUEST_USER_INFO,
  RECEIVE_USER_INFO,
  REQUEST_USER_LINKS,
  RECEIVE_USER_LINKS,
  UPDATE_COPY,
  DEFAULT,
  AUTO_LOGIN,
  FAILED_AUTO_LOGIN,
  REQUEST_UPDATE,
  RECIEVE_UPDATE,
  RESET_ALERT, SET_ALERT
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

const resetAlertAction = () => {
return {
  type: RESET_ALERT
}
}

const setAlertAction = (message) => {
  return {
    type: SET_ALERT,
    message
  }
  }

const requestUpdate = () => {
  return {
    type: REQUEST_UPDATE
  }
}

const receiveUpdate = (name, message) => {
  return {
    type: RECIEVE_UPDATE,
    name,
    message
  }
}

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

const updateCopyLinks  = (id) => {
  return {
    type: UPDATE_COPY,
    id
  }
}

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
    return fetch(`https://www.shrtly.ga/users/links?username=${username}`)
    .then (doc => doc.json())
    .then(data => dispatch(receiveLinks(data)) )
    .catch(err => console.log(err));
  };
};

const getUser = (data) => {
  return {
    type: AUTO_LOGIN,
    data
  }
}

const failedAutoLogin = () => {
  return {
    type: FAILED_AUTO_LOGIN
  }
}

const receiveUser = () => {
  return (dispatch) => {
    return fetch("https://www.shrtly.ga/users/user", {
      credentials:'include',
      headers: {
        "Content-type": "application/json",
      },
    })
    .then(doc => {
     if(doc){
      return doc.json()
     }
    })
    .then(doc => {
      if(doc.userName){
        dispatch(getUser(doc))
      } else {
        dispatch(failedAutoLogin())
      }
    })
  }
}

const logOutRequest = () => {
  return (dispatch) => {
    return fetch('https://www.shrtly.ga/users/user/logout',{
      credentials: 'include'
    })
    .then(doc => doc.json())
    .then(doc => {
      if (doc.logout){
      dispatch(logoutAction())
      }
    })
    .catch(err => console.log(err))
  }
}

const updateDetailsRequest = (data) => {
  return (dispatch) => {
    dispatch(requestUpdate())
    return fetch("https://www.shrtly.ga/users/update", {
    method: "POST",  
    credentials: 'include',
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data)
    })
    .then(doc => doc.json())
    .then(doc => {
      if(doc.user.userName){
        dispatch(receiveUpdate(doc.user.firstName, "Profile Saved"))
        setTimeout(()=> {
          dispatch(resetAlertAction())
        }, 4000)
      }
    })
  }
}

export { handleChange, loginAction, logoutAction, getLinks, updateCopyLinks, receiveUser, logOutRequest, updateDetailsRequest, resetAlertAction, setAlertAction };
