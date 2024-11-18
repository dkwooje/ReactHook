import { useCallback, useState } from "react";
import Box from "./Box";

function App() {

  const [size,setSize] = useState(100);
  const [isDark, setIsDark] = useState(false);

  const BoxStyle = useCallback(()=>{
    return{
      backgroundColor: 'yellow',
      width: `${size}px`,
      height: `${size}px`
    };
  }, [size]);

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
