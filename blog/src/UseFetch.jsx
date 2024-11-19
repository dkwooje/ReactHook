import { useState, useEffect } from "react";



export default function useFetch(baseUrl,initialType){
       
  const [data, setData] = useState(null);

  function fetchUrl(type){
    fetch(baseUrl + '/' + type) 
    .then((res) => res.json())
    .then((res) => setData(res));
  }

  useEffect(() =>{
    fetchUrl(initialType)
  },[]);


  return {
    data,
    fetchUrl,
  }
}

