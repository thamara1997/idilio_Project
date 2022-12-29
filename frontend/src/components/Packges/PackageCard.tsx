import React from "react";

const PackageCard = ({ name, price }: any) => {
  return (
    <div>
      <h1>{name}</h1>
      <h6>{price}</h6>
    </div>
  );
};

export default PackageCard;
