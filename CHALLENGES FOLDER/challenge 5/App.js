import logo from "./logo.svg";
import "./App.css";
import { use, useState } from "react";

function App() {
  const today = new Date();
  const [steps, setSteps] = useState(1);
  const [count, setCount] = useState(0);

  // function handleStepPlus() {
  //   setSteps((s) => s + 1);
  // }
  // function handleStepMinus() {
  //   setSteps((s) => s - 1);
  // }

  function resetCounter() {
    setCount(0);
    setSteps(1);
  }

  function handleSliderValueChange(event) {
    const value = setSteps(event.target.value);
    if (value < 1) {
      setSteps(1);
    } else if (value > 10) {
      setSteps(10);
    }
  }

  function handleCountPlus() {
    if (steps === 1) {
      setCount((c) => c + 1);
    } else {
      setCount((c) => c + steps / 1);
    }
  }
  function handleCountMinus() {
    if (steps === 1) {
      setCount((c) => c - 1);
    } else {
      setCount((c) => c - steps / 1);
    }
  }

  function handleInputChange(event) {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value)) {
      setCount(value);
    } else {
      setCount(0);
    }
  }

  return (
    <div className="container">
      {/* <div className="step">
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
      </div> */}
      <div className="stepSlider">
        <input
          className="slider"
          type="range"
          min="1"
          max="10"
          value={steps}
          id="myRange"
          onChange={handleSliderValueChange}
        />
        <div className="sliderCount"> {steps} </div>
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
        <input type="number" onChange={handleInputChange} />
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
      <button className="resetBtn" onClick={resetCounter}>
        Reset
      </button>
    </div>
  );
}

export default App;
