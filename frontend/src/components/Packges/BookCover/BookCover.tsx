import React from "react";
import PackageCard from "../PackageCard";

const BookCover = () => {
  const packcard = [
    {
      id: 9,
      name: "BASIC",
      price: "$29.99",
      designCount: "1 Design Concept",
      revisions: "5 Revisions",
      resolution: "High Resolution 300 DPI",
      size: "Size 1600x1600 px",
      category: "bookcover",
      source: "No Source File",
    },
    {
      id: 10,
      name: "STANDARD",
      price: "$49.99",
      designCount: "2 Design Concept",
      revisions: "10 Revisions",
      resolution: "High Resolution 300 DPI",
      size: "Size 2000x2000 px",
      category: "bookcover",
      source: "No Source File",
    },
    {
      id: 11,
      name: "ADVANCE",
      price: "$99.99",
      designCount: "3 Design Concept",
      revisions: "20 Revisions",
      resolution: "High Resolution 300 DPI",
      size: "Size 3000x3000 px",
      category: "bookcover",
      source: "Source File",
    },
    {
      id: 12,
      name: "PREMIUM",
      price: "$149.99",
      designCount: "3 Design Concept",
      revisions: "Unlimited Revisions",
      resolution: "High Resolution 300 DPI",
      size: "Size 3000x3000 px",
      category: "bookcover",
      source: "Source File",
    },
  ];
  return (
    <div>
      <div>
        <h3 className="font-bold text-[20px] mb-8">Book Cover Packages</h3>
        <h6 className="font-light text-[12px] mx-[200px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, veniam
          doloribus est cum recusandae assumenda dolores adipisci! Aperiam,
          aspernatur neque officia reprehenderit numquam accusamus. Tempore
          fugit quam commodi incidunt nulla!
        </h6>
      </div>
      <div className="flex justify-center mb-[100px]">
        <div className="mt-[80px] grid grid-cols-4 gap-[30px]">
          {packcard.map((t: any, i: number) => (
            <div id="item1" className="w-full carousel-item" key={i}>
              <PackageCard
                name={t.name}
                price={t.price}
                designCount={t.designCount}
                revisions={t.revisions}
                resolution={t.resolution}
                size={t.size}
                id={t.id}
                category={t.category}
                source={t.source}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookCover;
