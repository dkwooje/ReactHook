import { useEffect } from "react";


function App() {

  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/posts") //users 대신 posts , todos 기입
    .then((res) => res.json())
    .then((res) => console.log(res));
  },[]);

  return (
    <div>
      <h1>useFetch</h1>
    </div>
  );
}

export default App;
//모크데이터 가짜 데이터를 불러보자
