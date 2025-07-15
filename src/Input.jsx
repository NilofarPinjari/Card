import { useState } from 'react';
import './App.css'; 

function App() {
  const [text, setText] = useState('');

  return (
    <div className="container">
      <h2>Task 2</h2>
      <input type="text" placeholder="Write" onChange={(e)=>(setText(e.target.value))} value={text} className="inputBox" />
      <p className="outputText">Output:{text}</p>
    </div>
  );
}

export default App;


