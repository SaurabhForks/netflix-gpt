import { useEffect, useState } from "react";

const useGetData = (url) => {
  const [apiData, setApiData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetchData(url);
  }, [url]);

  const fetchData = async (siteurl) => {
    setIsLoading(true);

    try {
      const res = await fetch(siteurl);
      const data = await res.json();
      setApiData(data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };
  return { apiData, error, isLoading };
};
export default useGetData;
