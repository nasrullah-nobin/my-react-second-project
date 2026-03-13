import { useState } from "react";

export default () => {
  const [run, setRun] = useState(0);
  const [four, setFour] = useState(0);
  const [six, setSix] = useState(0);

  const mathHandle = (id) => {
    if (id === "run") {
      setRun((prev) => (prev += 1));
      return;
    }
    if (id === "four") {
      setRun((prev) => (prev += 4));
      setFour((prev) => (prev += 1));
      return;
    }
    if (id === "six") {
      setRun((prev) => (prev += 4));
      setSix((prev) => (prev += 1));
      return;
    }
  };

  return (
    <div
      style={{
        border: "3px solid yellow",
        borderRadius: "20px",
        padding: "20px",
      }}
    >
      <h3>Tamim Iqbal</h3>
      <h1>score: {run}</h1>
      <p>
        Total Four: {four} Total Six: {six}{" "}
      </p>
      <button onClick={()=> mathHandle('run')} style={{ marginLeft: "10px", background: "yellow" }}>Run</button>
      <button onClick={()=> mathHandle('four')}
        style={{ marginLeft: "10px", color: "white", background: "green" }}
      >
        four
      </button>
      <button onClick={()=> mathHandle('six')}
        style={{ marginLeft: "10px", color: "white", background: "purple" }}
      >
        Six
      </button>
    </div>
  );
};
