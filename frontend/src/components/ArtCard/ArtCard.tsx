import React from "react";
import Artwork from "assets/art.jpg";
import avatar from "assets/avatar.jpg";

const ArtCard = ({ details }: any) => {
  return (
    <div>
      <div className="relative w-[320px] h-[400px] border-[0.3px] border-[#fec7507a] bg-[#17171797] rounded-xl hover:bg-black ">
        <div className="absolute left-[25px] top-[25px] w-[270px] h-[270px] border-[0.5px] border-[#fefefe7b] rounded-lg hover:border-1 hover:border-white">
          <img src={Artwork} alt="" className="rounded-lg" />
        </div>
        <div className="absolute right-[140px] top-[280px]">
          <img
            className="inline w-[40px] h-[40px] rounded-full mb-[20px]"
            src={avatar}
            alt=""
          />
        </div>
        <h4 className="absolute w-full mx-auto top-[330px] text-[12px] font-semibold">
          {details.title}
        </h4>
        <div>
          <h4 className="absolute w-full mx-auto top-[350px] text-[20px] text-[#fec850] font-bold">
            ${details.amount}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ArtCard;
