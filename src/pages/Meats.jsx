import React from "react";
import Grid from "../components/Grid";
import data from "../data/carne";

const Meats = () => {
  return (
    <div className="flex flex-col items-center justify-center py-28">
      <h1 className="font-primary text-3xl font-extrabold">CARNES</h1>
      <Grid data={data} />
    </div>
  );
};

export default Meats;
