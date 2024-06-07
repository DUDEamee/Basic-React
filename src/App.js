import "./App.css" 
import { useState } from "react";
import Counter from "./Counter";

function App() {

  const [Count,setcount] = useState(0)

  function addCount(){
    setcount(Count+1)
  }

  let obj = {
    title:'1st Counter',
    Count,
  }

  return (
    <div>
      <button onClick={addCount} >Add</button>
      <Counter {...obj} />
      <Counter title='2nd counter' Count={Count} />
    </div>
    
    );
}

export default App;
