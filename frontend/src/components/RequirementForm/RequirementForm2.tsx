import React, { useEffect, useRef, useState } from "react";
import SignaturePad from "react-signature-canvas";
import { routeNames } from "routes/route";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { BiEraser } from "react-icons/bi";
import NewOrderServices from "Services/NewOrderServices";
import FileUploadServices from "Services/FileUploadServices";
import { toast } from "react-toastify";

const RequirementForm = ({ id, name, category, Artwork }: any) => {
  const sigPad = useRef<SignaturePad>(null);
  const [signatureData, setSignatureData] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loggedUser, setLoggedUser] = useState<any>(null);

  useEffect(() => {
    // Check local storage for user details
    const storedUser = localStorage.getItem("loggedUser");
    if (storedUser) {
      setLoggedUser(JSON.parse(storedUser));
    } else {
      setLoggedUser(null);
    }
  }, []);

  const [token, setToken] = useState<any>();
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      setToken(JSON.parse(token));
    } else {
      setToken(null);
    }
  }, []);

  const navigate = useNavigate();

  const [files1, setFiles1] = useState<File[]>([]);

  const handleFileChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (selectedFiles) {
      const filesArray = Array.from(selectedFiles);
      setFiles1(filesArray);
    }
  };

  const onSubmit = async (data: any) => {
    const newOrderData: any = {
      projectName: data.projectname,
      reqDescription: data.requirements,
      reqDraw: "uploaded",
      attachments: "uploaded",
      rate: 0,
      review: null,
      designerId: 1,
      packageId: id,
      progressId: 2,
      userId: loggedUser.userId,
    };

    console.log(newOrderData);

    const result = await NewOrderServices.addNewOrder(newOrderData, token);

    if (result.data.status === 1) {
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

        FileUploadServices.uploadNewOrderDrawing(
          result.data.data.newOrderId,
          formData,
          token
        );
      } else {
        console.log("No Drawing");
      }

      console.log(files1);

      if (files1.length > 0) {
        const formData2 = new FormData();
        files1.forEach((file) => {
          formData2.append("file", file);
        });

        const uploadResult = await FileUploadServices.uploadNewOrderAttachments(
          result.data.data.newOrderId,
          formData2,
          token
        );

        if (uploadResult.status === 200) {
          console.log(uploadResult);
          toast.success("Successfully Uploaded");
        } else {
          toast.error("Attachments Not Uploaded");
        }
      } else {
        toast.error("No Attachments");
      }

      toast.success("Order Placed");
      //Navigate to progress page
      setTimeout(() => {
        navigate(
          routeNames.ProgressNew.replace(":id", result.data.data.newOrderId)
        );
      }, 500);
    } else {
      console.log("New Order Not Added");
    }
  };

  useEffect(() => {
    console.log(signatureData);
  }, [signatureData]);

  function clear(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    sigPad.current?.clear();
  }

  return (
    <div>
      <div className="p-8 text-center uppercase">Requirements</div>
      <div className="px-[200px] text-center font-light text-[14px]">
        Welcome to our requirements page, where you can fill out all the details
        of your custom design project. We understand that every project is
        unique, and that's why we've created this page to gather all the
        information we need to provide you with the best possible service.
      </div>
      <div className="my-8 text-[#fec750] text-center uppercase font-medium text-[18px]">
        New Order Details
      </div>
      <div className="flex flex-col items-center mt-7">
        <form
          className="flex-col m-8 w-[60%] uppercase"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full">
            <label className="flex mb-4">
              <span className="flex w-[20%] font-bold">Package Id</span>
              <div className="w-[80%] flex font-normal">: {id}</div>
            </label>
            <label className="flex mb-4">
              <span className="flex w-[20%] font-bold">Package Name</span>
              <div className="w-[80%] flex font-normal">: {name}</div>
            </label>
            <label className="flex mb-4">
              <span className="flex w-[20%] font-bold">Category</span>
              <div className="w-[80%] flex font-normal">: {category}</div>
            </label>
          </div>
          <label className="flex mb-4">
            <span className="flex w-[20%] font-bold">Project Name </span>
            <div className="w-full ml-8">
              <input
                type="text"
                className=" h-[2.4rem] w-full flex text-[14px] rounded-xl border-[0.5px] border-[#fec7505d] bg-transparent px-4 mb-5"
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
            <span className="flex w-[20%] font-bold">Requirements </span>
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
            <span className="w-[20%] font-bold">Drawing </span>
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
            <span className="flex w-[20%] font-bold">Attachments </span>
            <input
              {...register("attachments")}
              type="file"
              className="flex w-[80%] text-[14px] bg-[#272727] file-input file-input-bordered"
              onChange={handleFileChange1}
              multiple
            />
          </label>
          {/* <Link to={routeNames.Progress.replace(":id", id)}> */}

          <button type="submit" className="w-full my-8 btn2">
            Submit New Order
          </button>
          {/* </Link> */}
        </form>
      </div>
    </div>
  );
};

export default RequirementForm;
