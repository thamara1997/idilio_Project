/* eslint-disable array-callback-return */
import { useEffect, useState } from "react";
import Art from "assets/AlbumCover.jpg";
import Avatar from "assets/avatar.jpg";
import { routeNames } from "routes/route";
import { Link, useNavigate } from "react-router-dom";
import DesignerService from "Services/DesignerService";
import UserService from "Services/UserService";

const DetailsCard = ({
  title,
  description,
  resourceId,
  amount,
  designer,
}: any) => {
  const [designers, setDesigner] = useState<any>();
  const [user, setUser] = useState<any>();
  let id: any;
  const navigate = useNavigate();

  if (designer && typeof designer === "string") {
    id = parseInt(designer, 10);
  } else {
    id = designer;
  }

  useEffect(() => {
    if (id) {
      DesignerService.getDesignerById(id)
        .then((res: any) => {
          if (res.data.status === 1) {
            setDesigner(res.data.data);
            console.log(res.data.data);
            return;
          } else {
            console.log("not found");
          }
        })
        .catch((error: any) => {
          console.log(error);
        });
    }
  }, [id]);

  useEffect(() => {
    if (designers?.userId) {
      UserService.getUserByUserId(designers?.userId)
        .then((res: any) => {
          if (res.data.status === 1) {
            setUser(res.data.data);
            console.log(res.data.data);
            return;
          } else {
            console.log("not found");
          }
        })
        .catch((error: any) => {
          console.log(error);
        });
    }
  }, [designers?.userId]);

  const [loggedUser, setLoggedUser] = useState<any>(null);

  useEffect(() => {
    // Check local storage for user details
    const storedUser = localStorage.getItem("loggedUser");
    if (storedUser) {
      setLoggedUser(JSON.parse(storedUser));
    } else {
      setLoggedUser(null);
    }
  }, []);

  const handleOrderNowClick = () => {
    // Check if there is a logged-in user in local storage
    const loggedInUser = localStorage.getItem("loggedUser");

    if (loggedInUser) {
      // Navigate to requirement page
      navigate(routeNames.Requirement.replace(":id", resourceId));
    } else {
      // Navigate to login page
      navigate(routeNames.Login);
    }
  };

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
              {user?.firstName} {user?.lastName}
            </h4>
          </div>

          <div className="flex flex-row">
            <h1 className="text-white mr-8 text-[25px]">${amount}</h1>
            {loggedUser?.userId !== user?.userId ? (
              <>
                <button className="btn1" onClick={handleOrderNowClick}>
                  OrderNow
                </button>
              </>
            ) : (
              <></>
            )}
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
