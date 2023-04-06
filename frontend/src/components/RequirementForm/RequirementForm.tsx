import React, { useEffect, useRef, useState } from "react";
import SignaturePad from "react-signature-canvas";
import { routeNames } from "routes/route";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { BiEraser } from "react-icons/bi";

import Artwork from "assets/art.jpg";
import FileUploadServices from "Services/FileUploadServices";
import ResourceOrderService from "Services/ResourceOrderService";
import UsersOrdersServices from "Services/UsersOrdersServices";
import { toast } from "react-toastify";

const RequirementForm = ({
  title,
  resourceId,
  designerId,
  amount,
  category,
  designUser,
  user,
}: any) => {
  // console.log(designUser);
  const sigPad = useRef<SignaturePad>(null);
  const [signatureData, setSignatureData] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    const resourceOrderData: any = {
      projectName: data.projectname,
      reqDescription: data.requirements,
      reqDraw: "uploaded",
      attachments: "uploaded",
      rate: 0,
      review: null,
      resourcesResourceId: resourceId,
      progressId: 2,
    };

    console.log(resourceOrderData);

    const result = await ResourceOrderService.addResourceOrder(
      resourceOrderData
    );

    if (result.data.status === 1) {
      // Add data to users orders table
      const UsersOrdersData: any = {
        resourceOrderId: result.data.data.resourceOrderId,
        userId: user?.userId,
      };

      const result2 = await UsersOrdersServices.addUsersOrders(UsersOrdersData);
      console.log(result2);

      // Upload drawing for relevant ID
      const signatureDataURL = sigPad.current?.toDataURL() ?? "";

      setSignatureData(signatureDataURL);

      if (signatureDataURL != null && signatureDataURL !== "") {
        const file = FileUploadServices.convertBase64ToFile(
          signatureDataURL,
          "aa.png"
        );

        let formData = new FormData();
        formData.append("file", file);

        FileUploadServices.uploadResourceOrderDrawing(
          result.data.data.resourceOrderId,
          formData
        );
      } else {
        console.log("No Drawing");
      }

      toast.success("Order Placed");
      // Navigate to progress page
      setTimeout(() => {
        navigate(
          routeNames.Progress.replace(":id", result.data.data.resourceOrderId)
        );
      }, 500);
    } else {
      console.log("Resource Order Not Added");
    }
  };

  useEffect(() => {
    console.log(signatureData);
  }, [signatureData]);

  function clear(e: any) {
    e.preventDefault();
    sigPad.current?.clear();
  }

  const [art, setArt] = useState<any>("");
  useEffect(() => {
    FileUploadServices.getResourceArt(1).then((res: any) => {
      // console.log(res);
      if (res.status === 200) {
        setArt(
          `${process.env.REACT_APP_BACKEND_SERVER}/api/v1/upload/resourceArt/${resourceId}`
        );
        return;
      } else {
        // setPropic(res.status);
      }
    });
  }, [resourceId]);
  return (
    <div>
      <div className="p-8 text-center uppercase">Requirements</div>
      <div className="px-[200px] text-center font-light text-[14px]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
        officiis quibusdam maiores modi sint quaerat, voluptatem fuga dolorem
        impedit possimus minus eligendi nihil. Sequi, saepe repellat ea hic eos
        itaque.
      </div>
      <div className="my-8 text-[#fec750] text-center uppercase font-medium text-[18px]">
        Resource Order Details
      </div>
      <div className="flex flex-col items-center mt-7">
        <form
          className="flex-col m-8 w-[60%] uppercase"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex justify-between mb-8 ">
            <div className="w-[60%]">
              <label className="flex mb-4">
                <span className="flex w-[30%] font-bold">Resource Id</span>
                <div className="w-[70%] flex font-normal">: {resourceId}</div>
              </label>
              <label className="flex mb-4">
                <span className="flex w-[30%] font-bold">Title</span>
                <div className="w-[70%] flex font-normal">: {title}</div>
              </label>
              <label className="flex mb-4">
                <span className="flex w-[30%] font-bold">Designer Name</span>
                <div className="w-[70%] flex font-normal">
                  : {designUser?.firstName} {designUser?.lastName}
                </div>
              </label>
              <label className="flex mb-4">
                <span className="flex w-[30%] font-bold">Amount</span>
                <div className="w-[70%] flex font-normal">: ${amount}</div>
              </label>
              <label className="flex mb-4">
                <span className="flex w-[30%] font-bold">Category</span>
                <div className="w-[70%] flex font-normal">: {category}</div>
              </label>
            </div>
            <div className=" bg-white w-[200px] h-[200px] border-[0.5px] border-[#fefefe7b] rounded-lg hover:border-1 hover:border-white">
              <img src={art} alt="" className="rounded-lg" />
            </div>
          </div>
          <label className="flex mb-4">
            <span className="w-[20%] font-bold ">Project Name :</span>
            <div className="w-full ml-8">
              <input
                type="text"
                className=" h-[2.4rem] w-full text-[14px] rounded-xl border-[0.5px] border-[#fec7505d] bg-transparent px-4 mb-5 "
                placeholder="Type your project name here"
                {...register("projectname", {
                  required: true,
                })}
              />
              {errors.projectname && (
                <p className="flex-row w-full m-1 text-xs text-red-600 ">
                  Project Name is required
                </p>
              )}
            </div>
          </label>

          <label className="flex mb-4">
            <span className="flex w-[20%] font-bold">Requirements :</span>
            <div className="w-full ml-8">
              <textarea
                // type="textarea"
                className=" w-full text-[14px] rounded-xl border-[0.5px] border-[#fec7505d] bg-transparent p-4 mb-5"
                placeholder="Type your requirement description here"
                {...register("requirements", {
                  required: true,
                })}
              />
              {errors.requirements && (
                <p className="flex-col w-full m-1 text-xs text-red-600">
                  Your Requirements is required
                </p>
              )}
            </div>
          </label>

          <label className="flex mb-4">
            <span className="w-[20%] font-bold">Drawing:</span>
            <input
              {...register("signature")}
              className="hidden"
              id="signature"
              type="hidden"
            />
            <SignaturePad
              ref={sigPad}
              canvasProps={{
                width: 600,
                height: 600,
                className:
                  "w-[80%] rounded-xl border-[0.5px] border-[#fec7505d] bg-white px-4",
              }}
            />
          </label>

          <div className="flex justify-between mb-8 lowercase">
            <span className="flex"></span>
            <button onClick={clear} className="flex">
              <BiEraser className="text-[30px]" />
            </button>
          </div>

          <label className="flex mb-4">
            <span className="w-[20%] font-bold">Attachments:</span>
            <input
              {...register("attachments")}
              type="file"
              className="flex w-[80%] text-[14px] bg-[#272727] file-input file-input-bordered"
            />
          </label>

          <button type="submit" className="w-full my-8 btn2">
            Submit Resource Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default RequirementForm;
