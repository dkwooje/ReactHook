import { useCallback, useEffect, useState } from "react";

function App() {

  const [number,setNumber] = useState(0);
  const [toggle,setToggle] = useState(true);

/*
  function someFunction(){
    console.log(`someFunc: number: ${number}`);
    return;
  }
*/
const someFunction = useCallback(()=>{
  console.log(`someFunc: number: ${number}`);
  return;
},[number])

  useEffect(() =>{
    console.log("someFunction이 변경되었습니다.");
  }, [someFunction])

  return (
    <div>
      <input 
      type="number" 
      value={number} 
      onChange={(e)=> setNumber(e.target.value)}
      />
      <button onClick={()=>setToggle(!toggle)}>{toggle.toString()}</button>
      <br />
      <button onClick={someFunction}>Call someFunc</button>
    </div>
  );
}

export default App;

//useCallback으로 함수를 메모화 하고, 메모화된 함수의 주소는 someFunction가 가지게 된다.
//첫번째 인자에 메모화(주소화)할 함수, 두번째 인자는 의존성 배열.
//두번째 인자가 바뀌면 첫번째 인자도 초기화 되어 someFunction에 새로운 함수 주소가 들어가게 된다.