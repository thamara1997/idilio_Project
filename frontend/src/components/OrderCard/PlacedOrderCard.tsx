import React from "react";

const PlacedOrderCard = ({ type, OrderId, price }: any) => {
  return (
    <div>
      <div>
        <div className="relative mx-auto my-4 h-[40px] bg-[#17171797] rounded-xl border-[#fec7507a] border-[0.3px]  hover:border-1 hover:border-white">
          <div className="absolute top-1 left-3 text-[#fec750]">{type}</div>
          <div className="absolute uppercase top-1 left-[55px]">
            Order Id : {OrderId}
          </div>
          <div className="absolute uppercase top-1 right-5 text-[#fec750]">
            {price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacedOrderCard;
