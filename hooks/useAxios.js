// useAxios should take in a URL, and similar to useState, it should return an array with two elements. The first element is an array of data obtained from previous AJAX requests (since we will add to this array, it’s a piece of state). The second element is a function that will add a new object of data to our array.

import React, { useState, useEffect } from "react";
import axios from "axios";


const useAxios = (key, url) => {
  const [response, setResponse] = useState([]);

  const responseData = async (formatter = data  => data, restOfUrl = "") => {
    const response = await axios.get(`${url}${restOfUrl}`);
    setResponse(data => [...data, formatter(response.data)])
  }
  const clearResponse = () => setResponse([]);

  return[response, responseData, clearResponse]
}
export default useAxios;