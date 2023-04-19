import React, {useState, useEffect, useCallback} from 'react'
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const proxy = "http://localhost:5000/api";

  const getMenus = useCallback(async() => {
    setLoading(true);
    try {
      const response = await axios.get(`${proxy}/menus`);
      setData(response);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  }, [])

  useEffect(() => {
    getMenus();
  }, [getMenus]);

  return {getMenus, data, loading, error}
}

export default useFetch;