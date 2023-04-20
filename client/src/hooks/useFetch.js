import {useState, useEffect} from 'react'
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async() => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch(err) {
      setError(err);
    }
    setLoading(false);
  }

  const reFetch = async(newUrl) => {
    setLoading(true);
    try {
      let res;
      if(!newUrl) {
        res = await axios.get(url);
      } else {
        res = await axios.get(newUrl);
      }
      setData(res.data);
    } catch(err) {
      setError(err);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])


  return {data, loading, error, reFetch}
}

export default useFetch;