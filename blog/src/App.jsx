import useInput from "./UseInput";

function displayMessage(message){
  alert(message);
}

function App() {

  const [inputValue,handleChange,handleSubmit] = useInput('',displayMessage);



  return (
    <div>
      <h1>useInput</h1>
      <input value={inputValue} onChange={handleChange} />
      <button onClick={handleSubmit}>확인</button>
    </div>
  );
}

export default App;

//커스텀 훅으로 재사용성을 극대화 할 수 있다.