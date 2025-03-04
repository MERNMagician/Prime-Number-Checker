import React, { useMemo } from "react";
import Heading from "./Heading.jsx";
import Inputs from "./Inputs.jsx";
import Output from "./Output.jsx";
import { useState, useEffect, useRef } from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  const [numberToCheck, setNumberToCheck] = useState(0);
  const [prime, checkPrime] = useState(false);
  const [result, setResult] = useState(false);
  const [primeNumber, setIsPrimeNumber] = useState(false);
  const [isFirstLoad, setFirstLoad] = useState(true);
  const ref = useRef();

  const handleChange = (event) => {
    setNumber(event.target.value);
  };
  const clearInput = () => {
    ref.current.value = "";
    setFirstLoad(true);
  };

  const isPrime = (number) => {
    if (number) {
      setFirstLoad(false);
      return number % 2 != 0;
    }
  };

  useMemo(() => {
    setIsPrimeNumber(isPrime(number));
    setNumberToCheck(number);
  }, [prime]);

  useEffect(() => {
    setNumber(number);
  }, [number]);

  useEffect(() => {
    if (primeNumber) {
      setResult(true);
    }
  }, [primeNumber]);

  return (
    <div className="flex flex-col gap-5 mt-15">
      <Heading />
      <Inputs
        onChange={handleChange}
        onClear={clearInput}
        onSubmit={() => checkPrime(!prime)}
        customValue={numberToCheck}
        ref={ref}
      />
      <Output isPrime={primeNumber} isFirstLoad={isFirstLoad} />
    </div>
  );
};

export default App;
