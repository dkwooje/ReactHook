import {  useState } from "react";
import Page from "./components/Page";
import './App.css';
import { ThemeContext } from "./context/ThemeContext";
import { UserContext } from "./context/UserContext";

function App() {

  const [isDark,setIsDark] = useState(false);

  return (
    <div>
      <UserContext.Provider value={'사용자'}>
      <ThemeContext.Provider value={{isDark,setIsDark}}>
      <Page />
      </ThemeContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;

//useContext는 컴포넌트간의 props를 간단하게 전달해준다.
//단 context는 컴포넌트를 재사용하기 어려워진다.