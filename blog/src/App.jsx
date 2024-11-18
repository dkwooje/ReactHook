import { useState } from "react";
import Box from "./Box";

function App() {

  const [size,setSize] = useState(100);
  const [isDark, setIsDark] = useState(false);

  function BoxStyle(){
    return{
      backgroundColor: 'yellow',
      width: `${size}px`,
      height: `${size}px`
    };
  };

  return (
    <div    style={{background: isDark ? 'black' : 'white'}}>
      <input type="number" 
      value={size} 
      onChange={(e)=> setSize(e.target.value)}
      />
      <button onClick={()=>setIsDark(!isDark)}>Change Theme</button>
    <Box createBoxStyle={BoxStyle} />
    </div>
  );
}

export default App;
