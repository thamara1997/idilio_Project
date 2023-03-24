import ArtCard from "components/ArtCard/ArtCard";
import ArtModal from "components/ArtCard/ArtModal";
import ArtModalUpdate from "components/ArtCard/ArtModalUpdate";
import OrderCard from "components/OrderCard/OrderCard";
import PlacedOrderCard from "components/OrderCard/PlacedOrderCard";
import DesignerProfileCard from "components/ProfileCard/DesignerProfileCard";
import ProfileCard from "components/ProfileCard/ProfileCard";
import { useEffect, useState } from "react";
import { RiImageAddLine } from "react-icons/ri";

import { Link, useNavigate } from "react-router-dom";
import { routeNames } from "routes/route";
import FileUploadServices from "Services/FileUploadServices";
import ResourcesService from "Services/ResourcesService";

interface ProfileProps {
  user: any;
  onLogout: () => void;
}

const Profile: React.FC<ProfileProps> = ({ user, onLogout }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = (resource: any) => {
    setSelectedResource(resource);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    window.location.reload();
  };

  const navigate = useNavigate();

  const [resources, setResources] = useState<any>();
  const [selectedResource, setSelectedResource] = useState(null);

  useEffect(() => {
    if (!user?.designer?.designerId) {
      return;
    }

    if (user?.designer.designerId != null) {
      ResourcesService.getResourceByDesignerId(user?.designer.designerId)
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
    }
  }, [user?.designer?.designerId]);

  const [propic, setPropic] = useState<any>("");
  useEffect(() => {
    FileUploadServices.getProfilePicture(1).then((res: any) => {
      // console.log(res);
      if (res.status === 200) {
        setPropic(
          `${process.env.REACT_APP_BACKEND_SERVER}/api/v1/upload/profilePic/${user?.userId}`
        );
        return;
      } else {
        // setPropic(res.status);
      }
    });
  }, [user]);

  if (!user) {
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
                Avatar={propic}
              />
            </>
          ) : (
            <>
              <ProfileCard
                firstName={user?.firstName}
                lastName={user?.lastName}
                role={user?.role}
                Avatar={propic}
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
                {resources?.map((resource: any, i: number) => (
                  <div id="item1" className="w-full carousel-item" key={i}>
                    <button onClick={() => handleModalOpen(resource)}>
                      <ArtCard details={resource} Avatar={propic} />
                    </button>
                  </div>
                ))}
                {selectedResource && (
                  <ArtModalUpdate
                    isOpen={isModalOpen}
                    onClose={handleModalClose}
                    designerId={user?.designer?.designerId}
                    details={selectedResource}
                  />
                )}

                <div className="relative flex w-[320px] h-[400px] border-dashed border-[0.3px] border-[#fec7507a] bg-[#17171797] rounded-xl hover:bg-black text-center opacity-80">
                  <button
                    onClick={handleModalOpen}
                    className="absolute left-[25px] top-[25px] w-[270px] h-[270px] rounded-lg border-dashed border-[0.3px] border-white text-center"
                  >
                    <RiImageAddLine className="absolute left-[125px] top-[100px] text-center" />
                    Add Resource
                  </button>
                  <ArtModal
                    isOpen={isModalOpen}
                    onClose={handleModalClose}
                    designerId={user?.designer?.designerId}
                  />
                </div>
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
