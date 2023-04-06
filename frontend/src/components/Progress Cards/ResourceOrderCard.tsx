import React, { useEffect, useRef, useState } from "react";
import Art from "assets/art.jpg";
import ResourcesService from "Services/ResourcesService";
import UserService from "Services/UserService";
import DesignerService from "Services/DesignerService";
import FileUploadServices from "Services/FileUploadServices";
import SignaturePad from "react-signature-canvas";
import UsersOrdersServices from "Services/UsersOrdersServices";
import ResourceOrderService from "Services/ResourceOrderService";
import { RiImageAddLine } from "react-icons/ri";
import Avatar from "react-avatar-edit";
import ChangeDrawModal from "./ChangeDrawModal";
import SupportEngine from "components/SupportEngine";
import DeleteResourceOrderModal from "./DeleteResourceOrderModal";
import FeedbackForm from "components/Rating/FeedbackForm";
import Feedback from "components/Rating/FeedBack";
import PaymentModal from "./PaymentModal";
import { toast } from "react-toastify";

const ResourceOrderCard = (resourceOrder: any) => {
  console.log(resourceOrder);
  const [resources, setResources] = useState<any>();

  const sigPad = useRef<SignaturePad>(null);
  const [signatureData, setSignatureData] = useState<string>("");

  useEffect(() => {
    console.log(signatureData);
  }, [signatureData]);

  useEffect(() => {
    ResourcesService.getResourceById(
      resourceOrder?.resourceOrder.resourcesResourceId
    )
      .then((res: any) => {
        if (res.data.status === 1) {
          setResources(res.data.data);
          console.log(res.data.data);
          return;
        } else {
          console.log("not found");
        }
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, [resourceOrder?.resourceOrder.resourcesResourceId]);

  const designerId = resources?.designerId;

  const [designers, setDesigner] = useState<any>();
  const [designUser, setDesignUser] = useState<any>();

  useEffect(() => {
    if (resourceOrder?.resourceOrder.resourcesResourceId) {
      DesignerService.getDesignerById(designerId)
        .then((res: any) => {
          if (res.data.status === 1) {
            setDesigner(res.data.data);
            //console.log(res.data.data);
            return;
          } else {
            console.log("not found");
          }
        })
        .catch((error: any) => {
          //console.log(error);
        });
    }
  }, [designerId, resourceOrder?.resourceOrder.resourcesResourceId]);

  useEffect(() => {
    if (designers?.userId) {
      UserService.getUserByUserId(designers?.userId)
        .then((res: any) => {
          if (res.data.status === 1) {
            setDesignUser(res.data.data);
            console.log(res.data.data);
            return;
          } else {
            console.log("not found");
          }
        })
        .catch((error: any) => {
          //console.log(error);
        });
    }
  }, [designers?.userId]);

  const [userdetails, setUserDetails] = useState<any>();

  useEffect(() => {
    if (resourceOrder?.resourceOrder.resourceOrderId) {
      UsersOrdersServices.getUsersOrdersByResourceOrderId(
        resourceOrder?.resourceOrder.resourceOrderId
      )
        .then((res: any) => {
          if (res.data.status === 1) {
            setUserDetails(res.data.data);
            console.log(res.data.data);
            return;
          } else {
            console.log("not found");
          }
        })
        .catch((error: any) => {
          //console.log(error);
        });
    }
  }, [resourceOrder?.resourceOrder.resourceOrderId]);

  const [user, setUser] = useState<any>();

  useEffect(() => {
    if (userdetails?.userId) {
      UserService.getUserByUserId(userdetails?.userId)
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
          //console.log(error);
        });
    }
  }, [userdetails?.userId]);

  const [art, setArt] = useState<any>("");
  useEffect(() => {
    FileUploadServices.getResourceArt(1).then((res: any) => {
      // console.log(res);
      if (res.status === 200) {
        setArt(
          `${process.env.REACT_APP_BACKEND_SERVER}/api/v1/upload/resourceArt/${resources?.resourceId}`
        );
        return;
      } else {
        // setPropic(res.status);
      }
    });
  }, [resources?.resourceId]);

  const resourceOrderId = resourceOrder.resourceOrder.resourceOrderId;

  console.log(resourceOrderId);

  const [draw, setDraw] = useState<any>("");
  const [work, setWork] = useState<any>("");
  useEffect(() => {
    FileUploadServices.getResourceOrderDrawing(1).then((res: any) => {
      // console.log(res);
      if (res.status === 200) {
        setDraw(
          `${process.env.REACT_APP_BACKEND_SERVER}/api/v1/upload/resourceorderdrawing/${resourceOrderId}`
        );
        return;
      } else {
        // setPropic(res.status);
      }
    });
    FileUploadServices.getResourceOrderWork(1).then((res2: any) => {
      console.log(res2);
      if (res2.status === 200) {
        setWork(
          `${process.env.REACT_APP_BACKEND_SERVER}/api/v1/upload/resourceorderwork/${resourceOrderId}`
        );
        return;
      } else {
        // setPropic(res.status);
      }
    });
  }, [resourceOrderId]);

  const handleAcceptOrder = async (data: any) => {
    const resOrder: any = {
      resourceOrderId: resourceOrder?.resourceOrder.resourceOrderId,
      projectName: resourceOrder?.resourceOrder.projectName,
      reqDescription: resourceOrder?.resourceOrder.reqDescription,
      reqDraw: resourceOrder?.resourceOrder.reqDraw,
      attachments: resourceOrder?.resourceOrder.attachments,
      rate: resourceOrder?.resourceOrder.rate,
      review: resourceOrder?.resourceOrder.review,
      resourcesResourceId: resourceOrder?.resourceOrder.resourcesResourceId,
      progressId: resourceOrder?.resourceOrder.progressId + 1,
      paymentId: resourceOrder?.resourceOrder.resourceOrderId,
    };
    const result = await ResourceOrderService.UpdateResourceOrder(resOrder);
    if (result.data.status === 1) {
      console.log(result.data);
      window.location.reload();
      return;
    } else {
      console.log("Update Fail");
    }
  };

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

  const [src, setSrc] = useState<any>();
  const [preview, setPreview] = useState(null);

  function onClose() {
    setPreview(null);
  }
  function onCrop(pv: any) {
    setPreview(pv);
  }
  function onBeforeFileLoad(elem: any) {
    if (elem.target.files[0].size > 7168000) {
      alert("File is too big!");
      elem.target.value = "";
    }
  }

  const handleArt = () => {
    if (preview) {
      const file = FileUploadServices.convertBase64ToFile(preview, "aa.png");

      let formData = new FormData();
      formData.append("file", file);

      FileUploadServices.uploadResourceOrderWork(resourceOrderId, formData);

      toast.success("Recent Art Added");
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } else {
      console.log("Null");
    }
  };

  const [isChangeDrawModalOpen, setIsChangeDrawModalOpen] = useState(false);

  const handleChangeDrawModalOpen = () => {
    setIsChangeDrawModalOpen(true);
  };

  const handleChangeDrawModalClose = () => {
    setIsChangeDrawModalOpen(false);
  };

  const [showSupportEngine, setShowSupportEngine] = useState(false);

  const handleButtonClick = () => {
    setShowSupportEngine(true);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-[70%] mx-auto">
      {/* Resource Order Details */}
      <div>
        <div className="flex justify-between mb-8 ">
          <div className="w-[60%] uppercase">
            <label className="flex mb-4">
              <span className="flex w-[30%] font-bold">Resource Order Id</span>
              <div className="w-[70%] flex font-normal">
                : {resourceOrder?.resourceOrder?.resourceOrderId}
              </div>
            </label>
            <label className="flex mb-4">
              <span className="flex w-[30%] font-bold">Order Placed By</span>
              <div className="w-[70%] flex font-normal">
                : {user?.firstName} {user?.lastName}
              </div>
            </label>
            <label className="flex mb-4">
              <span className="flex w-[30%] font-bold">Project Name</span>
              <div className="w-[70%] flex font-normal">
                : {resourceOrder?.resourceOrder?.projectName}
              </div>
            </label>
            <label className="flex mb-4">
              <span className="flex w-[30%] font-bold">Designer Name</span>
              <div className="w-[70%] flex font-normal">
                : {designUser?.firstName} {designUser?.lastName}
              </div>
            </label>
            <label className="flex mb-4">
              <span className="flex w-[30%] font-bold">Amount</span>
              <div className="w-[70%] flex font-normal">
                : ${resources?.amount}
              </div>
            </label>
            <label className="flex mb-4">
              <span className="flex w-[30%] font-bold">Category</span>
              <div className="w-[70%] flex font-normal">
                : {resources?.category}
              </div>
            </label>
          </div>
          <div>
            <div className=" bg-white w-[220px] h-[220px] border-[0.5px] border-[#fefefe7b] rounded-lg hover:border-1 hover:border-white">
              <img src={art} alt="" className="rounded-lg" />
            </div>
            <div className="flex justify-center mt-4 text-center text-[#575757]">
              <div className="w-full uppercase">Resource Art</div>
            </div>
          </div>
        </div>
        <div>
          <label className="mb-4 ">
            <span className="w-full font-bold uppercase">
              Requirement Description
            </span>
            <div className="w-full mt-6 font-light">
              {resourceOrder?.resourceOrder?.reqDescription}
            </div>
          </label>
        </div>
      </div>

      {/* drawing and recent work */}
      <div>
        <span className="flex w-full justify-center mx-auto text-[#fec750]  my-8 font-bold text-center uppercase">
          Drawing And Recent Work
        </span>

        <div className="w-[80%] mx-auto mt-6 ">
          <div className="flex justify-between">
            <div>
              <div className="w-[300px] h-[300px] bg-white border-[0.5px] border-[#fefefe7b] rounded-lg hover:border-1 hover:border-white ">
                <img src={draw} alt="" className="rounded-lg" />
              </div>
              {loggedUser?.userId === userdetails?.userId ? (
                <>
                  <div className="flex justify-center mt-3">
                    <button
                      className="w-full uppercase btn2"
                      onClick={handleChangeDrawModalOpen}
                    >
                      Change Drawing
                    </button>
                    <ChangeDrawModal
                      isOpen={isChangeDrawModalOpen}
                      onClose={handleChangeDrawModalClose}
                      resourceOrderId={
                        resourceOrder?.resourceOrder?.resourceOrderId
                      }
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="flex justify-center mt-4 text-center text-[#828282]">
                    <div className="w-full uppercase">Drawing Of Art</div>
                  </div>
                </>
              )}
            </div>
            <div>
              {loggedUser?.userId === designUser?.userId ? (
                <>
                  <div className="w-[300px] h-[300px] border-[0.5px] border-[#fefefe7b] rounded-lg hover:border-1 hover:border-white ">
                    <img src={work} alt="" className="rounded-lg" />
                    <div className="relative  top-[-300px] left-0 ">
                      <div className="hover:bg-gray-800 hover:bg-opacity-50">
                        <Avatar
                          width={300}
                          height={300}
                          onCrop={onCrop}
                          onClose={onClose}
                          onBeforeFileLoad={onBeforeFileLoad}
                          src={src}
                          exportQuality={1}
                          shadingOpacity={0.6}
                          exportAsSquare
                          exportSize={2000}
                        />
                      </div>
                      <span className="relative top-[-155px] left-[140px] text-[20px] text-[#FEC850]">
                        <RiImageAddLine />
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-center mt-3">
                    <button
                      className="w-full uppercase btn2"
                      type="submit"
                      onClick={handleArt}
                    >
                      Upload Art
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-[300px] h-[300px] border-[0.5px] border-[#fefefe7b] rounded-lg hover:border-1 hover:border-white ">
                    <img src={work} alt="" className="rounded-lg" />
                  </div>
                  <div className="flex justify-center mt-4 text-center text-[#828282]">
                    <div className="w-full uppercase">Recent Art</div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="px-[200px] my-8 text-center font-light text-[14px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
          officiis quibusdam maiores modi sint quaerat,
        </div>

        {resourceOrder?.resourceOrder?.progressId > 4 ? (
          <>
            {loggedUser.userId == userdetails?.userId ? (
              <>
                {resourceOrder?.resourceOrder?.rate == 0 ? (
                  <>
                    <div>
                      <div className="flex justify-center text-[#fec750]  my-8 font-bold text-center uppercase">
                        <div className="w-full uppercase">
                          FeedBack For Order
                        </div>
                      </div>
                      <FeedbackForm
                        rating={0}
                        review=""
                        reviewUser={userdetails?.userId}
                        resourceOrder={resourceOrder}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <div className="flex justify-center text-[#fec750]  my-8 font-bold text-center uppercase">
                        <div className="w-full uppercase">
                          FeedBack For Order
                        </div>
                      </div>
                      <Feedback
                        rating={resourceOrder?.resourceOrder?.rate}
                        review={resourceOrder?.resourceOrder?.review}
                        reviewUser={userdetails?.userId}
                      />
                    </div>
                  </>
                )}
              </>
            ) : (
              <>
                {resourceOrder?.resourceOrder?.rate == 0 ? (
                  <></>
                ) : (
                  <>
                    <div>
                      <div className="flex justify-center text-[#fec750]  my-8 font-bold text-center uppercase">
                        <div className="w-full uppercase">
                          FeedBack For Order
                        </div>
                      </div>
                      <Feedback
                        rating={resourceOrder?.resourceOrder?.rate}
                        review={resourceOrder?.resourceOrder?.review}
                        reviewUser={userdetails?.userId}
                      />
                    </div>
                  </>
                )}
              </>
            )}
          </>
        ) : (
          <></>
        )}

        {/* buttons fields */}
        <div className="flex justify-between gap-6 mb-8 ">
          <div className="flex justify-center w-full mt-3">
            <input
              type="button"
              value="Delete Order"
              className="w-full uppercase btn3 "
              onClick={handleModalOpen}
            />
            <DeleteResourceOrderModal
              isOpen={isModalOpen}
              onClose={handleModalClose}
              title="Delete Your Resource Order"
              description="Are you sure you want to delete Order from IDILIO group.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia delectus eos nobis iure quae vero libero repellendus saepe perspiciatis eaque error "
              resourceOrderId={resourceOrder?.resourceOrder?.resourceOrderId}
              projectName={resourceOrder?.resourceOrder?.projectName}
            />
          </div>

          {loggedUser?.userId === userdetails?.userId ? (
            <>
              <div className="flex justify-center w-full mt-3 text-center">
                {resourceOrder?.resourceOrder?.progressId === 2 ? (
                  <>
                    <div className="w-full  uppercase text-[#fec750] mt-3 text-center ">
                      wait For Accept
                    </div>
                  </>
                ) : resourceOrder?.resourceOrder?.progressId === 3 ? (
                  <>
                    <div className="w-full mt-3 text-center  uppercase text-[#fec750]">
                      Designer Cooking Your Art
                    </div>
                  </>
                ) : resourceOrder?.resourceOrder?.progressId === 4 ? (
                  <>
                    <input
                      type="button"
                      value="Accept Order"
                      className="w-full uppercase btn3 "
                      onClick={handleModalOpen}
                    />
                    <PaymentModal
                      isOpen={isModalOpen}
                      onClose={handleModalClose}
                      title="PayPal Checkout"
                      description="Thank You Very Much Are you sure you want to delete Order from IDILIO group."
                      resourceOrderId={
                        resourceOrder?.resourceOrder?.resourceOrderId
                      }
                      amount={resources?.amount}
                      resourceOrder={resourceOrder}
                      // projectName={resourceOrder?.resourceOrder?.projectName}
                    />
                  </>
                ) : (
                  <></>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-center w-full mt-3">
                {resourceOrder?.resourceOrder?.progressId === 2 ? (
                  <>
                    <button
                      className="w-full uppercase btn3 "
                      onClick={handleAcceptOrder}
                    >
                      Accept Order
                    </button>
                  </>
                ) : resourceOrder?.resourceOrder?.progressId === 3 ? (
                  <>
                    <button
                      className="w-full uppercase btn3 "
                      onClick={handleAcceptOrder}
                    >
                      Send Preview
                    </button>
                  </>
                ) : resourceOrder?.resourceOrder?.progressId === 4 ? (
                  <>
                    <div className="w-full mt-3 text-center uppercase text-[#fec750]">
                      Buyer Review Your Delivery
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </>
          )}

          <div className="flex justify-center w-full mt-3">
            <button
              className="w-full uppercase btn3"
              onClick={handleButtonClick}
            >
              Live Chat
            </button>
          </div>
        </div>
      </div>
      {showSupportEngine && <SupportEngine />}
    </div>
  );
};

export default ResourceOrderCard;
