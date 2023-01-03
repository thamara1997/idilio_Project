import React from "react";
import avatar from "assets/avatar.jpg";
import { BsStarFill } from "react-icons/bs";

const ReviewCard = ({ name, stars, review, country, date }: any) => {
  return (
    <div className="flex flex-row m-2">
      <div className="w-[1000px] mx-auto h-[300px] border-[0.1px] rounded-[25px] border-[#fec7509b] text-left p-[25px] ">
        <div className="flex flex-row m-[20px]">
          <div className="flex items-center">
            <img
              className=" w-[60px] h-[60px] rounded-full"
              src={avatar}
              alt=""
            />
            <div className=" ml-6 text-[15px] font-semibold items-center">
              <div className="flex items-center">
                <span>{name}</span>
                <BsStarFill className="mx-2 text-[#FEC850]" />

                <div className="">{stars}</div>
              </div>
              <div className=" top-[30px] !font-light !text-[#808080f6]">
                {country}
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex ">
          <h3 className="flex mt-1 ml-5 font-light text-[15px]">{review}</h3>
          <div className="absolute top-[140px] left-[20px] !font-light !text-[#808080f6]">
            {date}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
