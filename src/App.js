import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 

  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
      e.preventDefault(); 
      setResult((result) => result - Number(inputRef.current.value)); 
  };
 
  function times(e) { 
      e.preventDefault(); 
      setResult((result) => result * Number(inputRef.current.value)); 
  }; 
 
  function divide(e) { 
      e.preventDefault(); 
      setResult((result) => result / Number(inputRef.current.value)); 
  };
 
  function resetInput(e) { 
    // Add the code for the resetInput function
    e.preventDefault();  
    inputRef.current.value = 0
  }; 
 
  function resetResult(e) { 
      // Add the code for the resetResult function 
      e.preventDefault(); 
      setResult((result) => 0); 
      // inputRef.current.value = 0
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 


        <p ref={resultRef}> 
          {/* add the value of the current total */} 
          {result}
        </p> 


        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
{/* when u click on a button it will call the functions above 
and that will take the input and *+/- with the result */}
        <button onClick={plus}>add</button> 
        <button onClick={minus}>subtract</button> 
        <button onClick={divide}>divide</button> 
        <button onClick={times}>multiply</button> 

        <button onClick={resetInput}>Reset Input</button> 
        <button onClick={resetResult}>Reset Result</button> 


      </form> 
    </div> 
  ); 
} 
 
export default App; 
