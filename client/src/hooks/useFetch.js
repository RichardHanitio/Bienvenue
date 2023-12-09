import {useState, useEffect} from 'react'
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  axios.defaults.baseURL = process.env.REACT_APP_BASEURL;

  useEffect(() => {
    const fetchData = async() => {
      try {
        console.log("data")
        const res = await axios.get(url);        
        setData(res.data);
      } catch(err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();  
  }, [url])

  return {data, loading, error}
}

export default useFetch;