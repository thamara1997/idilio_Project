import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { routeNames } from "routes/route";
import PackageServices from "Services/PackageServices";

const PackageCard = ({
  name,
  price,
  designCount,
  revisions,
  resolution,
  size,
  other,
  id,
  category,
  source,
}: any) => {
  const [Package, setPackage] = useState<any>();

  useEffect(() => {
    PackageServices.getPackageById(id).then((res: any) => {
      console.log(res);
      if (res.data.status === 1) {
        setPackage(res.data.data);
        console.log(res.data.data);
        return;
      } else {
        console.log("not found");
      }
    });
  }, []);

  return (
    <div>
      <div className="relative  w-[280px] h-[580px] bg-[#17171797] rounded-xl hover:bg-[#000000cf] hover:border-[0.1px] hover:border-[#fec75064]">
        <div className="absolute top-0 left-[65px] w-[150px] h-[40px] rounded-b-xl bg-[#FEC850]">
          <h2 className="text-[black] font-bold mt-2 uppercase">
            {Package?.name}
          </h2>
        </div>
        <div className="relative text-center top-[80px] text-[25px] font-bold text-[#FEC850]">
          <h2>{Package?.amount}</h2>
        </div>
        <div className="absolute top-[150px] gap-[30px] space-y-4 left-[60px] text-left font-light text-[12px]">
          <h6>{designCount}</h6>
          <h6> {revisions} </h6>
          <h6> {resolution} </h6>
          <h6> {size} </h6>
          <h6> {source} </h6>
        </div>
        <div className="absolute w-full mx-auto bottom-4 ">
          {/* <button className="btn1 text-[12px] ">ORDER NOW</button> */}
          <Link
            to={routeNames.NDesignDetails.replace(":id", id)}
            className="btn1"
          >
            OrderNow
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
