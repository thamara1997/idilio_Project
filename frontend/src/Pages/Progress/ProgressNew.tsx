import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProgressBar from "components/Progress Cards/ProgressBar";
import NewOrderServices from "Services/NewOrderServices";
import NewOrderCard from "components/Progress Cards/NewOrderCard";
import { routeNames } from "routes/route";

const ProgressNew = ({ user, onLogout }: any) => {
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

  const navigate = useNavigate();

  if (!user) {
    navigate(routeNames.Overview);
    return null;
  }

  const progressStep = newOrder.progressId;
  return (
    <div>
      <div className="p-8 text-center uppercase">Progress</div>
      <div className="px-[200px] text-center font-light text-[14px]">
        The Progress Page is where you can track the progress of your project in
        real-time. Our advanced progress bar system provides you with updates on
        how much of your project has been completed, giving you peace of mind
        knowing that your project is being worked on.
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
