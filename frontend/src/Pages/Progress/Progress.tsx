import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ResourceOrderCard from "components/Progress Cards/ResourceOrderCard";
import ResourceOrderService from "Services/ResourceOrderService";
import ProgressBar from "components/Progress Cards/ProgressBar";
import SupportEngine from "components/SupportEngine";
import { routeNames } from "routes/route";

const Progress = ({ user, onLogout }: any) => {
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

  const navigate = useNavigate();

  if (!user) {
    navigate(routeNames.Overview);
    return null;
  }
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
        Resource Order Progress
      </div>

      <div>
        <ResourceOrderCard resourceOrder={resourceOrder} />
      </div>
    </div>
  );
};

export default Progress;
