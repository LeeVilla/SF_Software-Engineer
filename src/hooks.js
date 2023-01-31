import { useState, useEffect } from "react";
import axios from "axios";

function useFlip(defaultFlipState = true) {
  const [isFlipped, setFlipped] = useState(defaultFlipState);

  const flip = function () {
    setFlipped((isUp) => !isUp);
  };
  return [isFlipped, flip];
}

function useAxios(lsKey, baseUrl) {
  const [res, setRes] = useLocalStorage(lsKey);

  const addResponse = async function (
    formatter = (data) => data,
    restOfUrl = ""
  ) {
    const r = await axios.get(`${baseUrl}${restOfUrl}`);
  };

  const clearRes = function () {
    setRes([]);

    return [res, addResponse, clearRes];
  };

  function useLocalStorage(key, defaultValue = []) {
    if (localStorage.getItem(key)) {
      defaultValue = JSON.parse(localStorage.getItem(key));
    }
    const [value, setValue] = useState(defaultValue);

    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);
    return [value, setValue];
  }
}
export default useLocalStorage;

export { useFlip, useAxios, useLocalStorage };
