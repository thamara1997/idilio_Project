import map from "assets/map.jpg";
import idilio from "assets/logo.png";
import address from "assets/Address.png";
import Phone from "assets/Phone.png";
import Mail from "assets/mail.png";
import { Link, useNavigate } from "react-router-dom";
import { routeNames } from "routes/route";

const SayHello = ({ user, onLogout }: any) => {
  const navigate = useNavigate();

  if (!user) {
    navigate(routeNames.Overview);
    return null;
  }
  return (
    <div>
      <h1 className="m-8 text-center uppercase text-[25px]">Say Hello</h1>
      <p className="text-[15px] text-center font-light mx-[200px] m-5">
        Our "Say Hello" page is the perfect place to get in touch with us.
        Whether you have a question, feedback, or just want to say hello, we are
        always happy to hear from you. Simply fill out the form on our Say Hello
        page and one of our team members will get back to you as soon as
        possible. We look forward to hearing from you!
      </p>
      <div className="flex items-center justify-center h-[800px] mb-4">
        <Link to="https://goo.gl/maps/muH7UF1REqq5Qqrx9">
          <img src={map} alt="" />
        </Link>
      </div>
      <div className="items-center justify-center">
        <p className="text-[15px] text-center font-light mx-[200px] mb-4">
          IDILIO is Sri Lankan Based Graphic Design Digital Platform
        </p>
        <img src={idilio} alt="" className="h-[80px] mx-auto" />
        <h1 className="my-[60px] text-center uppercase text-[20px]">
          Get in touch with us
        </h1>
      </div>
      <div className="flex items-center justify-center w-full mx-auto mb-[60px] text-center">
        <div className=" w-[20%]">
          <img src={address} alt="" className="h-[60px] mx-auto" />
          <p className="font-bold text-[15px] text-[#5b5b5b] uppercase">
            Address
          </p>
          <p className="font-light text-[10px] text-[#ffffff] uppercase">
            Kegalle | Srilanka
          </p>
        </div>

        <div className=" w-[30%]">
          <img src={Mail} alt="" className="h-[150px] mx-auto" />
          <p className="font-bold text-[15px] text-[#5b5b5b] uppercase">
            Email
          </p>
          <p className="font-light text-[10px] text-[#ffffff]">
            idiliodesign2020@gmail.com
          </p>
        </div>

        <div className=" w-[20%]">
          <img src={Phone} alt="" className="h-[60px] mx-auto" />
          <p className="font-bold text-[15px] text-[#5b5b5b] uppercase">
            Mobile
          </p>
          <p className="font-light text-[10px] text-[#ffffff]">
            +94 71 472 5166
          </p>
        </div>
      </div>
    </div>
  );
};

export default SayHello;
