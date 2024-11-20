import { useEffect, useRef, useState } from "react";


  function getNumbers(){
    return [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
  }

function App() {

  const [numbers,setNumbers] = useState([]);
  const ref = useRef(null);

  useEffect(()=>{
    const nums = getNumbers();
    setNumbers(nums);
  }, [])

  useEffect(()=>{
    if(numbers.length === 0){
      return;
    }

    for(let i = 0; i<300000000; i++){} //고의적 딜레이 

    ref.current.scrollTop = ref.current.scrollHeight;
  },[numbers])  //scroll이 자동으로 최하단에 위치하도록 조치

  return (
    <div 
      ref={ref} 
      style={
      {
        height: "300px",
        border: "1px solid blue",
        overflow: "scroll"
      }}
    >
      {numbers.map((number,idx)=>(
        <p key={idx}>{number}</p>
      ))}
    </div>
  );
}

export default App;

//개발자 모드에서 Performance로 들어가 CPU를 6배 느리게 설정 해주자.