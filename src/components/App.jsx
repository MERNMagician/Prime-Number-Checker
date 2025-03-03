import React, { useMemo } from "react";
import Heading from "./Heading.jsx";
import Inputs from "./Inputs.jsx";
import Output from "./Output.jsx";
import { useState, useEffect, useRef } from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  const [prime, checkPrime] = useState(false);
  let [primeNumber, setIsPrimeNumber] = useState(false);
  const ref = useRef();

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  useEffect(() => {
    console.log(ref.current);
  }, [ref]);

  const clearInput = () => {};
  const isPrime = (number) => {
    if (number) {
      console.log(`Number : ${number}`);
    }
  };

  useMemo(() => {
    setIsPrimeNumber(isPrime(number));
  }, [prime]);

  return (
    <div className="flex flex-col gap-5 mt-15">
      <Heading />
      <Inputs
        onChange={handleChange}
        onClear={clearInput}
        onSubmit={() => checkPrime(!prime)}
        ref={ref}
      />
      <Output />
    </div>
  );
};

export default App;
