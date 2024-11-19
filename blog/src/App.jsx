import { useId } from "react";



function MyInput(){

  const id = useId();

  return(
    <div>
      <label htmlFor={`${id} -name`}>이름</label>
      <input id={`${id} -name`}/>
      <br />
      <label htmlFor={`${id} -age`}>나이</label>
      <input id={`${id} -age`}/>
    </div>
  )
}

function App() {



  return (
    <div>
      <MyInput />

    </div>
  );
}




export default App;
//useId() input같은 form요소에 접근할 때 유용하다.
//위와 같이 input과 label을 연동하면 UI에서 label을 눌러도 input에 포커싱할 수 있다.  
//동일한 form요소를 사용할 때 