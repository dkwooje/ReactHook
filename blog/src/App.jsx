import { useRef } from "react";



function App() {

  const inputRef = useRef();
  
  function focus(){
    inputRef.current.focus();
  }

  return (
    <div>
      <input ref={inputRef} /> 
      <button onClick={focus}>집중</button>
    </div>
  );
}

export default App;
//ForwordRef.
//부모컴포넌트에서 자녀컴포넌트의 Dom요소를 접근할때 사용한다. 보통 Ref를 전달할 때 쓴다.
