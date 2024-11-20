import {  useState } from "react";
import "./App.css" 
import { useThrottle } from "./hooks/useThrottle";

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


  const handleClick = useThrottle(()=>{
    const result = hackLottoNumbers();
    setLottoNumbers(result);
  }, 1000);

  
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

//Throttle이 구현되었다. '번호 맞추기'버튼을 누르면 1초후에만 다시 작동할 수 있다.