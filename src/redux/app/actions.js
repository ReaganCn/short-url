import { ON_CHANGE } from "./types"


const handleChange = (event) => {
    const { name, value } = event.target;
    return {
      type: ON_CHANGE,
      name,
      value,
    };
  };


export {handleChange};