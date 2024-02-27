import React from "react";
import Grid from "../components/Grid";
import data from '../data/mariscos';

const Seafood = () => {
  return (
    <div className="flex flex-col items-center justify-center py-28">
      <h1 className="font-primary text-3xl font-extrabold">MARISCOS</h1>
      <Grid data={data} />
    </div>
  );
};

export default Seafood;
