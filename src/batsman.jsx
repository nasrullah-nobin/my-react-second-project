import { useState } from "react";

export default function Batsman() {
  const [runs, setRuns] = useState(0);
  const [four, setFour] = useState(0);
  const [six, setSix] = useState(0);
  const startPlay = (type) => {
    if (type === "run") {
      setRuns((priv) => priv + 1);
    }
    if (type === "four") {
      setRuns((priv) => priv + 4);
      setFour((priv) => priv + 1);
    }
    if (type === "six") {
      setRuns((priv) => priv + 6);
      setSix((priv) => priv + 1);
    }
  };
  return (
    <div className="card">
      <h3>Shakib al hasan</h3>
      {runs > 50 && <p>🎉 Congratulations Your score 50</p>}
      <h2>Total Score: {runs}</h2>
      <p>
        Four: {four} six: {six}
      </p>
      <button onClick={() => startPlay("run")} style={{ marginLeft: "10px" }}>
        Run
      </button>
      <button onClick={() => startPlay("four")} style={{ marginLeft: "10px" }}>
        Four
      </button>
      <button onClick={() => startPlay("six")} style={{ marginLeft: "10px" }}>
        Six
      </button>
    </div>
  );
}
