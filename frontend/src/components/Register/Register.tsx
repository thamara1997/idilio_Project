import registering from "assets/Companylogo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { routeNames } from "routes/route";
import { useForm } from "react-hook-form";
import { country } from "data/country";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import AuthenticationServices from "Services/AuthenticationServices";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Register = () => {
  const {
    register,
    handleSubmit,
    getValues,
    watch,
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

  //country list
  const countries = country;
  // console.log(countries);

  //navigate
  const navigate = useNavigate();

  //if already has logged user
  const logged = localStorage.getItem("loggedUser");
  useEffect(() => {
    if (logged) {
      navigate(routeNames.Overview);
    }
  }, []);

  const onSubmit = async (data: any) => {
    const result = await AuthenticationServices.Register(data);
    console.log(result.data.user);

    if (result.data.user != null) {
      console.log(result.data.user);

      //redirect to login page
      localStorage.setItem(
        "loggedUser",
        JSON.stringify({
          userId: result.data.user.userId,
          firstName: result.data.user.firstName,
          lastName: result.data.user.lastName,
          lastLogin: result.data.user.lastLogIn,
          country: result.data.user.country,
          profile: result.data.user.profile,
        })
      );
      toast.success("Login Successful");
      setTimeout(() => {
        navigate(routeNames.Overview);
        navigate(0);
      }, 500);
      return;
    } else {
      toast.error("Registration Failed");
    }
  };

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
                    Register
                  </h1>
                  <h6 className="relative top-9 text-[12px] font-light">
                    If You Already a member
                    <Link className="text-[#fec750] m-2" to={routeNames.Login}>
                      Log In
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
              className="flex-col m-8 "
              onSubmit={handleSubmit(onSubmit)}
              autoComplete="off"
            >
              <div className="flex-row">
                <div className="flex justify-between gap-4">
                  <label>
                    <span className="font-light ">First Name</span>
                    <input
                      type="text"
                      // ref={register}
                      className=" h-[2.5rem] w-full rounded-xl border-[0.5px] border-[#fec7505d] bg-transparent px-4 mb-1"
                      placeholder="First Name"
                      {...register("firstName", {
                        required: true,
                      })}
                    />
                    {errors.firstName && (
                      <p className="flex-col m-1 text-xs text-red-600">
                        First Name is required
                      </p>
                    )}
                  </label>
                  <label>
                    <span className="m-1 font-light">Last Name</span>
                    <input
                      type="text"
                      // ref={register}
                      className=" h-[2.5rem] w-full rounded-xl border-[0.5px] border-[#fec7505d] bg-transparent px-4 mb-1"
                      placeholder="Last Name"
                      {...register("lastName", {
                        required: true,
                      })}
                    />
                    {errors.lastName && (
                      <p className="flex-col m-1 text-xs text-red-600">
                        Last Name is required
                      </p>
                    )}
                  </label>
                </div>
                <label>
                  <span className="m-1 font-light">Email</span>
                  <input
                    type="email"
                    // ref={register}
                    className=" h-[2.5rem] w-full rounded-xl border-[0.5px] border-[#fec7505d] bg-transparent px-4 mb-1"
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
                      className=" h-[2.5rem] w-full rounded-xl border-[0.5px] border-[#fec7505d] bg-transparent px-4 mb-1"
                      {...register("password", {
                        required: "Password is Required...",
                        pattern: {
                          value:
                            /^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/,
                          message:
                            "Password Must Contain Atleast 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character",
                        },
                      })}
                      placeholder="Password"
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
                <div className="flex justify-between gap-4">
                  <label className="w-[95%]">
                    <span className="m-1 font-light">Confirm Password</span>
                    <input
                      type={showPw ? "text" : "Password"}
                      className=" h-[2.5rem] w-full rounded-xl border-[0.5px] border-[#fec7505d] bg-transparent px-4 mb-1"
                      {...register("password_repeat", { required: true })}
                      placeholder="Re Enter Password"
                    />
                    {watch("password_repeat") !== watch("password") &&
                    getValues("password_repeat") ? (
                      <p className="flex-col m-1 text-xs text-red-600">
                        Password Not Match
                      </p>
                    ) : null}
                  </label>

                  <h1
                    id="clear"
                    className="mt-10 showPw"
                    onClick={handleClickShowPw}
                  >
                    {showPw ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                  </h1>
                </div>

                <label>
                  <span className="m-1 font-light">Country</span>
                  <div>
                    <select
                      className="w-full select  bg-transparent text-center rounded-xl border-[0.5px] border-[#fec7505d] font-light h-[2.5rem] mb-3"
                      {...register("country", {
                        required: "Country is Required...",
                      })}
                    >
                      <option value="" disabled selected>
                        Select Country
                      </option>
                      {countries.map((c: any) => (
                        <option value={c.value}>{c.label}</option>
                      ))}
                    </select>
                  </div>
                  <p className="flex-col m-1 text-xs text-red-600">
                    <>{errors.country?.message}</>
                  </p>
                </label>
                <label>
                  <input
                    type="checkbox"
                    className="bg-white checkbox"
                    {...register("check", {
                      required: "Have to tick this...",
                    })}
                  />
                  <span className="flex text-[12px] font-light">
                    Yes, I want emails with visual inspiration, special offers
                    and more.
                  </span>
                  <p className="flex-col m-1 text-xs text-red-600">
                    <>{errors.check?.message}</>
                  </p>
                </label>
              </div>
              <input
                type="Submit"
                value="Register"
                className="w-full mt-4 btn2"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
