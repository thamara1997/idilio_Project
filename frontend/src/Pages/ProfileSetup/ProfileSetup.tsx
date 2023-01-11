import Facebook from "assets/Facebook.png";
import Insta from "assets/Insta.png";
import LinkedIn from "assets/Linkedin.png";
import Avatar from "assets/avatar.jpg";
import { RiImageAddLine } from "react-icons/ri";

const ProfileSetup = () => {
  return (
    <div>
      <div className="flex relative mx-auto mt-9 w-[270px] h-[270px] ">
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

      {/* profile details */}
      <form className="flex-col w-[70%] justify-center mx-auto m-8">
        <div className="flex-row">
          <label>
            <span className="m-1 font-light">First Name</span>
            <input
              type="text"
              className=" h-[2.5rem] w-full rounded-xl border-[0.5px] border-[#fec7505d] bg-transparent px-4 mb-7"
              placeholder=""
            />
          </label>
          <label>
            <span className="m-1 font-light">Last Name</span>
            <input
              type="text"
              className=" h-[2.5rem] w-full rounded-xl border-[0.5px] border-[#fec7505d] bg-transparent px-4 mb-7"
              placeholder=""
            />
          </label>
          <label>
            <span className="m-1 font-light">Email</span>
            <input
              type="text"
              className=" h-[2.5rem] w-full rounded-xl border-[0.5px] border-[#fec7505d] bg-transparent px-4 mb-7"
              placeholder="example@gmail.com"
            />
          </label>
          <label>
            <span className="m-1 font-light">Social Links</span>
            <div className="flex">
              <img src={Facebook} alt="" className="h-[40px]" />
              <input
                type="text"
                className=" h-[2.5rem] w-full rounded-xl border-[0.5px] border-[#fec7505d] bg-transparent px-4 mb-7"
                placeholder="Facebook"
              />
            </div>
            <div className="flex">
              <img src={Insta} alt="" className="h-[40px]" />
              <input
                type="text"
                className=" h-[2.5rem] w-full rounded-xl border-[0.5px] border-[#fec7505d] bg-transparent px-4 mb-7"
                placeholder="Instagram"
              />
            </div>
            <div className="flex">
              <img src={LinkedIn} alt="" className="h-[40px]" />
              <input
                type="text"
                className=" h-[2.5rem] w-full rounded-xl border-[0.5px] border-[#fec7505d] bg-transparent px-4 mb-7"
                placeholder="LinkedIn"
              />
            </div>
          </label>
          <label>
            <span className="m-1 font-light">Country</span>
            <div className="">
              <select className="w-full select  bg-transparent text-center rounded-xl border-[0.5px] border-[#fec7505d] font-light h-[2.5rem] mb-7">
                <option disabled selected>
                  Country
                </option>
                <option>Sri Lanka</option>
                <option>England</option>
                <option>USA</option>
                <option>India</option>
                <option>Australia</option>
              </select>
            </div>
          </label>
        </div>
        <div className="flex gap-3">
          <input
            type="button"
            value="Save Changes"
            className="w-full mt-8 btn2"
          />
          <input
            type="button"
            value="Delete Account"
            className="w-full mt-8 bg-red-600 btn2"
          />
        </div>
      </form>
    </div>
  );
};

export default ProfileSetup;
