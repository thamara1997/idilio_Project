import React from "react";
import avatar from "assets/avatar.jpg";

const CarousalCard = ({ name, desc }: any) => {
  return (
    <div className="!flex !items-center">
      <div className="w-[1000px] border-[0.1px] rounded-[25px] border-[#FEC850] text-center p-[45px] ">
        <div>
          <h3>{desc}</h3>
        </div>

        <div className="mt-[30px]">
          <img
            className="inline w-[80px] h-[80px] rounded-full mb-[20px]"
            src={avatar}
            alt=""
          />
        </div>

        <div>
          <h2>{name}</h2>
        </div>
      </div>
    </div>
  );
};

export default CarousalCard;
