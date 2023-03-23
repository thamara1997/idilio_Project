import Facebook from "assets/Facebook.png";
import Insta from "assets/Insta.png";
import LinkedIn from "assets/Linkedin.png";
// import Avatar from "assets/avatar.jpg";
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
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } else {
      console.log("Null");
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
      const newUser = await UserService.getUserByUserId(user.userId);
      if (newUser) {
        localStorage.setItem("loggedUser", JSON.stringify(newUser.data.data));
        toast.success("Profile Updated");
        navigate(routeNames.ProfileSetup);
      }
    } else {
      console.log("Update fail");
    }
  };

  if (!user) {
    navigate(routeNames.Overview);
    return null;
  }

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
            {/* <img
              src="{Avatar}"
              alt=""
              className="flex rounded-[50%] p-1 border-[0.5px] border-[#fec850] hover:opacity-40 hover:bg-black"
            /> */}
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

            {/* {preview && <img src={preview} alt="" />}
            <img src={preview} alt="" /> */}
            <img src={propic} alt="" />

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
            description="Are you sure you want to delete account from IDILIO group.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia delectus eos nobis iure quae vero libero repellendus saepe perspiciatis eaque error "
          />
        </div>
      </form>
    </div>
  );
};

export default ProfileSetup;
