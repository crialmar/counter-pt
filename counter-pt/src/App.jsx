import { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const maxLimit = 10;

  const handleDecrease = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    } else {
      setCount(0);
    }
  };

  const handleIncrease = () => {
    if (count < maxLimit) {
      setCount((prevCount) => prevCount + 1);
    } else {
      setCount(0);
    }
  };

  return (
    <>
      <div className="card">
        <h1>React counter</h1>
        <h1>{count}</h1>
        {count === maxLimit && <p>You´re in the limit</p>}
        <button
          className="increase"
          onClick={handleIncrease}
          disabled={count === maxLimit}
        >
          +
        </button>
        <button className="reset" onClick={() => setCount(0)}>
          Reset
        </button>
        <button className="decrease" onClick={handleDecrease}>
          {console.log(count)}-
        </button>
      </div>
    </>
  );
};

export default App;
