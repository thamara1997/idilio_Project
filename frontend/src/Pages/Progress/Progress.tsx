import React from "react";
import { cardDetails } from "data/data";
import { useParams } from "react-router-dom";

const Progress = () => {
  let { id } = useParams();

  let iid: number = Number(id);

  const details = cardDetails[iid];
  console.log(details);

  return <div></div>;
};

export default Progress;
