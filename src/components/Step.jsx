import React from "react";

const Step = ({ recipes }) => {
  return (
    <div>
      {recipes.map((recipe, index) => (
        <div key={index} className="py-3 flex flex-col items-center">
          <p className="font-primary font-black text-xl text-center text-[#7B936A]">
            {index+1}
          </p>
          <div className="w-1/4 h-full px-5 py-5 bg-[#C5EBAA] font-primary font-light justify-center text-sm max-[640px]:w-3/4 rounded-xl">
            {recipe}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Step;
