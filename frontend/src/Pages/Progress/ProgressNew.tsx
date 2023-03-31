import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProgressBar from "components/Progress Cards/ProgressBar";
import NewOrderServices from "Services/NewOrderServices";
import NewOrderCard from "components/Progress Cards/NewOrderCard";

const ProgressNew = () => {
  let { id } = useParams();

  let iid: number = Number(id);

  console.log(iid);

  const [newOrder, setNewOrder] = useState<any>({});

  useEffect(() => {
    NewOrderServices.getNewOrderById(iid).then((res: any) => {
      if (res.data.status === 1) {
        setNewOrder(res.data.data);
        console.log(res.data.data);
        return;
      } else {
        console.log("New Order Not Found");
      }
    });
  }, [iid]);

  const progressStep = newOrder.progressId;
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
        New Order Progress
      </div>

      <div>
        {/* <ResourceOrderCard resourceOrder={resourceOrder} /> */}
        <NewOrderCard newOrder={newOrder} />
      </div>
    </div>
  );
};

export default ProgressNew;
