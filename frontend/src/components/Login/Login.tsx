import registering from "assets/Companylogo.jpg";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { routeNames } from "routes/route";
import AuthenticationServices from "Services/AuthenticationServices";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  // show password
  const [showPw, setShowPw] = useState<boolean>(false);
  const handleClickShowPw = () => {
    if (showPw) {
      setShowPw(false);
    } else {
      setShowPw(true);
    }
  };

  //navigate
  const navigate = useNavigate();

  //if already has logged user
  const logged = localStorage.getItem("loggedUser");
  useEffect(() => {
    if (logged) {
      navigate(routeNames.Overview);
    }
  }, []);

  //redirected to the overview page again
  const onSubmit = async (data: any) => {
    const result = await AuthenticationServices.loginRequest(data);

    if (result.data.user) {
      console.log(result.data.user);

      localStorage.setItem("token", JSON.stringify(result.data.token));

      localStorage.setItem(
        "loggedUser",
        JSON.stringify({
          userId: result.data.user.userId,
          firstName: result.data.user.firstName,
          lastName: result.data.user.lastName,
          lastLogin: result.data.user.lastLogIn,
          country: result.data.user.country,
          role: result.data.user.role,
          profile: result.data.user.profile,
          designer: result.data.user.designer,
        })
      );
      toast.success("Login Successful");
      setTimeout(() => {
        navigate(routeNames.Overview);
        navigate(0);
      }, 500);

      return;
    } else {
      // toast.error(result.data.user.message);
      toast.error("Bad Credentials");
      console.log("User Not Found");
    }
  };

  // console.log(errors);
  return (
    <div>
      <div className="fixed inset-0 z-30 flex items-center justify-center bg-black backdrop-blur-sm">
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
                    <Link
                      className="text-[#fec750] m-2"
                      to={routeNames.Register}
                    >
                      Register
                    </Link>
                  </h6>
                </div>
                <Link to={routeNames.Overview}>
                  <button className="flex">X</button>
                </Link>
              </div>
            </div>
            {/* Form Registration */}
            <form
              className="flex-row justify-between m-8"
              onSubmit={handleSubmit(onSubmit)}
              autoComplete="off"
            >
              <div className="flex-row mt-[100px]">
                <label>
                  <span className="m-1 font-light">Email</span>
                  <input
                    type="text"
                    className=" h-[2.5rem] w-full rounded-xl border-[0.5px] border-[#fec7505d] bg-transparent px-4 mb-3"
                    placeholder="example@gmail.com"
                    {...register("email", {
                      required: "Email is Required...",
                      pattern: {
                        value:
                          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "Email must be valid",
                      },
                    })}
                  />
                  <p className="flex-col m-1 text-xs text-red-600">
                    <>{errors.email?.message}</>
                  </p>
                </label>
                <div className="flex justify-between gap-4">
                  <label className="w-[95%]">
                    <span className="m-1 font-light">Password</span>
                    <input
                      type={showPw ? "text" : "Password"}
                      className=" h-[2.5rem] w-full rounded-xl border-[0.5px] border-[#fec7505d] bg-transparent px-4 mb-3"
                      {...register("password", {
                        required: "Password is Required...",
                        pattern: {
                          value:
                            /^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/,
                          message:
                            "Password Must Contain Atleast 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character",
                        },
                      })}
                    />

                    <p className="flex-col m-1 text-xs text-red-600">
                      <>{errors.password?.message}</>
                    </p>
                  </label>
                  <h1
                    id="clear"
                    className="mt-10 showPw"
                    onClick={handleClickShowPw}
                  >
                    {showPw ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                  </h1>
                </div>
              </div>
              <div className="flex mt-[5px] content-center">
                <input
                  type="Submit"
                  value="Log In"
                  className="w-full mt-8 btn2"
                />
              </div>

              <div className="flex text-center font-light text-[12px] mt-[50px]">
                <h6>
                  Welcome to the IDILIO login page. If you are already a member,
                  simply enter your email address and password to access your
                  account. If you are a new user, you can create an account by
                  clicking on the "Register" button.
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
