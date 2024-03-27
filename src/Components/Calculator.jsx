import React, { useState } from 'react';
import './Calculator.css'; 

const Calculator = () => {
  const [input, setInput] = useState(''); 
  const [result, setResult] = useState(''); 

 
  const handleClick = (value) => {
    if (value === '=') {
  
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
     
      setInput('');
      setResult('');
    } else {
      
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <h4>Salon's Claculator</h4>
      <input type="text" value={input} readOnly />
      <div className="result" >={result}</div>
      <div className="buttons">
        {[7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, '*', 0, '.', '=', '/'].map((value) => (
          <button key={value} onClick={() => handleClick(value)}>
            {value}
          </button>
        ))}
        <button onClick={() => handleClick('C')}>C</button>
      </div>
    
    </div>
  );
};

export default Calculator;
