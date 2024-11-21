
import React from "react";
import './App.css';
import Column from "./Column";



function App() {

  return (
    <div>
      <table>
        <tbody>
            <tr>
              <Column />
            </tr>
            <tr>
              <Column />
            </tr>
        </tbody>
      </table> 
    </div>
  );
}

export default App;

