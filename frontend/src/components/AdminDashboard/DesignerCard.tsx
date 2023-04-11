import DesignerService from "Services/DesignerService";
import React from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { MdDownloadDone, MdOutlineVerifiedUser } from "react-icons/md";
import { toast } from "react-toastify";
import LinkedIn from "assets/Linkedin.png";

const DesignerCard = ({ designerId, type, approved, designer }: any) => {
  console.log(designer);
  const handleAcceptOrder = async (data: any) => {
    const designerData: any = {
      designerId: designer?.designerId,
      orderCount: designer?.orderCount,
      level: designer?.level,
      fbURL: designer?.fbURL,
      instaURL: designer?.instaURL,
      linkedinURL: designer?.linkedinURL,
      cv: designer?.cv,
      approved: true,
      userId: designer?.userId,
    };
    console.log(designerData);
    const result = await DesignerService.UpdateDesigner(designerData);
    if (result.data.status === 1) {
      console.log(result.data);
      toast.success("Designer Added");
      setTimeout(() => {
        window.location.reload();
      }, 500);
      return;
    } else {
      console.log("Not Added");
    }
  };
  return (
    <div>
      <div>
        <div className="relative mx-auto my-4 h-[40px] bg-[#17171797] rounded-xl border-[#fec7507a] border-[0.3px]  hover:border-1 hover:border-white">
          <div className="absolute top-1 left-3 text-[#fec750]">{type}</div>
          <div className="absolute uppercase top-1 left-[55px]">
            Designer Id : {designerId}
          </div>

          <div className="absolute uppercase top-1 right-[100px] h-[30px] w-[30px]">
            <a href={designer?.linkedinURL} target="_blank">
              <img src={LinkedIn} alt="" />
            </a>
          </div>
          <button
            className="absolute uppercase top-1 right-5 text-[#fec750] btn2"
            onClick={handleAcceptOrder}
          >
            {approved === 0 ? (
              <>
                <AiOutlineUserAdd />
              </>
            ) : (
              <>
                <MdOutlineVerifiedUser />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DesignerCard;
