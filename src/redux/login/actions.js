import { SUBMIT_DETAILS, ON_CHANGE } from "./types";

const submitDetailsAction = () => {
  return {
    type: SUBMIT_DETAILS,
  };
};

const handleChange = (event) => {
  const { name, value } = event.target;

  return {
    type: ON_CHANGE,
    name,
    value,
  };
};

const postingDetails = (data) => {
    return (dispatch) => {
     return fetch('https://reagan-urlshort.glitch.me/users/add', {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
        .then((result) => {
          console.log(result)
        })
     })   
    }
};

export {handleChange, postingDetails};
