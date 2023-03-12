import React from "react";
import Avatar from "assets/avatar.jpg";
import Facebook from "assets/Facebook.png";
import Insta from "assets/Insta.png";
import LinkedIn from "assets/Linkedin.png";

const DesignerProfileCard = ({ firstName, lastName, role, level }: any) => {
  return (
    <div>
      <div>
        <div className="relative w-[240px] h-[350px] border-[0.3px] border-[#fec7507a] bg-[#17171797] rounded-xl hover:bg-black ">
          <div className="absolute mx-[30px] top-[25px] hover:border-1 hover:border-white">
            <img src={Avatar} alt="" className="rounded-[50%]" />
          </div>
          <h4 className="absolute w-full mx-auto top-[225px] text-[8px] text-[#fec850] font-light uppercase">
            Level {level} Designer
          </h4>
          <h4 className="absolute w-full mx-auto top-[240px] text-[12px] font-semibold">
            {firstName} {lastName}
          </h4>
          <h4 className="absolute w-full mx-auto top-[260px] text-[10px] text-[#727272] font-light uppercase">
            {role}
          </h4>

          <div className="absolute w-full h-[35px] mx-auto top-[290px] flex gap-4 justify-center items-center">
            <div className="flex h-[30px] w-[30px] ">
              <img src={Facebook} alt="" />
            </div>
            <div className="flex  h-[30px] w-[30px] ">
              <img src={Insta} alt="" />
            </div>
            <div className="flex h-[30px] w-[30px] ">
              <img src={LinkedIn} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignerProfileCard;
