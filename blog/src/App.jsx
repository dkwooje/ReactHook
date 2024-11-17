import { useState } from "react";

function App() {

  const [time,setTime] = useState(1);

  function handleTime(){
    if(time>=12){
      setTime(1);
    }else{
      setTime(time + 1);
    }
  } 

  return (
    <div>
      <span>현제 시각: {time}시</span>
      <button onClick={handleTime}>Update</button>
    </div>
  );
}

export default App;
