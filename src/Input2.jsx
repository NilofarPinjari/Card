import { useState } from 'react';
import './Input2.css';

export default function Input2() {
    const [inputText, setInputText] = useState('');
    const [displayText,setDisplayText]=useState('');

    return (
        <div className="container">
            <h2>Task 3</h2>
            <input type="text" value={inputText}  placeholder="Write" onChange={(e) => setInputText(e.target.value)}  className="input" />
            <button onClick={()=>(setDisplayText(inputText))} className="submit">Click me</button>
            <p className="output">{displayText}</p>
        </div>
    );
}


