import React, { useEffect, useRef, useState } from "react";
import Button from "../components/Button";

const Home = () => {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  const hanldeIncrement = () => {
    setCount(count + 1);
  };
  const [inpt, setInpt] = useState("");
  useEffect(() => {
    setCalculation(count * 2);
  }, [count]);

  return (
    <div>
      <h1>UseEffect</h1>
      <h3>Count : {count}</h3>
      <button onClick={hanldeIncrement}>+</button>
      <h3>Calculation : {calculation}</h3>
      {/* <Button btnText="go to about" /> */}
    </div>
  );
};

export default Home;
