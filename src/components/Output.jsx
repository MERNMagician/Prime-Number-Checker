import React from "react";

const Output = () => {
  return (
    <div className="flex gap-3 items-center text-center justify-center font-[Jetbrains_Mono] border-2 border-green-600 w-[30vw] mr-auto ml-auto h-[200px]">
      <h2 className="text-[20px]">Result:</h2>
      <p className=" text-[18px]" id="output"></p>
    </div>
  );
};

export default Output;