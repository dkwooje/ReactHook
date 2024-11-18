import {  useState, useMemo } from "react";

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

 // const hardSum = hardCalculate(hardNumber);
 const hardSum = useMemo(() => {
  return hardCalculate(hardNumber)}, [hardNumber]);
//useMemo의 첫번째 인자는 메모와이즈할 값을 return, 두번째 인자는 의존성 배열을 넣어준다.
//의존성 배열의 값이 바뀔 때 만  메모와이즈가 발동한다.

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

//처음 랜더링 할때는 두 계산기가 불려 오래걸린다.
//하지만 어려운 계산기는 메모화 해주었기 때문에,
// 쉬운계산기를 작동시켜 랜더링 할 때 마다. 쉬운 계산기는 빠르게 동작할 수 있다.