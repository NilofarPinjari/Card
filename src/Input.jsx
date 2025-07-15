import { useState } from 'react';
import './App.css'; 

export default function Input() {
  const [text, setText] = useState('');

  return (
    <div className="container">
      <h2>Task 2</h2>
      <input type="text" placeholder="Write" onChange={(e)=>(setText(e.target.value))} value={text} className="input" />
      <p className="output">Output:{text}</p>
    </div>
  );
}




