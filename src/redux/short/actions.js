import { SUBMIT_URL, RECEIVE_SHORT } from "./types";



const submitAction = () => {
    return {
        type: SUBMIT_URL
    }
}

const receiveAction = (shorturl) => {
    return {
        type: RECEIVE_SHORT,
        shorturl
    }
}



const getShortUrl = (data, user) => {
    return (dispatch) => {
        dispatch(submitAction());
        //console.log("here")
        return fetch(`https://reagan-urlshort.glitch.me/shorturl?username=${user}`, {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(data),
        }).then( doc => doc.json())
        .then (newUrl => {
            dispatch(receiveAction(newUrl.short_url))
        })
        .catch(err => console.log(err))
    }
}


export {getShortUrl};
