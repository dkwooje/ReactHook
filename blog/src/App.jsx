import { useEffect, useId, useRef } from "react";


function App() {

  function MyInput(){

    const id = useId();
    const ref = useRef();
    
    console.log(id);

    useEffect(()=>{
    //  const element = document.querySelector(id)
        const element = ref.current
      console.log(element);
    },[])
  
    return(
      <div>
        <button id="btn">버튼</button>
        <label htmlFor={id}>이름</label>
        <input id={id}/>
      </div>
    )
  }

  return (
    <div>
      <MyInput />
    </div>
  );
}

export default App;
//react에서 querySelector를 사용하기보다 ref를 사용하는것이 좋다. 
