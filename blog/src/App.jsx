import { useEffect, useState } from "react";

function App() {

  const [count,setCount] = useState(1);
  const [name,setName] = useState('');

function handleCount(){
  setCount(count + 1);
}

function handleInput(e){
  setName(e.target.value)
}

//랜더링 될때마다 매번 실행된
  useEffect(() => {
    console.log('랜더링');
  })

  return (
    <div>
      <button onClick={handleCount}>Update</button>
      <span>count: {count}</span>
      <input type="text" value={name} onChange={handleInput} />
      <span>name: {name}</span>
    </div>
  );
}

export default App;