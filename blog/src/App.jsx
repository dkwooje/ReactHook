import { useEffect,useLayoutEffect, useState } from "react";

function App() {
  const [count, setCount] =useState(0);

  useEffect(()=>{
    console.log("useEffect", count)
  },[count])

  useLayoutEffect(()=>{
    console.log("useLayoutEffect", count)
  },[count])


  function handleCountUpdate(){
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleCountUpdate}>Update</button>
    </div>
  );
}

export default App;
//useLayoutEffect는 useEffect보다 먼저 실행된다.
