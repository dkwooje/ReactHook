import { useState, useRef } from "react";

function App() {

  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  console.log(countRef);
  console.log('렌더링');

  function increaseState(){
    setCount(count + 1);
  }

  function increaseRef(){
    countRef.current = countRef.current + 1;
    console.log('Ref: ', countRef.current);
  }

  return (
    <div>
      <p>State: {count}</p>
      <p>Ref: {countRef.current}</p>
      <button onClick={increaseState}>State 올려</button>
      <button onClick={increaseRef}>Ref 올려</button>
    </div>
  );
}

export default App;