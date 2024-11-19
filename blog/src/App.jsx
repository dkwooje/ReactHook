import { useCallback, useState } from "react";
import Child from "./Child";

function App() {
    
    const [parentAge, setParentAge] = useState(0);
    
    function incrementParentAge(){
      setParentAge(parentAge + 1);
    }

    console.log('부모 컴포넌트가 렌더링이 되었습니다.');
/*
    function tellMe(){
      console.log('엘리아스 지도자');
    }
*/
  const tellMe = useCallback(()=>{
    console.log('엘리아스 지도자');
  },[]);

  return (
    <div style={
      {
        border: '2px solid navy', 
        padding: '10px'
      }
    }>
      <h1>부모</h1>
      <p>age: {parentAge}</p>
      <button onClick={incrementParentAge}>부모 나이 증가</button>
      <Child name={"에르핀"} tellMe={tellMe} />
    </div>
  );
}

export default App;

//function tellMe와 같은 함수도 객체변수이므로 주소값이 전달하게 된다.
//