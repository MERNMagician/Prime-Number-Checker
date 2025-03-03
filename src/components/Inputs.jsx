import React from "react";

const Inputs = ({ onChange, onClear, onSubmit, ref, value }) => {
  return (
    <div className="flex items-center flex-col gap-5">
      <input
        type="number"
        placeholder="Enter the number you want to check"
        className="border-2 border-green-500 rounded-lg p-4 w-[350px] text-center font-[Jetbrains_Mono] text-[14px]"
        onChange={onChange}
        ref={ref}
        value={value}
      />
      <section className="flex items-center gap-5 text-white">
        <button
          className="bg-green-500 w-[100px] p-2 rounded-lg"
          onClick={onClear}
        >
          Clear
        </button>
        <button
          className="bg-red-500 w-[100px] p-2 rounded-lg"
          onClick={onSubmit}
        >
          Submit
        </button>
      </section>
    </div>
  );
};

export default Inputs;
