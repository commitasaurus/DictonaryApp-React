import { useState } from "react";
const useHttp = (url, headers) => {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const fetchDataHandler = async (event) => {
    try {
      event.preventDefault();
      const request = await fetch(`${url}${event.target.firstChild.value}`);
      //   setIsLoading(true);
      if (!request.ok) throw new Error({ ok: null, message: "Word not found" });
      console.log(request);
      const resData = await request.json();
      console.log(resData[0]);
      setData(resData[0]);
    } catch (err) {
      console.log("error");
    }
  };
  return [data, fetchDataHandler, isLoading];
};

export default useHttp;
