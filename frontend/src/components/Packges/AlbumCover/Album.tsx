import React from "react";
import PackageCard from "../PackageCard";

const Album = () => {
  const packcard = [
    {
      id: 1,
      name: "BASIC",
      price: "$29.99",
    },
    {
      id: 2,
      name: "STANDARD",
      price: "$49.99",
    },
    {
      id: 3,
      name: "ADVANCE",
      price: "$99.99",
    },
    {
      id: 4,
      name: "PREMIUM",
      price: "$149.99",
    },
  ];
  return (
    <div className="flex justify-center mb-[100px]">
      <div className="mt-[80px] grid grid-cols-4 gap-[60px]">
        {packcard.map((t: any, i: number) => (
          <div id="item1" className="w-full carousel-item" key={i}>
            <PackageCard name={t.name} price={t.price} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Album;
