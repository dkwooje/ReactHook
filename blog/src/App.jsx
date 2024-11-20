import { useState } from "react";
import "./App.css" 

function hackLottoNumbers(){
  console.log("로또 번호 해킹중")
  const lottoNumbers = [];
  for( let i = 0; i<6; i++){
    const number = Math.floor(Math.random() * 45) + 1;
    lottoNumbers.push(number);
  }
  return lottoNumbers;
}


function App() {
  const [lottoNumbers,setLottoNumbers] = useState([0,0,0,0,0,0]);

  function handleClick(){
    const result = hackLottoNumbers();
    setLottoNumbers(result)
  }

  
  return (
    <div className="container">
      <h1 className="title">로또 번호 맞춰줄게</h1>
      <button className="button" onClick={handleClick}>
        번호 맞추기
      </button>
      <div className="numbers">
        {lottoNumbers.map((number, idx)=>(   
            <span key={idx} className="number">
              {number}
             </span>
          ))}
      </div>
    </div>
  );
}

export default App;

//Throttle 함수가 한번 호출 되면, 일정 시간이 지나기 전에 다시 호출되지 않도록 막는 것.
//