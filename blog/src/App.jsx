import { useState } from "react";

function App() {

  const [inputValue,setInputValue] = useState('');
  const [list,setList] =useState(['밥먹기','코딩하기']);

  function addToList(){
    setList((prevList)=>{
      return [inputValue, ...prevList];
    });
    setInputValue('');
  }

  return (
    <>
      <input value={inputValue}
      onChange={(e)=> setInputValue(e.target.value)}
      />
      <button onClick={addToList}>추가</button>
      <ul>
        {list.map((item)=>{
            return <li key={item}>{item}</li>
        })}
      </ul>
    </>
  );
}

export default App;
//list형태로 엘리먼트를  표현하면 key값을 prop으로 가져야한다.
//그렇지 않으면 모든 list(새로생긴 list 포함)가 공유된다.