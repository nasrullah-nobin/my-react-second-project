import "./App.css";
import Batsman from "./batsman";
import Counter from './counter'


function App() {




  function handleClick(){
    alert('I am clicked -1')
  }
const handleClick2=()=> alert('I am clicked -2');
const handleClick3=(num)=> {
  const numbers =num + 5;
  alert (numbers);
}
  return (
    <>
      <h1>React</h1>
      <Counter></Counter>
      <Batsman></Batsman>
      <button onClick={handleClick}>click me1</button>
      <button onClick={handleClick2}>click me2</button>
      <button onClick={function handleClick3(){
        alert('I am clicked 3')
      }}>click me3</button>
      <button onClick={()=>  alert('i am clicked -4')}>click me4</button>
      <button onClick={()=>  alert('i am clicked -5')}>click me5</button>
      <button onClick={()=> handleClick3(10)}>Add 5</button>

    </>
  );
}

export default App;
