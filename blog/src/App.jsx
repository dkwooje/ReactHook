import { useState, useRef, useEffect } from "react";

function App() {
  const [count,setCount] = useState(1);
  const renderCount = useRef(0);


 
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    console.log('렌더링 수:',renderCount.current);
  })

  // '올려'버튼으로 랜더링이 되고 useState가 작동되어 컴포넌트 함수가 다시 불러 useEffect가 업데이트가 되는데
  // useEffect가 업데이트 되면 랜더링이 시작되기 때문에 다시 useState가 작동되어
  // 결과적으로 무한 루프에 빠진다.
 

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={()=>setCount(count +1)}>올려</button>
    </div>
  );
}

export default App;

