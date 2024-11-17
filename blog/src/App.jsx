import { useState } from "react";

function heaveyWork(){
  console.log('무거운 작업');
  return(['홍길동', '김민수']);
}

function App() {

  // const [names,setNames] = useState(heaveyWork());
  //위의 코드를 사용하면 랜더링할 때 마다 사용되므로 비효율적이다.

  const [names,setNames] = useState(
    function(){                   //익명함수: 한 번만 사용하거나 특정한 곳에서 바로 실행되도록 정의
    return heaveyWork();          //익명함수는 화살표 함수로 바꿔 쓸 수 있다.
  });

  const [input,setInput] = useState('');

  function handleInput(e){
    setInput(e.target.value);
  }

  function handleUpload(){
    setNames(
      function(prevState){
      console.log('이전 state', prevState);
      return([input, ...prevState])
    });
  }

  return (
    <div>
      <input type="text" value={input} onChange={handleInput} />
      <button onClick={handleUpload}>upload</button>
      {names.map(function(name, idx){
        return (<p key={idx}>{name}</p>)
      })}
    </div>
  );
}

export default App;