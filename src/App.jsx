import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (e) => {
    setInput((prev) => prev + e.target.value);
  };
  const handleReset = () => {
    setInput("");
  };
  const calculate = () => {
    setInput(eval(input).toString());
  };
  return (
    <>
      <div className="container">
        <h1>React calculator</h1>
        <input type="text" value={input} required />
        <br></br>
        <div className="buttons">
          <button value={7} onClick={handleClick}>
            7
          </button>
          <button value={8} onClick={handleClick}>
            8
          </button>
          <button value={9} onClick={handleClick}>
            9
          </button>
          <button value={"+"} onClick={handleClick}>
            +
          </button>
          <button value={4} onClick={handleClick}>
            4
          </button>
          <button value={5} onClick={handleClick}>
            5
          </button>
          <button value={6} onClick={handleClick}>
            6
          </button>
          <button value={"-"} onClick={handleClick}>
            -
          </button>
          <button value={1} onClick={handleClick}>
            1
          </button>
          <button value={2} onClick={handleClick}>
            2
          </button>
          <button value={3} onClick={handleClick}>
            3
          </button>
          <button value={"*"} onClick={handleClick}>
            *
          </button>
          <button value={"C"} onClick={handleReset}>
            C
          </button>
          <button value={0} onClick={handleClick}>
            {" "}
            0
          </button>
          <button value={"="} onClick={calculate}>
            =
          </button>
          <button value={"/"} onClick={handleClick}>
            /
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
