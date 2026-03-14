import { Suspense, useState } from "react";
import "./App.css";
import Batsman from "./batsman";
import Counter from "./counter";
import Photos from "./photos";
import Users from "./users";
import ToggleBtn from "./ToggleBtn";
import UserList from "./usrList";

const PhotoFetch = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  return res.json();
};

const usersFetch = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if(!res.ok){
    throw new Error("Network response was not ok");
  }
  return res.json();
};
function App() {
  function handleClick() {
    alert("I am clicked");
  }
  const handleClick3 = () => alert("i am clicked 3");
  const handleClick4 = (num) => alert(num + 5);
  return (
    <>
      <h1>React</h1>
     <Suspense fallback={<GlimmerPanel/>}>
       <UserList usersFetch={usersFetch()}></UserList>
     </Suspense>
      <ToggleBtn></ToggleBtn>
      <IncreasesAndDecreases></IncreasesAndDecreases>
      <Users></Users>
      <Suspense fallback={<GlimmerPanel />}>
        <Photos photoFetch={PhotoFetch()}></Photos>
      </Suspense>
      <Batsman></Batsman>
      <Counter></Counter>
      <button onClick={handleClick}>click me</button>
      <button
        onClick={function handleClick() {
          alert("i am clicked 2");
        }}
      >
        click me2
      </button>
      <button onClick={handleClick3}>click me 3</button>
      <button onClick={() => handleClick4(10)}>click me 4</button>
      <button onClick={() => alert("faaaaaaaaaaa")}>click me 5</button>
    </>
  );
}

// function IncreasesAndDecreases() {
//   const [count,setCount]=useState(0);
//   const click=(type)=> {
//     if(type=== '+'){
//       setCount(prev=> prev+1)
//     }
//     if(type=== '-'){
//       setCount(prev=> prev===0? 0: prev-1)

//     }
//     if(type=== '0'){
//       setCount(0)

//     }
//   }
//   return (
//     <div className="card">
//       <h2
//         style={{
//           border: "1px solid gray",
//           padding: "10px",
//           borderRadius: "15px",
//         }}
//       >
//         {count}
//       </h2>
//       <button onClick={()=> click('+')} style={{marginLeft:'10px'}}>Count+1</button>
//       <button onClick={()=> click('-')} style={{marginLeft:'10px'}}>Count-1</button>
//       <button onClick={()=> click('0')} style={{marginLeft:'10px'}}>Reset</button>
//     </div>
//   );
// }
function IncreasesAndDecreases() {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount((prev) => prev + 1);
  };
  const decrease = () => {
    // setCount(prev=> prev===0? 0: prev-1)
    setCount((prev) => Math.max(prev - 1, 0));
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="card">
      <h2
        style={{
          border: "1px solid gray",
          padding: "10px",
          borderRadius: "15px",
        }}
      >
        {count}
      </h2>
      <button onClick={increase} style={{ marginLeft: "10px" }}>
        Count+1
      </button>
      <button onClick={decrease} style={{ marginLeft: "10px" }}>
        Count-1
      </button>
      <button onClick={reset} style={{ marginLeft: "10px" }}>
        Reset
      </button>
    </div>
  );
}

function GlimmerPanel() {
  return (
    <div className="glimmer-panel">
      <div className="glimmer-line"></div>
      <div className="glimmer-line"></div>
      <div className="glimmer-line"></div>
    </div>
  );
}

export default App;
