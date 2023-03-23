import React, { useEffect, useState } from "react";
import Artwork from "assets/art.jpg";
import UserService from "Services/UserService";
import DesignerService from "Services/DesignerService";
import FileUploadServices from "Services/FileUploadServices";

const ArtCard = ({ details, Avatar }: any) => {
  const id = details.designerId;

  const [designers, setDesigner] = useState<any>();
  const [user, setUser] = useState<any>();

  useEffect(() => {
    if (id) {
      DesignerService.getDesignerById(id)
        .then((res: any) => {
          if (res.data.status === 1) {
            setDesigner(res.data.data);
            return;
          } else {
            console.log("not found");
          }
        })
        .catch((error: any) => {
          console.log(error);
        });
    }
  }, [id]);

  useEffect(() => {
    if (designers?.userId) {
      UserService.getUserByUserId(designers?.userId)
        .then((res: any) => {
          if (res.data.status === 1) {
            setUser(res.data.data);
            return;
          } else {
            console.log("not found");
          }
        })
        .catch((error: any) => {
          console.log(error);
        });
    }
  }, [designers?.userId]);

  const [propic, setPropic] = useState<any>("");
  useEffect(() => {
    FileUploadServices.getProfilePicture(1).then((res: any) => {
      if (res.status === 200) {
        setPropic(
          `${process.env.REACT_APP_BACKEND_SERVER}/api/v1/upload/profilePic/${user?.userId}`
        );
        return;
      } else {
        // setPropic(res.status);
      }
    });
  }, [user]);

  return (
    <div>
      <div className="relative w-[320px] h-[400px] border-[0.3px] border-[#fec7507a] bg-[#17171797] rounded-xl hover:bg-black ">
        <div className="absolute left-[25px] top-[25px] w-[270px] h-[270px] border-[0.5px] border-[#fefefe7b] rounded-lg hover:border-1 hover:border-white">
          <img src={Artwork} alt="" className="rounded-lg" />
        </div>
        <div className="absolute right-[140px] top-[280px]">
          <img
            className="inline w-[40px] h-[40px] rounded-full mb-[20px]"
            src={propic}
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
