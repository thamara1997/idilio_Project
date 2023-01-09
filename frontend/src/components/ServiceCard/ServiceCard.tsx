import React from "react";

const ServiceCard = ({ sname, icon }: any) => {
  return (
    <div>
      <div className="text-center">
        <div className="relative w-[180px] mx-auto h-[180px] bg-[#17171797] rounded-xl border-[#fec7507a] border-[0.3px]  hover:border-1 hover:border-white">
          <div className="text-[80px] absolute top-[48px] left-[48px] mx-auto">
            {icon}
          </div>
        </div>
        <h4 className=" text-[15px] mt-[20px] font-light">{sname}</h4>
      </div>
    </div>
  );
};

export default ServiceCard;
