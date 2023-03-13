import Facebook from "assets/Facebook.png";
import Insta from "assets/Insta.png";
import LinkedIn from "assets/Linkedin.png";
import Avatar from "assets/avatar.jpg";
import { RiImageAddLine } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { routeNames } from "routes/route";
import { useNavigate } from "react-router-dom";
import UserService from "Services/UserService";
import DesignerService from "Services/DesignerService";

interface ProfileUpdateProps {
  user: any;
  onLogout: () => void;
}

const ProfileSetup: React.FC<ProfileUpdateProps> = ({ user, onLogout }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const navigate = useNavigate();

  // const onSubmit = (data: any) => {
  //   console.log("Updated value:", data);
  //   localStorage.setItem("value", data.value);
  // };

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

    const updatedDesigner: any = {
      designerId: user.designer.designerId,
      orderCount: user.designer.orderCount,
      level: user.designer.level,
      fbURL: data.fbURL,
      instaURL: data.instaURL,
      linkedinURL: data.linkedinURL,
      cv: user.designer.cv,
      approved: user.designer.approved,
      userId: user.userId,
    };

    console.log(updatedDesigner);

    const result = await UserService.Update(updatedUser);
    if (result.data.status === 1) {
      const newUser = await UserService.getUserByUserId(user.userId);
      if (newUser) {
        localStorage.setItem("loggedUser", JSON.stringify(newUser.data.data));
        toast.success("Profile Updated");
        navigate(routeNames.ProfileSetup);
        navigate(0);
      }
    } else {
      console.log("Update fail");
    }

    // const result2 = await DesignerService.UpdateDesigner(updatedDesigner);
    // if (result2.data.status === 1) {
    //   localStorage.setItem(
    //     "loggedUser2",
    //     JSON.stringify({
    //       designerId: result2.data.user?.designer.designerId,
    //       orderCount: result2.data.user?.designer.orderCount,
    //       level: result2.data.user?.designer.level,
    //       fbURL: result2.data.data.fbURL,
    //       instaURL: result2.data.data.instaURL,
    //       linkedinURL: result2.data.data.linkedinURL,
    //       cv: result2.data.user?.designer.cv,
    //       approved: result2.data.user?.designer.approved,
    //       userId: result2.data.user?.designer.userId,
    //     })
    //   );
    //   toast.success("Profile Updated");
    //   // navigate(routeNames.ProfileSetup);
    //   // navigate(0);
    // } else {
    //   console.log("faild");
    // }
  };

  return (
    <div>
      {/* profile details */}
      <form
        className="flex-col w-[70%] justify-center mx-auto m-8"
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
      >
        <div className="flex relative mx-auto w-[270px] h-[270px] justify-center">
          <div className="">
            <img
              src={Avatar}
              alt=""
              className="flex rounded-[50%] p-1 border-[0.5px] border-[#fec850] hover:opacity-40 hover:bg-black"
            />

            <span className="absolute top-[130px] left-[125px] text-[20px] ">
              <RiImageAddLine />
            </span>
            <input
              type="file"
              className="absolute opacity-0 top-[120px] left-[120px]"
            />
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
            type="submit"
            value="Delete Account"
            className="w-full mt-8 bg-red-600 btn2"
          />
        </div>
      </form>
    </div>
  );
};

export default ProfileSetup;
