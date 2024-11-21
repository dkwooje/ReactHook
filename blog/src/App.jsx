import Component from "./Component";
import React from "react";
import './App.css';
function App() {

  
  return (
    <div>
      <Component />
    </div>
  );
}

export default App;

//App.css에서 스타일링이 <div>로 감싸 엘리먼트에 적용하면 망가진다
//하지만 <>를 사용하면 스타일링이 그대로 적용된다.