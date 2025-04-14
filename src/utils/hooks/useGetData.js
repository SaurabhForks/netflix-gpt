import { useEffect, useState } from "react";

const useGetData = (url, apiOptions) => {
  const [apiData, setApiData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!url) return;
    fetchData(url, apiOptions);
  }, [url, apiOptions]);

  const fetchData = async (siteurl, apiOptions = null) => {
    setIsLoading(true);
    try {
      const res = await fetch(siteurl, apiOptions);
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
