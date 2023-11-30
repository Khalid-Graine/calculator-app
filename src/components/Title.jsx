import React from "react";

const Title = ({ text }) => {
  return (
    <h3 className=" font-bold text-gray-800 mt-6 mb-1 uppercase border-b-2   w-fit mx-auto border-yellow-300">
      {text}
    </h3>
  );
};

export default Title;
