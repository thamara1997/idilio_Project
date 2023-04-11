import React from "react";
import PackageCard from "../PackageCard";

const Mascotlogo = () => {
  const packcard = [
    {
      id: 17,
      name: "BASIC",
      price: "$29.99",
      designCount: "1 Design Concept",
      revisions: "5 Revisions",
      resolution: "High Resolution 300 DPI",
      size: "Size 1600x1600 px",
      category: "mascotlogo",
      source: "No Source File",
    },
    {
      id: 18,
      name: "STANDARD",
      price: "$49.99",
      designCount: "2 Design Concept",
      revisions: "10 Revisions",
      resolution: "High Resolution 300 DPI",
      size: "Size 2000x2000 px",
      category: "mascotlogo",
      source: "No Source File",
    },
    {
      id: 19,
      name: "ADVANCE",
      price: "$99.99",
      designCount: "3 Design Concept",
      revisions: "20 Revisions",
      resolution: "High Resolution 300 DPI",
      size: "Size 3000x3000 px",
      category: "mascotlogo",
      source: "Source File",
    },
    {
      id: 20,
      name: "PREMIUM",
      price: "$149.99",
      designCount: "3 Design Concept",
      revisions: "Unlimited Revisions",
      resolution: "High Resolution 300 DPI",
      size: "Size 3000x3000 px",
      category: "mascotlogo",
      source: "Source File",
    },
  ];
  return (
    <div>
      <div>
        <h3 className="font-bold text-[20px] mb-8">Mascot Logo Packages</h3>
        <h6 className="font-light text-[12px] mx-[200px]">
          Our user-friendly interface and notification system keep you updated
          on the progress of your project, and our team is always available to
          answer any questions you may have. So, if you're looking for a unique
          and professional design, look no further than our new design page.
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
                id={t.id}
                resolution={t.resolution}
                size={t.size}
                source={t.source}
                category={t.category}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mascotlogo;
