import ArtCard from "components/ArtCard/ArtCard";
import ArtModalUpdate from "components/ArtCard/ArtModalUpdate";
import PlacedOrderCard from "components/OrderCard/ResourceOrderCard";
import DesignerProfileCard from "components/ProfileCard/DesignerProfileCard";
import ProfileCard from "components/ProfileCard/ProfileCard";
import { useEffect, useState } from "react";
import { RiImageAddLine } from "react-icons/ri";

import { Link, useNavigate } from "react-router-dom";
import { routeNames } from "routes/route";
import FileUploadServices from "Services/FileUploadServices";
import ResourcesService from "Services/ResourcesService";
import AddResourceModal from "components/ArtCard/AddResourceModal";
import UsersOrdersServices from "Services/UsersOrdersServices";
import NewOrderServices from "Services/NewOrderServices";
import ResourceOrderCard from "components/OrderCard/ResourceOrderCard";
import NewOrderCard from "components/OrderCard/NewOrderCard";
import ResourceOrderService from "Services/ResourceOrderService";
import NewOrderAcceptCard from "components/OrderCard/NewOrderAcceptCard";

interface ProfileProps {
  user: any;
  onLogout: () => void;
}

const Profile: React.FC<ProfileProps> = ({ user, onLogout }) => {
  const [isArtModalOpen, setIsArtModalOpen] = useState(false);
  const [isAddResourceModalOpen, setIsAddResourceModalOpen] = useState(false);

  const handleArtModalOpen = (resource: any) => {
    setSelectedResource(resource);
    setIsArtModalOpen(true);
  };

  const handleAddResourceModalOpen = () => {
    setIsAddResourceModalOpen(true);
  };

  const handleModalClose = () => {
    setIsArtModalOpen(false);
    setIsAddResourceModalOpen(false);
    window.location.reload();
  };

  const navigate = useNavigate();

  const [resources, setResources] = useState<any>();
  const [selectedResource, setSelectedResource] = useState(null);

  //get resource orders by user id
  const [placedOrders, setPlacedOrders] = useState<any>([]);

  const [placedOrdersNew, setPlacedOrdersNew] = useState<any>([]);

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

  const iid = user?.userId;
  // console.log(typeof iid);
  useEffect(() => {
    UsersOrdersServices.getOrdersByUserId(iid).then((res: any) => {
      if (res.data.status === 1) {
        setPlacedOrders(res.data.data);
        console.log(res.data.data);
        return;
      } else {
        console.log("not found");
      }
    });
  }, [iid]);

  useEffect(() => {
    NewOrderServices.getNewOrderByUserId(iid).then((res: any) => {
      if (res.data.status === 1) {
        setPlacedOrdersNew(res.data.data);
        console.log(res.data.data);
        return;
      } else {
        console.log("not found");
      }
    });
  }, [iid]);

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
          //console.error(error);
          // handle the error or navigate to an error page
        });
    }
  }, [user?.designer?.designerId]);

  const [newOrderQueue, setNewOrderQueue] = useState<any>([]);

  useEffect(() => {
    NewOrderServices.getNewOrderByDesignerId(user?.designer?.designerId).then(
      (res: any) => {
        if (res.data.status === 1) {
          setNewOrderQueue(res.data.data);
          console.log(res.data.data);
          return;
        } else {
          console.log("not found");
        }
      }
    );
  }, [user?.designer?.designerId]);

  const [resourceOrderQueue, setResourceOrderQueue] = useState<any>([]);

  useEffect(() => {
    ResourceOrderService.getResourceOrdersByDesignerId(
      user?.designer?.designerId
    ).then((res: any) => {
      if (res.data.status === 1) {
        setResourceOrderQueue(res.data.data);
        console.log(res.data.data);
        return;
      } else {
        console.log("not found");
      }
    });
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
      <div className="flex w-[80%] mx-auto my-10 justify-center gap-5 items-center">
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
                {resourceOrderQueue.map((t: any, i: number) => (
                  <div id="item1" key={i}>
                    <Link
                      to={routeNames.Progress.replace(":id", t.resourceOrderId)}
                    >
                      <ResourceOrderCard
                        type={"R"}
                        OrderId={t.resourceOrderId}
                        price={t.price}
                      />
                    </Link>
                  </div>
                ))}
                {newOrderQueue.map((t: any, i: number) => (
                  <div id="item1" key={i}>
                    {t.progressId >= 3 ? (
                      <>
                        <Link
                          to={routeNames.ProgressNew.replace(
                            ":id",
                            t.newOrderId
                          )}
                        >
                          <NewOrderCard
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
            <div className="w-[70%] p-5 h-[350px] bg-[#171717ce] rounded-xl flex-row">
              <h1 className="text-start">Placed Orders</h1>
              <div className="text-center">
                {placedOrders.map((t: any, i: number) => (
                  <div id="item1" key={i}>
                    <Link
                      to={routeNames.Progress.replace(":id", t.resourceOrderId)}
                    >
                      <ResourceOrderCard
                        type={"R"}
                        OrderId={t.resourceOrderId}
                        price={t.price}
                      />
                    </Link>
                  </div>
                ))}
                {placedOrdersNew.map((t: any, i: number) => (
                  <div id="item1" key={i}>
                    <Link
                      to={routeNames.ProgressNew.replace(":id", t.newOrderId)}
                    >
                      <NewOrderCard
                        type={"N"}
                        OrderId={t.newOrderId}
                        price={t.price}
                      />
                    </Link>
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
                {placedOrders.map((t: any, i: number) => (
                  <div id="item1" key={i}>
                    <Link
                      to={routeNames.Progress.replace(":id", t.resourceOrderId)}
                    >
                      <ResourceOrderCard
                        type={"R"}
                        OrderId={t.resourceOrderId}
                      />
                    </Link>
                  </div>
                ))}
                {placedOrdersNew.map((t: any, i: number) => (
                  <div id="item1" key={i}>
                    <Link
                      to={routeNames.ProgressNew.replace(":id", t.newOrderId)}
                    >
                      <NewOrderCard
                        type={"N"}
                        OrderId={t.newOrderId}
                        price={t.price}
                      />
                    </Link>
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
            <div>
              <h1 className="mt-8 text-center uppercase text-[18px]">
                New Orders
              </h1>
            </div>
            <div>
              {newOrdersToAccept.map((t: any, i: number) => (
                <div id="item1" key={i}>
                  <Link
                    to={routeNames.ProgressNew.replace(":id", t.newOrderId)}
                  >
                    <NewOrderAcceptCard
                      type={"N"}
                      OrderId={t.newOrderId}
                      price={t.price}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
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
                    <button onClick={() => handleArtModalOpen(resource)}>
                      <ArtCard details={resource} Avatar={propic} />
                    </button>
                  </div>
                ))}
                {selectedResource && (
                  <ArtModalUpdate
                    isOpen={isArtModalOpen}
                    onClose={handleModalClose}
                    designerId={user?.designer?.designerId}
                    details={selectedResource}
                  />
                )}

                <div className="relative flex w-[320px] h-[400px] border-dashed border-[0.3px] border-[#fec7507a] bg-[#17171797] rounded-xl hover:bg-black text-center opacity-80">
                  <button
                    onClick={handleAddResourceModalOpen}
                    className="absolute left-[25px] top-[25px] w-[270px] h-[270px] rounded-lg border-dashed border-[0.3px] border-white text-center"
                  >
                    <RiImageAddLine className="absolute left-[125px] top-[100px] text-center" />
                    Add Resource
                  </button>
                  <AddResourceModal
                    isOpen={isAddResourceModalOpen}
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
