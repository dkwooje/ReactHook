import { useState } from "react";


function App() {
   
  const [inputValue, setInputValue] = useState('');

  function handleChange(e){
    setInputValue(e.target.value)
  } 

  function handleSubmit(){
    alert(inputValue);
    setInputValue('');
  }

  return (
    <div>
      <h1>useInput</h1>
      <input 
      value={inputValue}
      onChange={handleChange}
      />
      <button onClick={handleSubmit}>확인</button>


    </div>
  );
}

export default App;

//커스텀 훅으로 재사용성을 극대화 할 수 있다.