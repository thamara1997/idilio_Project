import SupportAdmin from "components/SupportAdmin";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { routeNames } from "routes/route";
import logo from "assets/logo.png";
import DesignerService from "Services/DesignerService";
import DesignerCard from "components/AdminDashboard/DesignerCard";
import NewOrderServices from "Services/NewOrderServices";
import NewOrderAcceptCard from "components/OrderCard/NewOrderAcceptCard";

const AdminDashBoard = ({ user, onLogout }: any) => {
  const [designers, setDesigners] = useState<any>([]);
  const navigate = useNavigate();

  useEffect(() => {
    DesignerService.getDesignersByApprove(0).then((res: any) => {
      if (res.data.status === 1) {
        setDesigners(res.data.data);
        return;
      } else {
        console.log("not found");
      }
    });
  }, []);

  const [approveddesigners, setApprovedDesigners] = useState<any>([]);

  useEffect(() => {
    DesignerService.getDesignersByApproved(1).then((res: any) => {
      if (res.data.status === 1) {
        setApprovedDesigners(res.data.data);
        return;
      } else {
        console.log("not found");
      }
    });
  }, []);

  const [newOrdersToAccept, setNewOrdersToAccept] = useState<any>([]);

  useEffect(() => {
    NewOrderServices.getNewOrderByDesignerId(1).then((res: any) => {
      if (res.data.status === 1) {
        setNewOrdersToAccept(res.data.data);
        // console.log(res.data.data);
        return;
      } else {
        console.log("not found");
      }
    });
  }, [1]);

  if (!user) {
    navigate(routeNames.Overview);
    return null;
  }

  return (
    <div>
      <div className="flex w-[80%] mx-auto my-10 justify-center gap-5 items-center">
        <div className="w-[30%] text-center relative h-[350px] border-[0.3px] border-[#fec7507a] bg-[#17171797] rounded-xl hover:bg-black">
          <div className="absolute mx-[30px] top-[25px] hover:border-1 hover:border-white">
            <img src={logo} alt="" className="rounded-[50%]" />
          </div>

          <div className="absolute w-full mx-auto top-[280px]">
            <Link to={routeNames.Chatbox}>
              <div className=" btn1">IDILIO CHATBOX</div>
            </Link>
          </div>
        </div>
        <div className="w-[70%] p-5 h-[350px] bg-[#171717ce] rounded-xl flex-row">
          <h1 className="uppercase text-start">Designers To Approve</h1>
          <div className="text-center">
            {designers.map((t: any, i: number) => (
              <div id="item1" key={i}>
                <DesignerCard
                  type={"N"}
                  designerId={t.designerId}
                  approved={t.approved}
                  designer={t}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div>
          <h1 className="mt-8 text-center uppercase text-[18px]">New Orders</h1>
        </div>
        <div>
          {newOrdersToAccept.map((t: any, i: number) => (
            <div id="item1" key={i}>
              {t.progressId < 3 ? (
                <>
                  <Link
                    to={routeNames.ProgressNew.replace(":id", t.newOrderId)}
                  >
                    <NewOrderAcceptCard
                      type={"N"}
                      OrderId={t.newOrderId}
                      price={t.price}
                    />
                  </Link>
                </>
              ) : (
                <></>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mx-auto w-[80%]">
        <h1 className="text-center uppercase">Designers In IDILIO</h1>
        {approveddesigners.map((t: any, i: number) => (
          <div id="item1" key={i}>
            <DesignerCard
              type={"O"}
              designerId={t.designerId}
              approved={t.approved}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashBoard;
