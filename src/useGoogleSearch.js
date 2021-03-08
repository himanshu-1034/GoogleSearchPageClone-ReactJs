import { useState, useEffect } from "react";
import { REACT_APP_API_KEY, REACT_APP_CONTEXT_KEY } from "./config";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${REACT_APP_API_KEY}&cx=${REACT_APP_CONTEXT_KEY}&q=${term}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
        })
        .catch((err) => console.log(err));
    };
    fetchData();
  }, [term]);
  return { data };
};

export default useGoogleSearch;
