

import React, { useState } from "react";

const NumberInput = () => {
    const [inputValue, setInputValue] = useState("");
    const [message, setMessage] = useState("");
    const [nextNumbers, setNextNumbers] = useState([]);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
    
        const number = parseInt(value, 10);
    
        if (isNaN(number)) {
          setMessage("Please enter a valid number.");
          setNextNumbers([]);
        } else if (number < 0) {
          setMessage("Enter a positive value.");
          setNextNumbers([]);
        } else {
          setMessage("");
          if (number % 2 === 0) {
            setNextNumbers([number + 2, number + 4, number + 6]);
          } else {
            setNextNumbers([number + 2, number + 4, number + 6]);
          }
        }
      };
  return (
    <div style={{ margin: "20px" }}>
    <input
      type="number"
      value={inputValue}
      onChange={handleInputChange}
      placeholder="Enter a number"
    />
    {message && <p style={{ color: "red" }}>{message}</p>}
    {nextNumbers.length > 0 && (
      <ul className="Listitem">
        {nextNumbers.map((num, index) => (
          <li key={index}>{num}, </li>
        ))}
      </ul>
    )}
  </div>
  )
}

export default NumberInput
