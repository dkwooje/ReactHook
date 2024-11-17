import { useState, useRef } from "react";

function App() {
  const [renderer,setRenderer] = useState(0);
  const countRef = useRef(0);
  let countVar = 0;

  function doRenderer(){
    setRenderer(renderer + 1);
  }

  function increaseRef(){
    countRef.current = countRef.current + 1;
    console.log('ref: ', countRef.current);
  }

  function increaseVar(){
    countVar = countVar + 1;
    console.log('var: ', countVar);
  }

  function printResults(){
    console.log(`ref: ${countRef.current}, var: ${countVar}`);
  }

  return (
    <div>
      <p>Ref: {countRef.current}</p>
      <p>Var: {countVar}</p>
      <button onClick={doRenderer}>랜더링</button>
      <button onClick={increaseRef}>Ref 올려</button>
      <button onClick={increaseVar}>Var 올려</button>
      <button onClick={printResults}>Ref Var 값 출력</button>
    </div>
  );
}

export default App;

//useState는 랜더링이자 컴포넌트 함수를 부르는 역활이다.
//useState로 랜터링을 하면 함수(App)가 다시 불려져 var는 초기화 되어 0이 출력되지만
//useRef는 마운팅 시작부터 마운팅이 끝날 때 까지 유지되어 값을 유지시킬 수 있다.