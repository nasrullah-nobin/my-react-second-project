import { useState } from "react";

export default function ToggleBtn() {
  const [isToggle, setToggle] = useState(false);
  const handler = () => {
    setToggle(!isToggle);
  };
  return (
    <div>
      {isToggle && <p>Hello, React Learner!</p>}
      <button onClick={handler}>{isToggle ? "Hide" : "Show"}</button>
    </div>
  );
}
