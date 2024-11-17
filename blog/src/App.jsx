import { useRef, useEffect } from "react";


function App() {

  const inputRef = useRef();

  useEffect(()=>{
    console.log(inputRef);
    inputRef.current.focus();

}, []);


  function login(){
    alert(`환영합니다. ${inputRef.current.value}!`);
    inputRef.current.focus();
  }

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="username" />
      <button onClick={login}>로그인</button>
    </div>
  );
}

export default App;

