import { useId } from "react";

function App() {

  const  id = useId();
  console.log(id);

  return (
    <div>
      <label htmlFor="name">이름</label>
      <p></p>
      <input id="name"/>
    </div>
  );
}

export default App;
//useId() input같은 form요소에 접근할 때 유용하다.
//위와 같이 input과 label을 연동하면 UI에서 label을 눌러도 input에 포커싱할 수 있다.  
