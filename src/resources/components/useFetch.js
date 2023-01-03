import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url, condition) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    axios
      .get(url)
      .then(res => {
        return res.data;
      })
      .then(data => {
        setIsPending(false);
        setData(data);
        setError(null);
      })
      .catch(err => {
        setError(err.message);
        setIsPending(false);
      });
  }, [condition, url])

  return { data, isPending, error };
}

export default useFetch;