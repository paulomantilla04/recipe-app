import React from "react";

const Step = ({ recipes }) => {
  return (
    <div>
      {recipes.map((recipe, index) => (
        <div key={index} className="py-2 flex flex-col items-center">
          <p className="font-primary font-black text-xl text-center">
            {index+1}
          </p>
          <div className="w-1/4 h-full px-5 py-3 bg-gray-200 font-primary font-light text-center justify-center text-sm max-[640px]:w-3/4 rounded-xl">
            {recipe}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Step;
