import { useEffect, useState } from "react";

function App() {

  const [number,setNumber] = useState(0);

  function someFunction(){
    console.log(`someFunc: number: ${number}`);
    return;
  }

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
      <br />
      <button onClick={someFunction}>Call someFunc</button>
    </div>
  );
}

export default App;

//useCallback은 두 인자를 받는다. 첫번째는 메모화 할 함수, 두번째는 의존성 배열
//useEffec를 [someFunction]을 의존성 배열로 설정해주어도 input안의 숫자를 변경하면
//랜더링되어 App컴포넌트가 초기화실행 되므로 [someFunction]의 의존성이 무시된다.