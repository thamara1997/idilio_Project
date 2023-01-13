import React, { useRef } from "react";
import SignaturePad from "react-signature-canvas";
import { HiOutlineSave } from "react-icons/hi";
import { routeNames } from "routes/route";
import { Link } from "react-router-dom";

const RequirementForm = ({ title, id2, name, price, category }: any) => {
  const sigPad = useRef<any>();
  let data = "";

  // function clear(e: any) {
  //   e.preventDefault();
  //   sigPad.current.clear();
  // }
  const save = (e: any) => {
    e.preventDefault();
    data = sigPad.current.toDataURL();
    console.log(data);
  };
  // console.log(data);

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
        Order Details
      </div>
      <div className="flex flex-col items-center mt-7">
        <form className="flex-col m-8 w-[60%] uppercase">
          <label className="flex mb-4">
            <span className="flex w-[20%] font-bold">Order Id</span>
            <div className="w-[80%] flex font-normal">: {id2}</div>
          </label>
          <label className="flex mb-4">
            <span className="flex w-[20%] font-bold">Title</span>
            <div className="w-[80%] flex font-normal">: {title}</div>
          </label>
          <label className="flex mb-4">
            <span className="flex w-[20%] font-bold">Designer Name</span>
            <div className="w-[80%] flex font-normal">: {name}</div>
          </label>
          <label className="flex mb-4">
            <span className="flex w-[20%] font-bold">Amount</span>
            <div className="w-[80%] flex font-normal">: {price}</div>
          </label>
          <label className="flex mb-4">
            <span className="flex w-[20%] font-bold">Category</span>
            <div className="w-[80%] flex font-normal">: {category}</div>
          </label>
          <label className="flex mb-4">
            <span className="flex w-[20%] font-bold">Project Name </span>
            <input
              type="text"
              className=" h-[2.4rem] w-[80%] flex text-[14px] rounded-xl border-[0.5px] border-[#fec7505d] bg-transparent px-4 mb-7"
              placeholder="Type your project name here"
            />
          </label>

          <label className="flex mb-4">
            <span className="flex w-[20%] font-bold">Requirements </span>
            <textarea
              // type="textarea"
              className=" w-[80%] text-[14px] rounded-xl border-[0.5px] border-[#fec7505d] bg-transparent p-4 mb-7"
              placeholder="Type your project name here"
            />
          </label>

          <label className="flex mb-4">
            <span className="w-[20%] font-bold">Drawing </span>

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
            <button onClick={save} className="flex">
              <HiOutlineSave className="text-[30px]" />
            </button>
          </div>

          <label className="flex mb-4">
            <span className="flex w-[20%] font-bold">Attachments </span>
            {/* <div className=" w-[80%] text-[14px] text-center bg-transparent mb-7">
              <FileUploader />
            </div> */}
            <input
              type="file"
              className="flex w-[80%] text-[14px] bg-[#272727] file-input file-input-bordered"
            />
          </label>
          <Link to={routeNames.Progress.replace(":id", id2)}>
            <input type="button" value="SUBMIT" className="w-full my-8 btn2" />
          </Link>
        </form>
      </div>
    </div>
  );
};

export default RequirementForm;
