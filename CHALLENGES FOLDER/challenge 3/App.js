import logo from "./logo.svg";
import "./App.css";
import { use, useState } from "react";

function App() {
  const today = new Date();
  const [steps, setSteps] = useState(1);
  const [count, setCount] = useState(0);

  function handleStepPlus() {
    setSteps((s) => s + 1);
  }
  function handleStepMinus() {
    setSteps((s) => s - 1);
  }
  function handleCountPlus() {
    if (steps === 1) {
      setCount((c) => c + 1);
    } else {
      setCount((c) => c + steps);
    }
  }
  function handleCountMinus() {
    if (steps === 1) {
      setCount((c) => c - 1);
    } else {
      setCount((c) => c - steps);
    }
  }

  return (
    <div className="container">
      <div className="step">
        <button
          className="stepMinus"
          onClick={() => {
            handleStepMinus();
          }}
        >
          -
        </button>
        <div className="stepNumber">{`Steps: ${steps}`}</div>
        <button className="stepPlus" onClick={() => handleStepPlus()}>
          +
        </button>
      </div>
      <div className="count">
        <button
          className="countMinus"
          onClick={() => {
            handleCountMinus();
          }}
        >
          -
        </button>
        <div className="countNumber">{`Counter: ${count}`}</div>
        <button
          className="countPlus"
          onClick={() => {
            handleCountPlus();
          }}
        >
          +
        </button>
      </div>
      <div className="textView">
        {count === 0 ? (
          <p>{`Today is Mon ${today.getDate()}/${
            today.getMonth() + 1
          }/${today.getFullYear()}`}</p>
        ) : count < 0 ? (
          <p>{`${count * -1} days to Mon ${today.getDate()}/${
            today.getMonth() + 1
          }/${today.getFullYear()}`}</p>
        ) : (
          <p>{`${count} days ago was Mon ${today.getDate()}/${
            today.getMonth() + 1
          }/${today.getFullYear()}`}</p>
        )}
      </div>
    </div>
  );
}

export default App;
