import { useState } from "react";

function App() {

  const [inputValue,setInputValue] = useState('');
  const [list,setList] =useState([
    {
      id: '1',
      value: '밥먹기'
    },
    {
      id:'2',
      value: '코딩하기'
    },
  ]);
    

  function addToList(){
    setList((prevList)=>{
      return [{
        id: list.length+1+"",
        value: inputValue,
      }, ...prevList];
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
        {list.map((item)=>{ {/* list.map((item)*/}
            return (
              <li key={item.id}>{item.value}</li>
            )
        })}
      </ul>
    </>
  );
}

export default App;
//하나의 list안에 중복된 키가 있다면 자녀가 복제되거나 이상하게 업데이트될 수 있다.
//ex):입력 밥먹기2개 후 아무거나 입력
//그러니 리스트에 key(id)와 value를 만드는 것이 가장 이상적이다.