import {  useState, useMemo, useEffect } from "react";


function App() {

  const[number,setNumber] = useState(0);
  const[isKorea,setIsKorea] = useState(true);
  
//  const location = isKorea ? '한국' : '외국'; //string
    const location = { country: isKorea ? '한국' : '외국'}; //object

  useEffect(()=>{
      console.log("useEffect 호출");
  },[location]);



  return (
    <div>
      <h2>하루에 몇끼 먹어요?</h2>
      <input 
      type="number" 
      value={number} 
      onChange={(e) => setNumber(e.target.value)}
      />
      <hr />
      <h2>어느 나라에 있어요?</h2>
      <p>나라: {location.country}</p>
      <button onClick={()=> setIsKorea(!isKorea)}>비행기 타자</button>    
    </div>
  );
}

export default App;

//처음 랜더링 할때는 두 계산기가 불려 오래걸린다.
//하지만 어려운 계산기는 메모화 해주었기 때문에,
// 쉬운계산기를 작동시켜 랜더링 할 때 마다. 쉬운 계산기는 빠르게 동작할 수 있다.