import React, { useEffect, useRef, useState } from "react";
import Art from "assets/art.jpg";
import ResourcesService from "Services/ResourcesService";
import UserService from "Services/UserService";
import DesignerService from "Services/DesignerService";
import FileUploadServices from "Services/FileUploadServices";
import SignaturePad from "react-signature-canvas";

const ResourceOrderCard = (resourceOrder: any) => {
  console.log(resourceOrder);
  const [resources, setResources] = useState<any>();

  const sigPad = useRef<SignaturePad>(null);
  const [signatureData, setSignatureData] = useState<string>("");

  useEffect(() => {
    console.log(signatureData);
  }, [signatureData]);

  useEffect(() => {
    ResourcesService.getResourceById(
      resourceOrder?.resourceOrder.resourcesResourceId
    )
      .then((res: any) => {
        if (res.data.status === 1) {
          setResources(res.data.data);
          console.log(res.data.data);
          return;
        } else {
          console.log("not found");
        }
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, [resourceOrder?.resourceOrder.resourcesResourceId]);

  const designerId = resources?.designerId;

  const [designers, setDesigner] = useState<any>();
  const [designUser, setDesignUser] = useState<any>();

  useEffect(() => {
    if (resourceOrder?.resourceOrder.resourcesResourceId) {
      DesignerService.getDesignerById(designerId)
        .then((res: any) => {
          if (res.data.status === 1) {
            setDesigner(res.data.data);
            //console.log(res.data.data);
            return;
          } else {
            console.log("not found");
          }
        })
        .catch((error: any) => {
          //console.log(error);
        });
    }
  }, [designerId, resourceOrder?.resourceOrder.resourcesResourceId]);

  useEffect(() => {
    if (designers?.userId) {
      UserService.getUserByUserId(designers?.userId)
        .then((res: any) => {
          if (res.data.status === 1) {
            setDesignUser(res.data.data);
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
  }, [designers?.userId]);

  const [art, setArt] = useState<any>("");
  useEffect(() => {
    FileUploadServices.getResourceArt(1).then((res: any) => {
      // console.log(res);
      if (res.status === 200) {
        setArt(
          `${process.env.REACT_APP_BACKEND_SERVER}/api/v1/upload/resourceArt/${resources?.resourceId}`
        );
        return;
      } else {
        // setPropic(res.status);
      }
    });
  }, [resources?.resourceId]);

  const resourceOrderId = resourceOrder.resourceOrder.resourceOrderId;

  console.log(resourceOrderId);

  const [draw, setDraw] = useState<any>("");
  const [work, setWork] = useState<any>("");
  useEffect(() => {
    FileUploadServices.getResourceOrderDrawing(1).then((res: any) => {
      // console.log(res);
      if (res.status === 200) {
        setDraw(
          `${process.env.REACT_APP_BACKEND_SERVER}/api/v1/upload/resourceorderdrawing/${resourceOrderId}`
        );
        return;
      } else {
        // setPropic(res.status);
      }
    });
    FileUploadServices.getResourceOrderWork(1).then((res2: any) => {
      console.log(res2);
      if (res2.status === 200) {
        setWork(
          `${process.env.REACT_APP_BACKEND_SERVER}/api/v1/upload/resourceorderwork/${resourceOrderId}`
        );
        return;
      } else {
        // setPropic(res.status);
      }
    });
  }, [resourceOrderId]);

  // useEffect(() => {
  //   FileUploadServices.getResourceOrderWork(1).then((res: any) => {
  //     console.log(res);
  //     if (res.status === 200) {
  //       setWork(
  //         `${process.env.REACT_APP_BACKEND_SERVER}/api/v1/upload/resourceorderwork/${resourceOrderId}`
  //       );
  //       return;
  //     } else {
  //       // setPropic(res.status);
  //     }
  //   });
  // }, [resourceOrderId]);

  return (
    <div className="w-[70%] mx-auto">
      {/* Resource Order Details */}
      <div>
        <div className="flex justify-between mb-8 ">
          <div className="w-[60%] uppercase">
            <label className="flex mb-4">
              <span className="flex w-[30%] font-bold">Resource Id</span>
              <div className="w-[70%] flex font-normal">
                : {resourceOrder?.resourceOrder?.resourceOrderId}
              </div>
            </label>
            <label className="flex mb-4">
              <span className="flex w-[30%] font-bold">Project Name</span>
              <div className="w-[70%] flex font-normal">
                : {resourceOrder?.resourceOrder?.projectName}
              </div>
            </label>
            <label className="flex mb-4">
              <span className="flex w-[30%] font-bold">Designer Name</span>
              <div className="w-[70%] flex font-normal">
                : {designUser?.firstName} {designUser?.lastName}
              </div>
            </label>
            <label className="flex mb-4">
              <span className="flex w-[30%] font-bold">Amount</span>
              <div className="w-[70%] flex font-normal">
                : ${resources?.amount}
              </div>
            </label>
            <label className="flex mb-4">
              <span className="flex w-[30%] font-bold">Category</span>
              <div className="w-[70%] flex font-normal">
                : {resources?.category}
              </div>
            </label>
          </div>
          <div className=" bg-white w-[200px] h-[200px] border-[0.5px] border-[#fefefe7b] rounded-lg hover:border-1 hover:border-white">
            <img src={art} alt="" className="rounded-lg" />
          </div>
        </div>
        <div>
          <label className="mb-4 ">
            <span className="w-full font-bold uppercase">
              Requirement Description
            </span>
            <div className="w-full mt-6 font-light">
              {resourceOrder?.resourceOrder?.reqDescription}
            </div>
          </label>
        </div>
      </div>

      {/* drawing and recent work */}
      <div>
        <span className="flex w-full justify-center mx-auto text-[#fec750]  my-8 font-bold text-center uppercase">
          Drawing And Recent Work
        </span>

        <div className="w-[80%] mx-auto mt-6 ">
          <div className="flex justify-between">
            <div>
              <div className="w-[300px] h-[300px] bg-white border-[0.5px] border-[#fefefe7b] rounded-lg hover:border-1 hover:border-white ">
                <img src={draw} alt="" className="rounded-lg" />
              </div>
              <div className="flex justify-center mt-3">
                <button className="w-full uppercase btn2">
                  Change Drawing
                </button>
              </div>
            </div>
            <div>
              <div className="w-[300px] h-[300px] border-[0.5px] border-[#fefefe7b] rounded-lg hover:border-1 hover:border-white ">
                <img src={work} alt="" className="rounded-lg" />
              </div>
              <div className="flex justify-center mt-3">
                <button className="w-full uppercase btn2">Upload Art</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceOrderCard;
