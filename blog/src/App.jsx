import {  useState } from "react";
import Page from "./components/Page";
import './App.css';

function App() {

  const [isDark,setIsDark] = useState(false);

  return (
    <div>
      <Page isDark={isDark} setIsDark={setIsDark} />
    </div>
  );
}

export default App;

//useContext는 컴포넌트간의 props를 간단하게 전달해준다.
//단 context는 컴포넌트를 재사용하기 어려워진다.