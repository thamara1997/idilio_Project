import Facebook from "assets/Facebook.png";
import Insta from "assets/Insta.png";
import LinkedIn from "assets/Linkedin.png";
import { RiImageAddLine } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { routeNames } from "routes/route";
import { useNavigate } from "react-router-dom";
import UserService from "Services/UserService";
import { useEffect, useState } from "react";
import MyModal from "components/MyModel/MyModal";
import FileUploadServices from "Services/FileUploadServices";

import Avatar from "react-avatar-edit";
import DesignerService from "Services/DesignerService";

interface ProfileUpdateProps {
  user: any;
  onLogout: () => void;
}

const ProfileSetup: React.FC<ProfileUpdateProps> = ({
  user,
  onLogout,
}: any) => {
  const { register, handleSubmit } = useForm({
    mode: "all",
  });

  const navigate = useNavigate();
  let iid: number = Number(user?.userId);

  const [propic, setPropic] = useState<any>("");

  useEffect(() => {
    FileUploadServices.getProfilePicture(iid).then((res: any) => {
      if (res.status === 200) {
        setPropic(res);
        console.log(res);
        return;
      } else {
        console.log("not found");
      }
    });
  }, [iid]);

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

  const handlePropic = () => {
    if (preview) {
      const file = FileUploadServices.convertBase64ToFile(preview, "aa.png");

      let formData = new FormData();
      formData.append("file", file);

      FileUploadServices.uploadProfilePicture(iid, formData);
      toast.success("Update Successful");
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } else {
      console.log("Null");
      toast.error("Not Updated");
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const onSubmit = async (data: any) => {
    // console.log(data);
    const updatedUser: any = {
      userId: user.userId,
      firstName: data.firstName,
      lastName: data.lastName,
      country: user.country,
      profile: user.profile,
    };
    console.log(updatedUser);

    const result = await UserService.Update(updatedUser);
    if (result.data.status === 1) {
      if (result.data.data?.designer) {
        const updatedDesigner: any = {
          designerId: user?.designer.designerId,
          orderCount: user?.designer.orderCount,
          level: user?.designer.level,
          fbURL: data.fbURL,
          instaURL: data.instaURL,
          linkedinURL: data.linkedinURL,
          cv: user?.designer.cv,
          approved: user?.designer.approved,
          userId: user?.designer.userId,
        };
        console.log(updatedDesigner);
        const result2 = await DesignerService.UpdateDesigner(updatedDesigner);
        const newUser = await UserService.getUserByUserId(user.userId);
        if (newUser) {
          localStorage.setItem("loggedUser", JSON.stringify(newUser.data.data));
          toast.success("Profile Updated");
          setTimeout(() => {
            window.location.reload();
          }, 500);
        }
      } else {
        const newUser = await UserService.getUserByUserId(user.userId);
        if (newUser) {
          localStorage.setItem("loggedUser", JSON.stringify(newUser.data.data));
          toast.success("Profile Updated");
          setTimeout(() => {
            window.location.reload();
          }, 500);
        }
      }
    } else {
      console.log("Update fail");
    }
  };

  if (!user) {
    navigate(routeNames.Overview);
    return null;
  }

  let userName = user.firstName;
  return (
    <div>
      {/* profile details */}
      <form
        className="flex-col w-[70%] justify-center mx-auto m-8"
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
      >
        <div className="flex relative mx-auto w-[270px] h-[270px] justify-center items-center text-center">
          <div className="">
            <Avatar
              width={250}
              height={250}
              onCrop={onCrop}
              onClose={onClose}
              onBeforeFileLoad={onBeforeFileLoad}
              src={src}
              exportQuality={1}
              shadingOpacity={0.6}
              exportAsSquare
              exportSize={2000}
            />

            <span className="absolute top-[130px] left-[125px] text-[20px] ">
              <RiImageAddLine />
            </span>
            <button
              type="submit"
              onClick={handlePropic}
              className="inline-flex justify-center mt-2 btn2"
            >
              Update Profile Picture
            </button>
          </div>
        </div>

        {user?.designer ? (
          <>
            <label>
              <div className="flex justify-around my-8">
                <div className="flex-row text-center">
                  <h2 className="text-[20px] font-bold text-[#FEC850]">
                    {user?.designer.orderCount}
                  </h2>
                  <h6 className="text-[10px]">ORDER LIMIT</h6>
                </div>
                <div className="flex-row text-center">
                  <h2 className="text-[20px] font-bold text-[#FEC850] uppercase">
                    {user?.designer.approved ? "Approved" : "Not approved"}
                  </h2>
                  <h6 className="text-[10px]">STATUS</h6>
                </div>
                <div className="flex-row text-center">
                  <h2 className="text-[20px] font-bold text-[#FEC850] uppercase">
                    {user?.designer.level}
                  </h2>
                  <h6 className="text-[10px]">LEVEL</h6>
                </div>
              </div>
            </label>
          </>
        ) : (
          <></>
        )}

        <div className="flex-row">
          <label>
            <span className="m-1 font-light">First Name</span>
            <input
              type="text"
              className=" h-[2.5rem] w-full rounded-xl border-[0.5px] border-[#fec7505d] bg-transparent px-4 mb-7"
              defaultValue={user?.firstName}
              {...(register("firstName") || user?.firstName)}
            />
          </label>
          <label>
            <span className="m-1 font-light">Last Name</span>
            <input
              type="text"
              className=" h-[2.5rem] w-full rounded-xl border-[0.5px] border-[#fec7505d] bg-transparent px-4 mb-7"
              defaultValue={user?.lastName}
              {...(register("lastName") || user?.lastName)}
            />
          </label>

          {user?.designer ? (
            <>
              <label>
                <span className="m-1 font-light">Social Links</span>
                <div className="flex">
                  <img src={Facebook} alt="" className="h-[40px]" />
                  <input
                    type="text"
                    className=" h-[2.5rem] w-full rounded-xl border-[0.5px] border-[#fec7505d] bg-transparent px-4 mb-7"
                    {...register("fbURL")}
                    defaultValue={user?.designer.fbURL}
                  />
                </div>
                <div className="flex">
                  <img src={Insta} alt="" className="h-[40px]" />
                  <input
                    type="text"
                    className=" h-[2.5rem] w-full rounded-xl border-[0.5px] border-[#fec7505d] bg-transparent px-4 mb-7"
                    {...register("instaURL")}
                    defaultValue={user?.designer.instaURL}
                  />
                </div>
                <div className="flex">
                  <img src={LinkedIn} alt="" className="h-[40px]" />
                  <input
                    type="text"
                    className=" h-[2.5rem] w-full rounded-xl border-[0.5px] border-[#fec7505d] bg-transparent px-4 mb-7"
                    {...register("linkedinURL")}
                    defaultValue={user?.designer.linkedinURL}
                  />
                </div>
              </label>
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="flex gap-3">
          <input
            type="submit"
            value="Save Changes"
            className="w-full mt-8 btn2"
          />
          <input
            type="button"
            value="Delete Account"
            className="w-full mt-8 bg-red-600 btn2 "
            onClick={handleModalOpen}
          />
          <MyModal
            isOpen={isModalOpen}
            onClose={handleModalClose}
            title="Delete Account"
            description="This message appears when you attempt to delete your IDILIO account. It serves as a confirmation message to ensure that you intended to delete your account, and that you understand the consequences of deleting it. Before proceeding with the deletion, make sure to review the details of your account to avoid any unintended deletions. "
            userId={user.userId}
            userName={userName}
          />
        </div>
      </form>
    </div>
  );
};

export default ProfileSetup;
