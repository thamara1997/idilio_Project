import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ResourceOrderCard from "components/Progress Cards/ResourceOrderCard";
import ResourceOrderService from "Services/ResourceOrderService";
import ProgressBar from "components/Progress Cards/ProgressBar";

const Progress = () => {
  let { id } = useParams();

  let iid: number = Number(id);

  console.log(iid);

  const [resourceOrder, setResourceOrder] = useState<any>({});

  useEffect(() => {
    ResourceOrderService.getResourceOrderById(iid).then((res: any) => {
      if (res.data.status === 1) {
        setResourceOrder(res.data.data);
        console.log(res.data.data);
        return;
      } else {
        console.log("Resource Order Not Found");
      }
    });
  }, [iid]);

  const progressStep = resourceOrder.progressId;
  // console.log(progressStep);

  return (
    <div>
      <div className="p-8 text-center uppercase">Progress</div>
      <div className="px-[200px] text-center font-light text-[14px]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
        officiis quibusdam maiores modi sint quaerat, voluptatem fuga dolorem
        impedit possimus minus eligendi nihil. Sequi, saepe repellat ea hic eos
        itaque.
      </div>
      <ProgressBar currentStep={progressStep} />
      <div className="mt-[80px] mb-[40px] text-[#fec750] text-center uppercase font-medium text-[18px]">
        Resource Order Progress
      </div>

      <div>
        <ResourceOrderCard resourceOrder={resourceOrder} />
      </div>
    </div>
  );
};

export default Progress;
