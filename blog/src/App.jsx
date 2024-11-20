import { useEffect, useState } from "react";

function App() {
  const [count, setCount] =useState(0);

  useEffect(()=>{
    console.log("useEffect", count)
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
//useLayoutEffect는 useEffect와 구조가 비슷하다.
//useEffect는 화면이 업데이트(랜더링)이 된 후 실행되지만
//useLayoutEffect는 먼저 실행되고 랜더링이 된다.
//useLayoutEffect는 UI변화를 더 정교하게 나타낼 수 있다.