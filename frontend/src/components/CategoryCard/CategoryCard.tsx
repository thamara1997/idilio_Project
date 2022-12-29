import React from "react";

const CategoryCard = ({ name, image }: any) => {
  return (
    <div className="text-center">
      <div className="relative  w-[280px] h-[280px] bg-[#17171797] rounded-xl">
        <img
          src={image}
          alt=""
          className=" object-cover h-[280px] rounded-xl border-[#fec7507a] border-[0.3px]  hover:border-1 hover:border-white"
        />
      </div>
      <h4 className=" text-[15px] mt-[20px] font-light">{name}</h4>
    </div>
  );
};

export default CategoryCard;
