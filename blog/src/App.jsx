import { useEffect, useState } from "react";

const baseUrl = "https://jsonplaceholder.typicode.com";


function App() {

  const [data, setData] = useState(null);

  function fetchUrl(type){
    fetch(baseUrl + '/' + type) 
    .then((res) => res.json())
    .then((res) => setData(res));
  }

  useEffect(() =>{
    fetchUrl("users")//users 대신 posts , todos 기입
  },[]);

  console.log(data);

  return (
    <div>
      <h1>useFetch</h1>
      <button onClick={()=> fetchUrl("users")}>Users</button>
      <button onClick={()=> fetchUrl("posts")}>Posts</button>
      <button onClick={()=> fetchUrl("todos")}>Todos</button>
      <pre>{JSON.stringify(data,null,2)}</pre>
    </div>
  );
}

export default App;
//모크데이터 가짜 데이터를 불러보자
//fetch를 통해 데이터를 받아보자