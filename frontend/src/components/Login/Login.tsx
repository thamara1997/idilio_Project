import React from "react";
import registering from "assets/Companylogo.jpg";

const Login = ({ visible, onClose }: any) => {
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
                    Log In
                  </h1>
                  <h6 className="relative top-9 text-[12px] font-light">
                    If You Are Not a member Yet
                    <a className="text-[#fec750] m-2">Register</a>
                  </h6>
                </div>
                <button className="flex" onClick={onClose}>
                  X
                </button>
              </div>
            </div>
            {/* Form Registration */}
            <form className="flex-row justify-between m-8">
              <div className="flex-row mt-[100px]">
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
              </div>
              <div className="flex mt-[5px] content-center">
                <input
                  type="button"
                  value="Log In"
                  className="w-full mt-8 btn2"
                />
              </div>

              <div className="flex text-center font-light text-[12px] mt-[50px]">
                <h6>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Necessitatibus saepe aspernatur vero, assumenda reprehenderit
                  ea quis facilis mollitia quo nisi at neque ipsum dolor eos
                  enim quibusdam obcaecati, temporibus nostrum.
                </h6>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
