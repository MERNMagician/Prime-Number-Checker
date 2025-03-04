import React, { useEffect } from "react";

const Output = ({ isPrime, number, isFirstLoad }) => {
  return (
    <div className="flex gap-3 items-center text-center justify-center font-[Jetbrains_Mono] border-2 border-green-600 w-[30vw] mr-auto ml-auto h-[200px] bg-green-200">
      {!isFirstLoad ? (
        isPrime ? (
          <p className=" text-[18px] text-green-500" id="output">
            {number} Is a Prime Number
          </p>
        ) : (
          <p className=" text-[18px] text-red-600" id="output">
            {number} Is not a prime number
          </p>
        )
      ) : (
        ""
      )}
    </div>
  );
};

export default Output;
