import React from "react";
import Grid from "../components/Grid";

const Page = ({ data, title }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#F0F5EF] h-screen">
      <h1 className="font-primary text-3xl font-extrabold mt-24">{title}</h1>
      <Grid data={data} />
    </div>
  );
};

export default Page;
