import ArtCard from "components/ArtCard/ArtCard";
import OrderCard from "components/OrderCard/OrderCard";
import PlacedOrderCard from "components/OrderCard/PlacedOrderCard";
import DesignerProfileCard from "components/ProfileCard/DesignerProfileCard";
import ProfileCard from "components/ProfileCard/ProfileCard";
import { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { routeNames } from "routes/route";
import ResourcesService from "Services/ResourcesService";

interface ProfileProps {
  user: any;
  onLogout: () => void;
}

const Profile: React.FC<ProfileProps> = ({ user, onLogout }) => {
  const navigate = useNavigate();

  const [resources, setResources] = useState<any>();

  useEffect(() => {
    if (!user?.designer.designerId) {
      return;
    }

    ResourcesService.getResourceByDesignerId(user.designer.designerId)
      .then((res: any) => {
        if (res.data.status === 1) {
          setResources(res.data.data);
          console.log(res.data.data);
        } else {
          console.log("not found");
        }
      })
      .catch((error) => {
        console.error(error);
        // handle the error or navigate to an error page
      });
  }, [user?.designer.designerId]);

  if (!user) {
    navigate(0);
    navigate(routeNames.Overview);
    return null;
  }

  return (
    <div>
      <div className="flex w-[80%] mx-auto mt-10 justify-center gap-5 items-center">
        <div className="w-[30%] text-center">
          {user?.designer ? (
            <>
              <DesignerProfileCard
                firstName={user?.firstName}
                lastName={user?.lastName}
                role={user?.role}
                level={user?.designer.level}
              />
            </>
          ) : (
            <>
              <ProfileCard
                firstName={user?.firstName}
                lastName={user?.lastName}
                role={user?.role}
              />
            </>
          )}
        </div>
        {/* orders placed */}
        {user?.designer ? (
          <>
            <div className="w-[70%] p-5 h-[350px] bg-[#171717ce] rounded-xl flex-row">
              <h1 className="text-start">Order Queue</h1>
              <div className="text-center">
                {ordercard.map((t: any, i: number) => (
                  <div id="item1" key={i}>
                    <OrderCard
                      type={t.type}
                      OrderId={t.OrderId}
                      price={t.price}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="w-[70%] p-5 h-[350px] bg-[#171717ce] rounded-xl flex-row">
              <h1 className="text-start">Placed Orders</h1>
              <div className="text-center">
                {ordercard.map((t: any, i: number) => (
                  <div id="item1" key={i}>
                    <PlacedOrderCard
                      type={t.type}
                      OrderId={t.OrderId}
                      price={t.price}
                    />
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="w-[70%] p-5 h-[350px] bg-[#171717ce] rounded-xl flex-row">
              <h1 className="text-start">Placed Orders</h1>
              <div className="text-center">
                {ordercard.map((t: any, i: number) => (
                  <div id="item1" key={i}>
                    <PlacedOrderCard
                      type={t.type}
                      OrderId={t.OrderId}
                      price={t.price}
                    />
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      {/* designer resources */}
      {user?.designer ? (
        <>
          <div>
            <div className="flex mx-[160px] justify-between mt-6">
              <h1 className="mt-8 text-center uppercase text-[18px]">
                MY Resources
              </h1>

              <h1 className="mt-8 text-center uppercase text-[15px]">
                Total : {resources?.length}
              </h1>
            </div>

            <div className="flex justify-center items-center text-center mb-[100px]">
              <div className="mt-[60px] grid grid-cols-1 gap-[75px] mx-auto md:grid-cols-3">
                {resources?.map((t: any, i: number) => (
                  <div id="item1" className="w-full carousel-item" key={i}>
                    <Link
                      to={routeNames.RDesignDetails.replace(
                        ":id",
                        t.resourceId
                      )}
                    >
                      <ArtCard details={t} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Profile;

const ordercard = [
  {
    type: "R",
    OrderId: 1,
    price: "$50",
  },
  {
    type: "N",
    OrderId: 3,
    price: "$99",
  },
  {
    type: "R",
    OrderId: 4,
    price: "$40",
  },
  {
    type: "N",
    OrderId: 2,
    price: "$20",
  },
  {
    type: "R",
    OrderId: 8,
    price: "$30",
  },
];

const mycardDetails = [
  {
    id: 0,
    name: "Darshana Thamara",
    price: "10$",
    link: `resourcedesign/details/`,
    title: "Title 1",
    Category: "AlBUM COVER ",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo iste, sapiente quos ab odit assumenda quaerat voluptate, explicabo error laboriosam, alias similique perspiciatis pariatur odio sed. Minus numquam ut ducimus!MdLocalFireDepartmentLorem ipsum dolor sit, amet consectetur adipisicing elit. Quo iste, sapiente quos ab odit assumenda quaerat voluptate, explicabo error laboriosam, alias similique perspiciatis pariatur odio sed. Minus numquam ut ducimus!MdLocalFireDepartment",
    reviews: [`review 1`, `review 2`, `review 3`],
  },
  {
    id: 4,
    name: "Darshana Thamara",
    price: "40$",
    link: `resourcedesign/details/`,
    title: "Title 1",
    Category: "AlBUM COVER ",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo iste, sapiente quos ab odit assumenda quaerat voluptate, explicabo error laboriosam, alias similique perspiciatis pariatur odio sed. Minus numquam ut ducimus!MdLocalFireDepartmentLorem ipsum dolor sit, amet consectetur adipisicing elit. Quo iste, sapiente quos ab odit assumenda quaerat voluptate, explicabo error laboriosam, alias similique perspiciatis pariatur odio sed. Minus numquam ut ducimus!MdLocalFireDepartment",
    reviews: [`review 1`, `review 2`, `review 3`],
  },
  {
    id: 7,
    name: "Darshana Thamara",
    price: "50$",
    link: `resourcedesign/details/`,
    title: "Title 1",
    Category: "AlBUM COVER ",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo iste, sapiente quos ab odit assumenda quaerat voluptate, explicabo error laboriosam, alias similique perspiciatis pariatur odio sed. Minus numquam ut ducimus!MdLocalFireDepartmentLorem ipsum dolor sit, amet consectetur adipisicing elit. Quo iste, sapiente quos ab odit assumenda quaerat voluptate, explicabo error laboriosam, alias similique perspiciatis pariatur odio sed. Minus numquam ut ducimus!MdLocalFireDepartment",
    reviews: [`review 1`, `review 2`, `review 3`],
  },
];
