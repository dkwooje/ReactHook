import { useState } from "react";

const heaveyWork = () =>{
  console.log('무거운 작업');
  return(['홍길동', '김민수']);
}

function App() {

  // const [names,setNames] = useState(heaveyWork());
  //위의 코드를 사용하면 랜더링할 때 마다 사용되므로 비효율적이다.

  const [names,setNames] = useState(() => {
    return heaveyWork();
  });


  const [input,setInput] = useState('');

  const handleInput = (e) =>{
    setInput(e.target.value);
  }

  const handleUpload = () => {
    setNames((prevState) => {
      console.log('이전 state', prevState);
      return([input, ...prevState])
    });
  }

  return (
    <div>
      <input type="text" value={input} onChange={handleInput} />
      <button onClick={handleUpload}>upload</button>
      {names.map((name, idx) => {
        return <p key={idx}>{name}</p>
      })}
    </div>
  );
}

export default App;
