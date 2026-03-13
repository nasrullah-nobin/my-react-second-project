import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(10);
  const handleClick =()=> {
    setCount(prev=> prev+=10)
  }
  const counterStyle = {
    border: "3px solid yellow",
    borderRadius: "20px",
    padding: "20px",
  };
  return (
    <div style={counterStyle}>
      <h3>count: {count}</h3>
      <button onClick={handleClick}>add</button>
    </div>
  );
}
