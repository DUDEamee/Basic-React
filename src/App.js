import "./App.css" 
import { useState } from "react";
import Counter from "./Counter";

function App() {

  const [Count,setcount] = useState(0)

  function addCount(){
    setcount(Count+1)
    console.log(Count);
  }

  return (
    <div>
      <button onClick={addCount} >Add</button>
      <Counter Count={Count} />
    </div>
    
    );
}

export default App;
