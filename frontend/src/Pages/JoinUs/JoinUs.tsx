import { Link } from "react-router-dom";
import { MdOutlineDesignServices } from "react-icons/md";
import { BsShopWindow } from "react-icons/bs";
import { BsFillCpuFill } from "react-icons/bs";
import { BsFillGiftFill } from "react-icons/bs";
import { BsCardList } from "react-icons/bs";
import { BsBug } from "react-icons/bs";
import ServiceCard from "components/ServiceCard/ServiceCard";

const JoinUs = () => {
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
      <h1 className="mx-[100px] mt-[50px] text-center text-[15px]">
        If you interested in these fields and are you from
      </h1>
      <h1 className="m-5 text-center uppercase text-[20px]">Sri Lanka</h1>
      <div className="flex flex-col items-center mt-8">
        <form action="" className="flex-col m-8 w-[60%] uppercase">
          <label className="flex mb-4 ">
            <input
              type="text"
              className=" h-[2.4rem] w-[100%] flex text-center text-[14px] rounded-xl border-[0.5px] border-[#fec7505d] bg-transparent px-4 mb-7"
              placeholder="Type your Email Here"
            />
          </label>
          <label className="flex mb-4">
            <input
              type="text"
              className=" h-[2.4rem] w-[100%] flex text-[14px] text-center rounded-xl border-[0.5px] border-[#fec7505d] bg-transparent px-4 mb-7"
              placeholder="Type your Full Name"
            />
          </label>

          <span className="flex-col w-[20%] font-bold">Upload Your CV</span>
          <label className="flex mb-4">
            <input
              type="file"
              className="flex w-full text-[13px] bg-[#272727] file-input file-input-bordered"
            />
          </label>

          <input type="button" value="JOIN" className="w-full my-8 btn2" />
        </form>
      </div>
    </div>
  );
};

export default JoinUs;
