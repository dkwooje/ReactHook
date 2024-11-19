import { useState } from "react";



export default function useInput(initialValue,submitAction){
       
  const [inputValue, setInputValue] = useState(initialValue);

  function handleChange(e){
    setInputValue(e.target.value)
  } 

  function handleSubmit(){
    setInputValue("");
    submitAction(inputValue);
  }

  return [inputValue, handleChange, handleSubmit]
}

//custom hook은 배열을 return값을 받는다.
//return [state값 (useState를 사용해 관리되는 값),상태를 업데이트하는 핸들러 함수]
//React의 커스텀 훅에서 배열을 반환하는 방식은 React의 useState와 유사한 사용성을 제공하기 위해 많이 사용됩니다.