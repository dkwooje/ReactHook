import useInput from "./UseInput";


function App() {

  const [inputValue,handleChange] = useInput('안녕');
  const [inputValue2,handleChange2] = useInput('하세요');

  function handleSubmit(){
    alert(inputValue);
   // setInputValue(''); //초기화 기능
  }

  return (
    <div>
      <h1>useInput</h1>
      <input value={inputValue} onChange={handleChange} />
      <input value={inputValue2} onChange={handleChange2} />
      <button onClick={handleSubmit}>확인</button>
    </div>
  );
}

export default App;

//커스텀 훅으로 재사용성을 극대화 할 수 있다.