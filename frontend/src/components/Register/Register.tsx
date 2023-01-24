import registering from "assets/Companylogo.jpg";
import { Link } from "react-router-dom";
import { routeNames } from "routes/route";
import { useForm } from "react-hook-form";

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

  const onSubmit = (data: any) => console.log(data);

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
              className="flex-col m-8"
              onSubmit={handleSubmit(onSubmit)}
              autoComplete="off"
            >
              <div className="flex-row">
                <label>
                  <span className="m-1 font-light">Email</span>
                  <input
                    type="email"
                    // ref={register}
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
                <label>
                  <span className="m-1 font-light">Password</span>
                  <input
                    type="Password"
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
                    placeholder="Password"
                  />
                  <p className="flex-col m-1 text-xs text-red-600">
                    <>{errors.password?.message}</>
                  </p>
                </label>
                <label>
                  <span className="m-1 font-light">Confirm Password</span>
                  <input
                    type="Password"
                    className=" h-[2.5rem] w-full rounded-xl border-[0.5px] border-[#fec7505d] bg-transparent px-4 mb-3"
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
                <label>
                  <span className="m-1 font-light">Country</span>
                  <div>
                    <select
                      className="w-full select  bg-transparent text-center rounded-xl border-[0.5px] border-[#fec7505d] font-light h-[2.5rem] mb-3"
                      {...register("country", {
                        required: "Country is Required...",
                      })}
                    >
                      <option value="">Select Your Country</option>
                      <option>Sri Lanka</option>
                      <option>England</option>
                      <option>USA</option>
                      <option>India</option>
                      <option>Australia</option>
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
