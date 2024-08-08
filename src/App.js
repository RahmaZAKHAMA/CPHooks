
import { useState } from 'react';
import './App.css';
import Counter from './Counter';

function App() {
    const [toggle, settoggle] = useState(false);
  return (
    <div className="App">
      <button onClick={()=>settoggle(!toggle)}>start</button>
      {toggle && <Counter />}
    </div>
  );
}

export default App;
