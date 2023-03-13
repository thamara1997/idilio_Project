/* eslint-disable array-callback-return */
import { useEffect, useState } from "react";
import Art from "assets/AlbumCover.jpg";
import Avatar from "assets/avatar.jpg";
import { routeNames } from "routes/route";
import { Link } from "react-router-dom";
import DesignerService from "Services/DesignerService";

const DetailsCard = ({
  title,
  description,
  resourceId,
  amount,
  designer,
}: any) => {
  const iid: number = Number(designer);
  const iid2 = iid.toString();
  const id = parseInt(iid2);

  const [designers, setDesigner] = useState<any>();

  useEffect(() => {
    DesignerService.getDesignerById(id).then((res: any) => {
      console.log(res);
      if (res.data.status === 1) {
        setDesigner(res.data.data);
        console.log(res.data.data);
        return;
      } else {
        console.log("not found");
      }
    });
  }, []);

  return (
    <div className="px-[150px] mt-[20px] flex justify-evenly text-center gap-[50px] ">
      <div className=" w-[550px] h-[550px] m-[40px] content-center">
        <img
          src={Art}
          alt=""
          className="object-cover h-[550px] rounded-xl border-[#fec7507a] border-[0.3px]  hover:border-1 hover:border-white"
        />
      </div>
      <div className="flex-row w-[425px] h-[425px] mt-[40px] text-left ">
        <div>
          <h2 className="font-bold text-[22px] uppercase">{title}</h2>
          <h6 className="mr-[10px] mt-[30px] font-light h-[300px] w-full text-[15px]">
            {description}
          </h6>
        </div>
        <div>
          <div className="flex flex-row mt-[70px]">
            <img
              className="inline w-[40px] h-[40px] rounded-full mb-[20px]"
              src={Avatar}
              alt=""
            />
            <h4 className="flex ml-5 mt-2 text-[15px] font-semibold">
              Designer Id : {designer}
            </h4>
          </div>

          <div className="flex flex-row">
            <h1 className="text-white mr-8 text-[25px]">${amount}</h1>
            <Link
              to={routeNames.Requirement.replace(":id", resourceId)}
              className="btn1"
            >
              OrderNow
            </Link>
          </div>
        </div>

        {/* {reviews.map((r: any, i: number) => {
          <h1 className="text-white mr-8 text-[25px]">{r}</h1>;
        })} */}
      </div>
    </div>
  );
};

export default DetailsCard;
