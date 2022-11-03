import { useCallback, useState } from "react";
import { headers, Loading } from "../utils/Constants";

const useFetch = () => {
  const [data, setData] = useState();
  const fetchData = useCallback(
    async (url, method, payload = {}, body = {}) => {
      setData(Loading);
      await fetch(url, {
        method: method,
        headers: {
          ...headers,
          ...(method !== "GET" ? { "Content-Type": "application/json" } : {}),
        },
        payload: { ...payload },
        ...(method === "GET" ? {} : { body: JSON.stringify(body) }),
      })
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        })
        .catch((error) => setData(error));
    },
    [setData]
  );

  return [data, fetchData];
};

export default useFetch;
