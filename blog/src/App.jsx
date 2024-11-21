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
        {list.map((item,index)=>{ {/* list.map((item)*/}
            return (
              <div key={index}> {/* key={item} */}
                <li>{item}</li>
                <input />
              </div>
            )
        })}
      </ul>
    </>
  );
}

export default App;
//그런데 index값을 키로 넘겨주면 모든 list가 공유된다.
//index를 키로 사용하는것은 매우 불안정하다.
//그러니 list항목이 변경되는 동적인 list라면 index를 키로 사용하지 말아야 한다.
