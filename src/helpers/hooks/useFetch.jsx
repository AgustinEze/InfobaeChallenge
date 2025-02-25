import { useState, useEffect } from "react";
import axios from "axios";

const APP_ID = import.meta.env.VITE_APP_ID;

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${url}`, {
        headers: {
          "App-Id": APP_ID,
        },
      });
      setData(response.data);
    } catch (err) {
      setError(err.response?.data?.message || "Error al obtener datos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error };
}
