import { Link, useNavigate } from "react-router-dom";
import { MdOutlineDesignServices } from "react-icons/md";
import { BsShopWindow } from "react-icons/bs";
import { BsFillCpuFill } from "react-icons/bs";
import { BsFillGiftFill } from "react-icons/bs";
import { BsCardList } from "react-icons/bs";
import { BsBug } from "react-icons/bs";
import ServiceCard from "components/ServiceCard/ServiceCard";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import DesignerService from "Services/DesignerService";
import FileUploadServices from "Services/FileUploadServices";
import { toast } from "react-toastify";

const JoinUs = () => {
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
  // console.log(loggedUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const scard = [
    {
      sname: "Marketing",
      icon: <BsShopWindow />,
    },
    {
      sname: "Graphic Design",
      icon: <MdOutlineDesignServices />,
    },
    {
      sname: "Branding",
      icon: <BsFillGiftFill />,
    },
    {
      sname: "Content Creation",
      icon: <BsCardList />,
    },
    {
      sname: "SEO Service",
      icon: <BsFillCpuFill />,
    },
    {
      sname: "Developing",
      icon: <BsBug />,
    },
  ];

  const onSubmit = async (data: any) => {
    const designerData: any = {
      orderCount: 0,
      level: 0,
      fbURL: "link1",
      instaURL: "link2",
      linkedinURL: data.linkedinURL,
      cv: "submitted",
      approved: false,
      userId: loggedUser.userId,
    };

    console.log(designerData);

    const result = await DesignerService.addDesigner(designerData);

    if (result.data.status === 1) {
      toast.success("Successful");
      localStorage.removeItem("loggedUser");
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } else {
      console.log("Application Not Submitted");
    }
  };
  return (
    <div className="text-center ">
      <div>
        <h1 className="m-8 text-center uppercase text-[25px]">Join Us</h1>
        <p className="text-[15px] text-center font-light mx-[200px] mb-8">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
          quae facere quisquam beatae facilis ad rerum harum dolorem repellendus
          deserunt consequatur mollitia tempore dolorum, adipisci excepturi
          accusantium tenetur ea ratione!
        </p>
      </div>
      <div className="flex justify-center mb-8">
        <div className="mt-[80px] grid grid-cols-3 gap-[60px]">
          {scard.map((t: any, i: number) => (
            <div id="item1" className="w-full carousel-item" key={i}>
              <Link to={t.link}>
                <ServiceCard sname={t.sname} icon={t.icon} />
              </Link>
            </div>
          ))}
        </div>
      </div>
      {loggedUser?.country == "LK" && !loggedUser?.designer ? (
        <>
          <h1 className="mx-[100px] mt-[50px] text-center text-[15px]">
            If you interested in these fields and are you from
          </h1>
          <h1 className="m-5 text-center uppercase text-[20px]">Sri Lanka</h1>
          <div className="flex flex-col items-center mt-8">
            <form
              action=""
              onSubmit={handleSubmit(onSubmit)}
              className="flex-col m-8 w-[60%] uppercase"
            >
              <label className="flex mb-4">
                <input
                  type="text"
                  className=" h-[2.4rem] w-[100%] flex text-[14px] text-center rounded-xl border-[0.5px] border-[#fec7505d] bg-transparent px-4 mb-7"
                  placeholder="Type your Full Name"
                  {...register("fullname", {
                    required: true,
                  })}
                />
                {errors.fullname && (
                  <p className="flex-row w-full m-1 text-xs text-red-600 ">
                    Full Name is required
                  </p>
                )}
              </label>

              <span className="flex-col w-[20%] font-bold">
                ADD YOUR LINKED IN URL
              </span>
              <label className="flex mb-4">
                <input
                  type="text"
                  className=" h-[2.4rem] w-[100%] flex text-[14px] text-center rounded-xl border-[0.5px] border-[#fec7505d] bg-transparent px-4 mb-7"
                  placeholder="Enter Your Linked In URL"
                  {...register("linkedinURL", {
                    required: true,
                  })}
                />
                {errors.linkedinURL && (
                  <p className="flex-row w-full m-1 text-xs text-red-600 ">
                    URL is Required
                  </p>
                )}
              </label>

              <input type="submit" value="JOIN" className="w-full my-8 btn2" />
            </form>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default JoinUs;
