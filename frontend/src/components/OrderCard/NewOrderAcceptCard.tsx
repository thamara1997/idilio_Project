import React, { useEffect, useState } from "react";
import NewOrderServices from "Services/NewOrderServices";
import PackageService from "Services/PackageServices";

const NewOrderCard = ({ type, OrderId }: any) => {
  const [newOrder, setNewOrder] = useState<any>({});

  useEffect(() => {
    NewOrderServices.getNewOrderById(OrderId).then((res: any) => {
      if (res.data.status === 1) {
        setNewOrder(res.data.data);
        //console.log(res.data.data);
        return;
      } else {
        console.log("New Order Not Found");
      }
    });
  }, [OrderId]);

  const [mypackage, setPackage] = useState<any>();
  useEffect(() => {
    PackageService.getPackageById(newOrder.packageId).then((res: any) => {
      if (res.data.status === 1) {
        setPackage(res.data.data);
        //console.log(res.data.data);
        return;
      } else {
        console.log("not found");
      }
    });
  }, [newOrder.packageId]);
  return (
    <div>
      <div>
        <div className="w-[80%] relative mx-auto my-4 h-[40px] bg-[#17171797] rounded-xl border-[#facf707a] border-[0.3px]  hover:border-1 hover:border-[#72cf93]">
          <div className="absolute top-1 left-3 text-[#fec750]">{type}</div>
          <div className="absolute uppercase top-1 text-[#838383] left-[55px]">
            Order Id : {OrderId}
          </div>
          <div className="absolute uppercase top-1 right-5 text-[#fec750]">
            $ {mypackage?.amount}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewOrderCard;
