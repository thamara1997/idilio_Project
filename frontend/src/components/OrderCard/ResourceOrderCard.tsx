import React, { useEffect, useState } from "react";
import ResourceOrderService from "Services/ResourceOrderService";
import ResourcesService from "Services/ResourcesService";

const ResourceOrderCard = ({ type, OrderId }: any) => {
  const [resourceOrder, setResourceOrder] = useState<any>({});

  useEffect(() => {
    ResourceOrderService.getResourceOrderById(OrderId).then((res: any) => {
      if (res.data.status === 1) {
        setResourceOrder(res.data.data);
        //console.log(res.data.data);
        return;
      } else {
        console.log("Resource Order Not Found");
      }
    });
  }, [OrderId]);

  const [resources, setResources] = useState<any>();

  useEffect(() => {
    ResourcesService.getResourceById(resourceOrder.resourcesResourceId).then(
      (res: any) => {
        if (res.data.status === 1) {
          setResources(res.data.data);
          //console.log(res.data.data);
          return;
        } else {
          console.log("not found");
        }
      }
    );
  }, [resourceOrder.resourcesResourceId]);
  return (
    <>
      {resourceOrder.progressId === 5 ? (
        <></>
      ) : (
        <>
          <div>
            <div>
              <div className="relative mx-auto my-4 h-[40px] bg-[#17171797] rounded-xl border-[#fec7507a] border-[0.3px]  hover:border-1 hover:border-white">
                <div className="absolute top-1 left-3 text-[#fec750]">
                  {type}
                </div>
                <div className="absolute uppercase top-1 text-[#838383] left-[55px]">
                  Order Id : {OrderId}
                </div>
                <div className="absolute uppercase top-1 right-5 text-[#fec750]">
                  $ {resources?.amount}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ResourceOrderCard;
