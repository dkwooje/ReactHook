import {  useState } from "react";

function hardCalculate(number){
  console.log('어려운 계산');
  for (let i = 0; i<9999999990; i++){

  }
  return number + 10000;
}

function easyCalculate(number){
  console.log('쉬운 계산');
  return number + 1.;
}


function App() {

  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  const hardSum = hardCalculate(hardNumber);
  const easySum = easyCalculate(easyNumber);

  return (
    <div>
      <h3>어려운 계산기</h3>
      <input type="number" 
      value={hardNumber} 
      onChange={(e) => setHardNumber(parseInt(e.target.value))}
      />
      <span> + 10000 = {hardSum}</span>

      <h3>쉬운 계산기</h3>
      <input type="number" 
      value={easyNumber} 
      onChange={(e) => setEasyNumber(parseInt(e.target.value))}
      />
      <span> + 1 = {easySum}</span>
    </div>
  );
}

export default App;

