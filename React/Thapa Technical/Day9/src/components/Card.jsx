import React from "react";
import data from "../api/series.json";
import NetflixCard from "./NetflixCard";

const Card = () => {
  return (
    <>
    {data.map((data) => (
      <NetflixCard data={data} />
    ))}
    </>
  );
};

export default Card;
