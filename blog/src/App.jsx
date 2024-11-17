import { useState } from "react";
import Timer from "./component/Timer";

function App() {

  const [showTimer,setShowTimer] = useState(false);

  return (
    <div>
      {showTimer && <Timer />}
      <button onClick={function(){
        setShowTimer(!showTimer)
      }}
        >Toggle Timer</button>
    </div>
  );
}

export default App;