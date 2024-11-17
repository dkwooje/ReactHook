import { useState, useRef, useEffect } from "react";

function App() {
  const [count,setCount] = useState(0);
  const [renderCount, setRenderCount] = useState(1);
 /*
  useEffect(() => {
    console.log('렌더링');
    setRenderCount(renderCount + 1);
  })
    */

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={()=>setCount(count +1)}>올려</button>
    </div>
  );
}

export default App;

