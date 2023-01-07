import registering from "assets/Companylogo.jpg";
import { Link } from "react-router-dom";

const Register = ({ visible, onClose }: any) => {
  if (!visible) return null;
  return (
    <div>
      <div className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm">
        <div className="text-white bg-black rounded-2xl w-[1300px] h-[700px] border-[0.5px] border-sm border-[#fec750c1]">
          <div className="absolute">
            <img
              src={registering}
              alt=""
              className="relative object-cover w-[1300px] h-[700px] rounded-2xl opacity-60 "
            />
          </div>
          <div className="relative w-[50%] h-[100%] ml-[50%] bg-[#0000008b]  rounded-2xl">
            <div className="flex">
              <div className="relative flex justify-between w-full m-8">
                <div className="flex">
                  <h1 className="absolute font-bold text-white text-[20px]">
                    Register
                  </h1>
                  <h6 className="relative top-9 text-[12px] font-light">
                    If You Already a member
                    <Link className="text-[#fec750] m-2" to={""}>
                      Sign in
                    </Link>
                  </h6>
                </div>
                <button className="flex" onClick={onClose}>
                  X
                </button>
              </div>
            </div>
            {/* Form Registration */}
            <form className="flex-col m-8">
              <div className="flex-row">
                <label>
                  <span className="m-1 font-light">Email</span>
                  <input
                    type="text"
                    className=" h-[2.5rem] w-full rounded-xl border-[0.5px] border-[#fec7505d] bg-transparent px-4 mb-7"
                    placeholder="example@gmail.com"
                  />
                </label>
                <label>
                  <span className="m-1 font-light">Password</span>
                  <input
                    type="Password"
                    className=" h-[2.5rem] w-full rounded-xl border-[0.5px] border-[#fec7505d] bg-transparent px-4 mb-7"
                  />
                </label>
                <label>
                  <span className="m-1 font-light">Confirm Password</span>
                  <input
                    type="Password"
                    className=" h-[2.5rem] w-full rounded-xl border-[0.5px] border-[#fec7505d] bg-transparent px-4 mb-7"
                  />
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
                <label>
                  <input type="checkbox" className="bg-white checkbox" />
                  <span className="flex text-[12px] font-light">
                    Yes, I want emails with visual inspiration, special offers
                    and more.
                  </span>
                </label>
              </div>
              <input
                type="button"
                value="Register"
                className="w-full mt-8 btn2"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
