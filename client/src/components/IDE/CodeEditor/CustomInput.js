import React from "react";
import { classnames } from "../../../utils/general";

const CustomInput = ({ customInput, setCustomInput }) => {
  return (
    <>
      <h1 className="font-bold text-xl bg-clip-text text-white bg-gradient-to-r from-slate-900 to-slate-100 mr-80 px-10">
        Input
      </h1>
      <textarea
        rows="5"
        value={customInput}
        onChange={(e) => setCustomInput(e.target.value)}
        placeholder={`Custom input`}
        className={classnames(
          " text-black focus:outline-none w-full border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white mt-2 text-left"
        )}
      ></textarea>
    </>
  );
};

export default CustomInput;
