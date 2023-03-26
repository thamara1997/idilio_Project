import React from "react";
import Art from "assets/art.jpg";

const ResourceOrderCard = (resourceOrder: any) => {
  return (
    <div className="w-[70%] mx-auto">
      <div className="flex justify-between mb-8 ">
        <div className="w-[60%]">
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
            <div className="w-[70%] flex font-normal">: Designer Name</div>
          </label>
          <label className="flex mb-4">
            <span className="flex w-[30%] font-bold">Amount</span>
            <div className="w-[70%] flex font-normal">: $amount</div>
          </label>
          <label className="flex mb-4">
            <span className="flex w-[30%] font-bold">Category</span>
            <div className="w-[70%] flex font-normal">: category</div>
          </label>
        </div>
        <div className=" bg-white w-[200px] h-[200px] border-[0.5px] border-[#fefefe7b] rounded-lg hover:border-1 hover:border-white">
          <img src={Art} alt="" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default ResourceOrderCard;
