/* eslint-disable array-callback-return */
import { useEffect } from "react";
import Art from "assets/AlbumCover.jpg";
import Avatar from "assets/avatar.jpg";
import { routeNames } from "routes/route";
import { Link } from "react-router-dom";

const DetailsCard = ({
  title,
  description,
  name,
  price,
  reviews,
  id2,
}: any) => {
  console.log(reviews);

  useEffect(() => {
    // eslint-disable-next-line array-callback-return
    reviews.map((r: any, i: number) => {
      console.log(r);
    });
  }, [reviews]);

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
            <h4 className="flex ml-5 mt-2 text-[15px] font-semibold">{name}</h4>
          </div>

          <div className="flex flex-row">
            <h1 className="text-white mr-8 text-[25px]">{price}</h1>
            <Link
              to={routeNames.Requirement.replace(":id", id2)}
              className="btn1"
            >
              OrderNow
            </Link>
          </div>
        </div>

        {reviews.map((r: any, i: number) => {
          <h1 className="text-white mr-8 text-[25px]">{r}</h1>;
        })}
      </div>
    </div>
  );
};

export default DetailsCard;
