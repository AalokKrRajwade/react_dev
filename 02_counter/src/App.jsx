import { useState } from "react";
import "./App.css";

function App() {
  // let counter = 15;

  // here useState is a hook:

  // counter -> varable, setCounter -> method/function
  const [counter, setCounter] = useState(15);

  const AddValue = () => {
    // counter += 1;
    // console.log(counter);

    // it will increase the value of the counter only once because of batching:

    // setCounter(counter+1);
    // setCounter(counter+1);
    // setCounter(counter+1);
    // setCounter(counter+1);
    
    // avoid batching using callback: 
    setCounter((prevCounter) => prevCounter+1);
    setCounter((prevCounter) => prevCounter+1);
    setCounter((prevCounter) => prevCounter+1);
    setCounter((prevCounter) => prevCounter+1);
  };

  const removeValue = () => {
    setCounter(counter-1);
  };

  return (
    <>
      <h1>this is react series {counter}</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={AddValue}>Add value</button> {"   "}
      <button onClick={removeValue}>Remove value</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
