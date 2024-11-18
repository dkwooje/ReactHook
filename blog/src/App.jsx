import { useState } from "react";
import Child from "./Child";

function App() {
    
    const [parentAge, setParentAge] = useState(0);
    const [ChildAge, setChildAge] = useState(0);

    function incrementParentAge(){
      setParentAge(parentAge + 1);
    }

    function incrementChildAge(){
      setChildAge(ChildAge + 1);
    }

    console.log('부모 컴포넌트가 렌더링이 되었습니다.');

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
      <button onClick={incrementChildAge}>부모 나이 증가</button>
      <Child name={'아무게'} age={ChildAge} />
    </div>
  );
}

export default App;

//React.memo : 렌더링 횟수 제안에 특화. 컴포넌트를 최적화.(prop check)
//React.memo가 필요할 때 :1. 컴포넌트가 같은 Props로 자주 렌더링 될 때 
//2.컴포넌트가 렌더링이 될때마다 복잡한 로직을 처리해야할때
//이외에는 굳이 React.memo를 사용할 필요가 없다.