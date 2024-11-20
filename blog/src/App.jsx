import { useEffect, useState } from "react";

function fetchDataFromServer(value){
  if(!value){
    return [];
  }
  console.log("서버로부터 데이터를 가져오는 중....")
  const users = [
    {name: "김철수", age: "16"},
    {name: "이영희", age: "24"},
    {name: "김민수", age: "46"},
    {name: "홍길동", age: "35"},
    {name: "홍민영", age: "12"},
    {name: "김영지", age: "15"},
    {name: "윤동지", age: "100"},
  ]
  return users.filter((user)=> user.name.startsWith(value));
}

function App() {
  
  const [input,setInput] = useState("");
  const [debouncedInput,setDebouncedInput] = useState(input);
  const [result,setResult] = useState([]);

 useEffect(()=>{
    const timerID = setTimeout(()=>{
      console.log("콜백호출");
      setDebouncedInput(input);
    }, 1000)

    return () =>{
      clearTimeout(timerID);
    }                  
                      
  },[input]) 
  useEffect(()=>{ 
    const users = fetchDataFromServer(debouncedInput);
    setResult(users);
  },[debouncedInput])

  return (
     <div className="container">
      <div className="search-container">
        <input 
        placeholder="여기다 검색하세요" 
        value={input} 
        onChange={(event) => setInput(event.target.value)}/>
        <ul>
          {result.map((user)=>(  
             <li key={user.name}>
            <span>{user.name}</span>
            <span>{user.age}세</span>
          </li>
        ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

