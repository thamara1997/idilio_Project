import DesignerService from "Services/DesignerService";
import FileUploadServices from "Services/FileUploadServices";
import NewOrderServices from "Services/NewOrderServices";
import PackageService from "Services/PackageServices";
import UserService from "Services/UserService";
import React, { useEffect, useRef, useState } from "react";
import Avatar from "react-avatar-edit";
import { RiImageAddLine } from "react-icons/ri";
import ChangeDrawModalNew from "./ChangeDrawModalNew";

const NewOrderCard = (newOrder: any) => {
  console.log(newOrder);
  const sigPad = useRef<SignaturePad>(null);
  const [signatureData, setSignatureData] = useState<string>("");

  useEffect(() => {
    console.log(signatureData);
  }, [signatureData]);
  const designerId = newOrder?.newOrder.designerId;
  const [designers, setDesigner] = useState<any>();
  const [designUser, setDesignUser] = useState<any>();

  useEffect(() => {
    if (newOrder?.newOrder.newOrderId) {
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
  }, [designerId, newOrder?.newOrder.designerId]);

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

  const [mypackage, setPackage] = useState<any>();

  useEffect(() => {
    PackageService.getPackageById(newOrder?.newOrder.packageId)
      .then((res: any) => {
        if (res.data.status === 1) {
          setPackage(res.data.data);
          // console.log(res.data.data);
          return;
        } else {
          console.log("not found");
        }
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, [newOrder?.newOrder.packageId]);

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

  const [draw, setDraw] = useState<any>("");
  const [work, setWork] = useState<any>("");
  useEffect(() => {
    FileUploadServices.getNewOrderDrawing(1).then((res: any) => {
      // console.log(res);
      if (res.status === 200) {
        setDraw(
          `${process.env.REACT_APP_BACKEND_SERVER}/api/v1/upload/neworderdrawing/${newOrder?.newOrder.newOrderId}`
        );
        return;
      } else {
        // setPropic(res.status);
      }
    });
    FileUploadServices.getNewOrderWork(1).then((res2: any) => {
      console.log(res2);
      if (res2.status === 200) {
        setWork(
          `${process.env.REACT_APP_BACKEND_SERVER}/api/v1/upload/neworderwork/${newOrder?.newOrder.newOrderId}`
        );
        return;
      } else {
        // setPropic(res.status);
      }
    });
  }, [newOrder?.newOrder.newOrderId]);

  const handleAcceptOrder = async (data: any) => {
    const nOrder: any = {
      newOrderId: newOrder?.newOrder.newOrderId,
      projectName: newOrder?.newOrder.projectName,
      reqDescription: newOrder?.newOrder.reqDescription,
      reqDraw: newOrder?.newOrder.reqDraw,
      attachments: newOrder?.newOrder.attachments,
      rate: newOrder?.newOrder.rate,
      review: newOrder?.newOrder.review,
      designerId: newOrder?.newOrder.designerId,
      packageId: newOrder?.newOrder.packageId,
      progressId: newOrder?.newOrder.progressId + 1,
      userId: newOrder?.newOrder.userId,
    };
    const result = await NewOrderServices.UpdateNewOrder(nOrder);
    if (result.data.status === 1) {
      console.log(result.data);
      window.location.reload();
      return;
    } else {
      console.log("Update Fail");
    }
  };

  const handleAccept = async (data: any) => {
    const nOrder: any = {
      newOrderId: newOrder?.newOrder.newOrderId,
      projectName: newOrder?.newOrder.projectName,
      reqDescription: newOrder?.newOrder.reqDescription,
      reqDraw: newOrder?.newOrder.reqDraw,
      attachments: newOrder?.newOrder.attachments,
      rate: newOrder?.newOrder.rate,
      review: newOrder?.newOrder.review,
      designerId: loggedUser?.designer?.designerId,
      packageId: newOrder?.newOrder.packageId,
      progressId: newOrder?.newOrder.progressId + 1,
      userId: newOrder?.newOrder.userId,
    };
    const result = await NewOrderServices.UpdateNewOrder(nOrder);
    if (result.data.status === 1) {
      console.log(result.data);
      window.location.reload();
      return;
    } else {
      console.log("Update Fail");
    }
  };

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

      FileUploadServices.uploadNewOrderWork(
        newOrder?.newOrder.newOrderId,
        formData
      );
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

  return (
    <div className="w-[70%] mx-auto">
      {/* New Order Details */}
      <div>
        <div className="flex justify-between mb-8 ">
          <div className="w-[60%] uppercase">
            <label className="flex mb-4">
              <span className="flex w-[30%] font-bold">New Order Id</span>
              <div className="w-[70%] flex font-normal">
                : {newOrder?.newOrder?.newOrderId}
              </div>
            </label>
            <label className="flex mb-4">
              <span className="flex w-[30%] font-bold">Project Name</span>
              <div className="w-[70%] flex font-normal">
                : {newOrder?.newOrder?.projectName}
              </div>
            </label>

            {newOrder?.newOrder?.progressId > 2 ? (
              <>
                <label className="flex mb-4">
                  <span className="flex w-[30%] font-bold">Designer Name</span>
                  <div className="w-[70%] flex font-normal">
                    : {designUser?.firstName} {designUser?.lastName}
                  </div>
                </label>
              </>
            ) : (
              <></>
            )}
            <label className="flex mb-4">
              <span className="flex w-[30%] font-bold">Amount</span>
              <div className="w-[70%] flex font-normal">
                : ${mypackage?.amount}
              </div>
            </label>
            <label className="flex mb-4">
              <span className="flex w-[30%] font-bold">Category</span>
              <div className="w-[70%] flex font-normal">
                : {mypackage?.category}
              </div>
            </label>
          </div>
        </div>
        <div>
          <label className="mb-4 ">
            <span className="w-full font-bold uppercase">
              Requirement Description
            </span>
            <div className="w-full mt-6 font-light">
              {newOrder?.newOrder?.reqDescription}
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
              {loggedUser?.userId === newOrder?.newOrder?.userId ? (
                <>
                  <div className="flex justify-center mt-3">
                    <button
                      className="w-full uppercase btn2"
                      onClick={handleChangeDrawModalOpen}
                    >
                      Change Drawing
                    </button>

                    <ChangeDrawModalNew
                      isOpen={isChangeDrawModalOpen}
                      onClose={handleChangeDrawModalClose}
                      newOrderId={newOrder?.newOrder?.newOrderId}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="flex justify-center mt-4 text-center text-[#828282]">
                    <div className="w-full uppercase">Drawing of Art</div>
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

        {/* buttons fields */}
        <div className="flex justify-between gap-6 mb-8 ">
          <div className="flex justify-center w-full mt-3">
            <button className="w-full uppercase btn3">Any Inconvenience</button>
          </div>

          {loggedUser?.userId === newOrder?.newOrder?.userId ? (
            <>
              <div className="flex justify-center w-full mt-3 text-center">
                {newOrder?.newOrder?.progressId === 2 ? (
                  <>
                    <div className="w-full  uppercase text-[#fec750] mt-3 text-center ">
                      wait For Accept
                    </div>
                  </>
                ) : newOrder?.newOrder?.progressId === 3 ? (
                  <>
                    <div className="w-full mt-3 text-center  uppercase text-[#fec750]">
                      Designer Cooking Your Art
                    </div>
                  </>
                ) : newOrder?.newOrder?.progressId === 4 ? (
                  <>
                    <button
                      className="w-full uppercase btn3 "
                      onClick={handleAcceptOrder}
                    >
                      Accept Delivery
                    </button>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-center w-full mt-3">
                {newOrder?.newOrder?.progressId === 2 ? (
                  <>
                    <button
                      className="w-full uppercase btn3 "
                      onClick={handleAccept}
                    >
                      Accept Order
                    </button>
                  </>
                ) : newOrder?.newOrder?.progressId === 3 ? (
                  <>
                    <button
                      className="w-full uppercase btn3 "
                      onClick={handleAcceptOrder}
                    >
                      Send Preview
                    </button>
                  </>
                ) : newOrder?.newOrder?.progressId === 4 ? (
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
            <button className="w-full uppercase btn3">Live Chat</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewOrderCard;
