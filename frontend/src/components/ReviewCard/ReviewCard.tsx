import React, { useEffect, useState } from "react";
import avatar from "assets/avatar.jpg";
import { BsStarFill } from "react-icons/bs";
import ResourcesService from "Services/ResourcesService";
import UserService from "Services/UserService";
import DesignerService from "Services/DesignerService";
import FileUploadServices from "Services/FileUploadServices";
import UsersOrdersServices from "Services/UsersOrdersServices";

const ReviewCard = ({
  rate,
  review,
  resourceId,
  date,
  resourceOrderId,
}: any) => {
  const [resources, setResources] = useState<any>();

  useEffect(() => {
    ResourcesService.getResourceById(resourceId).then((res: any) => {
      if (res.data.status === 1) {
        setResources(res.data.data);
        console.log(res.data.data);
        return;
      } else {
        console.log("not found");
      }
    });
  }, [resourceId]);

  const [userdetails, setUserDetails] = useState<any>();

  useEffect(() => {
    if (resourceOrderId) {
      UsersOrdersServices.getUsersOrdersByResourceOrderId(resourceOrderId)
        .then((res: any) => {
          if (res.data.status === 1) {
            setUserDetails(res.data.data);
            console.log(res.data.data);
            return;
          } else {
            console.log("not found");
          }
        })
        .catch((error: any) => {
          //console.log(error);
        });
    }
  }, [resourceOrderId]);

  console.log(userdetails?.userId);

  const [user, setUser] = useState<any>();

  useEffect(() => {
    if (userdetails?.userId) {
      UserService.getUserByUserId(userdetails?.userId)
        .then((res: any) => {
          if (res.data.status === 1) {
            setUser(res.data.data);
            console.log(res.data.data);
            return;
          } else {
            console.log("not found");
          }
        })
        .catch((error: any) => {
          console.log(error);
        });
    }
  }, [userdetails?.userId]);

  const [propic, setPropic] = useState<any>("");
  useEffect(() => {
    FileUploadServices.getProfilePicture(1).then((res: any) => {
      // console.log(res);
      if (res.status == 200) {
        setPropic(
          `${process.env.REACT_APP_BACKEND_SERVER}/api/v1/upload/profilePic/${userdetails.userId}`
        );
        return;
      } else {
        // setPropic(res.status);
      }
    });
  }, [user?.userId]);

  return (
    <div className="flex flex-row m-2">
      <div className="w-[1000px] mx-auto h-[300px] border-[0.1px] rounded-[25px] border-[#fec7509b] text-left p-[25px] ">
        <div className="flex flex-row m-[20px]">
          <div className="flex items-center">
            <img
              className=" w-[60px] h-[60px] rounded-full"
              src={propic}
              alt=""
            />
            <div className=" ml-6 text-[15px] font-semibold items-center">
              <div className="flex items-center">
                <span className="">
                  {user?.firstName} {user?.lastName}
                </span>
                <div className="flex items-center ml-5">
                  <div className="">{rate}</div>
                  <BsStarFill className="mx-2 text-[#FEC850]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex ">
          <h3 className="flex mt-1 ml-5 font-light text-[15px]">{review}</h3>
          <div className="absolute top-[140px] left-[20px] !font-light !text-[#808080f6]">
            2023
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
